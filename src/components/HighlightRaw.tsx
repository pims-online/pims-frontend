import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

/**
 * A variant of DSFR highlight that takes any node as children
 */
export default function HighlightRaw(props: Props) {
    const { children } = props;

    return <div className="fr-highlight">
        {children}
    </div>
}