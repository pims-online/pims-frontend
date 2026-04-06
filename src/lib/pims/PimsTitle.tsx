import clsx from "clsx";


type Props = {
    strongText: string;
    lightText?: string;
    icon?: string;
}

export function PimsTitle(props: Props) {
    const {strongText, lightText, icon} = props;

    return <div className='pims-pdf__title-component'>
        {icon && <img src={icon} aria-hidden width={80} height={80}/>}
        <h2>
            <span className={clsx('pims-pdf__title-component--emphatihised')}>{strongText}</span>{lightText && ' ' + lightText}
        </h2>
    </div>
}