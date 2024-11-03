const BACKEND_DOMAIN = import.meta.env.VITE_BACKEND_URL;

const triggerLambdaWarmup = async () => {
	const finalUrl = `${BACKEND_DOMAIN}/warmup-pims`;
	const response = await fetch(finalUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return response;
};

/**
 * When using AWS Lambda function to host the backend and generate PDF,
 * we need to warm up the environment with the pdf generation library (playwright)
 * to prevent overlong loading (up to 30s, the time to warm up the AWS Lambda).
 * Thus, we trigger an endpoint at the beginning of the procedure
 */
export const warmupPdfGeneratorEnvironment = async (): Promise<void> => {
	// Try to warmup the environment for a maximum of 5 times
	let trialIndex = 0;
	while (trialIndex < 5) {
		try {
			const response = await triggerLambdaWarmup();
			// If successful, go out of the loop
			if (response.ok) {
				break;
			}
		} catch (error) {
			console.error(
				'Get an error when warming up the backend and will try again: ',
				error
			);
		}
		trialIndex += 1;
	}
};
