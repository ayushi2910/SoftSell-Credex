import { useState, useEffect } from 'react';
import { ChevronRight, Check, BarChart2, RefreshCw, Shield } from 'lucide-react';

// Typing effect component
const TypeWriter = () => {
  const phrases = [
    "Streamline Your Software Costs Today",
    "Got Extra Licenses? Let’s Turn Them into Cash.",
    "Unlock the Value of Unused Software Licenses"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("typing"); // 'typing' | 'pause' | 'erasing'

  useEffect(() => {
    let charIndex = text.length;
    const currentPhrase = phrases[index];

    let interval;

    if (phase === "typing") {
      interval = setInterval(() => {
        if (charIndex < currentPhrase.length) {
          setText(currentPhrase.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(interval);
          setPhase("pause");
        }
      }, 100);
    } else if (phase === "erasing") {
      interval = setInterval(() => {
        if (charIndex > 0) {
          setText(currentPhrase.slice(0, charIndex - 1));
          charIndex--;
        } else {
          clearInterval(interval);
          setIndex((prev) => (prev + 1) % phrases.length);
          setPhase("typing");
        }
      }, 50);
    } else if (phase === "pause") {
      const pause = setTimeout(() => {
        setPhase("erasing");
      }, 1500);
      return () => clearTimeout(pause);
    }

    return () => clearInterval(interval);
  }, [text, phase, index]);

  return (
    <span className="text-white">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Fade-in animation component
const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {children}
    </div>
  );
};

// Company logos
const CompanyLogos = () => {
  const logos = [
    { name: "TechCorp", icon: <BarChart2 className="text-gray-500" size={20} /> },
    { name: "DataSoft", icon: <RefreshCw className="text-gray-500" size={20} /> },
    { name: "SecureNet", icon: <Shield className="text-gray-500" size={20} /> },
    { name: "CloudPeak", icon: <BarChart2 className="text-gray-500" size={20} /> },
    { name: "DigiFlow", icon: <RefreshCw className="text-gray-500" size={20} /> }
  ];
  
  return (
    <div className="flex items-center justify-center space-x-6">
      {logos.map((logo, index) => (
        <div key={index} className="flex items-center">
          {logo.icon}
          <span className="ml-1 text-xs text-gray-500">{logo.name}</span>
        </div>
      ))}
    </div>
  );
};

// Main hero component
export default function HeroSection() {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-100 z-0 ">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Content container */}
      <div className="relative container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center z-10">
        {/* Left column: Text content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <TypeWriter />
            </h1>
          </FadeIn>

          
          <FadeIn delay={300}>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Transform idle software licenses into liquid assets. Our marketplace connects buyers with premium discounted licenses while helping sellers maximize ROI.
            </p>
          </FadeIn>
          
          <FadeIn delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                className={`px-8 py-4 bg-orange-500 hover:to-yellow-700 text-white rounded-lg font-medium transition-all duration-300 transform ${isHovering ? 'scale-105 shadow-lg' : 'shadow-md'}`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <span className="flex items-center">
                  Get Started <ChevronRight className="ml-2" size={20} />
                </span>
              </button>
              
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-900 transition-colors duration-300">
                Sell My Licenses
              </button>
            </div>
          </FadeIn>
          
          <FadeIn delay={900}>
            <div className="mt-12">
              <p className="text-blue-200 mb-4 flex items-center justify-center lg:justify-start">
                <Check size={20} className="mr-2" /> Trusted by 200+ companies worldwide
              </p>
              <CompanyLogos />
            </div>
          </FadeIn>
        </div>
        
        {/* Right column: Illustration */}
        <div className="w-full lg:w-1/2">
          <FadeIn delay={600}>
            <div className="relative">
              {/* Dashboard preview illustration */}
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-white border-opacity-20 transform hover:scale-105 transition-transform duration-300">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-24 bg-blue-200 bg-opacity-20 rounded"></div>
                    <div className="h-4 w-4 bg-blue-200 bg-opacity-20 rounded-full"></div>
                  </div>
                </div>
                
                {/* Dashboard content */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-4 flex flex-col justify-between">
                    <span className="text-xs text-blue-100">Total Sales</span>
                    <span className="text-xl font-bold text-white">$48,295</span>
                    <div className="w-full h-1 bg-white bg-opacity-20 rounded-full">
                      <div className="w-3/4 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg p-4 flex flex-col justify-between">
                    <span className="text-xs text-purple-100">Licenses Sold</span>
                    <span className="text-xl font-bold text-white">287</span>
                    <div className="w-full h-1 bg-white bg-opacity-20 rounded-full">
                      <div className="w-2/3 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* License list */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white bg-opacity-10 p-3 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">A</div>
                      <div className="ml-3">
                        <div className="text-white text-sm font-medium">Adobe Creative Cloud</div>
                        <div className="text-blue-200 text-xs">Enterprise License</div>
                      </div>
                    </div>
                    <div className="text-green-300 font-medium">$389</div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-white bg-opacity-10 p-3 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">M</div>
                      <div className="ml-3">
                        <div className="text-white text-sm font-medium">Microsoft 365</div>
                        <div className="text-blue-200 text-xs">Business Premium</div>
                      </div>
                    </div>
                    <div className="text-green-300 font-medium">$129</div>
                  </div>
                  
                  <div className="flex items-center justify-between bg-white bg-opacity-10 p-3 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">S</div>
                      <div className="ml-3">
                        <div className="text-white text-sm font-medium">Salesforce</div>
                        <div className="text-blue-200 text-xs">Enterprise Edition</div>
                      </div>
                    </div>
                    <div className="text-green-300 font-medium">$549</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}