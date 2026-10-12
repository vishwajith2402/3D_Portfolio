import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import { ARTICLES_DATA } from '../data/portfolioData';
import { ArrowLeft, Calendar, Clock, Tag, BookOpen, Share2 } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const ArticleDetailPage = () => {
  const { slug } = useParams();
  const article = ARTICLES_DATA.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col justify-center items-center p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="text-slate-400 mb-6">No journal entry matches this URL identifier.</p>
        <Link to="/" className="px-5 py-2.5 rounded-xl bg-purple-600 text-white font-medium">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          
          {/* Back button */}
          <Link
            to="/#articles"
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Learning Journal</span>
          </Link>

          {/* Article Header */}
          <header className="mb-12 pb-8 border-b border-purple-500/20">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mb-4">
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

            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              {article.summary}
            </p>

            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-mono bg-purple-950/40 border border-purple-500/20 text-purple-200"
                >
                  <Tag className="w-3 h-3 text-cyan-400" />
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Rendered Markdown Body */}
          <div className="prose prose-invert max-w-none prose-headings:text-white prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h2:border-b prose-h2:border-slate-800 prose-h2:pb-3 prose-h3:text-xl prose-p:text-slate-300 prose-p:leading-relaxed prose-code:text-cyan-300 prose-code:bg-slate-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-[#111827] prose-pre:border prose-pre:border-purple-500/30 prose-pre:rounded-2xl prose-pre:p-5 prose-li:text-slate-300">
            <Markdown>{article.content}</Markdown>
          </div>

          {/* Author footer banner */}
          <div className="mt-16 p-6 rounded-2xl glass-panel flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs font-mono text-purple-300 uppercase">Written By</p>
              <h4 className="text-base font-bold text-white">Vishwajith P</h4>
              <p className="text-xs text-slate-400">AI & Machine Learning Student</p>
            </div>
            <Link
              to="/#contact"
              className="px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-cyan-500"
            >
              Discuss Article
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};
