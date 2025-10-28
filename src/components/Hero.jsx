import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const Hero = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative h-[80vh] md:h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/0UnIIJngGgvQNHiD/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Vibrant gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-fuchsia-500/10 to-indigo-900/60" />

      {/* Floating glows */}
      <motion.div
        aria-hidden
        className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl pointer-events-none"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl pointer-events-none"
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-white border border-white/20 mb-6"
          >
            <Rocket className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium tracking-wide">GenAI. Real impact. Faster delivery.</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm"
          >
            We build vibrant GenAI products that ship at rocket speed
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 md:mt-6 text-base md:text-lg text-white/90 max-w-2xl mx-auto"
          >
            From document intelligence to legal reasoning, our team crafts AI systems that feel magical and deliver value fast.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 px-6 py-3 text-white font-semibold shadow-lg shadow-fuchsia-500/30"
            >
              Contact Us
              <Send className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleScrollTo('features')}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/15 backdrop-blur px-6 py-3 text-white font-semibold border border-white/20 hover:bg-white/25 transition-colors"
            >
              Explore Features
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
