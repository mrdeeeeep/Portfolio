
interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

const ExperienceCard = ({ company, position, period, description, achievements }: ExperienceCardProps) => {
  return (
    <div className="bg-sarah-card rounded-lg p-6 mb-6 transition-all duration-300 hover:scale-110">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-semibold text-sarah-text">
            {position}
          </h3>
          <div className="text-lg text-sarah-text-secondary font-medium">
            {company}
          </div>
        </div>
        <div className="text-xs font-medium text-sarah-text-tertiary uppercase tracking-wider">
          {period}
        </div>
      </div>

      <p className="text-sm text-sarah-text-secondary leading-relaxed mb-4">
        {description}
      </p>

      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-sarah-text-secondary">
            <span className="text-sarah-text-tertiary mt-1">•</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
