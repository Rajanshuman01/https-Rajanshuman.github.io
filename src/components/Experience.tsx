import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { resumeData } from '../data/resume';
import { Briefcase, Calendar, ChevronDown, ChevronUp, MapPin, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="relative py-24 px-6 max-w-5xl mx-auto z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Professional Experience</h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">A timeline of my professional journey and key contributions.</p>
      </motion.div>

      <div className="space-y-8">
        {resumeData.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            {/* Timeline line */}
            {index !== resumeData.experience.length - 1 && (
              <div className="absolute left-[27px] top-16 bottom-[-32px] w-px bg-white/10 group-hover:bg-emerald-500/30 transition-colors hidden sm:block" />
            )}

            <div className="flex flex-col sm:flex-row gap-6">
              {/* Timeline dot */}
              <div className="hidden sm:flex items-center justify-center w-14 h-14 rounded-full bg-zinc-900 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all">
                <Briefcase className="w-6 h-6 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
              </div>

              {/* Card */}
              <div
                className={cn(
                  "flex-1 rounded-2xl border border-white/5 bg-zinc-900/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/10 hover:bg-zinc-900/80 cursor-pointer",
                  expandedIndex === index ? "border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]" : ""
                )}
                onClick={() => toggleExpand(index)}
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{exp.role}</h3>
                      <div className="text-lg font-medium text-zinc-300">{exp.company}</div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2 text-sm text-zinc-400">
                      <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        <Calendar className="w-4 h-4" />
                        {exp.dates}
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Impact Highlights (always visible) */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.bullets.slice(0, 2).map((bullet, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-zinc-300 bg-white/5 px-3 py-2 rounded-lg border border-white/5 max-w-full">
                        <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center mt-6 text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    {expandedIndex === index ? (
                      <div className="flex items-center gap-2 text-sm font-medium"><ChevronUp className="w-4 h-4" /> Show Less</div>
                    ) : (
                      <div className="flex items-center gap-2 text-sm font-medium"><ChevronDown className="w-4 h-4" /> View Full Details</div>
                    )}
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 sm:p-8 pt-0 border-t border-white/5 bg-black/20">
                        <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4 mt-6">Key Responsibilities & Achievements</h4>
                        <ul className="space-y-3">
                          {exp.bullets.map((bullet, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className="flex items-start gap-3 text-zinc-300 leading-relaxed"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 mt-2.5 shrink-0" />
                              <span>{bullet}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
