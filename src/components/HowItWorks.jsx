import { useState } from "react";
import { FileText, BarChart2, Wallet } from "lucide-react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(null);
  
  const steps = [
    {
      id: 1,
      title: "Upload License",
      icon: FileText,
      description: "Submit your unused software license details through our secure portal",
      benefit: "Drag, drop, and we take care of the rest."
    },
    {
      id: 2,
      title: "Get Valuation",
      icon: BarChart2,
      description: "Receive a competitive market valuation based on current demand and license type",
      benefit: "Instant estimate using our AI-based tool."
    },
    {
      id: 3,
      title: "Get Paid",
      icon: Wallet,
      description: "Accept our offer and get paid quickly through your preferred payment method",
      benefit: "Direct deposit in under 24 hours."
    }
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-b from-red-50 to-white">
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our simple three-step process makes selling your unused software licenses quick and easy.
        </p>
      </div>

      {/* Desktop View - Horizontal */}
      <div className="hidden md:flex justify-between items-start relative mb-12">
        {/* Progress Line */}
        <div className="absolute top-12 left-0 w-full h-1 bg-gray-200 z-0">
          <div className="h-full bg-yellow-500 w-0 transition-all duration-1000" 
               style={{ width: activeStep ? `${((activeStep - 1) / 2) * 100}%` : "0%" }}></div>
        </div>
        
        {steps.map((step, index) => {
          const StepIcon = step.icon;
          return (
            <div 
              key={step.id}
              className="z-10 w-1/3 px-4 flex flex-col items-center relative group"
              onMouseEnter={() => setActiveStep(step.id)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Step Number & Icon */}
              <div className={`flex items-center justify-center w-24 h-24 rounded-full mb-4 transition-all duration-300 ${
                activeStep === step.id ? "bg-orange-400 text-white scale-110" : "bg-gray-100"
              }`}>
                <div className="text-center">
                  <div className="flex justify-center">
                    <StepIcon size={28} className={activeStep === step.id ? "text-white" : "text-orange-400"} />
                  </div>
                  <div className={`font-bold mt-1 ${activeStep === step.id ? "text-white" : "text-gray-700"}`}>
                    Step {step.id}
                  </div>
                </div>
              </div>
              
              {/* Step Content */}
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-center text-gray-600 mb-3">{step.description}</p>
              
              {/* Preview on Hover */}
              <div className={`bg-white shadow-lg rounded-lg p-4 w-full absolute top-32 mt-4 opacity-0 transition-opacity duration-300 z-20 ${
                activeStep === step.id ? "opacity-100" : ""
              }`}>
                <p className="text-md font-medium text-center text-orange-600">{step.benefit}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile View - Vertical */}
      <div className="md:hidden space-y-8">
        {steps.map((step, index) => {
          const StepIcon = step.icon;
          return (
            <div key={step.id} className="flex items-start">
              {/* Step Number & Icon */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <div>
                  <StepIcon size={24} className="text-orange-500 mx-auto" />
                  <div className="text-xs font-bold text-blue-500 mt-1">{step.id}</div>
                </div>
              </div>
              
              {/* Step Content */}
              <div className="flex-grow">
                <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                <p className="text-xs font-medium text-orange-600">{step.benefit}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust Badge */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span className="font-medium">100% secure transactions</span>
        </div>
        <div className="inline-flex items-center bg-blue-50 text-orange-700 px-4 py-2 rounded-full ml-4">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span className="font-medium">Fast payouts within 24 hours</span>
        </div>
      </div>
    </div>
    </section>
  );
}