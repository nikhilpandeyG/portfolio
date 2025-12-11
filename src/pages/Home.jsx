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
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Advanced Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute right-0 top-0 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-20"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-pink-600 rounded-full blur-[150px] opacity-20"></div>
          <div className="absolute right-1/3 top-1/3 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-10"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 text-purple-300 text-xs font-semibold backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                OPEN TO CONSULTING & LEADERSHIP ROLES
              </div>
              
              <div>
                <h1 className="text-6xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
                  Architecting
                  <br />
                  <span className="gradient-text">
                    Enterprise Security
                  </span>
                  <br />
                  <span className="text-slate-300">Solutions</span>
                </h1>
              </div>
              
              <p className="text-lg text-slate-400 max-w-xl leading-relaxed font-light">
                Security Manager & Principal Security Architect with <span className="text-purple-400 font-semibold">13+ years</span> in Cyber Security, Cloud Security & Network Security. Proficient in architecting and implementing cutting-edge security solutions with technical sophistication and awareness of latest industry trends.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#contact" className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold transition-all flex items-center gap-2 shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/40 hover:-translate-y-0.5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Mail className="w-5 h-5 relative z-10" /> 
                  <span className="relative z-10">Get in Touch</span>
                </a>
                <a href="https://linkedin.com/in/nikhilpandeyg" target="_blank" rel="noreferrer" className="group px-8 py-4 glass-strong text-white rounded-xl font-semibold transition-all flex items-center gap-2 hover:border-purple-500/50 hover:-translate-y-0.5">
                  <Linkedin className="w-5 h-5" /> LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Right Column - Profile Photo */}
            <div className="hidden md:flex justify-center items-center">
              <div className="relative">
                {/* Decorative elements with new colors */}
                <div className="absolute -inset-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -inset-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30 animate-pulse"></div>
                
                {/* Profile Image with modern styling */}
                <div className="relative w-80 h-80 rounded-3xl overflow-hidden glass-strong p-2">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img 
                      src="/images/profile.jpg" 
                      alt="Nikhil Pandey - Security Architect"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center"><svg class="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div>';
                      }}
                    />
                  </div>
                </div>
                
                {/* Floating badges with new design */}
                <div className="absolute -top-4 -right-4 glass-strong px-5 py-3 rounded-2xl text-sm font-bold shadow-xl border border-purple-500/20">
                  <div className="text-purple-400 text-xs font-mono">EXPERIENCE</div>
                  <div className="text-white text-lg">13+ Years</div>
                </div>
                <div className="absolute -bottom-4 -left-4 glass-strong px-5 py-3 rounded-2xl text-sm font-bold shadow-xl border border-pink-500/20">
                  <div className="text-pink-400 text-xs font-mono">CERTIFIED</div>
                  <div className="text-white text-lg">20+ Certs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section id="about" className="py-20 glass-strong border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full glass border border-purple-500/20 text-purple-400 text-xs font-bold mb-4 backdrop-blur-sm">
              WHY CHOOSE ME
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Proven Excellence</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-light">
              Transforming enterprise security with measurable results and innovative solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group glass-strong rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1">
              <div className="mb-6 p-4 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl w-fit">
                <Target className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Strategic Leadership</h3>
              <p className="text-slate-400 leading-relaxed font-light">
                Led security transformations across Fortune 500 companies, managing teams of 20+ professionals and delivering enterprise-grade solutions with proven ROI.
              </p>
            </div>
            
            <div className="group glass-strong rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1">
              <div className="mb-6 p-4 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-2xl w-fit">
                <Zap className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Security Automation</h3>
              <p className="text-slate-400 leading-relaxed font-light">
                Specialized in enterprise SOAR/SIEM automation and threat detection. Reduced incident response time by 70% through intelligent workflows and playbooks.
              </p>
            </div>
            
            <div className="group glass-strong rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1">
              <div className="mb-6 p-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl w-fit">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Multi-Cloud Expert</h3>
              <p className="text-slate-400 leading-relaxed font-light">
                Deep expertise across Azure, AWS, GCP, and Oracle Cloud with proven ability to design cloud-native security controls and zero trust frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Metrics */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="group glass-strong rounded-3xl p-8 text-center hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="mx-auto w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="text-purple-400">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-5xl font-black mb-2 gradient-text">{achievement.metric}</div>
                <div className="text-slate-400 font-medium text-sm uppercase tracking-wider">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-6 glass-strong border-y border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full glass border border-purple-500/20 text-purple-400 text-xs font-bold mb-4 backdrop-blur-sm">
              EXPLORE MORE
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Discover My Work</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-light">
              Dive deep into my professional journey, technical expertise, and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/projects" className="group glass-strong rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="mb-6 p-4 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  <Briefcase className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">Projects</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light mb-4">
                  Explore 50+ enterprise security projects with measurable impact
                </p>
                <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                  View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/expertise" className="group glass-strong rounded-3xl p-8 hover:border-pink-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="mb-6 p-4 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">Expertise</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light mb-4">
                  Deep technical skills across 15+ security domains and technologies
                </p>
                <div className="flex items-center gap-2 text-pink-400 font-semibold text-sm">
                  View Skills <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/experience" className="group glass-strong rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="mb-6 p-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">Experience</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light mb-4">
                  13+ years leading security teams at Fortune 500 companies
                </p>
                <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                  View Timeline <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/certifications" className="group glass-strong rounded-3xl p-8 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="mb-6 p-4 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">Certifications</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light mb-4">
                  20+ professional certifications from leading security organizations
                </p>
                <div className="flex items-center gap-2 text-green-400 font-semibold text-sm">
                  View Credentials <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center glass-strong rounded-[3rem] p-16 border border-purple-500/20 shadow-2xl shadow-purple-500/10">
            <div className="mb-8 mx-auto w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
              <Mail className="w-10 h-10 text-purple-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Let's Work Together</h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Looking for a security leader who can architect enterprise-grade solutions? 
              Let's discuss how I can help secure your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:contact@nikhilpandey.com" className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold transition-all flex items-center gap-3 text-lg shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/40 hover:-translate-y-1">
                <Mail className="w-6 h-6" /> 
                <span>contact@nikhilpandey.com</span>
              </a>
              <a href="https://linkedin.com/in/nikhilpandeyg" target="_blank" rel="noreferrer" className="group px-10 py-5 glass-strong text-white rounded-2xl font-bold transition-all flex items-center gap-3 text-lg hover:border-purple-500/50 hover:-translate-y-1">
                <Linkedin className="w-6 h-6" /> 
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
