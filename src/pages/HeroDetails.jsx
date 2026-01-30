import React from 'react';
import { UserCheck, Globe, Users } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: <UserCheck size={32} strokeWidth={2} />,
      title: '24/7 Support',
      description: 'Lorem ipsum dolor sit amet conse adipiscing elit.'
    },
    {
      id: 2,
      icon: <Globe size={32} strokeWidth={2} />,
      title: 'Take Ownership',
      description: 'Lorem ipsum dolor sit amet conse adipiscing elit.'
    },
    {
      id: 3,
      icon: <Users size={32} strokeWidth={2} />,
      title: 'Team Work',
      description: 'Lorem ipsum dolor sit amet conse adipiscing elit.'
    }
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-start gap-6">
              
              {/* Icon Circle */}
              <div className="flex-shrink-0 w-20 h-20 bg-[#000080] rounded-full flex items-center justify-center text-white shadow-lg">
                {feature.icon}
              </div>

              {/* Text Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
