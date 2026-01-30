'use client'
import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Menu, X, Server, Shield, Zap, Code, Terminal, Activity, AlertTriangle, Users, ArrowRight, Database, Cloud, Layers, Github } from 'lucide-react';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const caseStudies = [
    {
      id: 1,
      title: "Digital Subscription Platform",
      slug: "digital-subscription-platform",
      category: "crisis",
      client: "National Regulatory Agency",
      duration: "7 months",
      impact: "critical",
      stats: {
        recovery: "24 hours",
        downtime: "0 minutes",
        cpuReduction: "85%"
      },
      preview: "Recovered compromised production server from crypto-mining attack with zero downtime during critical stakeholder presentation.",
      tags: ["NestJS", "Next.js", "PostgreSQL", "Redis", "VMware"]
    },
    {
      id: 2,
      title: "State Budget Management Platform",
      slug: "state-budget-platform",
      category: "government",
      client: "State Government",
      duration: "3 months (ongoing)",
      impact: "high",
      stats: {
        mdas: "Statewide",
        workflow: "Multi-tier",
        status: "Testing"
      },
      preview: "Built comprehensive budget lifecycle management system from scratch for Nigerian state government, replacing paper-based processes.",
      tags: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "VMware"]
    },
    {
      id: 3,
      title: "National Pilgrimage Platform",
      slug: "pilgrimage-platform",
      category: "migration",
      client: "National Hajj Commission",
      duration: "1 month",
      impact: "critical",
      stats: {
        rebuild: "Complete",
        deadline: "Met",
        offline: "Enabled"
      },
      preview: "Rebuilt non-functional mobile directorate platform from scratch in 30 days, enabling offline emergency contact access for pilgrims.",
      tags: ["React Native", "PHP", "MySQL", "Offline-First"]
    },
    {
      id: 4,
      title: "International Nonprofit Platform",
      slug: "nonprofit-platform",
      category: "maintenance",
      client: "European Humanitarian Org",
      duration: "Ongoing",
      impact: "high",
      stats: {
        support: "24/7",
        uptime: "99.9%",
        maintenance: "Active"
      },
      preview: "Ongoing website management and 24/7 technical support for international humanitarian organization serving communities across Europe.",
      tags: ["Next.js", "NestJS", "PostgreSQL", "Maintenance"]
    }
  ];

  const services = [
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Production-ready systems built for scale. Backend architecture that handles real traffic, real edge cases, real problems.",
      metrics: ["API Design", "Database Optimization", "Real-time Systems"]
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Infrastructure & DevOps",
      description: "VPS management, CI/CD pipelines, monitoring systems. The unglamorous work that keeps systems running at 3am.",
      metrics: ["99.9% Uptime SLA", "Automated Deployment", "24/7 Monitoring"]
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Crisis Response",
      description: "When everything's on fire and you need someone who's been there. Emergency recovery, security incidents, production failures.",
      metrics: ["Rapid Response", "Root Cause Analysis", "Incident Management"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI Integration",
      description: "Practical AI solutions that solve real business problems. No hype, no buzzwords, just measurable ROI.",
      metrics: ["Business Value First", "Performance Metrics", "Real Use Cases"]
    }
  ];

  const techStack = [
    { category: "Backend", items: ["NestJS", "Node.js", "Express", "GraphQL"], icon: <Server className="w-5 h-5" /> },
    { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind"], icon: <Code className="w-5 h-5" /> },
    { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"], icon: <Database className="w-5 h-5" /> },
    { category: "Infrastructure", items: ["Docker", "Nginx", "CI/CD", "VMware VPS"], icon: <Layers className="w-5 h-5" /> },
    { category: "Mobile", items: ["React Native", "Offline-First", "PHP", "Expo"], icon: <Cloud className="w-5 h-5" /> },
    { category: "Security", items: ["SSL/TLS", "Firewall", "SSH Hardening", "Monitoring"], icon: <Shield className="w-5 h-5" /> }
  ];

  const stats = [
    { label: "Production Systems", value: "4+", icon: <Server className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { label: "Uptime Average", value: "99.9%", icon: <Activity className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { label: "Years Experience", value: "3+", icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { label: "Crisis Resolved", value: "1", icon: <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6" /> }
  ];

  const filteredStudies = activeTab === 'all' 
    ? caseStudies 
    : caseStudies.filter(s => s.category === activeTab);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Gradient Orb Effect - Hidden on mobile for performance */}
      <div 
        className="hidden md:block fixed inset-0 pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`
        }}
      />

      {/* Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] md:bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Terminal className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-sm sm:text-lg">Infrastructure Engineer</div>
                <div className="text-[10px] sm:text-xs text-gray-400">Government-Grade Systems</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
              </button>
              <button onClick={() => scrollToSection('work')} className="text-gray-300 hover:text-white transition-colors relative group">
                Work
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all hover:scale-105 font-medium">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10">
              <div className="flex flex-col p-4 space-y-4">
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-300 hover:text-white transition-colors py-2">
                  Services
                </button>
                <button onClick={() => scrollToSection('work')} className="text-left text-gray-300 hover:text-white transition-colors py-2">
                  Work
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-300 hover:text-white transition-colors py-2">
                  About
                </button>
                <button onClick={() => scrollToSection('contact')} className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all font-medium">
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-32 relative z-10 w-full">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-xs sm:text-sm font-medium">Available for Select Projects</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-[0.9]">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-400 bg-clip-text text-transparent">
                Government-Grade
              </span>
              <br />
              <span className="text-white">Infrastructure</span>
            </h1>
            
            <p className="text-base sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-3xl leading-relaxed">
              I build production systems for{' '}
              <span className="text-white font-semibold">Nigerian government agencies</span> and organizations
              <br className="hidden sm:block" />
              where downtime isn&apos;t an option and deadlines are non-negotiable.
              <br className="hidden sm:block" />
              <span className="text-gray-500">Real constraints. Real pressure. Real results.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16">
              <button onClick={() => scrollToSection('work')} className="group px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 rounded-xl transition-all hover:scale-105 font-medium flex items-center justify-center gap-2">
                View Case Studies
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all hover:scale-105 font-medium backdrop-blur-sm">
                Get In Touch
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all group">
                  <div className="text-blue-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-16 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16">
            <div className="text-blue-400 font-semibold mb-4 flex items-center gap-2 text-sm sm:text-base">
              <div className="w-8 sm:w-12 h-px bg-blue-500" />
              WHAT I DO
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Services Built on Experience</h2>
            <p className="text-base sm:text-xl text-gray-400 max-w-3xl">
              Not a generalist. Not a consultant. An engineer who ships production systems under real constraints.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 transition-all hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-500/20 transition-colors">
                    <div className="text-blue-400">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.metrics.map((metric, i) => (
                      <span key={i} className="px-2 sm:px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs sm:text-sm text-gray-300">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="work" className="relative py-16 sm:py-32 bg-gradient-to-b from-black to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16">
            <div className="text-blue-400 font-semibold mb-4 flex items-center gap-2 text-sm sm:text-base">
              <div className="w-8 sm:w-12 h-px bg-blue-500" />
              FEATURED WORK
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Real Projects. Real Impact.</h2>
            <p className="text-base sm:text-xl text-gray-400 max-w-3xl mb-6 sm:mb-8">
              Every project here represents actual production systems. NDAs prevent me from sharing client names, but the challenges and solutions are real.
            </p>

            {/* Filter Tabs */}
            <div className="flex gap-2 sm:gap-4 flex-wrap">
              {['all', 'government', 'crisis', 'migration', 'maintenance'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-6 py-2 rounded-lg transition-all font-medium text-sm sm:text-base ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {filteredStudies.map((study) => (
              <a
                key={study.id}
                href={`/case-study/${study.slug}`}
                className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all hover:scale-[1.02] cursor-pointer block"
              >
                {/* Impact Badge */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold ${
                    study.impact === 'critical' 
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {study.impact === 'critical' ? 'CRITICAL' : 'HIGH IMPACT'}
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="text-xs sm:text-sm text-gray-500 mb-2">{study.client} • {study.duration}</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-blue-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">{study.preview}</p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                    {Object.entries(study.stats).map(([key, value]) => (
                      <div key={key} className="bg-white/5 rounded-lg p-2 sm:p-3">
                        <div className="text-[10px] sm:text-xs text-gray-500 mb-1 capitalize">{key}</div>
                        <div className="text-sm sm:text-lg font-bold text-blue-400">{value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {study.tags.map(tag => (
                      <span key={tag} className="px-2 sm:px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-[10px] sm:text-xs text-blue-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-blue-400 font-medium group-hover:gap-4 transition-all text-sm sm:text-base">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="about" className="relative py-16 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16">
            <div className="text-blue-400 font-semibold mb-4 flex items-center gap-2 text-sm sm:text-base">
              <div className="w-8 sm:w-12 h-px bg-blue-500" />
              ABOUT
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Built on Reliability</h2>
            <div className="max-w-3xl space-y-4 sm:space-y-6 text-base sm:text-xl text-gray-400 leading-relaxed">
              <p>
                I&apos;m a <span className="text-white font-semibold">final-year Mechatronics Engineering student</span> based in Kano State, Nigeria, 
                who builds production infrastructure for organizations that can&apos;t afford failures.
              </p>
              <p>
                My work includes <span className="text-white font-semibold">national regulatory platforms</span>, 
                <span className="text-white font-semibold"> state government budget systems</span>, 
                and <span className="text-white font-semibold">mission-critical mobile applications</span>—all operating under 
                tight deadlines, strict NDAs, and real-world constraints.
              </p>
              <p className="text-xl sm:text-2xl text-white font-semibold">
                I don&apos;t compete on code—I compete on reliability under pressure.
              </p>
              <p>
                When production breaks at 3am or crypto-miners compromise your server 24 hours before a stakeholder presentation, 
                you need someone who&apos;s solved these problems before.
              </p>
            </div>
          </div>

          {/* Tech Stack Grid */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Tech Stack</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {techStack.map((stack, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:border-blue-500/50 transition-all">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="text-blue-400">{stack.icon}</div>
                    <h4 className="text-base sm:text-lg font-bold">{stack.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map(item => (
                      <span key={item} className="px-2 sm:px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs sm:text-sm text-gray-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-16 sm:py-32 bg-gradient-to-b from-black to-blue-950/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Let&apos;s Work Together</h2>
          <p className="text-base sm:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Currently taking on select projects for Nigerian businesses and African startups that need government-grade infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12">
  <a href="mailto:mueedmuhammad605@gmail.com" className="group px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 rounded-xl transition-all hover:scale-105 font-medium flex items-center justify-center gap-3 text-sm sm:text-base">
    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
    mueedmuhammad605@gmail.com
    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
  </a>
  <a href="https://www.linkedin.com/in/muhammad-ayub-257b6924b/" target="_blank" rel="noopener noreferrer" className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all hover:scale-105 font-medium flex items-center justify-center gap-3 backdrop-blur-sm text-sm sm:text-base">
    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
    LinkedIn
  </a>
  {/* ADD THIS - GitHub Link */}
  <a href="https://github.com/mueed25" target="_blank" rel="noopener noreferrer" className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all hover:scale-105 font-medium flex items-center justify-center gap-3 backdrop-blur-sm text-sm sm:text-base">
    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
    GitHub
  </a>
</div>

          <div className="text-gray-500 text-xs sm:text-sm">
            Response time: Within 24 hours • Located: Kano State, Nigeria
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold">Infrastructure Engineer</div>
                <div className="text-sm text-gray-500">Government-Grade Systems</div>
              </div>
            </div>
            <div className="text-gray-500 text-sm">
              © 2025 All rights reserved • Kano State, Nigeria
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;