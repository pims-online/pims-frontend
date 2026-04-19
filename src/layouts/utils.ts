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
		setNavLocks((navLocks) => {
			// 1. Copy navigation locks
			const newNavLocks = new Map<string, NavigationLock>();
			navLocks.forEach((value, key) => {
				newNavLocks.set(key, value);
			})
			
			// 2. Edit the new locks
			if (lock === undefined) {
				newNavLocks.delete(name);
			} else {
				newNavLocks.set(name, lock);
			}

			// 3. Apply changes
			return newNavLocks;
		})
	};
	return registerNavLock;
}
