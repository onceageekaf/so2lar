"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Play, Pause, RotateCcw } from "lucide-react"

export function Figure3Sensing() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [time, setTime] = useState(0)
  const [o2Exposure, setO2Exposure] = useState(false)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setTime((t) => {
        const newTime = t + 1
        // O2 exposure happens at time 20-60
        if (newTime === 20) setO2Exposure(true)
        if (newTime === 60) setO2Exposure(false)
        if (newTime >= 100) {
          return 0
        }
        return newTime
      })
    }, 100)

    return () => clearInterval(interval)
  }, [isPlaying])

  // Calculate resistance based on time
  const getResistance = () => {
    if (time < 20) return 100 // Baseline under light
    if (time < 25) return 100 - (time - 20) * 6 // Rapid drop
    if (time < 60) return 70 // During O2 exposure
    if (time < 70) return 70 + (time - 60) * 3 // Recovery
    return 100 // Back to baseline
  }

  const resistance = getResistance()
  const deltaR = ((resistance - 100) / 100 * 100).toFixed(1)

  return (
    <div className="space-y-6">
      <div className="relative bg-white rounded-2xl border border-slate-200 p-6">
        {/* Main chart area */}
        <svg viewBox="0 0 500 280" className="w-full h-auto">
          {/* Background */}
          <rect width="500" height="280" fill="#fafafa" rx="8" />

          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={`h-${i}`}
              x1="60"
              y1={50 + i * 50}
              x2="450"
              y2={50 + i * 50}
              stroke="#e2e8f0"
              strokeDasharray="4 4"
            />
          ))}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <line
              key={`v-${i}`}
              x1={60 + i * 50}
              y1="50"
              x2={60 + i * 50}
              y2="250"
              stroke="#e2e8f0"
              strokeDasharray="4 4"
            />
          ))}

          {/* Y axis */}
          <line x1="60" y1="50" x2="60" y2="250" stroke="#94a3b8" strokeWidth="2" />
          <text x="30" y="155" textAnchor="middle" fill="#64748b" fontSize="11" transform="rotate(-90, 30, 155)">
            Normalized Resistance (%)
          </text>
          {[100, 85, 70].map((val, i) => (
            <text key={val} x="55" y={55 + i * 100} textAnchor="end" fill="#64748b" fontSize="10">
              {val}
            </text>
          ))}

          {/* X axis */}
          <line x1="60" y1="250" x2="450" y2="250" stroke="#94a3b8" strokeWidth="2" />
          <text x="255" y="275" textAnchor="middle" fill="#64748b" fontSize="11">
            Time (minutes)
          </text>
          {[0, 2, 4, 6, 8, 10].map((val, i) => (
            <text key={val} x={60 + i * 78} y="265" textAnchor="middle" fill="#64748b" fontSize="10">
              {val}
            </text>
          ))}

          {/* O2 exposure shading */}
          <rect x="138" y="50" width="156" height="200" fill="#fef2f2" opacity="0.5" />
          <text x="216" y="42" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="500">
            O₂ Exposure (1000 ppm)
          </text>

          {/* Resistance trace - static background */}
          <path
            d="M 60 50 L 138 50 L 150 110 L 294 110 L 330 50 L 450 50"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Animated resistance trace */}
          <path
            d={`M 60 50 L ${60 + time * 3.9} ${250 - resistance * 2}`}
            fill="none"
            stroke="#14b8a6"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Current point */}
          <circle
            cx={60 + time * 3.9}
            cy={250 - resistance * 2}
            r="6"
            fill="#14b8a6"
            stroke="white"
            strokeWidth="2"
          />

          {/* ΔR indicator */}
          <g transform="translate(380, 80)">
            <rect x="0" y="0" width="65" height="50" fill="white" rx="6" stroke="#e2e8f0" />
            <text x="32" y="20" textAnchor="middle" fill="#64748b" fontSize="10">ΔR/R₀</text>
            <text
              x="32"
              y="40"
              textAnchor="middle"
              fill={Number(deltaR) < 0 ? "#ef4444" : "#14b8a6"}
              fontSize="16"
              fontWeight="700"
            >
              {deltaR}%
            </text>
          </g>

          {/* Light indicator */}
          <g transform="translate(380, 150)">
            <rect x="0" y="0" width="65" height="40" fill="#f0fdf4" rx="6" stroke="#bbf7d0" />
            <circle cx="20" cy="20" r="8" fill="#22c55e" className="animate-pulse" />
            <text x="45" y="24" textAnchor="middle" fill="#15803d" fontSize="10" fontWeight="500">
              LED
            </text>
          </g>

          {/* O2 status indicator */}
          <g transform="translate(380, 200)">
            <rect
              x="0"
              y="0"
              width="65"
              height="40"
              fill={o2Exposure ? "#fef2f2" : "#f8fafc"}
              rx="6"
              stroke={o2Exposure ? "#fecaca" : "#e2e8f0"}
            />
            <text x="32" y="16" textAnchor="middle" fill="#64748b" fontSize="9">O₂ Status</text>
            <text
              x="32"
              y="32"
              textAnchor="middle"
              fill={o2Exposure ? "#ef4444" : "#94a3b8"}
              fontSize="11"
              fontWeight="600"
            >
              {o2Exposure ? "EXPOSED" : "NONE"}
            </text>
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
        <button
          onClick={() => {
            setTime(0)
            setO2Exposure(false)
          }}
          className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>
        
        {/* Progress bar */}
        <div className="flex-1 max-w-xs">
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-teal-500 transition-all duration-100"
              style={{ width: `${time}%` }}
            />
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className={cn(
          "p-4 rounded-xl border transition-all",
          time < 20 ? "bg-teal-50 border-teal-200" : "bg-white border-slate-200"
        )}>
          <div className="text-sm font-semibold text-slate-900 mb-1">Phase 1: Baseline</div>
          <p className="text-xs text-slate-500">
            Under green light with no O₂, electrons flow freely from sensitizer to nanotubes, 
            establishing baseline resistance.
          </p>
        </div>
        <div className={cn(
          "p-4 rounded-xl border transition-all",
          time >= 20 && time < 60 ? "bg-red-50 border-red-200" : "bg-white border-slate-200"
        )}>
          <div className="text-sm font-semibold text-slate-900 mb-1">Phase 2: O₂ Exposure</div>
          <p className="text-xs text-slate-500">
            When O₂ is introduced, it traps electrons. Fewer electrons reach nanotubes, 
            causing resistance to drop ~30%.
          </p>
        </div>
        <div className={cn(
          "p-4 rounded-xl border transition-all",
          time >= 60 ? "bg-teal-50 border-teal-200" : "bg-white border-slate-200"
        )}>
          <div className="text-sm font-semibold text-slate-900 mb-1">Phase 3: Recovery</div>
          <p className="text-xs text-slate-500">
            After O₂ is removed, electron flow resumes normally and resistance 
            returns to baseline within 9 minutes.
          </p>
        </div>
      </div>
    </div>
  )
}
