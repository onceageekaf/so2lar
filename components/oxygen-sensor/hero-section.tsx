"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-white" />
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-100/50 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>
      
      <div 
        className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
          <span className="text-slate-600 text-sm font-medium">ETH Zurich Innovation</span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-slate-900 mb-4 leading-tight tracking-tight">
          So<sub className="text-5xl md:text-6xl lg:text-7xl font-semibold">2</sub>LAR
        </h1>

        <p className="text-xl md:text-2xl font-medium text-teal-600 mb-6 tracking-wide">
          Light-activated O<sub className="text-lg">2</sub> sensor
        </p>

        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-4 leading-relaxed text-pretty">
          A breakthrough sensor that works like a solar cell — except instead of converting
          sunlight into electricity, it converts light into an oxygen-sensing signal. Shine
          a light, detect O<sub>2</sub> down to parts-per-billion. No heat, no high voltage,
          no warm-up time.
        </p>

        <p className="text-base text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Just as a solar panel harvests photons to drive electrons, So<sub>2</sub>LAR
          harvests visible light to drive a precisely calibrated electrical response
          that tells you exactly how much oxygen is present.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Button 
            size="lg" 
            className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-8 h-12 rounded-xl"
            onClick={() => document.getElementById("technology")?.scrollIntoView({ behavior: "smooth" })}
          >
            Learn how it works
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-slate-200 text-slate-700 hover:bg-slate-50 bg-transparent h-12 rounded-xl"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Licensing inquiry
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-teal-200 text-teal-700 hover:bg-teal-50 bg-transparent h-12 rounded-xl"
            asChild
          >
            <Link href="/technical-details">
              <FileText className="w-4 h-4 mr-2" />
              Technical details
            </Link>
          </Button>
        </div>
        
        {/* Key metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: "<1 ppm", label: "Detection limit" },
            { value: "<0.6W", label: "Power draw" },
            { value: "6 sec", label: "Response time" },
            { value: "0-80%", label: "Humidity tolerance" },
          ].map((metric, index) => (
            <div 
              key={metric.label} 
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-semibold text-slate-900 mb-1">{metric.value}</div>
              <div className="text-sm text-slate-400">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
