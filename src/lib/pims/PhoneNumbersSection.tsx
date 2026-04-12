import Highlight from "@codegouvfr/react-dsfr/Highlight";

import { UsefulNumbers } from "@/providers/AppContextConfig";



type Props = {
    numbers: UsefulNumbers;
};

export default function PhoneNumbersSection(props: Props) {
    const { numbers } = props;

    return <div>
        <Highlight>
            <h3>Les numéros utiles</h3>
            <ul>
                <li>Numéro unique d'appel en Europe : <b>112</b></li>
                <li>Numéro d'appel pour les sourds et malentendants : <b>114</b></li>
                <br/>
                {numbers.townHall && 
                    <li>Mairie : <b>{numbers.townHall}</b></li>
                }
                {numbers.insurance && 
                    <li>Assurance : <b>{numbers.insurance}</b></li>
                }
                {numbers.relatives && 
                    <li>Proches : <b>{numbers.relatives}</b></li>
                }
            </ul>
        </Highlight>
    </div>
}