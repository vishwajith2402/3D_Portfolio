import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { HomePage } from './pages/HomePage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="/article/:slug" element={<ArticleDetailPage />} />
          {/* Fallback 404 route */}
          <Route
            path="*"
            element={
              <div className="min-h-screen bg-[#0D0D0D] text-white flex flex-col justify-center items-center p-6 text-center">
                <h1 className="text-4xl font-mono text-cyan-400 font-bold mb-4">404</h1>
                <p className="text-slate-400 mb-6">Page Not Found in the Neural Directory</p>
                <a href="/" className="px-5 py-2.5 rounded-xl bg-purple-600 text-white font-medium">
                  Return to Matrix
                </a>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
