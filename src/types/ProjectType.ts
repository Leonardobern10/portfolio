export type Project = {
    num: string;
    type: string;
    title: string;
    desc: string;
    decision?: string;
    stack: string[];
    github: string;
    live?: string;
    featured?: boolean;
};
