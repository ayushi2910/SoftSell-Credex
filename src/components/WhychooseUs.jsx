import { useState } from "react";
import { 
  TrendingUp, 
  Shield, 
  Clock, 
  Headphones 
} from "lucide-react";

export default function WhyChooseUs() {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const features = [
    {
      id: 1,
      title: "Maximum Value",
      description: "Our market analytics ensure top dollar for your licenses",
      icon: TrendingUp,
      color: "from-purple-100 to-pink-100",
      borderColor: "border-purple-200",
      hoverColor: "from-purple-200 to-pink-200",
      iconColor: "text-purple-500"
    },
    {
      id: 2,
      title: "Secure Process",
      description: "End-to-end encryption and compliance with all legal requirements",
      icon: Shield,
      color: "from-blue-100 to-cyan-100",
      borderColor: "border-blue-200",
      hoverColor: "from-blue-200 to-cyan-200",
      iconColor: "text-blue-500"
    },
    {
      id: 3,
      title: "Fast Turnaround",
      description: "Get paid within 48 hours of accepting our offer",
      icon: Clock,
      color: "from-green-100 to-teal-100",
      borderColor: "border-green-200",
      hoverColor: "from-green-200 to-teal-200",
      iconColor: "text-green-500"
    },
    {
      id: 4,
      title: "Expert Support",
      description: "Our specialists guide you through every step of the process",
      icon: Headphones,
      color: "from-orange-100 to-amber-100",
      borderColor: "border-orange-200",
      hoverColor: "from-orange-200 to-amber-200",
      iconColor: "text-orange-500"
    }
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
    <div className="max-w-6xl mx-auto px-4 py-16 ">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We've helped thousands of customers recover value from their unused software licenses.
          Here's why they choose us:
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((feature) => {
          const FeatureIcon = feature.icon;
          const isHovered = hoveredCard === feature.id;
          
          return (
            <div
              key={feature.id}
              className={`
                relative overflow-hidden rounded-xl p-6
                backdrop-blur-sm border shadow-lg
                transition-all duration-300 transform 
                ${isHovered ? 'scale-105 shadow-xl ' + feature.borderColor : 'border-transparent'}
                bg-gradient-to-br ${isHovered ? feature.hoverColor : feature.color}
              `}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glass Effect Overlay */}
              <div className="absolute inset-0 bg-white opacity-20 backdrop-blur-sm"></div>
              
              {/* Animated Blob in Background */}
              <div 
                className={`
                  absolute w-24 h-24 rounded-full blur-2xl opacity-30
                  transition-all duration-700 ease-in-out
                  ${feature.iconColor} mix-blend-multiply
                  ${isHovered ? 'scale-150' : 'scale-100'}
                `}
                style={{
                  top: isHovered ? '10%' : '20%',
                  left: isHovered ? '60%' : '50%',
                }}
              ></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`
                  w-12 h-12 rounded-lg flex items-center justify-center mb-4
                  transition-all duration-300
                  ${isHovered ? 'bg-white' : 'bg-white bg-opacity-50'}
                `}>
                  <FeatureIcon size={24} className={feature.iconColor} />
                </div>
                
                <h3 className="text-lg font-bold mb-2 transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-700 text-sm transition-all duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <p className="text-gray-600 mb-6">
          Let's get started — it only takes 2 minutes.
        </p>
        <button 
          className="
            px-8 py-3 rounded-lg font-medium text-white
            bg-gradient-to-r from-orange-500 to-red-600
            hover:from-orange-600 hover:to-yellow-700
            transition-all duration-300 transform hover:scale-105
            shadow-lg hover:shadow-xl
          "
        >
          Get Started Now
        </button>
      </div>
    </div>
    </section>
  );
}