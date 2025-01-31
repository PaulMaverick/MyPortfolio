export type projectType = {
    id: number;
    name: string;
    description: string;
    techs: techType[];
    site_link: string;
    github_link: string;
}

export type techType = {
    id: number;
    techName: string;
}