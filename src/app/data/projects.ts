export interface Project {
    id: string;
    name: string;
    description: string;
    tech: string[];
    githubUrl?: string;
    liveUrl?: string;
}

export const projects: Project[] = [
    {
    id: "theodoc",
    name: "Theodoc",
        description: "A documentation tool for managing and viewing project docs.",
        tech: ["TypeScript", "Angular"],
        githubUrl: "https://github.com/skyrabbit4/theodoc"
    },
    {
    id: "example-project",
    name: "Example Project",
        description: "A placeholder project entry.",
        tech: ["TypeScript"],
        githubUrl: "https://github.com/yourusername/example-project"
    }
];