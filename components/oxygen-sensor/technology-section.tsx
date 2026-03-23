"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Check, X, AlertTriangle } from "lucide-react"

const existingMethods = [
  {
    name: "Metal Oxide Sensors",
    description: "Heated semiconductor films that change resistance when exposed to gases",
    limitations: [
      "Require 300-500°C operating temperatures",
      "High power consumption (2-5W)",
      "Poor selectivity to oxygen specifically",
      "Affected by humidity changes",
    ],
  },
  {
    name: "Electrochemical Sensors",
    description: "Liquid electrolyte cells that measure oxygen reduction current",
    limitations: [
      "Limited lifespan (1-2 years typically)",
      "Sensitive to humidity and temperature",
      "Electrolyte can dry out or leak",
      "Require periodic calibration",
    ],
  },
  {
    name: "Optical / Luminescent Sensors",
    description: "Fluorescent dyes that change emission based on oxygen quenching",
    limitations: [
      "Photobleaching degrades sensor over time",
      "Complex and expensive optical setups",
      "Temperature compensation required",
      "Slower response times",
    ],
  },
]

const ourAdvantages = [
  { feature: "Operating temperature", ours: "Room temperature", others: "300-500°C (MOS)" },
  { feature: "Power consumption", ours: "<0.6W", others: "2-5W (MOS)" },
  { feature: "Selectivity", ours: "O₂ only", others: "Multiple gases" },
  { feature: "Humidity tolerance", ours: "0-80% RH", others: "Sensitive" },
  { feature: "Detection limit", ours: "ppb-level", others: "ppm-level" },
  { feature: "Lifespan", ours: ">3 months stable", others: "1-2 years (EC)" },
]

export function TechnologySection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="technology" className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className={cn(
          "max-w-3xl mb-20 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
            The technology
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            A dye-sensitized chemiresistive sensor that combines carbon nanotubes, 
            titanium dioxide, and a molecular photosensitizer to detect oxygen through 
            a light-activated electron transfer mechanism.
          </p>
        </div>

        {/* What is it */}
        <div className={cn(
          "grid lg:grid-cols-2 gap-12 mb-24 transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">What is it?</h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              Inspired by dye-sensitized solar cells, this sensor flips a problem into a solution. 
              In solar cells, oxygen degrades performance by trapping electrons. We harness this 
              exact mechanism to detect oxygen with exceptional precision.
            </p>
            <p className="text-slate-500 leading-relaxed">
              The sensor consists of a thin film of single-walled carbon nanotubes coated with 
              TiO₂ nanoparticles and sensitized with a rhenium-based molecular dye. Under visible 
              light, the dye injects electrons into the nanotube network. When oxygen is present, 
              it traps these electrons, creating a measurable resistance change.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-6">Core Components</h4>
            <div className="space-y-4">
              {[
                { name: "SWCNT Network", desc: "Single-walled carbon nanotube conductive layer" },
                { name: "TiO₂ Nanoparticles", desc: "Titanium dioxide electron acceptor" },
                { name: "Re Photosensitizer", desc: "[(Pbpy)(CO)₃ReBr] molecular dye" },
                { name: "Green LED", desc: "516 nm visible light excitation source" },
              ].map((component) => (
                <div key={component.name} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50">
                  <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 shrink-0" />
                  <div>
                    <div className="font-medium text-slate-900">{component.name}</div>
                    <div className="text-sm text-slate-500">{component.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Existing methods */}
        <div className={cn(
          "mb-24 transition-all duration-700 delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h3 className="text-2xl font-semibold text-slate-900 mb-8">What exists today?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {existingMethods.map((method) => (
              <div key={method.name} className="bg-white rounded-2xl border border-slate-200 p-6">
                <h4 className="font-semibold text-slate-900 mb-2">{method.name}</h4>
                <p className="text-sm text-slate-500 mb-4">{method.description}</p>
                <div className="space-y-2">
                  {method.limitations.map((limitation) => (
                    <div key={limitation} className="flex items-start gap-2 text-sm">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                      <span className="text-slate-600">{limitation}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why this is better */}
        <div className={cn(
          "transition-all duration-700 delay-400",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h3 className="text-2xl font-semibold text-slate-900 mb-8">Why this is better</h3>
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-4 bg-slate-50 border-b border-slate-200">
              <div className="text-sm font-medium text-slate-500">Feature</div>
              <div className="text-sm font-medium text-teal-600">This Technology</div>
              <div className="text-sm font-medium text-slate-500">Existing Solutions</div>
            </div>
            {ourAdvantages.map((row, index) => (
              <div 
                key={row.feature} 
                className={cn(
                  "grid grid-cols-3 gap-4 p-4",
                  index !== ourAdvantages.length - 1 && "border-b border-slate-100"
                )}
              >
                <div className="text-slate-600">{row.feature}</div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-500" />
                  <span className="text-slate-900 font-medium">{row.ours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <X className="w-4 h-4 text-slate-300" />
                  <span className="text-slate-400">{row.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
