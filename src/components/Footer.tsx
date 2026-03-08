import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export function Footer() {
  const { name, email, phone, links } = resumeData.basics;

  return (
    <footer className="relative py-12 px-6 border-t border-white/10 bg-black/50 backdrop-blur-md mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-2xl font-bold tracking-tighter text-white">{name}</h2>
          <p className="text-zinc-400 text-sm">Software Engineer</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`mailto:${email}`}
            className="text-zinc-400 hover:text-emerald-400 transition-colors p-2 rounded-full hover:bg-emerald-500/10"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href={`tel:${phone}`}
            className="text-zinc-400 hover:text-emerald-400 transition-colors p-2 rounded-full hover:bg-emerald-500/10"
            aria-label="Phone"
          >
            <Phone className="w-5 h-5" />
          </a>
          {links.map((link, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-emerald-400 transition-colors p-2 rounded-full hover:bg-emerald-500/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="text-sm text-zinc-500 text-center md:text-right">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
