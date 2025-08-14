"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MailIcon, ArrowRight, Github, Linkedin, SunIcon } from "lucide-react";
import Link from "next/link"; // Assuming Next.js is the environment, Link is needed for navigation if not using local state for scrolling

// Placeholder data (would ideally be in a separate data file)
const projectsData = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with user authentication, product catalog, and payment gateway integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"],
    imageUrl: "https://via.placeholder.com/400x300/cccccc/ffffff?text=E-commerce+Platform",
    liveDemo: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity tool to manage tasks, set deadlines, and track progress with a clean and intuitive interface.",
    technologies: ["React", "Context API", "CSS Modules", "Netlify Functions"],
    imageUrl: "https://via.placeholder.com/400x300/dddddd/000000?text=Task+Manager",
    liveDemo: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills, built with modern web technologies.",
    technologies: ["Next.js", "Tailwind CSS", "Shadcn UI", "Framer Motion"],
    imageUrl: "https://via.placeholder.com/400x300/eeeeee/333333?text=Portfolio+Site",
    liveDemo: "#",
    github: "#",
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard displaying complex data sets with charts and graphs for insightful analysis.",
    technologies: ["Vue.js", "Chart.js", "Node.js", "Express", "PostgreSQL"],
    imageUrl: "https://via.placeholder.com/400x300/ffffff/555555?text=Data+Viz+Dashboard",
    liveDemo: "#",
    github: "#",
  },
];

const skillsData = {
  frontend: ["React", "Next.js", "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS", "Shadcn UI"],
  backend: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL"],
  databases: ["PostgreSQL", "MongoDB", "Redis"],
  tools: ["Git", "Docker", "Webpack", "Figma", "VS Code"],
  languages: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
};

// Section components
function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600 text-white p-8">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">Hi, I'm [Your Name]</h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">A passionate Full-Stack Developer crafting user-centric digital experiences.</p>
        <div className="flex justify-center gap-4 animate-fade-in-up animation-delay-400">
          <Button variant="secondary" size="lg" className="hover:scale-105 transition-transform">View My Work</Button>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-purple-600 transition-colors">Contact Me</Button>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg mb-4 leading-relaxed">
            I'm a driven and creative Full-Stack Developer with a strong foundation in modern web technologies. I thrive on building scalable, efficient, and visually appealing applications that solve real-world problems. My passion lies in transforming complex ideas into seamless user experiences.
          </p>
          <p className="text-lg mb-8 leading-relaxed">
            From developing robust backend systems to crafting intuitive user interfaces, I enjoy every aspect of the development lifecycle. I'm constantly learning and adapting to new technologies to stay at the forefront of the ever-evolving tech landscape.
          </p>
          <Button variant="outline" className="hover:scale-105 transition-transform">Download Resume</Button>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* Placeholder for skills categories */}
          {Object.keys(skillsData).map((category) => (
            <Card key={category} className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg capitalize">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  {skillsData[category].slice(0, 3).map((skill) => (
                    <li key={skill} className="flex items-center">
                      {/* Placeholder for icons */}
                      <SunIcon className="h-4 w-4 mr-2 text-blue-500" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="flex flex-col bg-gray-50 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" loading="lazy" />
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0 flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <div className="flex gap-4">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                    <Github size={20} /> GitHub
                  </Link>
                  <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                    <ArrowRight size={20} /> Live Demo
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <Card key={category} className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl capitalize">{category.charAt(0).toUpperCase() + category.slice(1)}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-left">
                  {skills.map((skill) => (
                    <li key={skill} className="flex items-center text-gray-700 dark:text-gray-200">
                      <SunIcon className="h-5 w-5 mr-3 text-blue-500" /> {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitted(false); // Reset submission status

    // Basic client-side validation
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      setIsLoading(false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    // --- Integrate with a form service (e.g., Formspree) ---
    // Replace with your actual Formspree endpoint or other service logic
    const formEndpoint = 'https://formspree.io/f/YOUR_FORM_ID'; // <<< REPLACE THIS
    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
    // --- End of form service integration ---
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? I'd love to hear from you!
        </p>
        <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-xl">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center h-full">
              <MailIcon className="h-16 w-16 text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              <Button onClick={() => setIsSubmitted(false)} className="hover:scale-105 transition-transform">Send Another Message</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-left mb-2">Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  required
                  className="focus:ring-blue-500"
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-left mb-2">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="focus:ring-blue-500"
                />
              </div>
              <div>
                <Label htmlFor="subject" className="block text-left mb-2">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Optional: Project Inquiry"
                  className="focus:ring-blue-500"
                />
              </div>
              <div>
                <Label htmlFor="message" className="block text-left mb-2">Message</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message here..."
                  required
                  rows={6}
                  className="focus:ring-blue-500 resize-none"
                />
              </div>
              <Button type="submit" disabled={isLoading} className="w-full py-6 text-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed">
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// Main App Component
export default function Page() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    // Smooth scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Define sections for navigation mapping
  const sections = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'projects', title: 'Projects' },
    { id: 'skills', title: 'Skills' },
    { id: 'contact', title: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <nav className="container mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
            <SunIcon className="h-8 w-8 text-yellow-400" />
            <span className="text-2xl font-bold">Portfolio</span>
          </div>
          <ul className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleNavClick(section.id)}
                  className={`text-lg font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeSection === section.id ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                  }`}
                  aria-label={`Go to ${section.title} section`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
          {/* Mobile Menu Button - TBD if needed, assuming simple layout for now */}
          <button className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none">
            {/* Hamburger Icon */}
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
      </header>

      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <footer className="py-8 bg-gray-900 dark:bg-gray-950 text-gray-400 dark:text-gray-500 text-center border-t border-gray-700">
        <div className="container mx-auto px-8">
          <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="#" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              <MailIcon size={24} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
