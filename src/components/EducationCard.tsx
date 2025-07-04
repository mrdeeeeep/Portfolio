
interface EducationCardProps {
  institution: string;
  degree: string;
  location: string;
  period: string;
  details: string[];
}

const EducationCard = ({ institution, degree, location, period, details }: EducationCardProps) => {
  return (
    <div className="bg-sarah-card rounded-lg p-6 mb-6 transition-all duration-300 hover:scale-110">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-semibold text-sarah-text">
            {institution}
          </h3>
          <div className="text-lg text-sarah-text-secondary font-medium">
            {degree}
          </div>
          <div className="text-sm text-sarah-text-tertiary">
            {location}
          </div>
        </div>
        <div className="text-xs font-medium text-sarah-text-tertiary uppercase tracking-wider">
          {period}
        </div>
      </div>

      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-sarah-text-secondary">
            <span className="text-sarah-text-tertiary mt-1">•</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationCard;
