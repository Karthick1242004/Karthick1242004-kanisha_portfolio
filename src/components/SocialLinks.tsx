import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import { SiLeetcode } from "react-icons/si";

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a href="https://github.com/Kanisha-28-04-2004" className="text-white hover:text-purple-400 transition">
        <Github size={24} />
      </a>
      <a href="https://www.linkedin.com/in/kanisha-anand-9b8554229/" className="text-white hover:text-purple-400 transition">
        <Linkedin size={24} />
      </a>
      <a href="https://leetcode.com/u/21CSR076/" className="text-white hover:text-purple-400 transition">
        <SiLeetcode size={24} />
      </a>
    </div>
  );
}