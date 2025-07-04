
interface SkillCategory {
  title: string;
  skills: { name: string; level: string }[];
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "LANGUAGES",
      skills: [
        { name: "python", level: "advance" },
        { name: "C", level: "intermediate" },
        { name: "javascript", level: "advance" }
      ]
    },
    {
      title: "BACKEND",
      skills: [
        { name: "node.js", level: "intermediate" },
        { name: "express.js", level: "intermediate" },
        { name: "flask", level: "advance" }
      ]
    },
    {
      title: "AI/ML",
      skills: [
        { name: "large language models", level: "advance" },
        { name: "deep learning", level: "intermediate" },
        { name: 'computer vision', level: 'intermediate' },
        { name: "natural language processing", level: "advance" }

      ]
    },
    {
      title: "FRONTEND",
      skills: [
        { name: "html", level: "expert" },
        { name: "css", level: "advance" },
        { name: "react.js", level: "intermediate" },
        { name: "typescript", level: "intermediate" }
      ]
    },
    {
      title: "DATABASE",
      skills: [
        { name: "mysql", level: "advance" },
        { name: "mongodb", level: "expert" },
        { name: "supabase", level: "intermediate" }
      ]
    },
    {
      title: "TOOLS",
      skills: [
        { name: "git/github", level: "expert" },
        { name: "figma", level: "advance" },
        { name: "adobe suite", level: "intermediate" },
      ]
    },
    
  ];

  const getProgressWidth = (level: string) => {
    switch (level) {
      case "expert":
        return "w-[100%]";
      case "advance":
        return "w-[85%]";
      case "intermediate":
        return "w-[60%]";
      case "beginner":
        return "w-[15%]";
  
    }
  };

  return (
    <div className="columns-2 gap-6">
      {skillCategories.map((category, index) => (
        <div key={category.title} className="bg-sarah-card rounded-lg p-6 mb-6 break-inside-avoid transition-all duration-300 hover:scale-105">
          <h3 className="text-lg font-semibold text-sarah-text mb-6 uppercase tracking-wide">
            {category.title}
          </h3>
          
          <div className="space-y-6">
            {category.skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-sarah-text-secondary lowercase">
                    {skill.name}
                  </span>
                  <span className="text-xs text-sarah-text-tertiary lowercase">
                    {skill.level}
                  </span>
                </div>
                
                <div className="w-full bg-sarah-card-border rounded-full h-1">
                  <div 
                    className={`bg-sarah-text h-1 rounded-full transition-all duration-1000 ease-out ${getProgressWidth(skill.level)}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
