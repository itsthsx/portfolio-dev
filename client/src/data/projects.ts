export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
  github?: string;
}

export interface DevelopmentProject extends Project {
  progress: number; // 0-100
  status: "planning" | "in-progress" | "paused";
  estimatedCompletion?: string;
}

// Projetos concluídos
export const completedProjects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "Plataforma de e-commerce completa com carrinho de compras, pagamento integrado e painel administrativo.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://example.com",
    github: "https://github.com/example/ecommerce",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Aplicativo de gerenciamento de tarefas com colaboração em tempo real e notificações.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    link: "https://example.com",
    github: "https://github.com/example/tasks",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Dashboard de previsão do tempo com integração de API e visualização de dados em tempo real.",
    technologies: ["Vue.js", "OpenWeather API", "Chart.js"],
    link: "https://example.com",
    github: "https://github.com/example/weather",
  },
];

// Projetos em desenvolvimento
export const developmentProjects: DevelopmentProject[] = [
  {
    id: "dev-1",
    title: "AI Chat Application",
    description: "Aplicativo de chat com inteligência artificial para assistência e automação de tarefas.",
    technologies: ["React", "Node.js", "OpenAI API", "WebSocket"],
    progress: 65,
    status: "in-progress",
    estimatedCompletion: "Dezembro 2025",
    github: "https://github.com/example/ai-chat",
  },
  {
    id: "dev-2",
    title: "Real-time Analytics Dashboard",
    description: "Dashboard de análise em tempo real com visualização de dados e relatórios customizáveis.",
    technologies: ["React", "D3.js", "PostgreSQL", "Express"],
    progress: 40,
    status: "in-progress",
    estimatedCompletion: "Janeiro 2026",
  },
  {
    id: "dev-3",
    title: "Mobile App - Fitness Tracker",
    description: "Aplicativo mobile para rastreamento de atividades físicas e metas de saúde.",
    technologies: ["React Native", "Firebase", "Expo"],
    progress: 25,
    status: "planning",
    estimatedCompletion: "Fevereiro 2026",
  },
];
