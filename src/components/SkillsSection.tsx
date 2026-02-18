
interface SkillCategory {
  title: string;
  skills: { name: string }[];
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "LANGUAGES",
      skills: [
        { name: "Python" },
        { name: "C" },
        { name: "JavaScript" }
      ]
    },
    {
      title: "BACKEND",
      skills: [
        { name: "Node.js" },
        { name: "Flask" }
      ]
    },
    {
      title: "AI/ML",
      skills: [
        { name: "RAG" },
        { name: "Natural Language Processing" }
      ]
    },
    {
      title: "FRONTEND",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "React.js" }
      ]
    },
    {
      title: "DATABASE",
      skills: [
        { name: "MySQL" },
        { name: "MongoDB" }
      ]
    },
    {
      title: "TOOLS",
      skills: [
        { name: "Git/GitHub" },
        { name: "Figma" },
        { name: "Adobe Suite" },
      ]
    },
  ];

  return (
    <div className="columns-2 gap-6">
      {skillCategories.map((category, index) => (
        <div key={category.title} className="bg-sarah-card rounded-lg p-6 mb-6 break-inside-avoid transition-all duration-300 hover:scale-105">
          <h3 className="text-lg font-semibold text-sarah-text mb-6 uppercase tracking-wide">
            {category.title}
          </h3>
          
          <div className="space-y-3">
            {category.skills.map((skill) => (
              <div key={skill.name} className="flex items-center justify-between">
                <span className="text-sm text-sarah-text-secondary">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
