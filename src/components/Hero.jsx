import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Send } from 'lucide-react';

const Hero = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative h-[80vh] md:h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Vibrant gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-fuchsia-500/10 to-indigo-900/60" />

      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-white border border-white/20 mb-6">
            <Rocket className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium tracking-wide">GenAI. Real impact. Faster delivery.</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
            We build vibrant GenAI products that ship at rocket speed
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/90 max-w-2xl mx-auto">
            From document intelligence to legal reasoning, our team crafts AI systems that feel magical and deliver value fast.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 px-6 py-3 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:scale-[1.02] transition-transform"
            >
              Contact Us
              <Send className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScrollTo('features')}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/15 backdrop-blur px-6 py-3 text-white font-semibold border border-white/20 hover:bg-white/25 transition-colors"
            >
              Explore Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
