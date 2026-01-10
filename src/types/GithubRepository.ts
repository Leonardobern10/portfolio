export type GithubRepository = {
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    topics: string[];
    archived: boolean;
    visibility: 'public' | 'private' | 'internal';
    created_at: string;
    updated_at: string;
    pushed_at: string;
};
