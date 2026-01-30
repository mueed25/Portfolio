'use client'
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, TrendingUp, CheckCircle2, AlertTriangle, X, ChevronLeft, ChevronRight, Users, Database, Zap } from 'lucide-react';
import { caseStudiesData } from '@/lib/caseStudiesData';

const iconMap = {
  Clock: Clock,
  TrendingUp: TrendingUp,
  CheckCircle2: CheckCircle2,
  AlertTriangle: AlertTriangle,
  Users: Users,
  Database: Database,
  Zap: Zap
};

const CaseStudyPage = () => {
  const params = useParams();
  const slug = params?.slug;
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get case study data from constants
  const caseStudy = caseStudiesData[slug];

  // If case study not found, show 404
  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <a href="/" className="text-blue-400 hover:text-blue-300">
            ← Back to Portfolio
          </a>
        </div>
      </div>
    );
  }

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % caseStudy.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + caseStudy.images.length) % caseStudy.images.length);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />

      {/* Back Button */}
      <div className="fixed top-6 left-4 sm:left-6 z-50">
        <a 
          href="/"
          className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl transition-all hover:scale-105 group"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm sm:text-base">Back to Portfolio</span>
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Category & Date */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold ${
              caseStudy.impact === 'critical'
                ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
            }`}>
              {caseStudy.impact === 'critical' ? 'CRITICAL INCIDENT' : 'HIGH IMPACT'}
            </span>
            <span className="text-xs sm:text-sm text-gray-500 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {caseStudy.date}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            {caseStudy.title}
          </h1>

          {/* Meta Info */}
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-6 mb-8 sm:mb-12">
            <div>
              <div className="text-xs sm:text-sm text-gray-500 mb-1">Client Type</div>
              <div className="text-base sm:text-lg font-semibold">{caseStudy.client}</div>
            </div>
            <div>
              <div className="text-xs sm:text-sm text-gray-500 mb-1">Duration</div>
              <div className="text-base sm:text-lg font-semibold">{caseStudy.duration}</div>
            </div>
            <div>
              <div className="text-xs sm:text-sm text-gray-500 mb-1">Role</div>
              <div className="text-base sm:text-lg font-semibold">{caseStudy.role}</div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {caseStudy.stats.map((stat, idx) => {
              const IconComponent = iconMap[stat.icon];
              return (
                <div key={idx} className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6">
                  <div className="text-blue-400 mb-2 sm:mb-3">
                    {IconComponent && <IconComponent className="w-5 h-5" />}
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="relative py-8 sm:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            {/* Large Image */}
            <div 
              className="col-span-2 sm:col-span-1 sm:row-span-2 relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(0)}
            >
              <img 
                src={caseStudy.images[0].url} 
                alt={caseStudy.images[0].alt}
                className="w-full h-48 sm:h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Small Image 1 */}
            <div 
              className="relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(1)}
            >
              <img 
                src={caseStudy.images[1].url} 
                alt={caseStudy.images[1].alt}
                className="w-full h-32 sm:h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Small Image 2 with Overlay */}
            <div 
              className="relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(2)}
            >
              <img 
                src={caseStudy.images[2].url} 
                alt={caseStudy.images[2].alt}
                className="w-full h-32 sm:h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">+{caseStudy.images.length - 3}</div>
                  <div className="text-xs sm:text-sm text-gray-300">More Images</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-20">
          
          {/* The Challenge */}
          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-1 h-8 sm:h-12 bg-blue-500 rounded-full" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">The Challenge</h2>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          {/* The Solution */}
          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-1 h-8 sm:h-12 bg-blue-500 rounded-full" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">The Solution</h2>
            </div>
            <div className="space-y-6 sm:space-y-8">
              {caseStudy.solution.map((step, idx) => (
                <div key={idx} className="relative pl-6 sm:pl-8 border-l-2 border-white/10">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full" />
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-1 h-8 sm:h-12 bg-blue-500 rounded-full" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Technologies Used</h2>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {caseStudy.technologies.map((tech, idx) => (
                <span key={idx} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs sm:text-sm text-blue-400 font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* The Outcome */}
          <div>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-1 h-8 sm:h-12 bg-blue-500 rounded-full" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">The Outcome</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {caseStudy.outcomes.map((outcome, idx) => (
                <div key={idx} className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <div className="flex items-start gap-3 mb-3 sm:mb-4">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-1" />
                    <h3 className="text-base sm:text-lg md:text-xl font-bold">{outcome.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{outcome.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20 rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">Impact Metrics</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {caseStudy.metrics.map((metric, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-1 sm:mb-2">{metric.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Takeaway */}
          <div className="bg-gradient-to-br from-white/5 to-white/0 border-l-4 border-blue-500 rounded-r-xl sm:rounded-r-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">{caseStudy.keyTakeaway.title}</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed italic">
              &quot;{caseStudy.keyTakeaway.description}&quot;
            </p>
          </div>

          {/* CTA */}
          <div className="text-center pt-8 sm:pt-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Need Similar Expertise?</h3>
            <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
              I build and recover production systems for organizations that can&apos;t afford downtime.
            </p>
            <a 
              href="/#contact"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 rounded-xl transition-all hover:scale-105 font-medium text-sm sm:text-base"
            >
              Let&apos;s Work Together
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-4 p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Image */}
          <div className="max-w-6xl w-full">
            <img
              src={caseStudy.images[currentImageIndex].url}
              alt={caseStudy.images[currentImageIndex].alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg sm:rounded-xl"
            />
            <div className="text-center mt-4 text-sm sm:text-base text-gray-400">
              {currentImageIndex + 1} / {caseStudy.images.length}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 sm:py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-xs sm:text-sm text-gray-500">
          © 2025 All rights reserved • Kano State, Nigeria
        </div>
      </footer>
    </div>
  );
};

export default CaseStudyPage;