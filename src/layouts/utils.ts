export const setStepInHash = (nextStep: number) => {
	window.location.hash = `step-${nextStep}`;
};

export const removeStepInHash = () => {
	window.history.replaceState(null, '', ' ');
};

export const useScrollToTop = () => {
	const scrollToTop = () => {
		if (window) {
			setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
		}
	};
	return scrollToTop;
};
