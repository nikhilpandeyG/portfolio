import React from 'react';
import { Cloud, Shield, Terminal, Server, Code, Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Expertise = () => {
  const skills = [
    {
      category: "Enterprise & Cloud Security",
      icon: <Cloud className="w-6 h-6 text-blue-400" />,
      items: ["Microsoft Azure", "AWS", "Google Cloud", "Oracle Cloud", "Kubernetes", "Wiz", "Prisma Cloud", "CloudGuard", "AWS Security Hub", "Azure Security Center"]
    },
    {
      category: "AI Security & GenAI Governance",
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      items: ["ISO/IEC 42001 AI Management Systems", "OWASP LLM Top 10", "NIST AI RMF", "LLM Threat Modelling", "Adversarial ML Defense", "Model Integrity Checks", "Prompt-Injection Controls", "AI Model Access Governance"]
    },
    {
      category: "Cyber Defense",
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      items: ["Zero Trust Network Access", "SOAR", "SIEM (Sentinel, QRadar, Securonix)", "XDR", "AIOps", "Vulnerability Management (Qualys, Tenable, Rapid7)", "Endpoint Protection (CrowdStrike, Defender)"]
    },
    {
      category: "Network Security",
      icon: <Server className="w-6 h-6 text-blue-400" />,
      items: ["Palo Alto Firewalls", "Cisco ASA", "Fortinet", "Barracuda", "Azure Firewall", "F5 Big-IP ASM", "WAN Optimization", "Routing & Switching"]
    },
    {
      category: "Automation & DevSecOps",
      icon: <Terminal className="w-6 h-6 text-blue-400" />,
      items: ["Terraform (IaaC)", "Python", "Shell Scripting", "GitLab CI/CD", "Logic Apps", "XSOAR Playbooks", "KQL Analytics", "SAST", "DAST", "SCA", "IaC Scanning", "Ansible"]
    },
    {
      category: "GRC & Compliance",
      icon: <Lock className="w-6 h-6 text-blue-400" />,
      items: ["Cloud Security Assessment", "Enterprise Security & Gap Assessment", "ISO 27001 Readiness Check", "SOC2", "GDPR", "CIS Benchmarks", "Security Auditing", "Compliance Frameworks"]
    },
    {
      category: "Security Tools & Platforms",
      icon: <Code className="w-6 h-6 text-blue-400" />,
      items: ["Zscaler ZIA/ZPA", "Prisma Access", "AWS Security Hub", "Nmap", "Burp Suite", "Metasploit", "Wireshark", "Nagios", "ForeScout"]
    },
    {
      category: "Security Data Engineering",
      icon: <Code className="w-6 h-6 text-blue-400" />,
      items: ["Security Data Lake", "CrowdStrike XDR Telemetry", "Zscaler Telemetry", "Microsoft Defender Telemetry", "Network Security Telemetry", "AI-Driven Threat Analytics", "Threat Hunting Pipelines"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white py-20">
      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Technical Expertise</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive command over enterprise security stack, from network and cloud security to automated threat detection, incident response, and compliance frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all group">
              <div className="mb-4 p-3 bg-slate-950 rounded-lg w-fit group-hover:bg-blue-900/20 transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-slate-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
