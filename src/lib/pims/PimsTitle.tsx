import clsx from "clsx";


type Props = {
    strongText: string;
    lightText?: string;
    icon?: string;
    /** Anchor targeted by the table of contents */
    id?: string;
}

export function PimsTitle(props: Props) {
    const {strongText, lightText, icon, id} = props;

    return <div className='pims-pdf__title-component'>
        {icon && <img src={icon} alt="" aria-hidden width={80} height={80}/>}
        <h2 id={id}>
            <span className={clsx('pims-pdf__title-component--emphatihised')}>{strongText}</span>{lightText && ' ' + lightText}
        </h2>
    </div>
}