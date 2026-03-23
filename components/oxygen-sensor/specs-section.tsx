"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Check, X } from "lucide-react"

const specifications = [
  { label: "Detection Range", value: "ppb to 20% O₂" },
  { label: "Lower Detection Limit", value: "<1 ppm (2.2 ppm @ 1 min)" },
  { label: "Response Time", value: "6 seconds (max rate)" },
  { label: "Recovery Time", value: "~9 minutes (N₂ purge)" },
  { label: "Operating Temperature", value: "-50°C to 200°C" },
  { label: "Humidity Tolerance", value: "0-80% RH" },
  { label: "Power Consumption", value: "<0.6 W" },
  { label: "Light Source", value: "516 nm green LED" },
  { label: "Shelf Stability", value: ">3 months (ambient)" },
]

const selectivityData = [
  { gas: "O₂ (Oxygen)", response: true },
  { gas: "N₂O (Nitrous Oxide)", response: false },
  { gas: "CO₂ (Carbon Dioxide)", response: false },
  { gas: "H₂ (Hydrogen)", response: false },
  { gas: "CH₄ (Methane)", response: false },
  { gas: "CO (Carbon Monoxide)", response: false },
  { gas: "C₂H₄ (Ethylene)", response: false },
]

export function SpecsSection() {
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
    <section className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={cn(
          "max-w-3xl mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
            Technical specifications
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Validated performance metrics from laboratory testing, demonstrating 
            industry-leading sensitivity and selectivity.
          </p>
        </div>

        <div className={cn(
          "grid lg:grid-cols-2 gap-12 transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Specifications */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Performance Metrics</h3>
            <div className="space-y-4">
              {specifications.map((spec) => (
                <div key={spec.label} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                  <span className="text-slate-500">{spec.label}</span>
                  <span className="font-medium text-slate-900">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Selectivity */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Gas Selectivity</h3>
            <p className="text-sm text-slate-500 mb-6">
              No significant response to interferants at 1000 ppm concentrations.
            </p>
            <div className="space-y-3">
              {selectivityData.map((item) => (
                <div
                  key={item.gas}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-xl",
                    item.response ? "bg-teal-50" : "bg-slate-50"
                  )}
                >
                  <span className={cn(
                    "font-medium",
                    item.response ? "text-teal-900" : "text-slate-600"
                  )}>
                    {item.gas}
                  </span>
                  {item.response ? (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-teal-600">Responds</span>
                      <Check className="w-5 h-5 text-teal-500" />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-400">No response</span>
                      <X className="w-5 h-5 text-slate-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-4">
              No signal attenuation after interferant exposure, confirming resistance to selector poisoning.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
