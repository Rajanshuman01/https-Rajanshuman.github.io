import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { ArrowDown, Download } from 'lucide-react';

export function Hero() {
  const { name, title, summary } = resumeData.basics;

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // In a real app, this would generate or download a PDF.
    // For now, we'll just alert or open a new window.
    alert('Resume download initiated.');
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-24 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-emerald-400 uppercase rounded-full bg-emerald-400/10 border border-emerald-400/20 backdrop-blur-md"
        >
          {title}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl mb-6"
        >
          {name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg text-zinc-400 sm:text-xl mb-10 leading-relaxed"
        >
          {summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            onClick={scrollToExperience}
            className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-black transition-all rounded-full bg-white hover:bg-zinc-200 hover:scale-105 active:scale-95"
          >
            View Experience
            <ArrowDown className="w-4 h-4" />
          </button>
          <button
            onClick={downloadResume}
            className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white transition-all rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 active:scale-95 backdrop-blur-md"
          >
            Download Resume
            <Download className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
    </section>
  );
}
