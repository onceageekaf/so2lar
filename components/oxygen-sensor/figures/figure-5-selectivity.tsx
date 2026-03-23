"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const gases = [
  { name: "O₂", response: 100, color: "#14b8a6", description: "Oxygen - the target analyte" },
  { name: "N₂O", response: 3, color: "#94a3b8", description: "Nitrous oxide - no significant response" },
  { name: "CO₂", response: 2, color: "#94a3b8", description: "Carbon dioxide - no response (rules out anionic Re species)" },
  { name: "H₂", response: 1, color: "#94a3b8", description: "Hydrogen - no response (no reduction occurs)" },
  { name: "CH₄", response: 2, color: "#94a3b8", description: "Methane - no significant response" },
  { name: "C₂H₄", response: 4, color: "#94a3b8", description: "Ethylene - no response (no ligand dissociation)" },
  { name: "CO", response: 3, color: "#94a3b8", description: "Carbon monoxide - no response" },
]

const stabilityData = [
  { month: "Fresh", response: 100 },
  { month: "1 month", response: 98 },
  { month: "2 months", response: 97 },
  { month: "3 months", response: 95 },
]

export function Figure5Selectivity() {
  const [selectedGas, setSelectedGas] = useState<string | null>(null)
  const [view, setView] = useState<"selectivity" | "stability">("selectivity")

  return (
    <div className="space-y-6">
      {/* View toggle */}
      <div className="flex gap-2 p-1 bg-slate-100 rounded-lg w-fit">
        <button
          onClick={() => setView("selectivity")}
          className={cn(
            "px-4 py-2 rounded-md text-sm font-medium transition-colors",
            view === "selectivity" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
          )}
        >
          Selectivity
        </button>
        <button
          onClick={() => setView("stability")}
          className={cn(
            "px-4 py-2 rounded-md text-sm font-medium transition-colors",
            view === "stability" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
          )}
        >
          Long-term Stability
        </button>
      </div>

      <div className="relative bg-white rounded-2xl border border-slate-200 p-6">
        {view === "selectivity" ? (
          <svg viewBox="0 0 500 300" className="w-full h-auto">
            {/* Background */}
            <rect width="500" height="300" fill="#fafafa" rx="8" />

            {/* Title */}
            <text x="250" y="25" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="500">
              Normalized Response to 1000 ppm of Various Gases
            </text>

            {/* Y axis */}
            <line x1="80" y1="50" x2="80" y2="250" stroke="#94a3b8" strokeWidth="2" />
            <text x="25" y="150" textAnchor="middle" fill="#64748b" fontSize="11" transform="rotate(-90, 25, 150)">
              Normalized Response (%)
            </text>
            {[100, 75, 50, 25, 0].map((val, i) => (
              <g key={val}>
                <text x="70" y={55 + i * 50} textAnchor="end" fill="#64748b" fontSize="10">
                  {val}
                </text>
                <line x1="75" y1={50 + i * 50} x2="450" y2={50 + i * 50} stroke="#e2e8f0" strokeDasharray="4 4" />
              </g>
            ))}

            {/* X axis */}
            <line x1="80" y1="250" x2="450" y2="250" stroke="#94a3b8" strokeWidth="2" />

            {/* Bars */}
            {gases.map((gas, i) => {
              const barHeight = (gas.response / 100) * 200
              const x = 100 + i * 50
              const isHovered = selectedGas === gas.name

              return (
                <g
                  key={gas.name}
                  onMouseEnter={() => setSelectedGas(gas.name)}
                  onMouseLeave={() => setSelectedGas(null)}
                  className="cursor-pointer"
                >
                  <rect
                    x={x}
                    y={250 - barHeight}
                    width="35"
                    height={barHeight}
                    fill={i === 0 ? gas.color : (isHovered ? "#64748b" : gas.color)}
                    rx="4"
                    className="transition-colors duration-200"
                  />
                  <text
                    x={x + 17}
                    y="268"
                    textAnchor="middle"
                    fill="#64748b"
                    fontSize="11"
                    fontWeight={i === 0 ? "600" : "400"}
                  >
                    {gas.name}
                  </text>
                  {/* Value label */}
                  <text
                    x={x + 17}
                    y={245 - barHeight}
                    textAnchor="middle"
                    fill={i === 0 ? "#0d9488" : "#64748b"}
                    fontSize="10"
                    fontWeight="500"
                  >
                    {gas.response}%
                  </text>
                </g>
              )
            })}

            {/* Hover tooltip */}
            {selectedGas && (
              <g transform="translate(300, 80)">
                <rect x="0" y="0" width="190" height="50" fill="white" rx="6" stroke="#e2e8f0" />
                <text x="10" y="20" fill="#64748b" fontSize="10" fontWeight="500">
                  {selectedGas}
                </text>
                <text x="10" y="38" fill="#64748b" fontSize="10" style={{ fontStyle: 'italic' }}>
                  {gases.find(g => g.name === selectedGas)?.description}
                </text>
              </g>
            )}
          </svg>
        ) : (
          <svg viewBox="0 0 500 300" className="w-full h-auto">
            {/* Background */}
            <rect width="500" height="300" fill="#fafafa" rx="8" />

            {/* Title */}
            <text x="250" y="25" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="500">
              O₂ Response After Benchtop Storage
            </text>

            {/* Y axis */}
            <line x1="80" y1="50" x2="80" y2="250" stroke="#94a3b8" strokeWidth="2" />
            <text x="25" y="150" textAnchor="middle" fill="#64748b" fontSize="11" transform="rotate(-90, 25, 150)">
              Response Retention (%)
            </text>
            {[100, 75, 50, 25, 0].map((val, i) => (
              <g key={val}>
                <text x="70" y={55 + i * 50} textAnchor="end" fill="#64748b" fontSize="10">
                  {val}
                </text>
                <line x1="75" y1={50 + i * 50} x2="420" y2={50 + i * 50} stroke="#e2e8f0" strokeDasharray="4 4" />
              </g>
            ))}

            {/* X axis */}
            <line x1="80" y1="250" x2="420" y2="250" stroke="#94a3b8" strokeWidth="2" />

            {/* Line chart with points */}
            <path
              d={stabilityData.map((d, i) => {
                const x = 120 + i * 85
                const y = 250 - (d.response / 100) * 200
                return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
              }).join(' ')}
              fill="none"
              stroke="#14b8a6"
              strokeWidth="3"
            />

            {/* Data points */}
            {stabilityData.map((d, i) => {
              const x = 120 + i * 85
              const y = 250 - (d.response / 100) * 200
              return (
                <g key={d.month}>
                  <circle cx={x} cy={y} r="8" fill="#14b8a6" stroke="white" strokeWidth="2" />
                  <text x={x} y="268" textAnchor="middle" fill="#64748b" fontSize="10">
                    {d.month}
                  </text>
                  <text x={x} y={y - 15} textAnchor="middle" fill="#0d9488" fontSize="10" fontWeight="500">
                    {d.response}%
                  </text>
                </g>
              )
            })}

            {/* Annotation */}
            <g transform="translate(320, 100)">
              <rect x="0" y="0" width="100" height="60" fill="#f0fdf4" rx="6" stroke="#bbf7d0" />
              <text x="50" y="20" textAnchor="middle" fill="#15803d" fontSize="10" fontWeight="500">
                Only 5% loss
              </text>
              <text x="50" y="38" textAnchor="middle" fill="#64748b" fontSize="9">
                after 3 months
              </text>
              <text x="50" y="52" textAnchor="middle" fill="#64748b" fontSize="9">
                ambient storage
              </text>
            </g>
          </svg>
        )}
      </div>

      {/* Key takeaways */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="p-4 bg-teal-50 rounded-xl border border-teal-100">
          <div className="text-sm font-semibold text-teal-900 mb-2">Excellent Selectivity</div>
          <p className="text-xs text-teal-700">
            Response to O₂ is 25-50x stronger than any interferant. The sensor specifically targets 
            oxygen while ignoring common gases like CO₂, H₂, and methane.
          </p>
        </div>
        <div className="p-4 bg-teal-50 rounded-xl border border-teal-100">
          <div className="text-sm font-semibold text-teal-900 mb-2">No Sensor Poisoning</div>
          <p className="text-xs text-teal-700">
            After exposure to interferant gases, the O₂ response remains unchanged. This confirms 
            the sensor is robust for real-world deployment with multiple gas exposures.
          </p>
        </div>
      </div>
    </div>
  )
}
