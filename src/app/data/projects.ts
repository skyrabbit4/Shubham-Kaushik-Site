export interface Project {
    id: string;
    name: string;
    description: string;
    tech: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured?: boolean;
    status?: string;
}

export const projects: Project[] = [
    {
        id: "api-buddy-cloud",
        name: "API Buddy Cloud",
        description: "A tool for frontend devs to mock APIs instantly. Stop waiting for the backend — simulate endpoints, responses, and delays right in the browser.",
        tech: ["TypeScript", "Angular", "Node.js"],
        githubUrl: "https://github.com/skyrabbit4/api-buddy-cloud",
        liveUrl: "https://mockapi.store/",
        featured: true,
        status: "live"
    },
    {
        id: "govscheme-finder",
        name: "GovScheme Finder",
        description: "Drop your profile and instantly discover government schemes you're eligible for. AI-powered scheme matching across central and state programs.",
        tech: ["TypeScript", "AI", "React"],
        githubUrl: "https://github.com/skyrabbit4/govscheme-finder",
        liveUrl: "https://govscheme-finder.lovable.app/",
        featured: true,
        status: "live"
    },
    {
        id: "codearena",
        name: "CodeArena",
        description: "⚔️ Real-time competitive coding platform — battle head-to-head solving coding challenges live in the browser. Think LeetCode meets live multiplayer.",
        tech: ["TypeScript", "WebSocket", "Node.js"],
        githubUrl: "https://github.com/skyrabbit4/CodeArena",
        featured: true,
        status: "building"
    },
    {
        id: "open-fiesta",
        name: "Open Fiesta",
        description: "An open-source alternative to Dhruv Rathee's AI startup — with even more models. Built for developers who want full control over their AI stack.",
        tech: ["TypeScript", "AI", "Next.js"],
        githubUrl: "https://github.com/skyrabbit4/Open-Fiesta",
        liveUrl: "https://www.openfiesta.app",
        featured: true,
        status: "live"
    },
    {
        id: "theodoc",
        name: "Theodoc",
        description: "A documentation tool for managing and viewing project docs. Clean, fast, and built for developer teams.",
        tech: ["C#", ".NET", "TypeScript"],
        githubUrl: "https://github.com/skyrabbit4/theodoc",
        status: "wip"
    },
    {
        id: "social-agent-workspace",
        name: "Social Agent Workspace",
        description: "An app to track and manage your social media presence across platforms. Built with AI-assisted analytics.",
        tech: ["TypeScript", "Angular"],
        githubUrl: "https://github.com/skyrabbit4/SocialAgentWorkspace",
        status: "wip"
    },
    {
        id: "amazon-project",
        name: "Amazon Clone",
        description: "A fully functional Amazon e-commerce clone — product browsing, cart management, checkout, and order tracking. Built with vanilla JS.",
        tech: ["JavaScript", "HTML", "CSS"],
        githubUrl: "https://github.com/skyrabbit4/AmazonProject",
        status: "done"
    }
];
