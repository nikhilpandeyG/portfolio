import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Cloud, 
  Lock, 
  Server, 
  Terminal, 
  Award, 
  Briefcase, 
  Mail, 
  Linkedin, 
  ChevronDown, 
  ExternalLink,
  Menu,
  X,
  FileText,
  Cpu,
  Globe,
  TrendingUp,
  Users,
  Target,
  CheckCircle2,
  Zap,
  GraduationCap,
  BookOpen,
  Code
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const certifications = [
    "Microsoft Certified Azure Solutions Architect Expert",
    "AWS Solution Architect Professional",
    "Google Professional Cloud Architect",
    "Microsoft Certified Azure Security Engineer",
    "Amazon Web Services Security Specialty",
    "Google Cloud Certified Professional Cloud Security Engineer",
    "Zscaler Zero Trust Certified Associate (ZTCA)",
    "ISO/IEC 27001:2022 Lead Auditor",
    "ISO/IEC 27001 Information Security Associate",
    "CompTIA Certified Security Plus - Security +",
    "CompTIA Certified Cybersecurity Analyst - CYSA+",
    "CompTIA Certified PenTest +",
    "Palo Alto Networks Certified Network Security Engineer",
    "Cisco Certified Network Associate Security",
    "Microsoft Certified: Security Operations Analyst Associate",
    "Barracuda Web Application Firewall",
    "Fortinet NSE 2 Network Security Expert Associate",
    "Certified Network Security Specialist - ICSI UK",
    "Microsoft Certified Azure Administrator Associate",
    "Cisco Certified Network Associate Routing and Switching"
  ];

  const achievements = [
    {
      metric: "13+",
      label: "Years of Experience",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      metric: "50+",
      label: "Enterprise Projects Secured",
      icon: <Shield className="w-6 h-6" />
    },
    {
      metric: "100%",
      label: "Security Compliance Rate",
      icon: <CheckCircle2 className="w-6 h-6" />
    },
    {
      metric: "20+",
      label: "Team Members Managed",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const education = [
    {
      degree: "Post Graduate Diploma in Cyber Law and Cyber Forensic (PGDCLCF)",
      institution: "National Law School of India University",
      year: "2024 - 2025",
      focus: "Cyber Law and Cyber Forensic",
      grade: "Grade: A"
    },
    {
      degree: "Master's in Information Security (MSc Infosec.)",
      institution: "Indira Gandhi National Open University",
      year: "2022 - 2024",
      focus: "Information Security",
      grade: "First Division"
    },
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "IEC College of Engineering & Technology",
      year: "2007 - 2011",
      focus: "Electronics & Communication Engineering",
      grade: "First Division"
    }
  ];

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

  const skills = [
    {
      category: "Enterprise & Cloud Security",
      icon: <Cloud className="w-6 h-6 text-blue-400" />,
      items: ["Microsoft Azure", "AWS", "Google Cloud", "Oracle Cloud", "Wiz", "Prisma Cloud", "CloudGuard", "Azure Security Center"]
    },
    {
      category: "Cyber Defense",
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      items: ["Zero Trust (Zscaler)", "SOAR/SIEM", "Vulnerability Mgmt", "CrowdStrike", "Microsoft Defender", "Qualys", "Rapid7"]
    },
    {
      category: "Network Security",
      icon: <Server className="w-6 h-6 text-blue-400" />,
      items: ["Palo Alto", "Cisco ASA", "Fortinet", "F5 Big-IP ASM", "Azure WAF", "AWS WAF", "CloudFlare"]
    },
    {
      category: "Automation & DevSecOps",
      icon: <Terminal className="w-6 h-6 text-blue-400" />,
      items: ["Terraform (IaC)", "Python", "PowerShell", "Shell Scripting", "Ansible", "GitLab CI/CD", "Azure DevOps"]
    },
    {
      category: "SIEM & SOAR",
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      items: ["Microsoft Sentinel", "IBM QRadar", "Splunk", "Cortex XSOAR", "Logic Apps", "Azure Automation"]
    },
    {
      category: "Compliance & Governance",
      icon: <CheckCircle2 className="w-6 h-6 text-blue-400" />,
      items: ["ISO 27001", "NIST Framework", "SOC 2", "GDPR", "Azure Policy", "AWS Config"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <Shield className="w-8 h-8 text-blue-500" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              NIKHIL PANDEY
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('expertise')} className="hover:text-blue-400 transition-colors">Expertise</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-blue-400 transition-colors">Experience</button>
            <button onClick={() => scrollToSection('certifications')} className="hover:text-blue-400 transition-colors">Certifications</button>
            <button onClick={() => scrollToSection('contact')} className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-all">
              Contact Me
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 shadow-2xl">
            <button onClick={() => scrollToSection('about')} className="text-left text-slate-300 hover:text-blue-400">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-left text-slate-300 hover:text-blue-400">Projects</button>
            <button onClick={() => scrollToSection('expertise')} className="text-left text-slate-300 hover:text-blue-400">Expertise</button>
            <button onClick={() => scrollToSection('experience')} className="text-left text-slate-300 hover:text-blue-400">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="text-left text-blue-400 font-bold">Contact</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-blue-500 blur-[120px] rounded-full mix-blend-screen"></div>
          <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-cyan-500 blur-[100px] rounded-full mix-blend-screen"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 text-xs font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            OPEN TO CONSULTING & LEADERSHIP ROLES
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Architecting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Enterprise Security Solutions
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
            Security Manager & Principal Security Architect with 13+ years in Cyber Security, Cloud Security & Network Security. Proficient in architecting and implementing Cloud security and Cyber Security solutions. Technically astute with ability to spearhead tasks independently with technical sophistication and finesse, in addition to awareness of latest trends and technological advancements.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button onClick={() => scrollToSection('contact')} className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all flex items-center gap-2 shadow-lg shadow-blue-900/20">
              <Mail className="w-5 h-5" /> Get in Touch
            </button>
            <a href="https://linkedin.com/in/nikhilpandeyg" target="_blank" rel="noreferrer" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all flex items-center gap-2 border border-slate-700">
              <Linkedin className="w-5 h-5" /> LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section id="about" className="py-16 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Me</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Proven expertise in securing enterprise infrastructures with measurable results
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <Target className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Strategic Leadership</h3>
              <p className="text-slate-400 text-sm">
                Led security transformations across British Telecom, Capgemini, and Cognizant, managing teams of 20+ security professionals and delivering enterprise-grade solutions.
              </p>
            </div>
            
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <Zap className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Security Automation Expert</h3>
              <p className="text-slate-400 text-sm">
                Specialized in enterprise-scale SOAR/SIEM automation, threat detection, and incident response orchestration. Reduced incident response time by 70% through intelligent security automation workflows and playbooks.
              </p>
            </div>
            
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <CheckCircle2 className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Compliance Champion</h3>
              <p className="text-slate-400 text-sm">
                ISO 27001 Lead Auditor with 100% compliance achievement record. Expert in NIST, SOC 2, GDPR, and multi-cloud governance frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Metrics */}
      <section className="py-16 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all">
                <div className="flex justify-center mb-4 text-blue-400">
                  {achievement.icon}
                </div>
                <div className="text-4xl font-bold text-blue-400 mb-2">{achievement.metric}</div>
                <div className="text-sm text-slate-400">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Projects */}
      <section id="projects" className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <BookOpen className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Projects & Roles</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Delivered enterprise-scale security solutions across diverse environments and technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Security Manager, Reviewer & Approver</h3>
              <p className="text-slate-400 text-sm">Led security governance and approval processes for enterprise infrastructure changes</p>
            </div>
            
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Security Architect, Designer & Implementer</h3>
              <p className="text-slate-400 text-sm">Architected and deployed comprehensive security solutions across multi-cloud environments</p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Open Source SIEM and SOAR Design & Development</h3>
              <p className="text-slate-400 text-sm">Built custom security orchestration solutions using open-source technologies</p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Azure Sentinel/SOAR Implementation</h3>
              <p className="text-slate-400 text-sm">Deployed enterprise-grade Microsoft Sentinel with automated response workflows</p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Azure & AWS Security Architecture</h3>
              <p className="text-slate-400 text-sm">Designed security controls and next-gen firewall implementations for cloud infrastructures</p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Zero Touch Vulnerability Management</h3>
              <p className="text-slate-400 text-sm">Developed home-grown VM automation tool for continuous security assessment</p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <h3 className="text-lg font-bold text-blue-400 mb-2">CSPM Implementation</h3>
              <p className="text-slate-400 text-sm">Deployed Cloud Security Posture Management across multi-cloud environments</p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Firewall Assurance and Automation</h3>
              <p className="text-slate-400 text-sm">Automated firewall policy management and compliance verification</p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Cloud Security Assessment & ISO 27001</h3>
              <p className="text-slate-400 text-sm">Conducted comprehensive security assessments and ISO 27001 readiness checks</p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Azure OpenAI Deployment (Terraform)</h3>
              <p className="text-slate-400 text-sm">Infrastructure as Code deployment of AI workloads with security controls</p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Security Automation Suite</h3>
              <p className="text-slate-400 text-sm">Integrated CrowdStrike XDR, Defender, Zscaler, Prisma SASE, AWS automation</p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Zscaler Zero Trust Network Access</h3>
              <p className="text-slate-400 text-sm">Implemented enterprise-wide ZTNA solution with secure access policies</p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Palo Alto XSOAR Security Automation</h3>
              <p className="text-slate-400 text-sm">Custom workflow design and playbook development for incident orchestration</p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <h3 className="text-lg font-bold text-blue-400 mb-2">DevSecOps Pipeline Integration</h3>
              <p className="text-slate-400 text-sm">Implemented static/dynamic code analysis, vulnerability scanning, and container security</p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Terraform Infrastructure Automation</h3>
              <p className="text-slate-400 text-sm">Policy and infrastructure deployment via Infrastructure as Code frameworks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section id="expertise" className="py-20 bg-slate-900/50 border-y border-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Comprehensive command over enterprise security stack, from network and cloud security to automated threat detection, incident response, and compliance frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all group">
                <div className="mb-4 p-3 bg-slate-900 rounded-lg w-fit group-hover:bg-blue-900/20 transition-colors">
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
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 sticky top-32">Professional <br />Trajectory</h2>
            <p className="text-slate-400 mb-8 sticky top-52">
              Progressive career growth from network security engineering to enterprise architecture leadership, delivering security excellence across global organizations.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 sticky top-72 group">
              <FileText className="w-4 h-4" /> Download Full Resume
            </a>
          </div>
          
          <div className="md:w-2/3 space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l border-slate-800 hover:border-blue-600 transition-colors pb-2 last:pb-0">
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-600"></div>
                <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800/50 hover:bg-slate-900 hover:border-slate-700 transition-all">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                      <span className="text-xs text-slate-500">{exp.location}</span>
                    </div>
                    <span className="text-sm font-mono text-blue-400 bg-blue-900/20 px-2 py-1 rounded">{exp.period}</span>
                  </div>
                  <div className="text-lg text-slate-300 mb-3">{exp.role}</div>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">{exp.description}</p>
                  {exp.achievements && (
                    <ul className="mb-4 space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-slate-400 text-xs flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 container mx-auto px-6 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <GraduationCap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <p className="text-slate-400">Academic foundation in Engineering, Information Security, and Cyber Law</p>
          </div>

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-slate-400 text-sm">{edu.institution}</p>
                  </div>
                  <span className="text-sm font-mono text-blue-400 bg-blue-900/20 px-3 py-1 rounded mt-2 sm:mt-0">{edu.year}</span>
                </div>
                <p className="text-slate-500 text-sm mt-2">Specialization: {edu.focus}</p>
                {edu.grade && <p className="text-green-400 text-sm mt-1 font-semibold">{edu.grade}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Certs Banner */}
      <section id="certifications" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <Award className="w-12 h-12 text-yellow-500 mb-4" />
            <h2 className="text-3xl font-bold">Certifications & Achievements</h2>
            <p className="text-slate-400 mt-2">Industry-recognized certifications across cloud platforms and security domains</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-slate-950 border border-slate-800 rounded-lg hover:border-yellow-500/30 transition-colors">
                <div className="p-2 bg-slate-900 rounded">
                  <Cpu className="w-4 h-4 text-slate-400" />
                </div>
                <span className="text-sm font-medium text-slate-200">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section id="contact" className="py-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl overflow-hidden relative shadow-2xl">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500 rounded-full opacity-20"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-cyan-500 rounded-full opacity-20"></div>
          
          <div className="relative z-10 p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Secure Your Infrastructure</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Available for architectural consulting, security audits, and leadership roles. Let's discuss how I can help strengthen your enterprise security posture and drive digital transformation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8 text-left max-w-2xl mx-auto">
              <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30">
                <div className="text-blue-200 text-xs mb-1">Contact</div>
                <div className="text-white font-semibold">+91-9711634818</div>
              </div>
              <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30">
                <div className="text-blue-200 text-xs mb-1">Work Mode</div>
                <div className="text-white font-semibold">Hybrid / Remote</div>
              </div>
              <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30">
                <div className="text-blue-200 text-xs mb-1">Availability</div>
                <div className="text-white font-semibold">Open to Offers</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:nikhilpandey891@gmail.com" className="px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 shadow-lg">
                <Mail className="w-5 h-5" /> Email Me
              </a>
              <a href="https://linkedin.com/in/nikhilpandeyg" target="_blank" rel="noreferrer" className="px-8 py-3 bg-blue-700 text-white border-2 border-blue-400 rounded-lg font-bold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
                <Linkedin className="w-5 h-5" /> LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <footer className="text-center mt-20 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Nikhil Pandey. All rights reserved.</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <Globe className="w-3 h-3" />
            <span>Hosted on Microsoft Azure</span>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default App;
