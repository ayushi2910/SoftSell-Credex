import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('how-it-works');
  const [scrolled, setScrolled] = useState(false);

  // Handle scrolling effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, you would apply the theme to the document here
    document.documentElement.classList.toggle('dark');
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //link click handler
  const handleLinkClick = (link) => {
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(link);
      setIsMenuOpen(false);
    }
  };
  

  return (
    <div className={`${isDarkMode ? 'dark' : ''} `} >
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? `${isDarkMode 
                ? 'bg-gray-900/80 shadow-lg shadow-gray-800/10' 
                : 'bg-white/80 shadow-lg shadow-gray-200/20'}`
            : `${isDarkMode 
                ? 'bg-transparent' 
                : 'bg-transparent'}`
        } backdrop-blur-md bg-white`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">SoftSell</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {[
                  { name: 'How It Works', id: 'how-it-works' },
                  { name: 'Why Us', id: 'why-us' },
                  { name: 'Testimonials', id: 'testimonials' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`${
                      activeLink === item.id
                        ? `font-medium ${isDarkMode ? 'text-blue-400' : 'text-orange-600'}`
                        : `${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`
                    } px-3 py-2 text-sm rounded-md relative transition duration-300 ease-in-out`}
                  >
                    {item.name}
                    {activeLink === item.id && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-full" />
                    )}
                  </button>
                ))}
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Contact
                </button>
                
                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className={`rounded-full p-2 transition-colors duration-200 ${
                    isDarkMode 
                      ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                  }`}
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleTheme}
                className={`mr-4 rounded-full p-2 transition-colors duration-200 ${
                  isDarkMode 
                    ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                }`}
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-md ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 transition-all duration-300 ${
            isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'
          } backdrop-blur-md border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            {[
              { name: 'How It Works', id: 'how-it-works' },
              { name: 'Why Us', id: 'why-us' },
              { name: 'Testimonials', id: 'testimonials' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activeLink === item.id
                    ? `${isDarkMode ? 'bg-gray-800 text-orange-400' : 'bg-blue-50 text-orange-600'}`
                    : `${isDarkMode ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full text-left block bg-gradient-to-r from-orange-300 to-red-300 text-white px-3 py-2 rounded-md text-base font-medium mt-4"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
      
      {/* Page content placeholder (for demo purposes) 
      <div className={`pt-24 px-6 min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Welcome to SoftShell</h1>
          <p className="mb-4">This is a demonstration of the navbar component. Scroll down to see the navbar's sticky behavior.</p>
          <div className="h-screen bg-gradient-to-b from-transparent to-blue-50 dark:to-blue-900/10"></div>
        </div>
      </div>*/}
    </div>
  );
}