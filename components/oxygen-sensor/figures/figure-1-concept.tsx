"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const components = [
  {
    id: "light",
    label: "Visible Light (hv)",
    description: "Green LED light (516 nm wavelength) activates the sensor. Unlike UV-based sensors, this low-energy visible light is safe, inexpensive, and requires minimal power.",
  },
  {
    id: "sensitizer",
    label: "Re Photosensitizer",
    description: "A rhenium-based molecule [(Pbpy)(CO)3ReBr] that absorbs visible light. It's attached to TiO2 via phosphonate groups - the same anchoring chemistry used in dye-sensitized solar cells.",
  },
  {
    id: "tio2",
    label: "TiO2 Particles",
    description: "Titanium dioxide nanoparticles (~300 nm diameter) serve as an intermediate layer. They accept electrons from the excited sensitizer and transfer them to the carbon nanotubes.",
  },
  {
    id: "swcnt",
    label: "Carbon Nanotubes",
    description: "Single-walled carbon nanotubes (SWCNTs) form the conductive backbone. As p-type semiconductors, their resistance changes when electrons are injected into them.",
  },
  {
    id: "electrode",
    label: "Gold Electrodes",
    description: "Interdigitated gold electrodes (200 μm gaps) measure the resistance of the nanotube network. The finger-like pattern maximizes the sensing area while maintaining low resistance.",
  },
  {
    id: "o2",
    label: "Oxygen (O₂)",
    description: "When oxygen molecules are present, they trap photoexcited electrons at the TiO2 surface. This prevents electron injection and creates the measurable resistance change (ΔR).",
  },
]

export function Figure1Concept() {
  const [activeComponent, setActiveComponent] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div className="relative bg-white rounded-2xl border border-slate-200 p-6 overflow-hidden">
        <svg viewBox="0 0 500 350" className="w-full h-auto">
          <defs>
            <linearGradient id="lightCone" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Light source and rays */}
          <g 
            className={cn("cursor-pointer transition-opacity", activeComponent && activeComponent !== "light" && "opacity-30")}
            onMouseEnter={() => setActiveComponent("light")}
            onMouseLeave={() => setActiveComponent(null)}
          >
            <rect x="200" y="10" width="100" height="30" fill="#0f172a" rx="4" />
            <text x="250" y="30" textAnchor="middle" fill="white" fontSize="12" fontWeight="500">
              LED 516nm
            </text>
            <path d="M 210 40 L 180 90 L 320 90 L 290 40 Z" fill="url(#lightCone)" />
            {/* Photon waves */}
            {[0, 1, 2].map((i) => (
              <g key={i}>
                <path
                  d={`M ${210 + i * 35} 55 q 8 -6 16 0 t 16 0`}
                  fill="none"
                  stroke="#14b8a6"
                  strokeWidth="2"
                  opacity="0.8"
                />
                <circle cx={230 + i * 35} cy={70} r="4" fill="#14b8a6" filter="url(#glow)" />
              </g>
            ))}
          </g>

          {/* Sensitizer layer */}
          <g 
            className={cn("cursor-pointer transition-opacity", activeComponent && activeComponent !== "sensitizer" && "opacity-30")}
            onMouseEnter={() => setActiveComponent("sensitizer")}
            onMouseLeave={() => setActiveComponent(null)}
          >
            <text x="80" y="115" fill="#64748b" fontSize="11" textAnchor="end">
              Photosensitizer
            </text>
            {[0, 1, 2, 3, 4].map((i) => (
              <g key={`re-${i}`}>
                <circle cx={130 + i * 65} cy={110} r="20" fill="#14b8a6" />
                <text x={130 + i * 65} y={115} textAnchor="middle" fill="white" fontSize="12" fontWeight="700">
                  Re
                </text>
                {/* Ligands */}
                <line x1={113 + i * 65} y1={98} x2={105 + i * 65} y2={90} stroke="#0d9488" strokeWidth="2" />
                <line x1={147 + i * 65} y1={98} x2={155 + i * 65} y2={90} stroke="#0d9488" strokeWidth="2" />
              </g>
            ))}
          </g>

          {/* TiO2 layer */}
          <g 
            className={cn("cursor-pointer transition-opacity", activeComponent && activeComponent !== "tio2" && "opacity-30")}
            onMouseEnter={() => setActiveComponent("tio2")}
            onMouseLeave={() => setActiveComponent(null)}
          >
            <text x="80" y="170" fill="#64748b" fontSize="11" textAnchor="end">
              TiO2
            </text>
            <rect x="90" y="140" width="330" height="55" fill="#e2e8f0" rx="6" />
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <circle key={`tio2-${i}`} cx={120 + i * 55} cy={167} r="20" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
            ))}
          </g>

          {/* SWCNT layer */}
          <g 
            className={cn("cursor-pointer transition-opacity", activeComponent && activeComponent !== "swcnt" && "opacity-30")}
            onMouseEnter={() => setActiveComponent("swcnt")}
            onMouseLeave={() => setActiveComponent(null)}
          >
            <text x="80" y="230" fill="#64748b" fontSize="11" textAnchor="end">
              SWCNTs
            </text>
            <rect x="90" y="200" width="330" height="50" fill="#f1f5f9" rx="6" />
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <path
                key={`cnt-${i}`}
                d={`M ${100 + i * 40} 205 Q ${115 + i * 40} 225 ${100 + i * 40} 245`}
                stroke="#334155"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            ))}
          </g>

          {/* Electrodes */}
          <g 
            className={cn("cursor-pointer transition-opacity", activeComponent && activeComponent !== "electrode" && "opacity-30")}
            onMouseEnter={() => setActiveComponent("electrode")}
            onMouseLeave={() => setActiveComponent(null)}
          >
            <text x="80" y="290" fill="#64748b" fontSize="11" textAnchor="end">
              Au Electrodes
            </text>
            <rect x="90" y="260" width="330" height="40" fill="#fef3c7" rx="4" stroke="#fbbf24" />
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <rect
                key={`elec-${i}`}
                x={105 + i * 40}
                y={i % 2 === 0 ? 265 : 280}
                width="14"
                height={i % 2 === 0 ? 28 : 15}
                fill="#fbbf24"
                rx="2"
              />
            ))}
          </g>

          {/* O2 molecules */}
          <g 
            className={cn("cursor-pointer transition-opacity", activeComponent && activeComponent !== "o2" && "opacity-30")}
            onMouseEnter={() => setActiveComponent("o2")}
            onMouseLeave={() => setActiveComponent(null)}
          >
            {[0, 1].map((i) => (
              <g key={`o2-${i}`} transform={`translate(${430 + i * 30}, ${120 + i * 40})`}>
                <circle cx="0" cy="0" r="10" fill="#ef4444" />
                <circle cx="15" cy="0" r="10" fill="#ef4444" />
                <line x1="0" y1="0" x2="15" y2="0" stroke="#dc2626" strokeWidth="4" />
                <text x="7" y="4" textAnchor="middle" fill="white" fontSize="9" fontWeight="600">
                  O₂
                </text>
              </g>
            ))}
          </g>

          {/* ΔR output */}
          <g transform="translate(440, 260)">
            <rect x="0" y="0" width="50" height="40" fill="#0f172a" rx="4" />
            <text x="25" y="18" textAnchor="middle" fill="#14b8a6" fontSize="10">ΔR</text>
            <text x="25" y="32" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">Signal</text>
          </g>
        </svg>
      </div>

      {/* Interactive legend */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {components.map((comp) => (
          <button
            key={comp.id}
            className={cn(
              "p-3 rounded-xl border text-left transition-all text-sm",
              activeComponent === comp.id
                ? "bg-teal-50 border-teal-200 text-teal-900"
                : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
            )}
            onMouseEnter={() => setActiveComponent(comp.id)}
            onMouseLeave={() => setActiveComponent(null)}
          >
            {comp.label}
          </button>
        ))}
      </div>

      {/* Description panel */}
      <div className={cn(
        "p-4 rounded-xl bg-slate-50 border border-slate-200 transition-all min-h-[80px]",
        activeComponent ? "opacity-100" : "opacity-50"
      )}>
        <p className="text-sm text-slate-600 leading-relaxed">
          {activeComponent 
            ? components.find(c => c.id === activeComponent)?.description
            : "Hover over a component to learn more about its role in the sensor."}
        </p>
      </div>
    </div>
  )
}
