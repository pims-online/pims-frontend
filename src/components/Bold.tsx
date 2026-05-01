import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
    children?: ReactNode;
    className?: string
};

export default function Bold(props: Props) {
    const { children, className } = props;

    return <span className={clsx([className, "pims-components__bold"])}>{children}</span>
}