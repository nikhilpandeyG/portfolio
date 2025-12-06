import React from 'react';
import { Briefcase, ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Experience = () => {
  const experiences = [
    {
      company: "Global Telecommunications Leader",
      role: "Manager & Security Architect (Security Product Development & Data Engineering)",
      period: "April 2024 - Present",
      location: "India",
      description: "Leading Platform, Integration, and Automation initiatives for a Fortune Global 500 telecommunications giant. Architecting scalable, secure, high-availability enterprise solutions and standardizing SOAR workflows with MITRE ATT&CK mapping.",
      achievements: [
        "Spearheaded architecture for Platform, Integration, and Automation delivering scalable enterprise solutions",
        "Led Playbook Team, standardizing best practices for SOAR workflows and MITRE ATT&CK mapping",
        "Architected integrations between SIEM (IBM QRadar, Microsoft Sentinel, Securonix) and SOAR platforms (XSOAR, Logic Apps)",
        "Designed automation frameworks using Terraform, GitLab, and Python, significantly reducing manual intervention",
        "Delivered technical leadership for endpoint protection (CrowdStrike, Defender) and vulnerability management (Qualys, Tenable)",
        "Automated security testing and monitoring processes maintaining compliance"
      ],
      tech: ["QRadar", "Sentinel", "Securonix", "XSOAR", "Logic Apps", "Terraform", "Python", "CrowdStrike", "Defender", "Qualys", "Tenable"]
    },
    {
      company: "Top 10 Global IT Services Firm",
      role: "Senior Manager - Projects & Consulting (Principal Security Architect)",
      period: "Sept 2022 - April 2024",
      location: "India",
      description: "Designed and implemented security solutions closely with customers to meet requirements. Provided information security subject matter expertise for business processes across compiled/interpreted programs, database systems, web servers, firewalls, and middleware.",
      achievements: [
        "Performed Cloud security Assessment to identify gaps and propose security hardening actions",
        "Designed and implemented AWS native security controls and set up policies and procedures",
        "Prepared technical design documents (HLD, LLD, SOP), case studies and implementation plans",
        "Worked on multi-vendor cloud and security controls: AWS, Azure, Palo Alto, F5, Barracuda, Prisma",
        "Developed and maintained monitoring systems to detect anomalies and security breaches"
      ],
      tech: ["AWS", "Azure", "Palo Alto", "F5", "Barracuda", "Prisma Cloud", "Security Assessment"]
    },
    {
      company: "Fortune 500 Technology Consulting Firm",
      role: "Senior Associate - Projects (Cyber Security Architect)",
      period: "April 2021 - Sept 2022",
      location: "India",
      description: "Designed and developed security architecture for Azure and AWS Cloud environments including non-native security controls. Evaluated IT systems, appliances, and devices for security requirements and recommended mitigating controls.",
      achievements: [
        "Designed and developed security architecture for Azure Cloud Environment with non-native controls",
        "Designed and developed security architecture for AWS Cloud with native and non-native solutions",
        "Conducted Cloud security Assessment to identify gaps and propose hardening actions",
        "Designed and implemented Microsoft Sentinel SIEM solution for cloud and on-premises security",
        "Implemented SOAR solutions using Logic apps in Sentinel"
      ],
      tech: ["Azure", "AWS", "Microsoft Sentinel", "Logic Apps", "SIEM", "SOAR", "Cloud Security"]
    },
    {
      company: "International Executive Search Firm",
      role: "Senior IT Analyst - Network Infrastructure & Security",
      period: "Jan 2019 - Mar 2021",
      location: "India",
      description: "Worked as SME & Security Architect for cloud adoption and migration. Served as key planner and contributor in Data center, Azure Cloud, and office migration projects.",
      achievements: [
        "Served as key planner and contributor in Data center, Azure Cloud, and office migration",
        "Key planner and executioner in Palo Alto firewall migration",
        "Upgraded security systems by monitoring environment, identifying gaps, evaluating and implementing enhancements",
        "Worked as project lead for Network Security and Automation across multiple regions"
      ],
      tech: ["Palo Alto", "Azure", "Network Security", "Cloud Migration", "Automation"]
    },
    {
      company: "Global Telecommunications Equipment Leader",
      role: "Engineer",
      period: "April 2015 - Jan 2019",
      location: "India",
      description: "Implemented security systems specifying intrusion detection methodologies and equipment. Directed equipment and software installation, prepared preventive and reactive measures, and provided technical support.",
      achievements: [
        "Worked as Team Lead for Cell Site router & Firewall migration project",
        "Implemented security systems with intrusion detection methodologies and equipment",
        "Worked on Azure Native Security Controls",
        "Worked on Cloud Migration Project",
        "Troubleshooting issues on Routers and Firewalls"
      ],
      tech: ["Azure", "Routers", "Firewalls", "Cloud Migration", "Network Security"]
    },
    {
      company: "Leading Telecom Infrastructure Provider",
      role: "Executive",
      period: "Oct 2014 - April 2015",
      location: "India",
      description: "Provided network support for telecommunications towers serving multiple operators. Managed firewall installation, troubleshooting, and network device operations.",
      achievements: [
        "Network Support for Towers of Airtel, Vodafone, Reliance, and other operators",
        "Firewall installation and troubleshooting",
        "Router and Switches installation and troubleshooting"
      ],
      tech: ["Firewalls", "Routers", "Switches", "Network Support"]
    },
    {
      company: "Global Telecommunications Equipment Company",
      role: "AM Engineer",
      period: "July 2012 - Oct 2014",
      location: "India",
      description: "Managed network monitoring and escalations for telecommunications infrastructure. Implemented new tools and handled security-related alerts and incidents.",
      achievements: [
        "Network Monitoring and Escalations",
        "New Tools Implementation, Testing, and support",
        "Working on Security related alerts and incidents"
      ],
      tech: ["Network Monitoring", "Security Alerts", "Incident Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white py-20">
      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="text-center mb-16">
          <Briefcase className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            13+ years of progressive leadership across global enterprises and Fortune 500 companies
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1 mt-2 md:mt-0">
                  <span className="text-sm font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded">{exp.period}</span>
                  <span className="text-xs text-slate-500">{exp.location}</span>
                </div>
              </div>

              <p className="text-slate-400 mb-4 leading-relaxed">{exp.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-slate-300 mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                      <ExternalLink className="w-3 h-3 text-blue-500 mt-1 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-950 text-blue-400 text-xs rounded-full border border-slate-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
