import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior DevOps Engineer",
      company: "Oxagile",
      period: "Mar 2023 – Present",
      location: "Remote",
      achievements: [
        "Designed enterprise-scale CI/CD pipelines with Jenkins, GitLab CI/CD, Spinnaker, and ArgoCD, accelerating release cycles by 70%",
        "Migrated core services from monolithic to microservices, reducing deployment risk and enabling faster releases",
        "Implemented GitOps workflows with Terraform and Pulumi, ensuring environment consistency and eliminating drift",
        "Built observability dashboards with OpenTelemetry, Grafana, and ELK to track SLOs and SLIs",
        "Collaborated with remote global teams across multiple time zones for efficient delivery",
        "Automated compliance checks in CI/CD pipelines, supporting SOC2/ISO certifications"
      ],
      color: "bg-blue-500"
    },
    {
      title: "SRE – Infrastructure & Cloud Reliability",
      company: "CircleCI",
      period: "Mar 2020 – Feb 2023",
      location: "Remote",
      achievements: [
        "Architected and managed multi-cloud infrastructure (AWS, Azure, GCP) with Kubernetes and IaC, ensuring 99.99% uptime",
        "Automated CI/CD pipelines with GitHub Actions and ArgoCD, reducing deployment time from 24h to 2h and increasing release frequency by 60%",
        "Integrated DevSecOps tools (Snyk, Trivy, Vault), reducing vulnerabilities by 35%",
        "Built observability platforms (Prometheus, Grafana, ELK, Datadog), reducing MTTR by 40%",
        "Implemented chaos engineering and disaster recovery drills, reducing downtime by 25%",
        "Mentored a distributed team of 8 engineers in IaC, monitoring, and automation best practices",
        "Optimized cloud spend, saving $100K annually through rightsizing and scaling strategies"
      ],
      color: "bg-emerald-500"
    },
    {
      title: "DevOps Engineer",
      company: "Contino",
      period: "Jan 2018 – Feb 2020",
      location: "Remote",
      achievements: [
        "Automated infrastructure with Terraform, Ansible, and Puppet, reducing manual effort by 70%",
        "Deployed Kubernetes clusters for large-scale containerized workloads",
        "Built reusable Terraform modules and Helm charts for standardized deployments",
        "Developed DevOps tooling in Python and Go to streamline workflows",
        "Established monitoring with Prometheus, ELK, and Grafana for production systems",
        "Participated in 24/7 on-call rotations, conducting post-incident RCAs",
        "Supported DevOps culture adoption through training on CI/CD and IaC best practices"
      ],
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-emerald-600 font-semibold mb-4">
              🌎 7+ Years of Remote Work Experience Across the USA
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              7+ years of experience in DevOps, SRE, and cloud infrastructure across leading technology companies
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div className={`w-4 h-4 rounded-full ${exp.color} mr-3`}></div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          {exp.title}
                        </h3>
                      </div>
                      <h4 className="text-xl text-blue-600 font-semibold mb-3">
                        {exp.company}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div
                        key={achIndex}
                        className="flex items-start group hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200"
                      >
                        <ChevronRight className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200" />
                        <p className="text-gray-700 leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;