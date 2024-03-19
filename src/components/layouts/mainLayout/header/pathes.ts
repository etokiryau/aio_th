import type { TLocales } from "@/interfaces/locales.type";
interface IPath {
	name: string;
	path: string;
	width: {[key in TLocales]: number};
}

export const pathes: IPath[] = [
    {
        path: "/",
        name: 'home', 
        width: { en: 49, ru: 68 },
    },
    {
        path: "/projects",
        name: 'projects', 
        width: { en: 66, ru: 74 }, 
    },
    {
        path: "/advantages",
        name: 'advantages', 
        width: { en: 95, ru: 126 },
    },
    {
        path: "/services",
        name: 'services',
        width: { en: 68, ru: 57 },
    },
    {
        path: "/questions",
        name: 'questions',
        width: { en: 33, ru: 75 },
    },
    {
        path: "/contacts",
        name: 'contacts',
        width: { en: 73, ru: 81 },
    },
];