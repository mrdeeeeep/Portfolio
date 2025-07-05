import Sidebar from '@/components/Sidebar';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';
import EducationCard from '@/components/EducationCard';
import SkillsSection from '@/components/SkillsSection';
import TrainingSection from '@/components/TrainingSection';
import TypingAnimation from '@/components/TypingAnimation';

import ProfileImage from '@/images/pfpc.jpeg';

import acaResourceRecc1 from '@/images/projectSnaps/acaResourceRecc1.png';
import acaResourceRecc2 from '@/images/projectSnaps/acaResourceRecc2.png';
import acaResourceRecc3 from '@/images/projectSnaps/acaResourceRecc3.png';
import acaResourceRecc4 from '@/images/projectSnaps/acaResourceRecc4.png';
import acaResourceRecc5 from '@/images/projectSnaps/acaResourceRecc5.png';
import acaResourceRecc6 from '@/images/projectSnaps/acaResourceRecc6.png';



const Index = () => {
  const projects = [
    {
      title: "Academic Resource Recommender - BTech Project",
      description: "Developed a web app that recommends relevant videos, papers, books, repos, and articles based on Filtering/Recommendation Algorithms.",
      period: "2024 - 2025",
      technologies: ["React.js", "MongoDB", "Express.js", "API", "Recommendation Algorithms",],
      githubUrl: "https://github.com/mrdeeeeep/skillCrate.git",
      screenshots: [
        acaResourceRecc1,
        acaResourceRecc2,
        acaResourceRecc3,
        acaResourceRecc4,
        acaResourceRecc5,
        acaResourceRecc6
        
      ]
    },
    {
      title: "AI-Powered Chatbot",
      description: "Developed a chatbot using LLMs to assist employees with DOP (Delegation of Power) documents.",
      period: "2024",
      technologies: ["Python", "NLP", "LLM", "Chatbot"],
      // screenshots: [chatbot1],
    },
  ];

  const experiences = [
    {
      company: "ZCSAsia (Suzoco Services Pvt Ltd) ",
      position: "Web and App Developer Intern",
      period: "MAR 2025 - JUN 2025",
      achievements: [
        "Built full-stack SaaS features using MongoDB, Express, React, and Node.js",
        "Developed and deployed responsive landing page.",
        "Implemented JWT authentication and protected routes on both client and server sides",
        "Built and integrated REST APIs with efficient database management",
        "Collaborated on UI/UX workflows using Figma and version control via GitHub"
      ]
    },
    {
      company: "NEEPCO (North Eastern Electric Power Corporation)",
      position: "Summer Internship",
      period: "MAY 2024 - JUL 2024",
      achievements: [
        "Trained and fine-tuned LLM to build a chatbot for specific document, DOP (Delegation of Power) for the employees of the Organization",
        "Applied NLP techniques (tokenization, lemmatization, TF-IDF, pos-tagging) for data preprocessing",
        "Worked with large language models and machine learning frameworks"
      ]
    }
  ];

  const education = [
    {
      institution: "Central Institute of Technology Kokrajhar",
      degree: "BTech in Computer Science & Engineering",
      location: "Kokrajhar, Assam",
      period: "2021 - 2025",
      details: [
        "CGPA: 8.1/10",
        "Relevant Coursework: DSA, OOP, DBMS, Software Engineering, AI & ML, Web Development, Computer Networks, IoT, Compiler Design, Theory of Computation"
      ]
    },
    {
      institution: "Kendriya Vidyalaya Tamulpur",
      degree: "10+12th - Physics, Chemistry, Maths, Computer Science",
      location: "Tamulpur, Assam", 
      period: "2019 - 2021",
      details: [
        "Percentage: 84.4%"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-sarah-bg flex">
      <Sidebar />
      
      <main className="ml-[280px] flex-1 p-16">
        <br /><br /><br />
        {/* About Section with Large Profile Image */}
        <section id="about" className="mb-20 flex flex-col items-center justify-center text-center">
          <div className="w-80 h-80 rounded-full mb-12 overflow-hidden shadow-2xl">
            <img
              src={ProfileImage}
              alt="Profile" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <h1 className="text-6xl font-bold text-sarah-text mb-6 leading-tight">
            Hello, I'm<br />
            Deep Baro
          </h1>
          <p className="text-xl text-sarah-text-secondary max-w-2xl leading-relaxed">
            I'm focused on{' '}
            <TypingAnimation 
              words={['Full Stack Development', 'AI/ML']} 
              className="text-sarah-text font-semibold"
            />
          </p>
          <br /><br /><br /><br /><br /><br />
        </section>

        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Experience Section with Timeline */}
          <section id="experience" className="mb-16">
            <h2 className="text-lg font-semibold text-sarah-text mb-6 uppercase tracking-wide">
              Experience
            </h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-sarah-card-border"></div>
              
              {experiences.map((experience, index) => (
                <div key={index} className="relative flex items-start mb-12">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 w-4 h-4 bg-sarah-text rounded-full border-4 border-sarah-bg z-10"></div>
                  
                  {/* Timeline Content */}
                  <div className="ml-16 flex-1">
                    <ExperienceCard {...experience} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section with Timeline */}
          <section id="education" className="mb-16">
            <h2 className="text-lg font-semibold text-sarah-text mb-6 uppercase tracking-wide">
              Education
            </h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-sarah-card-border"></div>
              
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-start mb-12">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 w-4 h-4 bg-sarah-text rounded-full border-4 border-sarah-bg z-10"></div>
                  
                  {/* Timeline Content */}
                  <div className="ml-16 flex-1">
                    <EducationCard {...edu} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-16">
            <h2 className="text-lg font-semibold text-sarah-text mb-6 uppercase tracking-wide">
              Projects
            </h2>
            <div>
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-16">
            <h2 className="text-lg font-semibold text-sarah-text mb-6 uppercase tracking-wide">
              Skills
            </h2>
            <SkillsSection />
          </section>

          {/* Training & Certification Section */}
          <section id="training" className="mb-16">
            <h2 className="text-lg font-semibold text-sarah-text mb-6 uppercase tracking-wide">
              Training & Certification
            </h2>
            <TrainingSection />
          </section>

          
        </div>
      </main>
    </div>
  );
};

export default Index;
