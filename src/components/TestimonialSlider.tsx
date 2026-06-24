import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Auto slide every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="testimonial-slider-container" className="relative max-w-4xl mx-auto px-4 py-8">
      <div className="overflow-hidden relative rounded-2xl bg-white p-8 md:p-12 shadow-sm border border-gray-100 glow-effect min-h-[320px] flex flex-col justify-between">
        <Quote className="absolute right-8 top-8 w-16 h-16 text-gray-100 rotate-180" />

        {/* Testimonial Active Slide */}
        <div id="testimonial-active-slide" className="relative z-10">
          <div className="flex items-center gap-1 mb-4 text-secondary">
            {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>

          <p className="text-gray-700 italic text-base md:text-lg leading-relaxed mb-6">
            "{TESTIMONIALS[currentIndex].comment}"
          </p>

          <div className="flex items-center justify-between border-t border-gray-50 pt-6">
            <div>
              <h4 className="font-display font-bold text-dark text-lg">
                {TESTIMONIALS[currentIndex].name}
              </h4>
              <p className="text-sm text-gray-500">{TESTIMONIALS[currentIndex].location}</p>
            </div>
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider">
              {TESTIMONIALS[currentIndex].serviceUsed}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-6 mt-6">
        <button
          id="prev-testimonial-btn"
          onClick={handlePrev}
          className="flex items-center justify-center w-11 h-11 rounded-full bg-white text-dark shadow-xs border border-gray-100 hover:text-primary hover:border-primary transition-all focus:outline-none"
          title="Previous Testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Indicator Dots */}
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, index) => (
            <button
              id={`testimonial-dot-${index}`}
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                currentIndex === index ? 'w-6 bg-primary' : 'w-2.5 bg-gray-200'
              }`}
              title={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          id="next-testimonial-btn"
          onClick={handleNext}
          className="flex items-center justify-center w-11 h-11 rounded-full bg-white text-dark shadow-xs border border-gray-100 hover:text-primary hover:border-primary transition-all focus:outline-none"
          title="Next Testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
