import { ArrowUpRight } from 'lucide-react';
import { SiGithub, SiLeetcode, SiLinkedin } from 'react-icons/si';

interface ProjectLinkProps {
  name: string;
  href: string;
}

function ProjectLink({ name, href }: ProjectLinkProps) {
  return (
    <a 
      href={href}
      className="flex items-center justify-between p-6 border-b border-neutral-800 hover:bg-neutral-900 transition-colors"
    >
      <span className="text-lg">{name}</span>
      <ArrowUpRight className="text-neutral-400" />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-neutral-900 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">Have a project in mind?</h2>
          <p className="text-neutral-400 mb-6">Let's discuss your project</p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:kanishaa.21cse@kongu.edu" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition">
              kanishaa.21cse@kongu.edu
            </a>
            <div className="flex gap-4">
            <a href="https://github.com/Kanisha-28-04-2004" className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-full transition">
              <SiGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/kanisha-anand-9b8554229/" className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-full transition">
              <SiLinkedin size={24} />
              </a>
              <a href="https://leetcode.com/u/21CSR076/" className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-full transition">
              <SiLeetcode size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 rounded-3xl overflow-hidden">
          <h2 className="p-6 text-2xl font-bold border-b border-neutral-800">Academic </h2>
          <ProjectLink name="Ambal Matriculation Higher Secondary School SSLC : 95.4 Percentage" href="." />
          <ProjectLink name="Adharsh Vidhyalaya Matriculation Higher Secondary School HSC : 94.3 Percentage " href="." />
          <ProjectLink name="Kongu Engineering College Bachelor of Engineering in Computer Science and Engineering CGPA 8.17 " href="." />
        </div>
      </div>

      <div className="mt-12 flex justify-between items-center text-neutral-400">
        <div className="text-2xl font-bold text-white">Bentofolio</div>
        <div>© All rights reserved</div>
      </div>
    </footer>
  );
}