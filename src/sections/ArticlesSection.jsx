import React from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES_DATA } from '../data/portfolioData';
import { BookOpen, Clock, Calendar, ArrowUpRight, Tag } from 'lucide-react';

export const ArticlesSection = () => {
  return (
    <section id="articles" className="py-24 relative overflow-hidden border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">
            08 // Knowledge Base & Writing
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Journal</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-3">
            In-depth engineering notes, algorithm explorations, and technical architecture reviews written in Markdown.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Articles List / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTICLES_DATA.map((article) => (
            <article
              key={article.slug}
              className="group p-6 sm:p-8 rounded-3xl bg-[#111827]/80 border border-purple-500/25 hover:border-cyan-400/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-4">
                  <span className="flex items-center gap-1.5 text-cyan-300">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5 text-purple-300">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {article.title}
                </h3>

                <p className="text-slate-300/80 text-sm leading-relaxed mb-6">
                  {article.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono bg-purple-950/40 border border-purple-500/20 text-purple-200"
                    >
                      <Tag className="w-2.5 h-2.5 text-cyan-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-slate-800 flex items-center justify-between">
                <Link
                  to={`/article/${article.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 group-hover:text-cyan-300 hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <span className="text-[11px] font-mono text-slate-500">
                  Markdown Source
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
