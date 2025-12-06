import React, { useState } from 'react';
import { Award, ArrowLeft, GraduationCap, Shield, Cloud, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Certifications = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (idx) => {
    setImageErrors(prev => ({ ...prev, [idx]: true }));
  };

  const certifications = [
    {
      name: "Microsoft Certified Azure Solutions Architect Expert",
      provider: "Microsoft",
      logo: "https://images.credly.com/size/340x340/images/987adb7e-49be-4e24-b67e-55986bd3fe66/azure-solutions-architect-expert-600x600.png",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "AWS Solution Architect Professional",
      provider: "Amazon Web Services",
      logo: "https://images.credly.com/size/340x340/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png",
      color: "from-orange-500 to-yellow-500"
    },
    {
      name: "Google Professional Cloud Architect",
      provider: "Google Cloud",
      logo: "https://templates.images.credential.net/16590187933301617801540872729153.png",
      color: "from-red-500 to-blue-500"
    },
    {
      name: "Microsoft Certified Azure Security Engineer",
      provider: "Microsoft",
      logo: "https://images.credly.com/size/340x340/images/1ad16b6f-2c71-4a2e-ae74-ec69c4766039/azure-security-engineer-associate600x600.png",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Amazon Web Services Security Specialty",
      provider: "Amazon Web Services",
      logo: "https://images.credly.com/size/340x340/images/53acdae5-d69f-4dda-b650-d02ed7a50dd7/image.png",
      color: "from-orange-500 to-yellow-500"
    },
    {
      name: "Google Cloud Certified Professional Cloud Security Engineer",
      provider: "Google Cloud",
      logo: "https://templates.images.credential.net/16590181582433100721069374870524.png",
      color: "from-red-500 to-blue-500"
    },
    {
      name: "Zscaler Zero Trust Certified Associate (ZTCA)",
      provider: "Zscaler",
      logo: "https://www.zscaler.com/themes/custom/zscaler/logo.svg",
      color: "from-blue-600 to-indigo-600"
    },
    {
      name: "ISO/IEC 27001:2022 Lead Auditor",
      provider: "ISO",
      logo: "https://cdn-icons-png.flaticon.com/512/6404/6404100.png",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "ISO/IEC 27001 Information Security Associate",
      provider: "ISO",
      logo: "https://cdn-icons-png.flaticon.com/512/6404/6404100.png",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "CompTIA Certified Security Plus - Security +",
      provider: "CompTIA",
      logo: "https://images.credly.com/size/340x340/images/74790a75-8451-400a-8536-92d792084d82/CompTIA_Security_2Bce.png",
      color: "from-red-600 to-red-700"
    },
    {
      name: "CompTIA Certified Cybersecurity Analyst - CYSA+",
      provider: "CompTIA",
      logo: "https://images.credly.com/size/340x340/images/0b3fbb6c-23e3-48b1-b3af-e0062c91e0f6/CompTIA_CySA_2B.png",
      color: "from-red-600 to-red-700"
    },
    {
      name: "CompTIA Certified PenTest +",
      provider: "CompTIA",
      logo: "https://images.credly.com/size/340x340/images/ec6c6d08-4c71-49c0-98f3-dfbe2e98c5aa/CompTIA_PenTest_2B.png",
      color: "from-red-600 to-red-700"
    },
    {
      name: "Palo Alto Networks Certified Network Security Engineer",
      provider: "Palo Alto Networks",
      logo: "https://www.paloaltonetworks.com/content/dam/pan/en_US/images/logos/brand/primary-company-logo/Parent-logo.png",
      color: "from-orange-600 to-red-600"
    },
    {
      name: "Cisco Certified Network Associate Security",
      provider: "Cisco",
      logo: "https://images.credly.com/size/340x340/images/e4c7c996-8f0f-4d3a-b1c8-1d9c1dfac0dc/cisco_ccna_R_26S.png",
      color: "from-blue-700 to-cyan-600"
    },
    {
      name: "Microsoft Certified: Security Operations Analyst Associate",
      provider: "Microsoft",
      logo: "https://images.credly.com/size/340x340/images/c34a6df4-c7bd-461b-ac13-3c5554e89e7e/image.png",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Barracuda Web Application Firewall",
      provider: "Barracuda",
      logo: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
      color: "from-blue-600 to-purple-600"
    },
    {
      name: "Fortinet NSE 2 Network Security Expert Associate",
      provider: "Fortinet",
      logo: "https://images.credly.com/size/340x340/images/4c6a2e52-ddf3-4b5e-b05c-a4c86291b5fa/image.png",
      color: "from-red-700 to-orange-600"
    },
    {
      name: "Certified Network Security Specialist - ICSI UK",
      provider: "ICSI",
      logo: "https://cdn-icons-png.flaticon.com/512/2913/2913133.png",
      color: "from-indigo-600 to-purple-600"
    },
    {
      name: "Microsoft Certified Azure Administrator Associate",
      provider: "Microsoft",
      logo: "https://images.credly.com/size/340x340/images/336eebfc-0ac3-4553-9a67-b402f491f185/azure-administrator-associate-600x600.png",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Cisco Certified Network Associate Routing and Switching",
      provider: "Cisco",
      logo: "https://images.credly.com/size/340x340/images/a31c0301-ff96-4cee-9435-0a4b40ce6e66/cisco_ccna_R_26S_legacy.png",
      color: "from-blue-700 to-cyan-600"
    }
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-yellow-500/50 transition-all hover:transform hover:scale-[1.02] group shadow-lg">
                <div className="flex items-start gap-6">
                  <div className={`w-24 h-24 rounded-xl bg-gradient-to-br ${cert.color} p-1 flex-shrink-0 shadow-lg`}>
                    <div className="w-full h-full bg-white rounded-lg flex items-center justify-center p-3">
                      {imageErrors[idx] ? (
                        <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${cert.color} rounded-lg`}>
                          <Award className="w-12 h-12 text-white" />
                        </div>
                      ) : (
                        <img 
                          src={cert.logo} 
                          alt={cert.provider}
                          className="w-full h-full object-contain"
                          onError={() => handleImageError(idx)}
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm font-bold text-blue-400 uppercase tracking-wide">{cert.provider}</span>
                    </div>
                    <h3 className="text-base font-semibold text-slate-100 leading-snug mb-2">{cert.name}</h3>
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-slate-950/50 rounded-full">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      <span className="text-xs text-slate-400">Certified</span>
                    </div>
                  </div>
                </div>
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
