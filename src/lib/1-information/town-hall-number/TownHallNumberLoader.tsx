import { useContext, useEffect } from "react";

import { AppContext } from "@/providers";
import { Position, UsefulNumbers } from "@/providers/AppContextConfig";
import { getTownHallNumber } from "./utils";


/** Loads town hall numbers as soon as the INSEE code is set */
export default function TownHallNumberLoader() {
	const { position, setUsefulNumbers } = useContext(AppContext);

    function setTownHallNumber(townHallNumber: string) {
        setUsefulNumbers((oldNumbers: UsefulNumbers): UsefulNumbers => {
			const newNumbers: UsefulNumbers = {
				...oldNumbers
			};
			newNumbers.townHall = townHallNumber;

			return newNumbers
		});
    };

	useEffect(() => {
		/** If true, the action was cleaned-up and the results should not be applied */
		let ignore = false;

		// Remove the town hall number as it is no longer relevant 
		setTownHallNumber("");

		if (position === undefined) {
			return;
		}

		// Async handler
		async function handler(position: Position) {
			// Fetch town hall number
			const townHallNumber = await getTownHallNumber(position.inseeCode)
			// If the insee-code has changed, don't apply the result
			if (ignore) {
				return;
			}

			if (townHallNumber !== undefined) {
                // Apply the result
                setTownHallNumber(townHallNumber);
			}
		}
		handler(position);

		// Return a cleanup function
		return () => {
			ignore = true;
		}
	}, [position?.inseeCode]);

    return null;
}