
import { Award, BookOpen, GraduationCap, FileText } from 'lucide-react';

const TrainingSection = () => {
  const trainings = [
    {
      title: "Andrioid App Development",
      organization: "Internshala Trainings",
      date: "2023",
      icon: Award,
      description: "Completed Android development training using Kotlin with hands-on projects and scored 93% in final test."
    },
    {
      title: "Blockchain Technology and Its Emerging Applications",
      organization: "Chhotubhai Gopalbhai Patel Institute of Technology,UTU",
      date: "2023",
      icon: Award,
      description: "Participated and Completed a 5-day workshop on Blockchain Technology and its applications in various fields."
    },
  ];

  return (
    <div className="space-y-6">
      {trainings.map((training, index) => (
        <div key={index} className="flex items-start gap-4 p-6 bg-sarah-card rounded-lg transition-all duration-300 hover:scale-105">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-sarah-bg rounded-lg flex items-center justify-center">
              <training.icon className="w-6 h-6 text-sarah-text" />
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-sarah-text">
                {training.title}
              </h3>
              <span className="text-xs font-medium text-sarah-text-tertiary uppercase tracking-wider">
                {training.date}
              </span>
            </div>
            
            <div className="text-sm text-sarah-text-secondary font-medium mb-2">
              {training.organization}
            </div>
            
            <p className="text-sm text-sarah-text-secondary">
              {training.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrainingSection;
