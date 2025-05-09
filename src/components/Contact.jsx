import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Check, X, Send, Linkedin, Twitter, Instagram, ChevronRight } from 'lucide-react';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', or 'error'
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm();
  
  const onSubmit = (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form data:', data);
      setIsSubmitting(false);
      setSubmitStatus('success');
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };
  
  const licenseOptions = ["Enterprise", "Professional", "Standard", "Free Trial"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-800 to-red-400 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-between opacity-100">
      <div className="max-w-4xl mx-auto w-full ">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Get In Touch</h1>
          <p className="text-blue-200">We'd love to hear from you. Fill out the form below.</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.2, duration: 0.6 }}
          className="backdrop-blur-lg bg-white/10 rounded-xl shadow-2xl overflow-hidden"
        >
          {submitStatus === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="py-16 px-8 text-center"
            >
              <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <Check size={32} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
              <p className="text-blue-200 mb-8">Thank you for reaching out. We'll get back to you shortly.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSubmitStatus(null)}
                className="px-6 py-3 bg-red-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-blue-500/50"
              >
                Send Another Message
              </motion.button>
            </motion.div>
          ) : (
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-blue-200 mb-2 font-medium">Name</label>
                  <motion.div 
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className={`w-full p-3 bg-white/5 border ${errors.name ? 'border-red-400' : 'border-blue-300/30'} rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white transition-all`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <X size={16} className="mr-1" /> {errors.name.message}
                      </p>
                    )}
                  </motion.div>
                </div>
                
                <div>
                  <label className="block text-blue-200 mb-2 font-medium">Email</label>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className={`w-full p-3 bg-white/5 border ${errors.email ? 'border-red-400' : 'border-blue-300/30'} rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white transition-all`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <X size={16} className="mr-1" /> {errors.email.message}
                      </p>
                    )}
                  </motion.div>
                </div>
                
                <div>
                  <label className="block text-blue-200 mb-2 font-medium">Company</label>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <input
                      {...register('company')}
                      className="w-full p-3 bg-white/5 border border-blue-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white transition-all"
                      placeholder="Your company (optional)"
                    />
                  </motion.div>
                </div>
                
                <div>
                  <label className="block text-blue-200 mb-2 font-medium">License Type</label>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <select
                      {...register('licenseType', { required: 'Please select a license type' })}
                      className={`w-full p-3 bg-white/5 border ${errors.licenseType ? 'border-red-400' : 'border-blue-300/30'} rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white transition-all appearance-none cursor-pointer`}
                      defaultValue=""
                    >
                      <option value="" disabled className="text-gray-400">Select a license type</option>
                      {licenseOptions.map(option => (
                        <option key={option} value={option} className="bg-orange-400 text-white">{option}</option>
                      ))}
                    </select>
                    {errors.licenseType && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <X size={16} className="mr-1" /> {errors.licenseType.message}
                      </p>
                    )}
                  </motion.div>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-blue-200 mb-2 font-medium">Message</label>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={5}
                    className={`w-full p-3 bg-white/5 border ${errors.message ? 'border-red-400' : 'border-blue-300/30'} rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white transition-all`}
                    placeholder="How can we help you?"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <X size={16} className="mr-1" /> {errors.message.message}
                    </p>
                  )}
                </motion.div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                className="w-full py-4 bg-white text-orange-600 rounded-lg font-medium transition-all shadow-lg hover:shadow-yellow-500/50 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    
        {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-4xl mx-auto w-full mt-8 backdrop-blur-lg bg-white/5 rounded-xl p-4 text-center"
      >
        <p className="text-blue-200">© {new Date().getFullYear()} SoftShell. All rights reserved.</p>
        <div className="flex justify-center mt-2 space-x-4">

        </div>
      </motion.footer>
    </div>
  );
};


export default ContactForm;