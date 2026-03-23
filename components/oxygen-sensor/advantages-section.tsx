"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { 
  Zap, 
  Droplets, 
  Target, 
  Clock, 
  Thermometer, 
  DollarSign 
} from "lucide-react"

const advantages = [
  {
    icon: Zap,
    title: "Ultra-Low Power",
    description:
      "Operating at less than 0.6W enables battery-powered remote deployment without frequent recharging.",
    metric: "<0.6W",
  },
  {
    icon: Target,
    title: "Exceptional Selectivity",
    description:
      "Exclusive response to O₂ with no interference from CO₂, H₂, CH₄, CO, or N₂O - eliminating false positives.",
    metric: "O₂ only",
  },
  {
    icon: Droplets,
    title: "Humidity Tolerant",
    description:
      "Stable performance across 0-80% relative humidity, solving a major challenge in nanotube-based sensing.",
    metric: "0-80% RH",
  },
  {
    icon: Clock,
    title: "Rapid Response",
    description:
      "Maximum response rate achieved within 6 seconds of exposure, enabling real-time monitoring.",
    metric: "6 sec",
  },
  {
    icon: Thermometer,
    title: "Wide Temperature Range",
    description:
      "Operation from -50°C to 200°C opens applications from cold chain monitoring to exhaust analysis.",
    metric: "-50 to 200°C",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description:
      "Simple spray-coating fabrication and solution-phase sensitization enable scalable, low-cost manufacturing.",
    metric: "Scalable",
  },
]

export function AdvantagesSection() {
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
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={cn(
          "max-w-3xl mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
            Key advantages
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Addressing the fundamental limitations of existing oxygen sensing 
            technologies through innovative light-activated detection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className={cn(
                "group p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-all duration-500 hover:border-teal-200 hover:bg-teal-50/50",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:border-teal-200 group-hover:bg-teal-50 transition-colors">
                  <advantage.icon className="w-6 h-6 text-slate-600 group-hover:text-teal-600 transition-colors" />
                </div>
                <div className="text-right">
                  <div className="text-xl font-semibold text-teal-600">{advantage.metric}</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{advantage.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
