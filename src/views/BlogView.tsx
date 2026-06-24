import { useState } from 'react';
import { Calendar, Clock, BookOpen, ArrowLeft, ArrowRight, ShieldAlert, CheckCircle } from 'lucide-react';
import { BLOG_POSTS, BUSINESS_INFO } from '../data';
import { PageId, BlogPost } from '../types';

interface BlogViewProps {
  setCurrentPage: (page: PageId) => void;
}

export default function BlogView({ setCurrentPage }: BlogViewProps) {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const handlePostClick = (post: BlogPost) => {
    setActivePost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToFeed = () => {
    setActivePost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (activePost) {
    return (
      <div id="blog-detail-container" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Back navigation */}
        <button
          id="back-to-blog-feed-btn"
          onClick={handleBackToFeed}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-primary transition-all group cursor-pointer focus:outline-none"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog Feed
        </button>

        {/* Article Layout */}
        <article className="bg-white rounded-3xl border border-gray-100 shadow-xs overflow-hidden">
          {/* Article Banner image */}
          <div className="h-64 sm:h-96 w-full relative">
            <img
              src={activePost.image}
              alt={activePost.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">
                {activePost.category}
              </span>
              <h1 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight mt-2.5">
                {activePost.title}
              </h1>
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            {/* Meta statistics */}
            <div className="flex items-center gap-6 text-xs text-gray-400 font-semibold border-b border-gray-50 pb-6">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{activePost.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" />
                <span>{activePost.readTime}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-primary" />
                <span>Written by Hari Electrician Support</span>
              </div>
            </div>

            {/* Markdown-like rendered content body with styled paragraphs */}
            <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-6">
              {activePost.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('###')) {
                  return (
                    <h3 key={index} className="font-display font-bold text-xl text-dark pt-4">
                      {paragraph.replace('###', '').trim()}
                    </h3>
                  );
                }
                if (paragraph.startsWith('*')) {
                  const items = paragraph.split('\n');
                  return (
                    <ul key={index} className="space-y-2.5 pl-5 list-disc text-gray-700">
                      {items.map((item, idx) => (
                        <li key={idx}>{item.replace('*', '').trim()}</li>
                      ))}
                    </ul>
                  );
                }
                // Standard text paragraph
                return (
                  <p key={index} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Bottom local safety CTA card */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6 mt-10">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-dark text-base">Require an urgent electrical checkup?</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Don't put off safety inspections. We can test your earthing, insulation resistance, and install shock protection immediately.
                  </p>
                </div>
              </div>
              <button
                id="blog-inquiry-book-btn"
                onClick={() => handlePageClick('contact')}
                className="px-5 py-2.5 bg-primary hover:bg-dark text-white rounded-xl font-bold text-sm transition-all whitespace-nowrap cursor-pointer"
              >
                Book Inspection
              </button>
            </div>
          </div>
        </article>
      </div>
    );
  }

  const handlePageClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="blog-feed-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Blog header intro */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
          Safety & Resource Hub
        </span>
        <h1 className="font-display font-black text-3xl md:text-5xl text-dark">
          Surat Electrical Guides & Safety Advice
        </h1>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Stay informed about essential home electrical safety protocols, calculate backup power sizing accurately, and learn how to manage monsoon dampness effectively. Expert articles written directly by Surat's premier installers.
        </p>
      </div>

      {/* Main Blog Post Cards Feed */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <article
            id={`blog-card-${post.id}`}
            key={post.id}
            onClick={() => handlePostClick(post)}
            className="group bg-white rounded-2xl border border-gray-100 hover:border-primary shadow-2xs hover:shadow-md overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div>
              {/* Thumbnail image */}
              <div className="h-48 w-full overflow-hidden relative bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-white text-dark text-[10px] font-bold rounded-lg uppercase tracking-wider shadow-xs border border-gray-100">
                  {post.category}
                </span>
              </div>

              {/* Feed Meta description content */}
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-3 text-[10px] text-gray-400 font-bold">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-display font-bold text-lg text-dark group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-3 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-primary">
              <span>Read Full Article</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </article>
        ))}
      </div>

      {/* Static Safety Tips Banner block */}
      <div className="bg-[#003769] text-white rounded-3xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
        <div className="absolute -left-16 -top-16 w-36 h-36 rounded-full bg-primary/20 filter blur-2xl"></div>
        
        <div className="space-y-4 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/20 text-primary rounded-lg text-xs font-semibold uppercase tracking-wider">
            ⚡ Electrical Safety Call
          </div>
          <h3 className="font-display font-bold text-xl text-white">Experiencing flickering lights or sparking boards?</h3>
          <p className="text-xs text-gray-300 max-w-lg leading-relaxed">
            These are often active pre-warning signals of crumbling electrical wires or overloads. Avoid potential home hazards by scheduling a basic inspection with Hari today.
          </p>
        </div>

        <button
          id="blog-safety-inspect-btn"
          onClick={() => handlePageClick('contact')}
          className="px-6 py-3 bg-primary hover:bg-white text-white hover:text-dark rounded-xl font-bold text-sm shadow-xs transition-all whitespace-nowrap cursor-pointer"
        >
          Book Inspection Now
        </button>
      </div>

    </div>
  );
}
