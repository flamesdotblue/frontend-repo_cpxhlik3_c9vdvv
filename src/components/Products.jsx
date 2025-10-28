import React from 'react';
import { BrainCircuit, FileText, Scale, Sparkles } from 'lucide-react';

const products = [
  {
    icon: FileText,
    name: 'Doc Sorter',
    tag: 'Document Intelligence',
    desc: 'Classify, route, and summarize documents with precision. Instant triage for high-volume workflows.'
  },
  {
    icon: Scale,
    name: 'LegalMindAI',
    tag: 'Legal Reasoning',
    desc: 'Rapid precedent search and argument drafting with transparent citations and guardrails.'
  },
  {
    icon: BrainCircuit,
    name: 'InsightFlow',
    tag: 'Analytics Copilot',
    desc: 'Ask data anything. Conversational analytics with secure, governed access to your sources.'
  },
  {
    icon: Sparkles,
    name: 'AssistKit',
    tag: 'Agentic Automation',
    desc: 'Composable agents that execute tasks across tools and APIs — from emails to backoffice ops.'
  }
];

const Products = () => {
  return (
    <section id="products" className="relative py-20 bg-gradient-to-b from-purple-900 to-fuchsia-900 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_80%_20%,rgba(255,255,255,0.08),transparent_60%),radial-gradient(600px_300px_at_10%_80%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Example products</h2>
            <p className="text-white/80 mt-2">A glimpse of what we ship — customizable and production-ready.</p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(({ icon: Icon, name, tag, desc }) => (
            <article key={name} className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur p-6 shadow-xl hover:translate-y-[-2px] hover:shadow-pink-500/20 transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-400 to-pink-500 grid place-content-center text-white shadow mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">{name}</h3>
              <span className="inline-block mt-1 text-xs font-semibold px-2 py-1 rounded-full bg-white/15 border border-white/20">{tag}</span>
              <p className="text-white/80 mt-3 text-sm leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
