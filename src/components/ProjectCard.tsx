
import { ExternalLink, Github, Star } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  company: string;
  period: string;
  technologies: string[];
  stars?: number;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  company, 
  period, 
  technologies, 
  stars,
  githubUrl,
  liveUrl 
}: ProjectCardProps) => {
  return (
    <div className="bg-sarah-card rounded-lg p-6 mb-6 transition-all duration-300 hover:scale-110 cursor-pointer group">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-semibold text-sarah-text mb-1">
            {title}
          </h3>
          <div className="text-xs font-medium text-sarah-text-tertiary uppercase tracking-wider">
            {company} • {period}
          </div>
        </div>
        <div className="flex gap-2">
          {githubUrl && (
            <a href={githubUrl} className="text-sarah-text-secondary hover:text-sarah-text transition-colors">
              <Github size={16} />
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} className="text-sarah-text-secondary hover:text-sarah-text transition-colors">
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-sarah-text-secondary leading-relaxed mb-4">
        {description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-3">
        {technologies.map((tech) => (
          <span 
            key={tech}
            className="text-xs px-2 py-1 bg-sarah-bg rounded text-sarah-text-tertiary"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Stats */}
      {stars && (
        <div className="flex items-center gap-2 text-sm text-sarah-text-secondary">
          <Star size={14} />
          <span>{stars}</span>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
