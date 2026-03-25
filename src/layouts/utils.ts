import { NavigationLock } from "./types";

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

export const useRegisterNavLock = (navLocks: Map<string, NavigationLock>) => {
	const registerNavLock = (name: string, lock: NavigationLock|undefined) => {
		if (lock === undefined) {
			navLocks.delete(name);
		} else {
			navLocks.set(name, lock);
		}
	};
	return registerNavLock;
}
