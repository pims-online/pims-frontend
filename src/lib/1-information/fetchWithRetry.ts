/**
 * fetch() with automatic retries, for the Géorisques API.
 *
 * The API gateway intermittently resets connections for short periods, which the
 * browser reports as ERR_HTTP2_PROTOCOL_ERROR / "Failed to fetch". Retrying after a
 * short back-off rides out most of these blips without the user noticing.
 *
 * Only transient failures are retried: network errors, timeouts, 429 and 5xx.
 * Any other response, including a 404, is a real answer and is returned as is.
 * Retries are few and spaced out on purpose: the resets seem to come from rate
 * limiting, which hammering the API would only make worse.
 */
export async function fetchWithRetry(
	url: string,
	init: RequestInit = {},
	{ retries = 2, baseDelayMs = 1000, timeoutMs = 25000 } = {}
): Promise<Response> {
	for (let attempt = 0; ; attempt++) {
		// The risk report can take >10s on a cold call, hence the generous timeout
		const controller = new AbortController();
		const timer = setTimeout(() => controller.abort(), timeoutMs);
		try {
			const response = await fetch(url, { ...init, signal: controller.signal });
			const isTransient = response.status === 429 || response.status >= 500;
			if (!isTransient || attempt >= retries) {
				return response;
			}
		} catch (error) {
			if (attempt >= retries) {
				throw error;
			}
		} finally {
			clearTimeout(timer);
		}

		// Back off before the next attempt: 1s, then 2s
		await new Promise((resolve) => setTimeout(resolve, baseDelayMs * 2 ** attempt));
	}
}
