import Sidebar from '@/components/Sidebar';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';
import EducationCard from '@/components/EducationCard';
import SkillsSection from '@/components/SkillsSection';
import TrainingSection from '@/components/TrainingSection';
import TypingAnimation from '@/components/TypingAnimation';

import {MapPinCheckInside} from 'lucide-react'

import ProfileImage from '@/images/pfpc.jpeg';

import acaResourceRecc1 from '@/images/projectSnaps/acaResourceRecc1.png';
import acaResourceRecc2 from '@/images/projectSnaps/acaResourceRecc2.png';
import acaResourceRecc3 from '@/images/projectSnaps/acaResourceRecc3.png';
import acaResourceRecc4 from '@/images/projectSnaps/acaResourceRecc4.png';
import acaResourceRecc5 from '@/images/projectSnaps/acaResourceRecc5.png';
import acaResourceRecc6 from '@/images/projectSnaps/acaResourceRecc6.png';

import collabDoc1 from '@/images/projectSnaps/collabDoc1.png';
import collabDoc2 from '@/images/projectSnaps/collabDoc2.png';

import nextSkill1 from '@/images/projectSnaps/nextskill1.png';
import nextSkill2 from '@/images/projectSnaps/nextskill2.png';
import nextSkill3 from '@/images/projectSnaps/nextskill3.png';
import nextSkill4 from '@/images/projectSnaps/nextskill4.png';



const Index = () => {
  const projects = [
    {
      title: "Academic Resource Recommender - BTech Project",
      description: "Developed a web app that recommends relevant videos, papers, books, repos, and articles based on Filtering/Recommendation Algorithms upon User Interaction Data & Metadata of Recources.",
      period: "2024 - 2025 (not deployed)",
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
    // {
    //   title: "Real-Time Collaborative Text Editor",
    //   description: "Build a modern web-based platform for teams to collaborate on documents in real-time, assign tasks, and use AI (OpenAI API) for productivity (e.g., generating summaries, rewriting, translating",
    //   period: "2025 (still working on it)",
    //   technologies: ["React.js", "Express.js", "Liveblocks", "TipTap", "LLM"],
    //   githubUrl:"https://github.com/mrdeeeeep/collaborativeTextEditor.git",
    //   screenshots: [
    //     collabDoc1,
    //     collabDoc2
    //   ]
    // },
    {
      title: "nextSkill - Personalized Roadmap Builder",
      description: "Built an AI-powered tool to generate personalized skill-building roadmaps based on user input and preferences.",
      period: "2025",
      technologies: ["React.js", "Typescript", "LLM", "API"],
      githubUrl: "https://github.com/mrdeeeeep/nextSkill2025.git",
      liveUrl: "https://nextskill.netlify.app/",
      screenshots: [
        nextSkill1,
        nextSkill2,
        nextSkill3,
        nextSkill4
      ]
    },
  ];

  const experiences = [
    {
      company: "TrieDatum Inc.", 
      position: "Software Engineer", 
      period: "SEPT 2025 - Present", 
      achievements: [
        "Work as a backend developer within the GenAI team to build and support generative AI applications.",
        "Develop backend services using Python and AWS"
      ] 
    },

    {
      company: "ZCSAsia (Suzoco Services Pvt Ltd) ",
      position: "Web and App Developer Intern",
      period: "MAR 2025 - JUN 2025",
      achievements: [
        "Assisted the team in building full-stack SaaS features using MongoDB, Express.js, React.js, and Node.js",
        "Developed and deployed responsive landing page.",
        "Built and integrated REST APIs",
        "Collaborated on UI/UX workflows using Figma."
      ]
    },
    {
      company: "NEEPCO (North Eastern Electric Power Corporation)",
      position: "Summer Internship",
      period: "MAY 2024 - JUL 2024",
      achievements: [
        "Focused strictly on machine learning to train and fine-tuned LLM to build a chatbot for a specific document (DOP) for employees",
        "Utilized LLMs and NLP approaches"
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
      degree: "10+12th (Science)",
      location: "Tamulpur, Assam", 
      period: "2019 - 2021",
      details: [
        "Percentage: 84.4%",
        "Relevant Coursework: Physics, Chemistry, Mathematics, Computer Science"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-sarah-bg flex">
      <Sidebar />
      
      <main className="ml-[280px] flex-1 p-16">
        <br /><br />
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
              words={['Backend Development']} 
              className="text-sarah-text font-semibold"
            />
          </p>
          <p className="text-lg text-sarah-text-secondary mt-4 max-w-2xl">
            <MapPinCheckInside className="inline mr-2" size={20} />Kokrjhar, Assam, India
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
            <br /><br /><br /><br /><br /><br />
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
            <br /><br /><br /><br /><br /><br />
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
            <br /><br /><br />
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
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </section>

          
        </div>
      </main>
    </div>
  );
};

export default Index;
