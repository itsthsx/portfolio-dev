import { APP_TITLE } from "@/const";
import { ProjectCard } from "@/components/ProjectCard";
import { DevelopmentProjectCard } from "@/components/DevelopmentProjectCard";
import { completedProjects, developmentProjects } from "@/data/projects";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <nav className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">{APP_TITLE}</div>
          <ul className="flex gap-6 text-sm font-medium">
            <li><a href="#projects" className="hover:text-primary transition-colors">Projetos</a></li>
            <li><a href="#development" className="hover:text-primary transition-colors">Em Desenvolvimento</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">Bem-vindo ao Meu Portfólio</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Desenvolvedor apaixonado por criar soluções web inovadoras e impactantes. 
            Aqui você encontra meus projetos concluídos e os que estou desenvolvendo.
          </p>
        </section>

        {/* Completed Projects Section */}
        <section id="projects" className="bg-muted/30 py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">Projetos Concluídos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Development Projects Section */}
        <section id="development" className="py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">Projetos em Desenvolvimento</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {developmentProjects.map((project) => (
                <DevelopmentProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-muted/30 py-16">
          <div className="container max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Entre em Contato</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Interessado em colaborar ou conhecer mais sobre meu trabalho? 
              Sinta-se à vontade para entrar em contato!
            </p>
            <div className="flex justify-center gap-4">
              <a href="mailto:seu-email@example.com" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                <Mail className="w-5 h-5" />
                Email
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-muted hover:bg-muted/80 rounded-lg transition-colors">
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-muted hover:bg-muted/80 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted border-t border-border py-8">
        <div className="container max-w-6xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 {APP_TITLE}. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
