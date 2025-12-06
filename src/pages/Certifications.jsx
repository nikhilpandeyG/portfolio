import React from 'react';
import { Award, ArrowLeft, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Certifications = () => {
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

  const education = [
    {
      degree: "Post Graduate Diploma in Cyber Law and Cyber Forensic (PGDCLCF)",
      institution: "National Law School of India University",
      year: "2024 - 2025",
      focus: "Cyber Law and Cyber Forensic",
      grade: "Grade A"
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

  return (
    <div className="min-h-screen bg-slate-950 text-white py-20">
      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Certifications Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Certifications</h1>
            <p className="text-slate-400 max-w-2xl mx-auto">
              20+ industry-recognized certifications across cloud security, cybersecurity, and network security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-slate-900 border border-slate-800 rounded-lg hover:border-yellow-500/30 transition-all hover:transform hover:scale-105 group">
                <div className="p-2 bg-slate-950 rounded group-hover:bg-yellow-900/20 transition-colors">
                  <Award className="w-4 h-4 text-yellow-500" />
                </div>
                <span className="text-sm font-medium text-slate-200">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="text-center mb-16">
            <GraduationCap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <p className="text-slate-400">Academic foundation in Engineering, Information Security, and Cyber Law</p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
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
      </div>
    </div>
  );
};

export default Certifications;
