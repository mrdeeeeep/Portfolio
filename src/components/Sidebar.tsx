
import { Github, Twitter, Linkedin, Mail, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('about');

  const navigationItems = [
    { id: 'about', number: '01', label: 'ABOUT', href: '#about' },
    { id: 'experience', number: '02', label: 'EXPERIENCE', href: '#experience' },
    { id: 'education', number: '03', label: 'EDUCATION', href: '#education' },
    { id: 'projects', number: '04', label: 'PROJECTS', href: '#projects' },
    { id: 'skills', number: '06', label: 'SKILLS', href: '#skills' },
    { id: 'training', number: '05', label: 'TRAINING', href: '#training' }
    
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Mail, label: 'Email', href: '#' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));

      const current = sections.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'about';
      setActiveSection(hash);
    };

    handleHashChange();
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    window.location.hash = href;
  };

  return (
    <div className="fixed left-0 top-0 w-[280px] h-screen bg-sarah-bg p-12 flex flex-col justify-between">
      {/* Header Section */}
      <div>
        {/* Navigation */}
        <nav className="my-8">
          <ul className="space-y-8">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, item.id);
                    }}
                    className="group flex items-center py-3 relative cursor-pointer"
                  >
                    {/* Number */}
                    <span className={`text-base font-medium tracking-wide mr-6 transition-all duration-700 ${
                      isActive ? 'text-sarah-text' : 'text-sarah-text-tertiary'
                    }`}>
                      {item.number}
                    </span>
                    
                    {/* Animated Line */}
                    <div className="relative mr-6">
                      <div 
                        className={`h-0.5 bg-sarah-text transition-all duration-700 ease-in-out ${
                          isActive ? 'w-12' : 'w-6'
                        }`}
                        style={{
                          backgroundColor: isActive ? '#FFFFFF' : '#6B7280'
                        }}
                      />
                    </div>
                    
                    {/* Label */}
                    <span className={`text-base font-medium tracking-wide transition-all duration-700 ${
                      isActive ? 'text-sarah-text' : 'text-sarah-text-tertiary'
                    }`}>
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Footer with Download Resume and Social Links */}
      <div className="space-y-6">
        {/* Download Resume Button */}
        <div className="flex justify-center">
          <a
            href="#"
            className="text-sarah-text-secondary hover:text-sarah-text transition-colors duration-200 flex items-center gap-2"
            aria-label="Download Resume"
          >
            <Download size={20} />
            <span className="text-sm font-medium uppercase tracking-wide">Resume</span>
          </a>
        </div>
        
        {/* Social Links */}
        <div className="flex gap-6 justify-center">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-sarah-text-secondary hover:text-sarah-text transition-colors duration-200"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
