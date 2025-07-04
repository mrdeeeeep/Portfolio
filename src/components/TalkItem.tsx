
import { Play } from 'lucide-react';

interface TalkItemProps {
  title: string;
  event: string;
  date: string;
  hasAudio?: boolean;
}

const TalkItem = ({ title, event, date, hasAudio }: TalkItemProps) => {
  return (
    <div className="flex items-center gap-4 py-4 border-b border-sarah-card-border last:border-b-0 hover:scale-105 hover:-mx-4 hover:px-4 hover:rounded-lg transition-all duration-300 group">
      {hasAudio && (
        <button className="w-12 h-12 bg-sarah-card border border-sarah-card-border rounded-full flex items-center justify-center hover:scale-110 transition-all duration-200">
          <Play size={16} className="text-sarah-text ml-0.5" />
        </button>
      )}
      
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-sarah-text mb-1">
          {title}
        </h3>
        <div className="text-sm text-sarah-text-secondary mb-1">
          {event}
        </div>
        <div className="text-xs font-medium text-sarah-text-tertiary uppercase tracking-wider">
          {date}
        </div>
      </div>
    </div>
  );
};

export default TalkItem;
