import React from 'react';
import { Award, TrendingUp, Shield, Users } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
      title: "40% Faster Releases",
      description: "Accelerated release cycles through CI/CD automation"
    },
    {
      icon: <Shield className="w-8 h-8 text-slate-600" />,
      title: "99.99% Uptime",
      description: "Maintained enterprise-grade system reliability"
    },
    {
      icon: <Award className="w-8 h-8 text-indigo-600" />,
      title: "30% Cost Savings",
      description: "Optimized cloud infrastructure and automation"
    },
    {
      icon: <Users className="w-8 h-8 text-amber-600" />,
      title: "Team Leadership",
      description: "Led and mentored distributed engineering teams"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-emerald-600 font-semibold mb-4">
              🌎 Remote Work Available Across the USA
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Strategic and results-driven Senior DevOps Engineer with a passion for building 
                reliable, resilient, and future-ready infrastructure. I specialize in cloud-native 
                solutions, automation, and creating platforms that enable operational excellence 
                and innovation at scale.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                My expertise spans across multi-cloud environments (AWS, Azure, GCP), with deep 
                knowledge in Kubernetes orchestration, Infrastructure as Code, and CI/CD automation. 
                I'm particularly skilled at embedding security into DevOps workflows to meet 
                SOC2/ISO compliance requirements.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                As a technical leader, I've successfully guided globally distributed teams, 
                fostering collaboration and driving measurable outcomes. I believe in the power 
                of automation, monitoring, and continuous improvement to create systems that 
                not only perform exceptionally but also empower teams to innovate fearlessly.
              </p>

              <div className="pt-6">
                <a
                  href="/Remy G.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                >
                  Download Full Resume
                </a>
              </div>
            </div>

            {/* Right Column - Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;