import React from 'react';
import { 
  Cloud, 
  Code, 
  Server, 
  Shield, 
  Monitor, 
  GitBranch, 
  Container,
  Users
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Architecture & Scalability",
      icon: <Cloud className="w-8 h-8 text-slate-600" />,
      description: "Designing and managing secure, highly available multi-cloud infrastructures across AWS, Azure, and GCP",
      technologies: ["AWS", "Azure", "GCP", "Multi-Cloud", "High Availability", "Scalability"]
    },
    {
      title: "Infrastructure as Code (IaC)",
      icon: <Code className="w-8 h-8 text-emerald-600" />,
      description: "Expertise in Terraform, Pulumi, and Ansible for automating infrastructure provisioning and ensuring consistency",
      technologies: ["Terraform", "Pulumi", "Ansible", "Puppet", "CloudFormation", "ARM Templates"]
    },
    {
      title: "CI/CD Engineering",
      icon: <GitBranch className="w-8 h-8 text-indigo-600" />,
      description: "Building and securing pipelines with Jenkins, GitHub Actions, and ArgoCD, reducing release times and improving software quality",
      technologies: ["Jenkins", "GitHub Actions", "GitLab CI/CD", "ArgoCD", "Spinnaker", "GitOps"]
    },
    {
      title: "Kubernetes Orchestration",
      icon: <Container className="w-8 h-8 text-amber-600" />,
      description: "Deploying and scaling Kubernetes clusters (EKS, AKS, GKE) with service mesh and autoscaling strategies",
      technologies: ["Kubernetes", "EKS", "AKS", "GKE", "Helm", "Service Mesh", "Istio"]
    },
    {
      title: "Monitoring & Incident Response",
      icon: <Monitor className="w-8 h-8 text-rose-600" />,
      description: "Implementing observability with Prometheus, Grafana, ELK, and OpenTelemetry to reduce incident resolution time",
      technologies: ["Prometheus", "Grafana", "ELK Stack", "OpenTelemetry", "Datadog", "New Relic"]
    },
    {
      title: "DevSecOps & Compliance",
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      description: "Embedding security tools (Vault, Trivy, Snyk) and automating compliance with OPA and Kyverno",
      technologies: ["Vault", "Trivy", "Snyk", "OPA", "Kyverno", "SOC2", "ISO Compliance"]
    },
    {
      title: "Programming & Scripting",
      icon: <Server className="w-8 h-8 text-cyan-600" />,
      description: "Proficient in Python, Go, Java, and Bash for automation, API development, and custom DevOps tooling",
      technologies: ["Python", "Go", "Java", "Bash", "PowerShell", "API Development"]
    },
    {
      title: "Technical Leadership",
      icon: <Users className="w-8 h-8 text-violet-600" />,
      description: "Leading remote teams, mentoring engineers, and fostering collaboration using Agile and remote-first practices",
      technologies: ["Team Leadership", "Mentoring", "Agile", "Remote Teams", "Cross-functional Collaboration"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Core Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-emerald-600 font-semibold mb-4">
              🌎 Expertise Available Remotely Across the USA
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive expertise across the entire DevOps and cloud infrastructure ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="flex items-start mb-6">
                  <div className="mr-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200 hover:border-emerald-300 hover:text-emerald-600 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-emerald-50 to-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Education</h3>
              <p className="text-lg text-gray-700">
                <strong>Bachelor of Science in Computer Science</strong>
              </p>
              <p className="text-gray-600 mt-2">
                Strong foundation in computer science principles, algorithms, and software engineering
              </p>
              <div className="mt-6 inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full">
                <span className="font-medium">🌎 Available for Remote Opportunities Nationwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;