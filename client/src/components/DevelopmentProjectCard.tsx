import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DevelopmentProject } from "@/data/projects";

interface DevelopmentProjectCardProps {
  project: DevelopmentProject;
}

const statusLabels = {
  planning: "Planejamento",
  "in-progress": "Em Desenvolvimento",
  paused: "Pausado",
};

const statusColors = {
  planning: "bg-blue-100 text-blue-800",
  "in-progress": "bg-green-100 text-green-800",
  paused: "bg-yellow-100 text-yellow-800",
};

export function DevelopmentProjectCard({ project }: DevelopmentProjectCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <CardDescription className="line-clamp-2 mt-1">{project.description}</CardDescription>
          </div>
          <span className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${statusColors[project.status]}`}>
            {statusLabels[project.status]}
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between gap-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Progresso</span>
            <span className="text-sm font-bold text-primary">{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.estimatedCompletion && (
          <div className="text-sm text-muted-foreground">
            <strong>Conclusão estimada:</strong> {project.estimatedCompletion}
          </div>
        )}

        {project.github && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="w-full"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Ver no GitHub
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
