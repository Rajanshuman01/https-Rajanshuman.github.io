import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { Trophy, Award, Star } from 'lucide-react';

export function Achievements() {
  if (resumeData.achievements.length === 0) return null;

  return (
    <section id="achievements" className="relative py-24 px-6 max-w-6xl mx-auto z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Achievements & Awards</h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Recognitions and milestones throughout my career and education.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resumeData.achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-2xl border border-white/5 bg-zinc-900/40 p-8 overflow-hidden hover:border-emerald-500/30 transition-colors backdrop-blur-md"
          >
            {/* Spotlight effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                {index === 0 ? <Trophy className="w-6 h-6" /> : index === 1 ? <Award className="w-6 h-6" /> : <Star className="w-6 h-6" />}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">{achievement.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{achievement.context}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
