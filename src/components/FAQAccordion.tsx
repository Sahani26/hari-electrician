import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq-accordion" className="space-y-4 max-w-3xl mx-auto">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            id={`faq-item-${index}`}
            key={index}
            className="bg-white rounded-xl shadow-xs border border-gray-100 overflow-hidden transition-all duration-200"
          >
            <button
              id={`faq-trigger-${index}`}
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-5 text-left font-medium text-dark hover:text-primary transition-colors focus:outline-none"
            >
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="font-display font-semibold text-gray-900 md:text-lg">{faq.question}</span>
              </div>
              <span className="ml-4 shrink-0 text-gray-400">
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </span>
            </button>
            
            {/* Content wrapper with smooth height transition */}
            <div
              id={`faq-content-${index}`}
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 border-t border-gray-50' : 'max-h-0'
              }`}
            >
              <div className="p-5 text-gray-600 bg-gray-50/50 leading-relaxed text-sm md:text-base">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
