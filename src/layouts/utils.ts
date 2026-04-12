import { Dispatch, SetStateAction } from "react";
import { NavigationLock } from "./types";

export const setStepInHash = (nextStep: number) => {
	window.location.hash = `step-${nextStep}`;
};

export const removeStepInHash = () => {
	window.history.replaceState(null, '', ' ');
};

export function scrollToTop () {
	if (window) {
		setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
	}
};

export function useRegisterNavLock (
		setNavLocks: Dispatch<SetStateAction<Map<string, NavigationLock>>>
	) {
	const registerNavLock = (name: string, lock: NavigationLock|undefined) => {
		if (lock === undefined) {
			setNavLocks((navLocks) => {
				const newNavLocks = { ...navLocks }
				
				newNavLocks.delete(name)
				return newNavLocks;
			})
		} else {
			setNavLocks((navLocks) => {
				const newNavLocks = { ...navLocks }
				
				newNavLocks.set(name, lock);
				return newNavLocks;
			})
		}
	};
	return registerNavLock;
}
