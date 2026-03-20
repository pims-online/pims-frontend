import { StrimmingObligation } from "@/providers/AppContextConfig";



export const fetchStrimmingObligation = async (inseeCode : string): Promise<StrimmingObligation|undefined> => {
    try {
        const url = `https://georisques.gouv.fr/api/v1/old?code_insee=${inseeCode}`;
        const response = await fetch(url);

        if (response.status === 404) {
            return {
                url: '',
                affected: false,
            };
        }
    
        if (!response.ok) {
            return undefined;
        }
        
        const json = await response.json()
        const detailUrl = json[0].risque.url;

        if (typeof detailUrl !== "string") {
            return {
                url: '',
                affected: false,
            };
        }
    
        return {
            url: detailUrl,
            affected: true,
        }
    } catch {
        return undefined;
    }
}