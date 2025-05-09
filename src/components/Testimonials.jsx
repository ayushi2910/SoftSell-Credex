import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import Img1 from '../assets/1.jpg';
import Img2 from '../assets/2.jpg';
import Img3 from '../assets/3.jpg';


// Testimonial data with variety of voices
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Finance Manager",
    company: "Nexus Financial",
    avatar: Img1,
    quote: "SoftSell made the whole resale process effortless and super fast. We received the payment within 24 hours and the support team was incredibly helpful.",
    rating: 5,
    badge: "Verified Seller"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "IT Lead",
    company: "TechVision Labs",
    avatar: Img2,
    quote: "The integration was seamless and their security protocols exceeded our expectations. Our team saw productivity gains of 30% in the first month alone.",
    rating: 5,
    badge: "5-Star Experience"
  },
  {
    id: 3,
    name: "Alex Rivera",
    role: "Solo Founder",
    company: "Bright Innovations",
    avatar: Img3,
    quote: "As a small business owner, I needed a solution that was both powerful and cost-effective. SoftSell delivered exactly that with personalized onboarding.",
    rating: 4,
    badge: "Verified Seller"
  }
];



// Highlight keywords in testimonial text
function highlightKeywords(text) {
  return text.split(' ').map((word, index) => {
    const isKeyword = 
      word === 'effortless' || 
      word === 'fast' || 
      word === 'seamless' || 
      word === '30%' || 
      word === 'powerful' || 
      word === 'cost-effective' || 
      word === 'personalized';
    
    if (isKeyword) {
      return <span key={index} className="font-bold text-orange-600">{word} </span>;
    }
    return <span key={index}>{word} </span>;
  });
}

// Star rating component
function StarRating({ rating }) {
  return (
    <div className="flex items-center mt-2">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// Main testimonial component
export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Auto carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  
  // Handle manual navigation
  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  // Swipe functionality for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      handleNext();
    }
    
    if (touchStart - touchEnd < -150) {
      handlePrev();
    }
  };
  
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        
        {/* Testimonial carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="relative p-8 bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Quote mark styling */}
                    <Quote 
                      size={120}
                      className="absolute top-2 right-2 text-blue-100 opacity-50"
                    />
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                      {testimonial.badge}
                    </div>
                    
                    <div className="flex items-start space-x-4 relative z-10">
                      {/* Profile picture */}
                      <div className="flex-shrink-0">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-16 h-16 rounded-full object-cover border-2 border-red-500"
                        />
                      </div>
                      
                      <div className="flex-1">
                        {/* Name, role, company */}
                        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                        
                        {/* Star rating */}
                        <StarRating rating={testimonial.rating} />
                        
                        {/* Testimonial quote with highlighted keywords */}
                        <blockquote className="mt-4 text-gray-800">
                          "{highlightKeywords(testimonial.quote)}"
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-center mt-6 space-x-4">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        
        
      </div>
    </section>
  );
}