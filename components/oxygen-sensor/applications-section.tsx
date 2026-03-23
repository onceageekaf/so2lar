"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { 
  Activity, 
  Droplets, 
  Car, 
  Apple, 
  Wind, 
  Factory,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  DollarSign
} from "lucide-react"

const applications = [
  {
    id: "automotive",
    icon: Car,
    title: "Automotive Exhaust Analysis",
    currentMethod: {
      name: "Zirconia lambda sensors",
      description: "Heated ceramic sensors operating at 600-800°C measure oxygen in exhaust for combustion control and emissions compliance.",
      limitations: [
        "High operating temperature requires significant power",
        "Slow warm-up time (30-60 seconds) delays accurate readings",
        "Cross-sensitivity to rich/lean exhaust conditions",
        "Ceramic elements can crack under thermal shock",
      ],
    },
    improvement: {
      description: "Room-temperature operation eliminates warm-up delays and reduces power consumption by 90%. The selective O₂ response provides accurate readings independent of CO/CO₂ levels in exhaust.",
      benefits: [
        "Instant-on operation for cold start emissions monitoring",
        "Lower power draw enables compact, distributed sensor networks",
        "Improved accuracy through true O₂ selectivity",
      ],
    },
    economics: {
      marketSize: "$2.8B",
      marketContext: "Global automotive oxygen sensor market (2023)",
      costReduction: "60-70%",
      costContext: "Manufacturing cost reduction vs. heated ceramic sensors",
      roi: "Payback in 18-24 months through reduced warranty claims and improved fuel efficiency monitoring",
    },
  },
  {
    id: "food",
    icon: Apple,
    title: "Food Spoilage Detection",
    currentMethod: {
      name: "Modified atmosphere packaging (MAP) spot checks",
      description: "Periodic destructive testing of packaged goods using benchtop analyzers to verify atmosphere integrity.",
      limitations: [
        "Sampling destroys tested packages (1-5% of production)",
        "Batch testing misses individual package failures",
        "Delays between packaging and testing allow spoilage",
        "Labor-intensive quality control process",
      ],
    },
    improvement: {
      description: "Inline monitoring of every package detects microscale leaks before products leave the facility. The ppb-level sensitivity identifies packaging failures while products are still salvageable.",
      benefits: [
        "100% package inspection vs. statistical sampling",
        "Real-time leak detection during production",
        "Extended shelf life through early intervention",
      ],
    },
    economics: {
      marketSize: "$890M",
      marketContext: "Smart packaging sensor market (projected 2028)",
      costReduction: "85%",
      costContext: "Reduction in food waste from packaging failures",
      roi: "Major retailers report $50-100M annual savings per distribution center from reduced spoilage",
    },
  },
  {
    id: "health",
    icon: Activity,
    title: "Breath Monitoring",
    currentMethod: {
      name: "Pulse oximetry and spirometry",
      description: "Optical measurement of blood oxygen saturation (SpO₂) via finger clip, and airflow volume measurement for respiratory function.",
      limitations: [
        "SpO₂ measures blood saturation, not respiratory gas exchange",
        "Cannot detect early-stage respiratory decline",
        "Motion artifacts affect pulse oximetry accuracy",
        "Spirometry requires patient effort and cooperation",
      ],
    },
    improvement: {
      description: "Direct measurement of exhaled oxygen concentration provides insight into actual gas exchange efficiency. Rapid response enables breath-by-breath analysis for continuous respiratory monitoring.",
      benefits: [
        "Direct measurement of respiratory function",
        "Passive monitoring without patient effort",
        "Early detection of gas exchange abnormalities",
      ],
    },
    economics: {
      marketSize: "$4.2B",
      marketContext: "Respiratory monitoring devices market (2024)",
      costReduction: "40%",
      costContext: "Hospital readmission reduction for COPD patients with continuous monitoring",
      roi: "Studies show remote respiratory monitoring reduces COPD readmissions by 30-40%, saving $12,000-25,000 per avoided hospitalization",
    },
  },
  {
    id: "water",
    icon: Droplets,
    title: "Water Quality Monitoring",
    currentMethod: {
      name: "Optical dissolved oxygen (DO) sensors",
      description: "Luminescence-quenching sensors measure dissolved oxygen in water bodies for environmental monitoring and aquaculture.",
      limitations: [
        "Photobleaching degrades sensor accuracy over months",
        "Biofouling on optical surfaces requires frequent cleaning",
        "Temperature compensation adds complexity",
        "High upfront cost limits deployment density",
      ],
    },
    improvement: {
      description: "The humidity-tolerant design enables reliable operation in high-moisture environments. Low cost enables dense sensor networks for comprehensive water body monitoring.",
      benefits: [
        "Reduced maintenance through fouling resistance",
        "Lower cost enables 10x deployment density",
        "Long-term stability reduces calibration frequency",
      ],
    },
    economics: {
      marketSize: "$1.2B",
      marketContext: "Water quality monitoring sensors market (2024)",
      costReduction: "75%",
      costContext: "Per-sensor cost reduction enabling dense networks",
      roi: "Aquaculture operations report 15-25% yield improvement through optimized aeration from continuous DO monitoring",
    },
  },
  {
    id: "industrial",
    icon: Factory,
    title: "Process Control",
    currentMethod: {
      name: "Paramagnetic and electrochemical analyzers",
      description: "Bench-scale instruments measure oxygen in process streams for pharmaceutical, semiconductor, and chemical manufacturing.",
      limitations: [
        "Large footprint limits in-line installation",
        "Sample conditioning required for process gases",
        "Electrochemical cells have limited lifespan",
        "High capital and maintenance costs",
      ],
    },
    improvement: {
      description: "Compact form factor enables true in-line monitoring without sample extraction. The broad temperature range covers applications from cryogenic storage to high-temperature processes.",
      benefits: [
        "In-line installation eliminates sample handling",
        "Miniaturization enables point-of-use monitoring",
        "Reduced maintenance through solid-state design",
      ],
    },
    economics: {
      marketSize: "$5.1B",
      marketContext: "Industrial gas sensors market (2024)",
      costReduction: "50%",
      costContext: "Total cost of ownership reduction over 5-year lifespan",
      roi: "Semiconductor fabs report 2-5% yield improvement from enhanced atmosphere control, worth $10-50M annually per facility",
    },
  },
  {
    id: "environmental",
    icon: Wind,
    title: "Air Quality Monitoring",
    currentMethod: {
      name: "Reference-grade analyzers and satellite data",
      description: "Fixed monitoring stations with chemiluminescence analyzers provide regulatory data; satellite observations fill spatial gaps.",
      limitations: [
        "Sparse network leaves monitoring gaps",
        "High cost ($50-100K per station) limits coverage",
        "Requires climate-controlled housing",
        "Satellite data has low spatial and temporal resolution",
      ],
    },
    improvement: {
      description: "Ultra-low power consumption enables solar-powered autonomous stations. The cost reduction allows deployment of dense monitoring networks for hyperlocal air quality data.",
      benefits: [
        "Solar-powered operation for remote locations",
        "100x cost reduction enables neighborhood-level monitoring",
        "Real-time data for air quality forecasting",
      ],
    },
    economics: {
      marketSize: "$6.5B",
      marketContext: "Air quality monitoring market (projected 2028)",
      costReduction: "95%",
      costContext: "Per-station cost reduction vs. reference-grade equipment",
      roi: "Cities report $2-5 return per $1 invested in air quality monitoring through reduced healthcare costs and improved urban planning",
    },
  },
]

export function ApplicationsSection() {
  const [activeApp, setActiveApp] = useState(applications[0])
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
    <section id="applications" className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={cn(
          "max-w-3xl mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
            Applications
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Transforming oxygen detection across industries with superior performance 
            and economics compared to existing solutions.
          </p>
        </div>

        <div className={cn(
          "grid lg:grid-cols-3 gap-8 transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Application selector */}
          <div className="lg:col-span-1 space-y-2">
            {applications.map((app) => (
              <button
                key={app.id}
                onClick={() => setActiveApp(app)}
                className={cn(
                  "w-full flex items-center gap-4 p-4 rounded-xl border transition-all text-left",
                  activeApp.id === app.id
                    ? "bg-slate-900 border-slate-900"
                    : "bg-white border-slate-200 hover:border-slate-300"
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                    activeApp.id === app.id
                      ? "bg-teal-500 text-white"
                      : "bg-slate-100 text-slate-500"
                  )}
                >
                  <app.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className={cn(
                      "font-medium truncate transition-colors",
                      activeApp.id === app.id ? "text-white" : "text-slate-900"
                    )}
                  >
                    {app.title}
                  </div>
                </div>
                <ArrowRight
                  className={cn(
                    "w-4 h-4 shrink-0 transition-all",
                    activeApp.id === app.id
                      ? "text-teal-400 translate-x-1"
                      : "text-slate-300"
                  )}
                />
              </button>
            ))}
          </div>

          {/* Application detail */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500 flex items-center justify-center">
                  <activeApp.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">{activeApp.title}</h3>
              </div>
            </div>

            {/* Current method */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                  <TrendingDown className="w-3.5 h-3.5 text-amber-600" />
                </div>
                <h4 className="font-semibold text-slate-900">Current Method: {activeApp.currentMethod.name}</h4>
              </div>
              <p className="text-slate-500 mb-4">{activeApp.currentMethod.description}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {activeApp.currentMethod.limitations.map((limitation) => (
                  <div key={limitation} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span className="text-slate-600">{limitation}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Improvement */}
            <div className="bg-teal-50 rounded-2xl border border-teal-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center">
                  <TrendingUp className="w-3.5 h-3.5 text-white" />
                </div>
                <h4 className="font-semibold text-teal-900">How This Technology Improves It</h4>
              </div>
              <p className="text-teal-800 mb-4">{activeApp.improvement.description}</p>
              <div className="space-y-2">
                {activeApp.improvement.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                    <span className="text-teal-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Techno-economic analysis */}
            <div className="bg-slate-900 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center">
                  <DollarSign className="w-3.5 h-3.5 text-white" />
                </div>
                <h4 className="font-semibold">Techno-Economic Analysis</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-semibold text-teal-400 mb-1">{activeApp.economics.marketSize}</div>
                  <div className="text-sm text-slate-400">{activeApp.economics.marketContext}</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-teal-400 mb-1">{activeApp.economics.costReduction}</div>
                  <div className="text-sm text-slate-400">{activeApp.economics.costContext}</div>
                </div>
              </div>
              <div className="p-4 bg-slate-800 rounded-xl">
                <div className="text-sm text-slate-300">{activeApp.economics.roi}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
