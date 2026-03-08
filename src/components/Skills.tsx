import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Code2, Database, Wrench } from 'lucide-react';

export function Skills() {
  if (resumeData.skills.length === 0) return null;

  return (
    <section id="skills" className="relative py-24 px-6 max-w-6xl mx-auto z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Technical Skills</h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Technologies and tools I use to build scalable solutions.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resumeData.skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-2xl border border-white/5 bg-zinc-900/40 p-8 overflow-hidden hover:border-emerald-500/30 transition-colors backdrop-blur-md"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                {index === 0 ? <Database className="w-6 h-6" /> : index === 1 ? <Code2 className="w-6 h-6" /> : <Wrench className="w-6 h-6" />}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">{skillGroup.category}</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="px-4 py-2 text-sm font-medium text-zinc-300 bg-white/5 border border-white/10 rounded-full hover:bg-emerald-500/20 hover:text-emerald-300 hover:border-emerald-500/30 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
