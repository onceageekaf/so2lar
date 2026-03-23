"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const concentrations = [50, 100, 200, 300, 400, 500]
const responses = [-5.2, -10.1, -17.8, -22.4, -26.1, -30.5]

export function Figure4Sensitivity() {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null)
  const [showLinearFit, setShowLinearFit] = useState(true)

  // Convert data to SVG coordinates
  const dataPoints = concentrations.map((conc, i) => ({
    x: 80 + (conc / 500) * 350,
    y: 220 + responses[i] * 5.5, // Scale responses to fit
    concentration: conc,
    response: responses[i],
  }))

  return (
    <div className="space-y-6">
      <div className="relative bg-white rounded-2xl border border-slate-200 p-6">
        <svg viewBox="0 0 500 300" className="w-full h-auto">
          {/* Background */}
          <rect width="500" height="300" fill="#fafafa" rx="8" />

          {/* Grid */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={`h-${i}`}
              x1="80"
              y1={60 + i * 40}
              x2="450"
              y2={60 + i * 40}
              stroke="#e2e8f0"
              strokeDasharray="4 4"
            />
          ))}
          {concentrations.map((conc) => (
            <line
              key={`v-${conc}`}
              x1={80 + (conc / 500) * 350}
              y1="60"
              x2={80 + (conc / 500) * 350}
              y2="260"
              stroke="#e2e8f0"
              strokeDasharray="4 4"
            />
          ))}

          {/* Y axis */}
          <line x1="80" y1="60" x2="80" y2="260" stroke="#94a3b8" strokeWidth="2" />
          <text x="25" y="160" textAnchor="middle" fill="#64748b" fontSize="11" transform="rotate(-90, 25, 160)">
            Response ΔR/R₀ (%)
          </text>
          {[0, -10, -20, -30].map((val, i) => (
            <text key={val} x="70" y={65 + i * 53} textAnchor="end" fill="#64748b" fontSize="10">
              {val}
            </text>
          ))}

          {/* X axis */}
          <line x1="80" y1="220" x2="450" y2="220" stroke="#94a3b8" strokeWidth="2" />
          <text x="265" y="290" textAnchor="middle" fill="#64748b" fontSize="11">
            O₂ Concentration (ppm)
          </text>
          {concentrations.map((conc) => (
            <text
              key={conc}
              x={80 + (conc / 500) * 350}
              y="240"
              textAnchor="middle"
              fill="#64748b"
              fontSize="10"
            >
              {conc}
            </text>
          ))}

          {/* Linear fit line */}
          {showLinearFit && (
            <line
              x1={dataPoints[0].x}
              y1={dataPoints[0].y}
              x2={dataPoints[5].x}
              y2={dataPoints[5].y}
              stroke="#14b8a6"
              strokeWidth="2"
              strokeDasharray="8 4"
              opacity="0.5"
            />
          )}

          {/* Data points with error bars */}
          {dataPoints.map((point, i) => (
            <g
              key={i}
              onMouseEnter={() => setHoveredPoint(i)}
              onMouseLeave={() => setHoveredPoint(null)}
              className="cursor-pointer"
            >
              {/* Error bar */}
              <line
                x1={point.x}
                y1={point.y - 8}
                x2={point.x}
                y2={point.y + 8}
                stroke="#94a3b8"
                strokeWidth="1"
              />
              <line
                x1={point.x - 4}
                y1={point.y - 8}
                x2={point.x + 4}
                y2={point.y - 8}
                stroke="#94a3b8"
                strokeWidth="1"
              />
              <line
                x1={point.x - 4}
                y1={point.y + 8}
                x2={point.x + 4}
                y2={point.y + 8}
                stroke="#94a3b8"
                strokeWidth="1"
              />
              
              {/* Data point */}
              <circle
                cx={point.x}
                cy={point.y}
                r={hoveredPoint === i ? 10 : 8}
                fill={hoveredPoint === i ? "#0d9488" : "#14b8a6"}
                stroke="white"
                strokeWidth="2"
                className="transition-all duration-200"
              />
            </g>
          ))}

          {/* Hover tooltip */}
          {hoveredPoint !== null && (
            <g transform={`translate(${dataPoints[hoveredPoint].x + 15}, ${dataPoints[hoveredPoint].y - 30})`}>
              <rect x="0" y="0" width="100" height="50" fill="white" rx="6" stroke="#e2e8f0" filter="url(#shadow)" />
              <text x="10" y="20" fill="#64748b" fontSize="10">
                O₂: {dataPoints[hoveredPoint].concentration} ppm
              </text>
              <text x="10" y="38" fill="#14b8a6" fontSize="12" fontWeight="600">
                ΔR/R₀: {dataPoints[hoveredPoint].response}%
              </text>
            </g>
          )}

          {/* LOD annotation */}
          <g transform="translate(380, 70)">
            <rect x="0" y="0" width="65" height="45" fill="#f0fdf4" rx="6" stroke="#bbf7d0" />
            <text x="32" y="18" textAnchor="middle" fill="#64748b" fontSize="9">LOD</text>
            <text x="32" y="35" textAnchor="middle" fill="#15803d" fontSize="13" fontWeight="700">
              2.2 ppm
            </text>
          </g>
        </svg>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={showLinearFit}
            onChange={(e) => setShowLinearFit(e.target.checked)}
            className="w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
          />
          Show linear fit
        </label>
        
        <div className="text-sm text-slate-500">
          R² = 0.994 (excellent linearity)
        </div>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-slate-50 rounded-xl text-center">
          <div className="text-2xl font-semibold text-slate-900">6 sec</div>
          <div className="text-xs text-slate-500 mt-1">Response time</div>
        </div>
        <div className="p-4 bg-slate-50 rounded-xl text-center">
          <div className="text-2xl font-semibold text-slate-900">9 min</div>
          <div className="text-xs text-slate-500 mt-1">Recovery time</div>
        </div>
        <div className="p-4 bg-slate-50 rounded-xl text-center">
          <div className="text-2xl font-semibold text-slate-900">157 ppb</div>
          <div className="text-xs text-slate-500 mt-1">Extended LOD</div>
        </div>
        <div className="p-4 bg-slate-50 rounded-xl text-center">
          <div className="text-2xl font-semibold text-slate-900">0-80%</div>
          <div className="text-xs text-slate-500 mt-1">RH tolerance</div>
        </div>
      </div>
    </div>
  )
}
