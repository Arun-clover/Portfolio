import { Heart,Linkedin, Mail, ArrowUp } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Portfolio
            </div>
            <p className="text-slate-400">
              Building the future, one line of code at a time.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/Arun-clover"
              className="p-2 text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/arun-kumar-k-284528274/"
              className="p-2 text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:arunkumarkarna.2104@gmail.com"
              className="p-2 text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0 flex items-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by John Doe
          </p>
          
          <button
            onClick={scrollToTop}
            className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;