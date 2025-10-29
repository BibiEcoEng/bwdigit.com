import React from 'react';

const TechnologyStackSection = () => {
  const technologies = [
    {
      name: 'ChatGPT',
      icon: '🤖',
      extendedDescription:
        "Leverage OpenAI's ChatGPT for advanced conversational AI solutions, custom chatbot development, and intelligent automation. We integrate ChatGPT to create personalized user experiences, automate customer support, and enhance business processes with natural language understanding.",
    },
    {
      name: 'Notion',
      icon: '📝',
      extendedDescription:
        'Create powerful workspace solutions with Notion integration. We develop custom Notion setups, automated workflows, and integrated knowledge management systems that help businesses streamline operations, improve collaboration, and maintain organized documentation.',
    },
    {
      name: 'Zapier',
      icon: '⚡',
      extendedDescription:
        'Build automated workflows that connect your favorite apps and services. Our Zapier expertise enables seamless integration between 3000+ apps, creating efficient business processes, reducing manual work, and increasing productivity through smart automation.',
    },
    {
      name: 'Airtable',
      icon: '📊',
      extendedDescription:
        'Design and implement flexible database solutions with Airtable. We create custom bases, automated workflows, and integrated systems that help businesses manage data, track projects, and streamline operations with powerful relational databases.',
    },
    {
      name: 'Canva',
      icon: '🎨',
      extendedDescription:
        'Enhance your brand presence with professional Canva design solutions. We create stunning visual content, maintain brand consistency, and develop automated design workflows for marketing materials, social media, and business presentations.',
    },
    {
      name: 'AI APIs',
      icon: '🧠',
      extendedDescription:
        'Integrate cutting-edge AI capabilities into your applications using various AI APIs. We implement machine learning, natural language processing, computer vision, and other AI technologies to create intelligent, automated solutions for your business needs.',
    },
    {
      name: 'Flutter',
      icon: '📱',
      extendedDescription:
        "Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Our Flutter expertise ensures fast development, expressive UIs, and native performance across all platforms with Google's modern development framework.",
    },
    {
      name: 'React Native',
      icon: '⚛️',
      extendedDescription:
        'Create native mobile applications using React Native framework. We develop high-performance iOS and Android apps with native capabilities, smooth animations, and excellent user experience while maintaining a single codebase.',
    },
    {
      name: 'Swift (iOS)',
      icon: '🍎',
      extendedDescription:
        "Develop powerful iOS applications using Swift, Apple's modern programming language. We create native iOS apps with optimal performance, beautiful UI/UX, and full access to the latest iOS features and hardware capabilities.",
    },
    {
      name: 'Kotlin (Android)',
      icon: '🤖',
      extendedDescription:
        'Build modern Android applications using Kotlin, the preferred language for Android development. We create robust, efficient, and feature-rich Android apps with clean architecture and material design principles.',
    },
    {
      name: 'Firebase',
      icon: '🔥',
      extendedDescription:
        "Implement scalable backend solutions with Firebase platform. We utilize Firebase's comprehensive suite of tools for authentication, real-time databases, hosting, cloud functions, and analytics to build powerful, serverless applications.",
    },
    {
      name: 'Node.js',
      icon: '🟢',
      extendedDescription:
        "Create scalable server-side applications with Node.js. We develop high-performance backend services, RESTful APIs, and real-time applications using JavaScript's powerful runtime environment and its extensive ecosystem.",
    },
    {
      name: 'Laravel',
      icon: '🔧',
      extendedDescription:
        'Build robust web applications with Laravel PHP framework. We develop secure, scalable, and maintainable applications with elegant syntax, powerful features like MVC architecture, artisan CLI, and extensive libraries.',
    },
  ];

  return (
    <section className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold text-gray-900 mb-8 capitalize'>
            Our Technology Stack
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-16'>
            We leverage cutting-edge technologies to deliver exceptional digital
            solutions
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {technologies.map((tech, index) => (
            <div
              key={index}
              className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1'
            >
              <div className='p-8'>
                <div className='flex items-center space-x-3 mb-4'>
                  <span className='text-2xl' role='img' aria-label={tech.name}>
                    {tech.icon}
                  </span>
                  <h3 className='text-xl font-bold text-gray-900 capitalize'>
                    {tech.name}
                  </h3>
                </div>
                <p className='text-gray-600 leading-relaxed'>
                  {tech.extendedDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStackSection;
