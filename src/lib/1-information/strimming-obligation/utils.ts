import { StrimmingObligation } from "@/providers/AppContextConfig";



export const fetchStrimmingObligation = async (inseeCode : string): Promise<StrimmingObligation|undefined> => {
    try {
        const url = `https://georisques.gouv.fr/api/v1/old?code_insee=${inseeCode}`;
        const response = await fetch(url);
    
        if (!response.ok) {
            return undefined;
        }
        
        const json = await response.json()
        const detailUrl = json[0].risque.url;

        if (typeof detailUrl !== "string") {
            return {
                "url": undefined,
            };
        }
    
        return {
            "url": detailUrl,
        }
    } catch {
        return undefined;
    }
}