import { motion } from 'motion/react';
import { resumeData } from '../data/resume';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export function Education() {
  if (resumeData.education.length === 0 && resumeData.certifications.length === 0) return null;

  return (
    <section id="education" className="relative py-24 px-6 max-w-6xl mx-auto z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Education & Certifications</h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">My academic background and professional certifications.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>

          <div className="space-y-6">
            {resumeData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl border border-white/5 bg-zinc-900/40 p-6 overflow-hidden hover:border-emerald-500/30 transition-colors backdrop-blur-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                  <h4 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">{edu.degree}</h4>
                  <div className="flex items-center gap-1.5 text-sm text-zinc-400 bg-white/5 px-3 py-1 rounded-full border border-white/5 whitespace-nowrap">
                    <Calendar className="w-4 h-4" />
                    {edu.dates}
                  </div>
                </div>
                <p className="text-zinc-400">{edu.institution}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Certifications</h3>
          </div>

          <div className="space-y-4">
            {resumeData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl border border-white/5 bg-zinc-900/40 p-6 overflow-hidden hover:border-emerald-500/30 transition-colors backdrop-blur-md flex items-center gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500/50 group-hover:bg-emerald-400 transition-colors shrink-0" />
                <h4 className="text-lg font-medium text-zinc-200 group-hover:text-white transition-colors">{cert}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
