import React from 'react';
import { BookOpen, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: "Security Manager, Reviewer & Approver",
      description: "Led security governance and approval processes for enterprise infrastructure changes"
    },
    {
      title: "Security Architect, Designer & Implementer",
      description: "Architected and deployed comprehensive security solutions across multi-cloud environments"
    },
    {
      title: "Open Source SIEM and SOAR Design & Development",
      description: "Built custom security orchestration solutions using open-source technologies"
    },
    {
      title: "Azure Sentinel/SOAR Implementation",
      description: "Deployed enterprise-grade Microsoft Sentinel with automated response workflows"
    },
    {
      title: "Azure & AWS Security Architecture",
      description: "Designed security controls and next-gen firewall implementations for cloud infrastructures"
    },
    {
      title: "Zero Touch Vulnerability Management",
      description: "Developed home-grown VM automation tool for continuous security assessment"
    },
    {
      title: "CSPM Implementation",
      description: "Deployed Cloud Security Posture Management across multi-cloud environments"
    },
    {
      title: "Firewall Assurance and Automation",
      description: "Automated firewall policy management and compliance verification"
    },
    {
      title: "Cloud Security Assessment & ISO 27001",
      description: "Conducted comprehensive security assessments and ISO 27001 readiness checks"
    },
    {
      title: "Azure OpenAI Deployment (Terraform)",
      description: "Infrastructure as Code deployment of AI workloads with security controls"
    },
    {
      title: "Security Automation Suite",
      description: "Integrated CrowdStrike XDR, Defender, Zscaler, Prisma SASE, AWS automation"
    },
    {
      title: "Zscaler Zero Trust Network Access",
      description: "Implemented enterprise-wide ZTNA solution with secure access policies"
    },
    {
      title: "Palo Alto XSOAR Security Automation",
      description: "Custom workflow design and playbook development for incident orchestration"
    },
    {
      title: "DevSecOps Pipeline Integration",
      description: "Implemented static/dynamic code analysis, vulnerability scanning, and container security"
    },
    {
      title: "Terraform Infrastructure Automation",
      description: "Policy and infrastructure deployment via Infrastructure as Code frameworks"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white py-20">
      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="text-center mb-16">
          <BookOpen className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Key Projects & Roles</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Delivered enterprise-scale security solutions across diverse environments and technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:transform hover:scale-105">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-900/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-400 font-bold text-sm">{idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-blue-400">{project.title}</h3>
              </div>
              <p className="text-slate-400 text-sm ml-11">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
