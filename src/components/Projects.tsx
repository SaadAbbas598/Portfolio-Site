import React from 'react';
import { ExternalLink, Github, Cloud, Server, Shield, Monitor, GitBranch, Container } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Multi-Cloud Infrastructure Platform",
      description: "Designed and implemented a comprehensive multi-cloud infrastructure platform spanning AWS, Azure, and GCP with automated failover and disaster recovery capabilities.",
      technologies: ["Terraform", "Kubernetes", "AWS", "Azure", "GCP", "ArgoCD"],
      icon: <Cloud className="w-8 h-8 text-emerald-600" />,
      achievements: [
        "99.99% uptime across all environments",
        "40% reduction in infrastructure costs",
        "Automated disaster recovery with <5min RTO"
      ],
      category: "Infrastructure"
    },
    {
      title: "Enterprise CI/CD Pipeline Automation",
      description: "Built enterprise-scale CI/CD pipelines with Jenkins, GitLab CI/CD, and Spinnaker, implementing GitOps workflows and automated compliance checks.",
      technologies: ["Jenkins", "GitLab CI/CD", "Spinnaker", "ArgoCD", "Terraform", "Vault"],
      icon: <GitBranch className="w-8 h-8 text-purple-600" />,
      achievements: [
        "70% faster release cycles",
        "Automated SOC2/ISO compliance checks",
        "Zero-downtime deployments"
      ],
      category: "DevOps"
    },
    {
      title: "Kubernetes Orchestration at Scale",
      description: "Deployed and managed large-scale Kubernetes clusters across EKS, AKS, and GKE with service mesh, autoscaling, and comprehensive monitoring.",
      technologies: ["Kubernetes", "EKS", "AKS", "GKE", "Istio", "Helm", "Prometheus"],
      icon: <Container className="w-8 h-8 text-blue-600" />,
      achievements: [
        "Managed 500+ microservices",
        "Implemented auto-scaling for cost optimization",
        "Service mesh for enhanced security"
      ],
      category: "Container Orchestration"
    },
    {
      title: "DevSecOps Security Integration",
      description: "Embedded security tools and practices throughout the DevOps pipeline, implementing automated vulnerability scanning and compliance monitoring.",
      technologies: ["Vault", "Trivy", "Snyk", "OPA", "Kyverno", "SAST", "DAST"],
      icon: <Shield className="w-8 h-8 text-red-600" />,
      achievements: [
        "35% reduction in security vulnerabilities",
        "Automated security policy enforcement",
        "Real-time compliance monitoring"
      ],
      category: "Security"
    },
    {
      title: "Observability & Monitoring Platform",
      description: "Built comprehensive observability platform with Prometheus, Grafana, ELK stack, and OpenTelemetry for full-stack monitoring and alerting.",
      technologies: ["Prometheus", "Grafana", "ELK Stack", "OpenTelemetry", "Datadog", "Jaeger"],
      icon: <Monitor className="w-8 h-8 text-orange-600" />,
      achievements: [
        "40% reduction in MTTR",
        "Proactive incident detection",
        "Custom SLO/SLI dashboards"
      ],
      category: "Monitoring"
    },
    {
      title: "Infrastructure Cost Optimization",
      description: "Implemented cloud cost optimization strategies including rightsizing, auto-scaling, and resource scheduling to achieve significant cost savings.",
      technologies: ["AWS Cost Explorer", "Azure Cost Management", "GCP Billing", "Terraform", "Python"],
      icon: <Server className="w-8 h-8 text-green-600" />,
      achievements: [
        "$100K+ annual cost savings",
        "30% infrastructure cost reduction",
        "Automated resource optimization"
      ],
      category: "Cost Optimization"
    }
  ];

  const categories = ["All", "Infrastructure", "DevOps", "Container Orchestration", "Security", "Monitoring", "Cost Optimization"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container px-6 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">
              Featured Projects
            </h2>
            <div className="w-24 h-1 mx-auto mb-8 bg-emerald-600"></div>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Showcasing enterprise-scale infrastructure projects and DevOps implementations 
              that have driven measurable business outcomes
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="overflow-hidden transition-all duration-300 transform bg-white shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-2 group"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="mr-4 transition-transform duration-300 group-hover:scale-110">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-bold text-gray-800">
                        {project.title}
                      </h3>
                      <span className="px-3 py-1 text-sm font-medium rounded-full text-emerald-600 bg-emerald-50">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <p className="mb-6 leading-relaxed text-gray-600">
                    {project.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="mb-3 text-sm font-semibold text-gray-800">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 bg-gray-100 rounded-full hover:bg-emerald-100 hover:text-emerald-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex items-center justify-center flex-1 px-4 py-2 font-medium text-white transition-colors duration-200 rounded-lg bg-emerald-600 hover:bg-emerald-700 group">
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="max-w-2xl p-8 mx-auto bg-white shadow-lg rounded-2xl">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">
                Ready to Transform Your Infrastructure?
              </h3>
              <p className="mb-6 text-gray-600">
                Let's discuss how these proven strategies and implementations can benefit your organization.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 font-semibold text-white transition-colors duration-200 rounded-lg bg-emerald-600 hover:bg-emerald-700"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;