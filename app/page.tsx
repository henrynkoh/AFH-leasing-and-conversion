'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 7);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: '🎯',
      title: 'Top 3 Scenarios',
      description: 'Compare comprehensive solutions with detailed analysis',
      color: 'from-blue-500 to-cyan-500',
      link: '/scenarios'
    },
    {
      icon: '🏠',
      title: 'Floor Plan Analysis',
      description: 'Interactive room-by-room AFH compliance assessment',
      color: 'from-purple-500 to-pink-500',
      link: '/floor-plan'
    },
    {
      icon: '📅',
      title: 'Timeline & Budget',
      description: 'Daily activity breakdown with cost-sharing calculations',
      color: 'from-green-500 to-emerald-500',
      link: '/timeline'
    },
    {
      icon: '📢',
      title: 'Marketing Materials',
      description: 'Ready-to-use templates for 9 platforms',
      color: 'from-orange-500 to-red-500',
      link: '/marketing'
    },
    {
      icon: '🔍',
      title: 'Provider Search',
      description: 'Comprehensive resources and screening tools',
      color: 'from-indigo-500 to-purple-500',
      link: '/providers'
    },
    {
      icon: '📋',
      title: 'Execution Plan',
      description: 'Detailed step-by-step execution plan with daily tasks',
      color: 'from-orange-500 to-red-500',
      link: '/execution-plan'
    },
    {
      icon: '📊',
      title: 'Complete Analysis',
      description: 'Full documentation and planning tools',
      color: 'from-teal-500 to-blue-500',
      link: '/scenarios'
    }
  ];

  const stats = [
    { number: '3-8', label: 'Bed Capacity' },
    { number: '2,100', label: 'Square Feet' },
    { number: '$35K-$100K+', label: 'Conversion Range' },
    { number: '90-210', label: 'Days Timeline' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div 
            className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="text-center">
            {/* Animated Badge */}
            <div className="inline-block mb-6 animate-pulse">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold shadow-lg">
                🏠 AFH Property Advisor
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                1713 Winterwood Drive
              </span>
              <br />
              <span className="text-white">Centralia, WA 98531</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
              Complete AFH Property Analysis & Provider Search Platform
            </p>
            <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto">
              Find optimal AFH providers, plan property conversion, and execute successful lease agreements
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link 
                href="/scenarios"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
              >
                Explore Scenarios →
              </Link>
              <Link 
                href="/floor-plan"
                className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-full font-semibold text-lg border-2 border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
              >
                View Floor Plan
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative py-20 bg-gradient-to-b from-slate-900/50 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Comprehensive <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Tools & Resources</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Everything you need to successfully lease your property to AFH providers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Link
                key={index}
                href={feature.link}
                className={`group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br ${feature.color} transform hover:scale-105 transition-all duration-300 shadow-2xl ${
                  activeFeature === index ? 'ring-4 ring-white/50 scale-105' : ''
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/90 text-lg">{feature.description}</p>
                  <div className="mt-4 text-white/80 group-hover:text-white transition-colors">
                    Learn more →
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Property Highlights */}
      <div className="relative py-20 bg-gradient-to-b from-slate-900 to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Property <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Highlights</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">✅</div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-1">3-8 Bed Capacity Options</h4>
                      <p className="text-blue-200">Current: 3 beds. Conversion options: 5, 6, or 8 beds with garage conversion</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">✅</div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-1">2,100 Square Feet</h4>
                      <p className="text-blue-200">Single-level layout ideal for AFH operations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">✅</div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-1">Built in 2005</h4>
                      <p className="text-blue-200">Modern construction with vaulted ceilings and skylights</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">✅</div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-1">Prime Location</h4>
                      <p className="text-blue-200">Centralia, WA - Growing AFH market</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">✅</div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-1">2 Full Bathrooms</h4>
                      <p className="text-blue-200">Both on main level, ready for ADA modifications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">✅</div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-1">3-Car Garage</h4>
                      <p className="text-blue-200">Attached garage with RV parking available</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">✅</div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-1">Special Features</h4>
                      <p className="text-blue-200">Patio, hot tub/spa, territorial view, cul-de-sac location</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="relative py-20 bg-gradient-to-b from-blue-900/20 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Started</span>
            </h2>
            <p className="text-xl text-blue-200">Navigate to any section to begin</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 max-w-7xl mx-auto">
            <Link href="/scenarios" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-white font-semibold text-sm">Scenarios</div>
            </Link>
            <Link href="/floor-plan" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all">
              <div className="text-3xl mb-2">🏠</div>
              <div className="text-white font-semibold text-sm">Floor Plan</div>
            </Link>
            <Link href="/timeline" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all">
              <div className="text-3xl mb-2">📅</div>
              <div className="text-white font-semibold text-sm">Timeline</div>
            </Link>
            <Link href="/marketing" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all">
              <div className="text-3xl mb-2">📢</div>
              <div className="text-white font-semibold text-sm">Marketing</div>
            </Link>
            <Link href="/providers" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all">
              <div className="text-3xl mb-2">🔍</div>
              <div className="text-white font-semibold text-sm">Providers</div>
            </Link>
            <Link href="/execution-plan" className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-6 text-center border-2 border-orange-400/30 hover:bg-orange-500/30 transform hover:scale-105 transition-all">
              <div className="text-3xl mb-2">📋</div>
              <div className="text-white font-semibold text-sm">실행방안</div>
              <div className="text-white/80 text-xs mt-1">Execution Plan</div>
            </Link>
            <Link href="/" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all">
              <div className="text-3xl mb-2">📊</div>
              <div className="text-white font-semibold text-sm">Dashboard</div>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative py-12 bg-slate-900 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-200 mb-2">AFH Property Advisor</p>
          <p className="text-blue-300/80 text-sm">1713 Winterwood Drive, Centralia, WA 98531 • Complete AFH Analysis Platform</p>
        </div>
      </div>
    </div>
  );
}
