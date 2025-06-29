
export type DicrimModel = {
    annee_publication: string,
    code_insee: string,
    libelle_commune: string,
}

export type PaginatedResponseDicrimModel = {
    results: number,
    page: number,
    total_pages: number,
    data: DicrimModel[],
    response_code: number,
    message: string,
    next: string,
    previous: string,
}
