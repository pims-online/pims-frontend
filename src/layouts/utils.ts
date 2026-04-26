import { Dispatch, SetStateAction } from "react";
import { NavigationLock } from "./types";

export function scrollToTop () {
	// Scroll the view to the top of the page
	window?.scrollTo({ top: 0 });

	// Focus top of the tab for accessibility purposes
	document.getElementById("pims-layouts__tab_wrapper")?.focus({ preventScroll: true });
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

function getUppermostLock(locks: Map<string, NavigationLock>): NavigationLock|undefined {
	let uppermostTop: number|undefined = undefined;
	let uppermostLock: NavigationLock|undefined = undefined;
	locks.forEach((lock) => {
		if (lock.scrollId === undefined || lock.focusId === undefined) {
			return;
		}
		const id = lock.scrollId;
		const rect = document.getElementById(id)?.getBoundingClientRect()
		if (rect === undefined) {
			return;
		}
		const top = rect.top;
		if (uppermostTop === undefined || top < uppermostTop) {
			uppermostTop = top;
			uppermostLock = lock;
		}
	});

	return uppermostLock;
}

function scrollToLock(lock: NavigationLock) {
	const scrollId = lock.scrollId;
	if (scrollId === undefined) {
		return;
	}

	const scrollNode = document.getElementById(scrollId);
	if (scrollNode === null) {
		return;
	}

	const options: ScrollIntoViewOptions = {
		block: 'nearest',
		behavior: 'smooth'
	}
	scrollNode.scrollIntoView(options);
}

function focusLock(lock: NavigationLock) {
	const focusId = lock.focusId;
	if (focusId === undefined) {
		return;
	}

	const focusNode = document.getElementById(focusId);
	if (focusNode === null) {
		return;
	}

	const inputNodes = focusNode.getElementsByTagName("input");
	if (inputNodes.length > 0) {
		inputNodes[0].focus({ preventScroll: true });
	}
}

export function scrollToUppermostLock(navigationLocks: Map<string, NavigationLock>) {
	// 1. Find uppermost lock
	const uppermostLock: NavigationLock|undefined = getUppermostLock(navigationLocks);
	if (uppermostLock === undefined) {
		return;
	}

	// 2. Scroll to the uppermost lock
	scrollToLock(uppermostLock);

	// 3. Focus the selection on the lock
	focusLock(uppermostLock);
};
