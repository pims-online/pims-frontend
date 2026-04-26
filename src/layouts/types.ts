
export type NavigationLock = {
	/** A callback to highlight the error that locks navigation */
	highlight: () => void;
	/** When highlighting this error, focus on an <input> child of the node with this ID */
	focusId?: string;
	/** ID of the HTML element to scroll to when highlighting this error */
	scrollId?: string;
};