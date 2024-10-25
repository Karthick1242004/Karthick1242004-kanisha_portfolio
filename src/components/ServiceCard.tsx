import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <div className="bg-neutral-900 rounded-3xl p-6 h-full transition-transform hover:scale-[1.02]">
      <Icon className="w-8 h-8 text-purple-400 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-neutral-400">{description}</p>
    </div>
  );
}