"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const energyLevels = [
  {
    id: "re-excited",
    label: "Re* (Excited)",
    value: -0.93,
    position: 80,
    color: "#14b8a6",
    description: "When light hits the rhenium sensitizer, electrons are excited to this high-energy state. From here, they can 'fall down' into lower energy levels.",
  },
  {
    id: "tio2-cb",
    label: "TiO₂ CB",
    value: -0.5,
    position: 140,
    color: "#94a3b8",
    description: "The TiO₂ conduction band sits below the excited Re state. Electrons naturally flow downhill from the sensitizer into this level.",
  },
  {
    id: "swcnt",
    label: "SWCNTs",
    value: -0.2,
    position: 180,
    color: "#475569",
    description: "The carbon nanotubes have an even lower energy level, so electrons continue flowing down into them. This injection changes the nanotube resistance.",
  },
  {
    id: "re-ground",
    label: "Re (Ground)",
    value: 1.63,
    position: 280,
    color: "#14b8a6",
    description: "The ground state of the rhenium sensitizer. After giving up an electron, it can extract one from water molecules on the surface to reset.",
  },
  {
    id: "tio2-vb",
    label: "TiO₂ VB",
    value: 2.7,
    position: 320,
    color: "#94a3b8",
    description: "The TiO₂ valence band is too low to participate in visible light absorption, which is why the sensitizer is needed.",
  },
]

export function EnergyDiagram() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)
  const [showElectronFlow, setShowElectronFlow] = useState(true)

  return (
    <div className="space-y-6">
      <div className="relative bg-white rounded-2xl border border-slate-200 p-6">
        <svg viewBox="0 0 500 380" className="w-full h-auto">
          {/* Background */}
          <rect width="500" height="380" fill="#fafafa" rx="8" />

          {/* Title */}
          <text x="250" y="25" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="500">
            Electronic Band Alignment
          </text>

          {/* Y axis - Energy scale */}
          <line x1="60" y1="50" x2="60" y2="350" stroke="#94a3b8" strokeWidth="2" />
          <text x="25" y="200" textAnchor="middle" fill="#64748b" fontSize="11" transform="rotate(-90, 25, 200)">
            Energy (V vs NHE)
          </text>
          
          {/* Energy scale markers */}
          {[-1, 0, 1, 2, 3].map((val) => {
            const y = 120 + val * 60
            return (
              <g key={val}>
                <line x1="55" y1={y} x2="65" y2={y} stroke="#94a3b8" strokeWidth="1" />
                <text x="45" y={y + 4} textAnchor="end" fill="#64748b" fontSize="9">
                  {val}
                </text>
              </g>
            )
          })}

          {/* Component columns */}
          {/* Rhenium column */}
          <g transform="translate(100, 0)">
            <rect x="0" y="45" width="80" height="20" fill="#14b8a6" opacity="0.2" rx="4" />
            <text x="40" y="60" textAnchor="middle" fill="#0d9488" fontSize="11" fontWeight="600">
              [(Pbpy)(CO)₃ReBr]
            </text>
          </g>

          {/* TiO2 column */}
          <g transform="translate(220, 0)">
            <rect x="0" y="45" width="80" height="20" fill="#94a3b8" opacity="0.2" rx="4" />
            <text x="40" y="60" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="600">
              TiO₂
            </text>
          </g>

          {/* SWCNT column */}
          <g transform="translate(340, 0)">
            <rect x="0" y="45" width="80" height="20" fill="#475569" opacity="0.2" rx="4" />
            <text x="40" y="60" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="600">
              SWCNTs
            </text>
          </g>

          {/* Energy levels */}
          
          {/* Re excited state */}
          <g 
            className={cn("cursor-pointer transition-opacity", selectedLevel && selectedLevel !== "re-excited" && "opacity-30")}
            onMouseEnter={() => setSelectedLevel("re-excited")}
            onMouseLeave={() => setSelectedLevel(null)}
          >
            <line x1="100" y1="80" x2="180" y2="80" stroke="#14b8a6" strokeWidth="3" />
            <text x="140" y="72" textAnchor="middle" fill="#0d9488" fontSize="9">
              S*/S⁺ (−0.93V)
            </text>
          </g>

          {/* Light absorption arrow */}
          <g>
            <line x1="140" y1="280" x2="140" y2="90" stroke="#14b8a6" strokeWidth="2" markerEnd="url(#arrowUp)" />
            <text x="125" y="185" fill="#14b8a6" fontSize="9" transform="rotate(-90, 125, 185)">
              hv (516 nm)
            </text>
          </g>

          {/* TiO2 conduction band */}
          <g 
            className={cn("cursor-pointer transition-opacity", selectedLevel && selectedLevel !== "tio2-cb" && "opacity-30")}
            onMouseEnter={() => setSelectedLevel("tio2-cb")}
            onMouseLeave={() => setSelectedLevel(null)}
          >
            <line x1="220" y1="140" x2="300" y2="140" stroke="#94a3b8" strokeWidth="3" />
            <text x="260" y="132" textAnchor="middle" fill="#64748b" fontSize="9">
              CB (−0.5V)
            </text>
          </g>

          {/* SWCNT level */}
          <g 
            className={cn("cursor-pointer transition-opacity", selectedLevel && selectedLevel !== "swcnt" && "opacity-30")}
            onMouseEnter={() => setSelectedLevel("swcnt")}
            onMouseLeave={() => setSelectedLevel(null)}
          >
            <line x1="340" y1="170" x2="420" y2="170" stroke="#475569" strokeWidth="3" />
            <text x="380" y="162" textAnchor="middle" fill="#334155" fontSize="9">
              (−0.2V)
            </text>
          </g>

          {/* Re ground state */}
          <g 
            className={cn("cursor-pointer transition-opacity", selectedLevel && selectedLevel !== "re-ground" && "opacity-30")}
            onMouseEnter={() => setSelectedLevel("re-ground")}
            onMouseLeave={() => setSelectedLevel(null)}
          >
            <line x1="100" y1="280" x2="180" y2="280" stroke="#14b8a6" strokeWidth="3" />
            <text x="140" y="295" textAnchor="middle" fill="#0d9488" fontSize="9">
              S/S⁺ (+1.63V)
            </text>
          </g>

          {/* TiO2 valence band */}
          <g 
            className={cn("cursor-pointer transition-opacity", selectedLevel && selectedLevel !== "tio2-vb" && "opacity-30")}
            onMouseEnter={() => setSelectedLevel("tio2-vb")}
            onMouseLeave={() => setSelectedLevel(null)}
          >
            <line x1="220" y1="320" x2="300" y2="320" stroke="#94a3b8" strokeWidth="3" />
            <text x="260" y="335" textAnchor="middle" fill="#64748b" fontSize="9">
              VB (+2.7V)
            </text>
          </g>

          {/* Electron flow arrows */}
          {showElectronFlow && (
            <g className="animate-pulse" style={{ animationDuration: '2s' }}>
              {/* Re* to TiO2 CB */}
              <path
                d="M 180 80 Q 200 80 220 100 Q 230 110 230 140"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2"
                strokeDasharray="6 3"
                markerEnd="url(#arrowGreen)"
              />
              <text x="215" y="90" fill="#22c55e" fontSize="8">e⁻</text>

              {/* TiO2 CB to SWCNT */}
              <path
                d="M 300 140 Q 320 140 340 155 Q 350 160 350 170"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2"
                strokeDasharray="6 3"
                markerEnd="url(#arrowGreen)"
              />
              <text x="330" y="145" fill="#22c55e" fontSize="8">e⁻</text>

              {/* O2 trapping annotation */}
              <g transform="translate(440, 100)">
                <rect x="0" y="0" width="50" height="60" fill="#fef2f2" rx="4" stroke="#fecaca" />
                <circle cx="25" cy="20" r="10" fill="#ef4444" opacity="0.8" />
                <text x="25" y="24" textAnchor="middle" fill="white" fontSize="8" fontWeight="600">O₂</text>
                <text x="25" y="45" textAnchor="middle" fill="#dc2626" fontSize="8">traps</text>
                <text x="25" y="55" textAnchor="middle" fill="#dc2626" fontSize="8">e⁻ here</text>
              </g>
            </g>
          )}

          {/* Arrow markers */}
          <defs>
            <marker id="arrowUp" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M 0 6 L 3 0 L 6 6 Z" fill="#14b8a6" />
            </marker>
            <marker id="arrowGreen" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M 0 0 L 6 3 L 0 6 Z" fill="#22c55e" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Toggle */}
      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={showElectronFlow}
            onChange={(e) => setShowElectronFlow(e.target.checked)}
            className="w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
          />
          Show electron flow
        </label>
      </div>

      {/* Description panel */}
      <div className={cn(
        "p-4 rounded-xl bg-slate-50 border border-slate-200 transition-all min-h-[80px]",
        selectedLevel ? "opacity-100" : "opacity-50"
      )}>
        <p className="text-sm text-slate-600 leading-relaxed">
          {selectedLevel 
            ? energyLevels.find(l => l.id === selectedLevel)?.description
            : "Hover over an energy level to learn about its role in the sensing mechanism."}
        </p>
      </div>
    </div>
  )
}
