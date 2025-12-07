import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Mail, 
  Linkedin, 
  Target,
  Zap,
  Users,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';

const Home = () => {
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
      metric: "70%",
      label: "Incident Response Time Reduction",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
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
            <a href="#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all flex items-center gap-2 shadow-lg shadow-blue-900/20">
              <Mail className="w-5 h-5" /> Get in Touch
            </a>
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
              <Users className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Multi-Cloud Architect</h3>
              <p className="text-slate-400 text-sm">
                Deep expertise across Azure, AWS, GCP, and Oracle Cloud with proven ability to design and implement cloud-native security controls, hybrid architectures, and zero trust frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Metrics */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all">
                <div className="flex justify-center mb-3 text-blue-400">
                  {achievement.icon}
                </div>
                <div className="text-4xl font-bold text-blue-400 mb-2">{achievement.metric}</div>
                <div className="text-sm text-slate-400">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore My Work</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Dive deeper into my professional journey, technical expertise, and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/projects" className="group bg-slate-950 border border-slate-800 rounded-xl p-8 hover:border-blue-500/50 transition-all hover:transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-900/20 flex items-center justify-center group-hover:bg-blue-900/40 transition-colors">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Projects</h3>
                <p className="text-slate-400 text-sm">15+ key security initiatives</p>
              </div>
            </Link>

            <Link to="/expertise" className="group bg-slate-950 border border-slate-800 rounded-xl p-8 hover:border-blue-500/50 transition-all hover:transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-900/20 flex items-center justify-center group-hover:bg-blue-900/40 transition-colors">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expertise</h3>
                <p className="text-slate-400 text-sm">6 technical domains</p>
              </div>
            </Link>

            <Link to="/experience" className="group bg-slate-950 border border-slate-800 rounded-xl p-8 hover:border-blue-500/50 transition-all hover:transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-900/20 flex items-center justify-center group-hover:bg-blue-900/40 transition-colors">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Experience</h3>
                <p className="text-slate-400 text-sm">7 global companies</p>
              </div>
            </Link>

            <Link to="/certifications" className="group bg-slate-950 border border-slate-800 rounded-xl p-8 hover:border-blue-500/50 transition-all hover:transform hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-900/20 flex items-center justify-center group-hover:bg-blue-900/40 transition-colors">
                  <Target className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Certifications</h3>
                <p className="text-slate-400 text-sm">20+ professional credentials</p>
              </div>
            </Link>
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
            
            <div className="grid md:grid-cols-2 gap-4 mb-8 text-left max-w-xl mx-auto">
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
      </section>
    </div>
  );
};

export default Home;
