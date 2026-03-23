"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Play, Pause } from "lucide-react"

const dataPoints = [
  { o2Change: 50, response: 0.8 },
  { o2Change: 100, response: 1.5 },
  { o2Change: 200, response: 2.8 },
  { o2Change: 300, response: 4.2 },
  { o2Change: 400, response: 5.5 },
  { o2Change: 500, response: 6.8 },
]

export function Figure6Ambient() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [time, setTime] = useState(0)
  const [currentDilution, setCurrentDilution] = useState(0)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setTime((t) => {
        const newTime = (t + 1) % 100
        // Change dilution level periodically
        if (newTime % 20 === 0) {
          setCurrentDilution((d) => (d + 1) % 6)
        }
        return newTime
      })
    }, 100)

    return () => clearInterval(interval)
  }, [isPlaying])

  // Calculate resistance based on dilution
  const baselineResistance = 100
  const currentResponse = dataPoints[currentDilution].response
  const displayResistance = baselineResistance + (time % 20 < 10 ? currentResponse : 0)

  return (
    <div className="space-y-6">
      <div className="relative bg-white rounded-2xl border border-slate-200 p-6">
        <svg viewBox="0 0 500 320" className="w-full h-auto">
          {/* Background */}
          <rect width="500" height="320" fill="#fafafa" rx="8" />

          {/* Title */}
          <text x="250" y="25" textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="500">
            Detecting O₂ Changes from Ambient (20%) Background
          </text>

          {/* Main visualization - two panels */}
          
          {/* Left panel: Real-time response */}
          <g transform="translate(30, 50)">
            <rect x="0" y="0" width="200" height="180" fill="white" rx="6" stroke="#e2e8f0" />
            <text x="100" y="20" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="500">
              Real-time Response
            </text>

            {/* Y axis */}
            <line x1="40" y1="35" x2="40" y2="160" stroke="#94a3b8" strokeWidth="1" />
            <text x="15" y="100" textAnchor="middle" fill="#64748b" fontSize="8" transform="rotate(-90, 15, 100)">
              Resistance
            </text>

            {/* X axis */}
            <line x1="40" y1="160" x2="180" y2="160" stroke="#94a3b8" strokeWidth="1" />
            <text x="110" y="175" textAnchor="middle" fill="#64748b" fontSize="8">
              Time
            </text>

            {/* Animated trace */}
            <path
              d={`M 40 ${160 - baselineResistance * 1.1} ${Array.from({ length: 20 }, (_, i) => {
                const x = 40 + i * 7
                const y = 160 - (i < 10 ? baselineResistance + currentResponse : baselineResistance) * 1.1
                return `L ${x} ${y}`
              }).join(' ')}`}
              fill="none"
              stroke="#14b8a6"
              strokeWidth="2"
            />

            {/* Current point indicator */}
            <circle
              cx={40 + (time % 20) * 7}
              cy={160 - displayResistance * 1.1}
              r="4"
              fill="#14b8a6"
              stroke="white"
              strokeWidth="1"
            />

            {/* O2 dilution indicator */}
            <g transform="translate(60, 45)">
              <rect 
                x="0" 
                y="0" 
                width="80" 
                height="25" 
                fill={time % 20 < 10 ? "#fef3c7" : "#f0fdf4"} 
                rx="4" 
                stroke={time % 20 < 10 ? "#fbbf24" : "#bbf7d0"}
              />
              <text x="40" y="17" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="500">
                {time % 20 < 10 ? `−${dataPoints[currentDilution].o2Change} ppm` : "20% O₂"}
              </text>
            </g>
          </g>

          {/* Right panel: Calibration curve */}
          <g transform="translate(260, 50)">
            <rect x="0" y="0" width="200" height="180" fill="white" rx="6" stroke="#e2e8f0" />
            <text x="100" y="20" textAnchor="middle" fill="#64748b" fontSize="10" fontWeight="500">
              Calibration Curve
            </text>

            {/* Y axis */}
            <line x1="40" y1="35" x2="40" y2="160" stroke="#94a3b8" strokeWidth="1" />
            <text x="15" y="100" textAnchor="middle" fill="#64748b" fontSize="8" transform="rotate(-90, 15, 100)">
              ΔR/R₀ (%)
            </text>

            {/* X axis */}
            <line x1="40" y1="160" x2="180" y2="160" stroke="#94a3b8" strokeWidth="1" />
            <text x="110" y="175" textAnchor="middle" fill="#64748b" fontSize="8">
              ΔO₂ (ppm)
            </text>

            {/* Linear fit line */}
            <line
              x1="45"
              y1={160 - dataPoints[0].response * 15}
              x2="175"
              y2={160 - dataPoints[5].response * 15}
              stroke="#14b8a6"
              strokeWidth="2"
              strokeDasharray="4 2"
              opacity="0.5"
            />

            {/* Data points */}
            {dataPoints.map((d, i) => (
              <circle
                key={i}
                cx={45 + (d.o2Change / 500) * 130}
                cy={160 - d.response * 15}
                r={currentDilution === i ? 6 : 4}
                fill={currentDilution === i ? "#0d9488" : "#14b8a6"}
                stroke="white"
                strokeWidth="1"
                className="transition-all duration-200"
              />
            ))}
          </g>

          {/* Bottom info panel */}
          <g transform="translate(30, 245)">
            <rect x="0" y="0" width="440" height="60" fill="#f0fdf4" rx="6" stroke="#bbf7d0" />
            
            <text x="20" y="25" fill="#15803d" fontSize="11" fontWeight="600">
              Key Achievement:
            </text>
            <text x="20" y="45" fill="#64748b" fontSize="10">
              Detects changes as small as 26 ppm even when starting from 20% O₂ background (ambient air)
            </text>
            
            <g transform="translate(300, 10)">
              <text x="0" y="18" fill="#64748b" fontSize="9">Dynamic Range</text>
              <text x="0" y="38" fill="#15803d" fontSize="13" fontWeight="700">0 - 200,000 ppm</text>
            </g>
          </g>
        </svg>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          {isPlaying ? "Pause" : "Play"}
        </button>

        <div className="flex gap-2">
          {dataPoints.map((d, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentDilution(i)
                setIsPlaying(false)
              }}
              className={cn(
                "px-3 py-1.5 rounded-md text-xs font-medium transition-colors",
                currentDilution === i
                  ? "bg-teal-500 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              )}
            >
              {d.o2Change} ppm
            </button>
          ))}
        </div>
      </div>

      {/* Explanation */}
      <div className="p-4 bg-white rounded-xl border border-slate-200">
        <h4 className="font-semibold text-slate-900 mb-2">Why this matters</h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          Most sensors work well when detecting oxygen against a zero background, but real-world 
          applications require detecting small changes in normal air (20% O₂). This test proves 
          the sensor can work in the field - for example, detecting slight oxygen depletion in 
          a confined space or monitoring breath oxygen levels that vary around ambient.
        </p>
      </div>
    </div>
  )
}
