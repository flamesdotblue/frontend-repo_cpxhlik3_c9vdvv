import React from 'react';
import { Zap, Shield, Cog, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Rocket,
    title: 'Fast-Paced Delivery',
    desc: 'We iterate at startup speed with production-grade discipline — shipping value weekly, not quarterly.'
  },
  {
    icon: Zap,
    title: 'GenAI at the Core',
    desc: 'RAG, agents, and fine-tuned models woven into your workflows to unlock instant intelligence.'
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    desc: 'Privacy-first pipelines, robust guardrails, and enterprise-ready governance baked in.'
  },
  {
    icon: Cog,
    title: 'Seamless Integration',
    desc: 'Drop into your stack with clean APIs, webhooks, and flexible deployment options.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const Features = () => {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-indigo-950 to-purple-900 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.10),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.06),transparent_35%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold text-center"
        >
          Built for ambition, powered by GenAI
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-white/80 text-center mt-3 max-w-2xl mx-auto"
        >
          We craft end-to-end AI solutions that accelerate your teams and delight your customers.
        </motion.p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              variants={item}
              key={title}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group rounded-2xl bg-white/10 border border-white/15 backdrop-blur p-6 shadow-xl hover:shadow-fuchsia-500/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-fuchsia-500 to-amber-400 grid place-content-center text-white shadow-md mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-white/80 mt-2 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
