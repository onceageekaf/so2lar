"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

const steps = [
  {
    title: "Gold Electrode Pattern",
    description: "The process starts with a glass substrate patterned with gold interdigitated electrodes (IDE). The finger-like pattern has 200 μm gaps, optimized for measuring resistance changes.",
  },
  {
    title: "SWCNT-TiO2 Spray Coating",
    description: "A suspension of carbon nanotubes mixed with titanium dioxide particles is spray-coated onto the electrode pattern. The spray process is optimized to achieve 1-5 kΩ film resistance.",
  },
  {
    title: "Sensitizer Immobilization",
    description: "The coated device is soaked in a solution of the rhenium photosensitizer for 16 hours. The phosphonate groups on the rhenium complex naturally bind to the TiO2 surface.",
  },
  {
    title: "Final SWCNT-TiO2-Re Device",
    description: "The completed sensor shows TiO2 particles (≈300 nm diameter) attached to bundles of carbon nanotubes, with the rhenium sensitizer molecules anchored to the TiO2 surface.",
  },
]

export function Figure2Fabrication() {
  const [step, setStep] = useState(0)

  return (
    <div className="space-y-6">
      <div className="relative bg-white rounded-2xl border border-slate-200 p-6 overflow-hidden">
        <svg viewBox="0 0 500 300" className="w-full h-auto">
          <defs>
            <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1" />
            </pattern>
          </defs>

          <rect width="500" height="300" fill="url(#gridPattern)" />

          {/* Step indicator */}
          <text x="20" y="30" fill="#14b8a6" fontSize="12" fontWeight="600">
            Step {step + 1} of 4
          </text>

          {/* Glass substrate - always visible */}
          <g transform="translate(100, 180)">
            <rect x="0" y="80" width="300" height="30" fill="#bfdbfe" rx="2" opacity="0.5" />
            <text x="150" y="100" textAnchor="middle" fill="#3b82f6" fontSize="10">Glass Substrate</text>
          </g>

          {/* Step 0: Gold electrodes only */}
          {step >= 0 && (
            <g transform="translate(100, 180)" className="animate-in fade-in duration-500">
              <rect x="0" y="50" width="300" height="30" fill="#fef3c7" rx="2" />
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <rect
                  key={`elec-${i}`}
                  x={20 + i * 40}
                  y={i % 2 === 0 ? 55 : 65}
                  width="12"
                  height={i % 2 === 0 ? 22 : 12}
                  fill="#fbbf24"
                  rx="1"
                />
              ))}
              {step === 0 && (
                <text x="150" y="35" textAnchor="middle" fill="#64748b" fontSize="11">
                  Au IDE Pattern
                </text>
              )}
            </g>
          )}

          {/* Step 1: Add SWCNT-TiO2 layer */}
          {step >= 1 && (
            <g transform="translate(100, 180)" className="animate-in fade-in slide-in-from-top-4 duration-500">
              <rect x="0" y="10" width="300" height="40" fill="#e2e8f0" rx="2" />
              {/* Nanotubes */}
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <path
                  key={`cnt-${i}`}
                  d={`M ${15 + i * 35} 15 Q ${25 + i * 35} 30 ${15 + i * 35} 45`}
                  stroke="#475569"
                  strokeWidth="3"
                  fill="none"
                />
              ))}
              {/* TiO2 particles */}
              {[0, 1, 2, 3, 4].map((i) => (
                <circle
                  key={`tio2-${i}`}
                  cx={45 + i * 55}
                  cy={30}
                  r="12"
                  fill="#cbd5e1"
                  stroke="#94a3b8"
                />
              ))}
              {step === 1 && (
                <>
                  <text x="150" y="-5" textAnchor="middle" fill="#64748b" fontSize="11">
                    SWCNT-TiO2 Film
                  </text>
                  {/* Spray visualization */}
                  <g transform="translate(150, -60)">
                    <rect x="-15" y="0" width="30" height="20" fill="#0f172a" rx="3" />
                    <path d="M -10 20 L -20 50 L 20 50 L 10 20 Z" fill="#94a3b8" opacity="0.3" />
                    <text x="0" y="14" textAnchor="middle" fill="white" fontSize="8">Spray</text>
                  </g>
                </>
              )}
            </g>
          )}

          {/* Step 2: Soaking in sensitizer */}
          {step >= 2 && (
            <g transform="translate(100, 180)" className="animate-in fade-in duration-500">
              {step === 2 && (
                <>
                  {/* Solution visualization */}
                  <rect x="-20" y="-30" width="340" height="100" fill="#99f6e4" opacity="0.2" rx="4" />
                  <text x="150" y="-40" textAnchor="middle" fill="#14b8a6" fontSize="11">
                    Soaking in Re-sensitizer solution (16h)
                  </text>
                  {/* Floating sensitizer molecules */}
                  {[0, 1, 2, 3].map((i) => (
                    <g key={`float-${i}`} className="animate-bounce" style={{ animationDelay: `${i * 200}ms`, animationDuration: '2s' }}>
                      <circle cx={30 + i * 80} cy={-10} r="8" fill="#14b8a6" opacity="0.6" />
                      <text x={30 + i * 80} y={-7} textAnchor="middle" fill="white" fontSize="7">Re</text>
                    </g>
                  ))}
                </>
              )}
            </g>
          )}

          {/* Step 3: Final device with sensitizers attached */}
          {step >= 3 && (
            <g transform="translate(100, 180)" className="animate-in fade-in duration-500">
              {/* Sensitizer molecules on TiO2 */}
              {[0, 1, 2, 3, 4].map((i) => (
                <g key={`sens-${i}`}>
                  <circle cx={45 + i * 55} cy={5} r="10" fill="#14b8a6" />
                  <text x={45 + i * 55} y={9} textAnchor="middle" fill="white" fontSize="8" fontWeight="600">Re</text>
                  <line x1={45 + i * 55} y1={15} x2={45 + i * 55} y2={18} stroke="#0d9488" strokeWidth="2" />
                </g>
              ))}
              <text x="150" y="-15" textAnchor="middle" fill="#64748b" fontSize="11">
                Complete SWCNT-TiO2-Re Sensor
              </text>
            </g>
          )}

          {/* Labels */}
          <g transform="translate(430, 200)">
            <rect x="0" y="0" width="60" height="80" fill="#f8fafc" rx="4" stroke="#e2e8f0" />
            <text x="30" y="20" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="500">Legend</text>
            <rect x="10" y="30" width="12" height="8" fill="#fbbf24" rx="1" />
            <text x="27" y="38" fill="#64748b" fontSize="8">Au</text>
            <circle cx="16" cy="50" r="5" fill="#cbd5e1" stroke="#94a3b8" />
            <text x="27" y="53" fill="#64748b" fontSize="8">TiO2</text>
            <circle cx="16" cy="68" r="5" fill="#14b8a6" />
            <text x="27" y="71" fill="#64748b" fontSize="8">Re</text>
          </g>
        </svg>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
            step === 0 
              ? "text-slate-300 cursor-not-allowed" 
              : "text-slate-600 hover:bg-slate-100"
          )}
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>
        
        <div className="flex gap-2">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              className={cn(
                "w-3 h-3 rounded-full transition-colors",
                step === i ? "bg-teal-500" : "bg-slate-200 hover:bg-slate-300"
              )}
            />
          ))}
        </div>

        <button
          onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
          disabled={step === steps.length - 1}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
            step === steps.length - 1 
              ? "text-slate-300 cursor-not-allowed" 
              : "text-slate-600 hover:bg-slate-100"
          )}
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Step description */}
      <div className="p-4 bg-white rounded-xl border border-slate-200">
        <h4 className="font-semibold text-slate-900 mb-2">{steps[step].title}</h4>
        <p className="text-sm text-slate-600 leading-relaxed">{steps[step].description}</p>
      </div>
    </div>
  )
}
