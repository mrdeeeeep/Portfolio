
import { ExternalLink, Github, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface ProjectCardProps {
  title: string;
  description: string;
  company: string;
  period: string;
  technologies: string[];
  stars?: number;
  githubUrl?: string;
  liveUrl?: string;
  screenshots?: string[];
}

const ProjectCard = ({ 
  title, 
  description, 
  company, 
  period, 
  technologies, 
  stars,
  githubUrl,
  liveUrl,
  screenshots = []
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className={`bg-sarah-card rounded-lg transition-all duration-500 cursor-pointer group ${
      isExpanded ? 'mb-8' : 'mb-6 hover:scale-105'
    }`}>
      {/* Main Card Content */}
      <div className="p-6" onClick={() => setIsExpanded(!isExpanded)}>
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
          <div className="flex gap-3">
            {githubUrl && (
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-sarah-bg flex items-center justify-center text-sarah-text-secondary hover:text-sarah-text hover:bg-sarah-card-hover transition-all duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={20} />
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-sarah-bg flex items-center justify-center text-sarah-text-secondary hover:text-sarah-text hover:bg-sarah-card-hover transition-all duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={20} />
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

      {/* Expanded Content - Screenshots Carousel */}
      <div className={`overflow-hidden transition-all duration-500 ${
        isExpanded ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        {screenshots.length > 0 && (
          <div className="px-6 pb-6">
            <div className="relative">
              {/* Carousel Container */}
              <div 
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {screenshots.map((screenshot, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <div 
                        className="flex-shrink-0 w-80 h-48 bg-sarah-bg rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <img 
                          src={screenshot} 
                          alt={`${title} screenshot ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full h-[80vh] p-0 bg-sarah-card border-sarah-card-border">
                      <div className="w-full h-full flex items-center justify-center p-4">
                        <img 
                          src={screenshot} 
                          alt={`${title} screenshot ${index + 1}`}
                          className="max-w-full max-h-full object-contain rounded-lg"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>

              {/* Navigation Buttons */}
              {screenshots.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollLeft();
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-sarah-card/90 hover:bg-sarah-card rounded-full flex items-center justify-center text-sarah-text transition-colors shadow-lg"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollRight();
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-sarah-card/90 hover:bg-sarah-card rounded-full flex items-center justify-center text-sarah-text transition-colors shadow-lg"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
