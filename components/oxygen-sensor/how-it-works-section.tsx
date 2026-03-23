"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { Play, Pause, Info } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Light Harvesting",
    description:
      "Green light (516 nm) from a low-power LED is absorbed by the rhenium-based photosensitizer molecule. The rhenium complex (Re) undergoes a metal-to-ligand charge transfer, exciting electrons to a higher energy state.",
    shortDesc: "Photosensitizer absorbs visible light",
  },
  {
    number: "02",
    title: "Electron Injection",
    description:
      "The excited electrons are injected from the rhenium photosensitizer into the titanium dioxide (TiO2) layer, then flow into the carbon nanotube network. This reduces the hole density in the p-type nanotubes, increasing resistance.",
    shortDesc: "Electrons flow into nanotube network",
  },
  {
    number: "03",
    title: "Oxygen Detection",
    description:
      "When oxygen molecules (O2) are present, they trap the photoexcited electrons at the TiO2 surface before they can reach the carbon nanotubes. This blocks the normal charge injection, preventing the resistance increase.",
    shortDesc: "Oxygen traps electrons at sensor surface",
  },
  {
    number: "04",
    title: "Signal Output",
    description:
      "The difference in resistance is measured across gold interdigitated electrodes (IDE). More oxygen means more electron trapping, resulting in lower resistance. This linear relationship enables precise quantification from ppb to 20% O2.",
    shortDesc: "Resistance change = oxygen concentration",
  },
]

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isPlaying || !isVisible) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isPlaying, isVisible])

  return (
    <section id="how-it-works" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={cn(
          "max-w-3xl mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight text-balance">
            How it works
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            The sensing mechanism transforms a known problem in solar cells - oxygen degrading 
            performance - into a precise, selective detection method.
          </p>
        </div>

        <div className={cn(
          "grid lg:grid-cols-5 gap-12 items-start transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Animation - larger, 3 columns */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-6 md:p-10 border border-slate-200">
              <div className="aspect-[4/3] w-full">
                <SensorAnimation activeStep={activeStep} />
              </div>
              
              {/* Controls */}
              <div className="flex items-center justify-center gap-3 mt-8">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4" /> Pause
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" /> Play
                    </>
                  )}
                </button>
                <div className="flex gap-2">
                  {steps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveStep(index)
                        setIsPlaying(false)
                      }}
                      className={cn(
                        "w-12 h-2 rounded-full transition-all duration-500",
                        activeStep === index ? "bg-teal-500" : "bg-slate-300 hover:bg-slate-400"
                      )}
                      aria-label={`Go to step ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Steps - 2 columns */}
          <div className="lg:col-span-2 order-1 lg:order-2 space-y-3">
            {steps.map((step, index) => (
              <button
                key={step.number}
                onClick={() => {
                  setActiveStep(index)
                  setIsPlaying(false)
                }}
                className={cn(
                  "w-full text-left p-5 rounded-2xl border transition-all duration-500",
                  activeStep === index
                    ? "bg-slate-900 border-slate-900 shadow-xl shadow-slate-900/10"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm"
                )}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={cn(
                      "text-xs font-mono font-semibold px-2.5 py-1 rounded transition-colors",
                      activeStep === index ? "bg-teal-500 text-white" : "bg-slate-100 text-slate-400"
                    )}
                  >
                    {step.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3
                      className={cn(
                        "text-base font-semibold mb-1.5 transition-colors",
                        activeStep === index ? "text-white" : "text-slate-900"
                      )}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={cn(
                        "text-sm leading-relaxed transition-colors",
                        activeStep === index ? "text-slate-300" : "text-slate-500"
                      )}
                    >
                      {activeStep === index ? step.description : step.shortDesc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SensorAnimation({ activeStep }: { activeStep: number }) {
  const [animPhase, setAnimPhase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimPhase((p) => (p + 1) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <svg viewBox="0 0 600 450" className="w-full h-full">
      <defs>
        {/* Photon wave gradient */}
        <linearGradient id="photonWaveGradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
          <stop offset="30%" stopColor="#22c55e" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#86efac" stopOpacity="1" />
          <stop offset="70%" stopColor="#22c55e" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
        </linearGradient>
        
        {/* Light cone gradient */}
        <linearGradient id="lightCone" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
        </linearGradient>
        
        {/* Electron glow */}
        <filter id="electronGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* Gold gradient */}
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fcd34d" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>

        {/* TiO2 gradient */}
        <linearGradient id="tio2Gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>

        {/* CNT gradient */}
        <linearGradient id="cntGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>

        {/* Arrow markers */}
        <marker id="arrowTeal" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 Z" fill="#14b8a6" />
        </marker>
        <marker id="arrowYellow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 Z" fill="#fbbf24" />
        </marker>
      </defs>

      {/* Background */}
      <rect width="600" height="450" fill="#f8fafc" rx="16" />

      {/* Main sensor structure */}
      <g transform="translate(80, 30)">
        
        {/* LED Light Source */}
        <g className={cn("transition-all duration-700", activeStep === 0 ? "opacity-100" : "opacity-40")}>
          <rect x="170" y="0" width="100" height="35" fill="#0f172a" rx="6" />
          <text x="220" y="22" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">
            LED 516 nm
          </text>
          
          {/* Light cone */}
          <path 
            d="M 180 35 L 140 100 L 300 100 L 260 35 Z" 
            fill="url(#lightCone)"
            className={cn(
              "transition-opacity duration-500",
              activeStep === 0 ? "opacity-100" : "opacity-30"
            )}
          />
        </g>

        {/* Photons - realistic wave-particle representation */}
        {activeStep === 0 && (
          <g>
            {[0, 1, 2, 3, 4].map((i) => {
              const baseY = 45 + ((animPhase * 2 + i * 15) % 50)
              const xPos = 160 + i * 25
              const waveOffset = (animPhase + i * 10) * 0.15
              
              return (
                <g key={`photon-${i}`} style={{ opacity: Math.max(0.3, 1 - (baseY - 45) / 50) }}>
                  {/* Photon wave packet - sinusoidal wave */}
                  <path
                    d={`M ${xPos - 15} ${baseY} 
                        Q ${xPos - 10} ${baseY - 6 * Math.sin(waveOffset)} ${xPos - 5} ${baseY}
                        Q ${xPos} ${baseY + 6 * Math.sin(waveOffset + 1)} ${xPos + 5} ${baseY}
                        Q ${xPos + 10} ${baseY - 6 * Math.sin(waveOffset + 2)} ${xPos + 15} ${baseY}`}
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Photon particle core */}
                  <circle
                    cx={xPos}
                    cy={baseY}
                    r="5"
                    fill="#86efac"
                    filter="url(#electronGlow)"
                  />
                  <circle
                    cx={xPos}
                    cy={baseY}
                    r="2.5"
                    fill="#22c55e"
                  />
                </g>
              )
            })}
            
            {/* Photon label */}
            <g transform="translate(320, 60)">
              <rect x="0" y="-12" width="90" height="24" fill="white" rx="4" stroke="#22c55e" strokeWidth="1" />
              <text x="45" y="4" textAnchor="middle" fill="#22c55e" fontSize="11" fontWeight="600">
                Photons (hv)
              </text>
            </g>
          </g>
        )}

        {/* Rhenium Photosensitizer Layer */}
        <g transform="translate(0, 100)">
          {/* Label outside the structure */}
          <g transform="translate(-70, 25)">
            <text x="0" y="0" fill="#0f766e" fontSize="11" fontWeight="600">
              Rhenium (Re)
            </text>
            <text x="0" y="14" fill="#64748b" fontSize="10">
              Photosensitizer
            </text>
          </g>
          
          {/* Sensitizer molecules */}
          <rect x="20" y="0" width="400" height="60" fill="#ccfbf1" rx="8" stroke="#5eead4" strokeWidth="1" />
          
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={`re-${i}`} transform={`translate(${50 + i * 80}, 8)`}>
              {/* Bipyridine ligand structure */}
              <path
                d={`M 10 22 L 0 12 M 10 22 L 0 32 M 30 22 L 40 12 M 30 22 L 40 32`}
                stroke="#0d9488"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              {/* Central Re atom */}
              <circle
                cx="20"
                cy="22"
                r="16"
                fill={activeStep === 0 ? "#14b8a6" : "#5eead4"}
                className={cn(
                  "transition-all duration-500",
                  activeStep === 0 && "animate-[pulse_2s_ease-in-out_infinite]"
                )}
                style={{ animationDelay: `${i * 100}ms` }}
              />
              <text x="20" y="27" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">
                Re
              </text>
            </g>
          ))}
        </g>

        {/* TiO2 Layer */}
        <g transform="translate(0, 170)">
          {/* Label outside */}
          <g transform="translate(-70, 30)">
            <text x="0" y="0" fill="#64748b" fontSize="11" fontWeight="600">
              TiO2
            </text>
            <text x="0" y="14" fill="#64748b" fontSize="10">
              Nanoparticles
            </text>
          </g>
          
          <rect x="20" y="0" width="400" height="60" fill="url(#tio2Gradient)" rx="8" stroke="#94a3b8" strokeWidth="1" />
          
          {/* TiO2 particles */}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <circle
              key={`tio2-${i}`}
              cx={50 + i * 60}
              cy={30}
              r={22}
              fill="#e2e8f0"
              stroke="#94a3b8"
              strokeWidth="1.5"
            />
          ))}
          
          {/* Electron injection arrows */}
          {activeStep === 1 && (
            <g>
              {[0, 1, 2, 3, 4].map((i) => {
                const delay = i * 150
                const progress = ((animPhase * 3 + delay) % 100) / 100
                const yStart = -20
                const yEnd = 15
                const y = yStart + (yEnd - yStart) * progress
                
                return (
                  <g key={`inject-${i}`} style={{ opacity: progress < 0.9 ? 1 : 1 - (progress - 0.9) * 10 }}>
                    {/* Electron */}
                    <circle
                      cx={60 + i * 80}
                      cy={y}
                      r="7"
                      fill="#14b8a6"
                      filter="url(#electronGlow)"
                    />
                    <text
                      x={60 + i * 80}
                      y={y + 4}
                      textAnchor="middle"
                      fill="white"
                      fontSize="8"
                      fontWeight="700"
                    >
                      e-
                    </text>
                  </g>
                )
              })}
              
              {/* Injection label */}
              <g transform="translate(220, -40)">
                <rect x="-70" y="-12" width="140" height="24" fill="white" rx="4" stroke="#14b8a6" strokeWidth="1" />
                <text x="0" y="4" textAnchor="middle" fill="#14b8a6" fontSize="11" fontWeight="600">
                  Electron injection (e-)
                </text>
              </g>
            </g>
          )}
        </g>

        {/* Carbon Nanotube Network */}
        <g transform="translate(0, 240)">
          {/* Label outside */}
          <g transform="translate(-70, 25)">
            <text x="0" y="0" fill="#334155" fontSize="11" fontWeight="600">
              SWCNT
            </text>
            <text x="0" y="14" fill="#64748b" fontSize="10">
              Carbon Nanotubes
            </text>
          </g>
          
          <rect x="20" y="0" width="400" height="55" fill="#f1f5f9" rx="8" stroke="#cbd5e1" strokeWidth="1" />
          
          {/* SWCNT network - horizontal cylindrical tubes */}
          {[0, 1, 2].map((row) => {
            const yOff = 8 + row * 16
            return (
              <g key={`cnt-row-${row}`}>
                {/* Main tube body - straight horizontal cylinder */}
                <rect
                  x="28"
                  y={yOff}
                  width="384"
                  height="10"
                  rx="5"
                  fill={row % 2 === 0 ? "#334155" : "#475569"}
                  opacity="0.9"
                />
                {/* Tube highlight for 3D cylinder effect */}
                <rect
                  x="28"
                  y={yOff + 1}
                  width="384"
                  height="3"
                  rx="1.5"
                  fill="white"
                  opacity="0.15"
                />
                {/* Hexagonal carbon lattice pattern along the tube */}
                {Array.from({ length: 24 }).map((_, j) => (
                  <g key={`hex-${row}-${j}`} opacity="0.25">
                    <path
                      d={`M ${40 + j * 16} ${yOff + 3} l 4 -2 l 4 2 l 0 4 l -4 2 l -4 -2 Z`}
                      fill="none"
                      stroke="white"
                      strokeWidth="0.6"
                    />
                  </g>
                ))}
                {/* End caps - rounded hemispheres */}
                <ellipse cx="28" cy={yOff + 5} rx="4" ry="5" fill={row % 2 === 0 ? "#1e293b" : "#334155"} />
                <ellipse cx="412" cy={yOff + 5} rx="4" ry="5" fill={row % 2 === 0 ? "#1e293b" : "#334155"} />
              </g>
            )
          })}
          
          {/* Electrons flowing horizontally through CNTs */}
          {activeStep === 1 && (
            <g>
              {[0, 1, 2, 3, 4, 5].map((i) => {
                const progress = ((animPhase * 2 + i * 30) % 100) / 100
                const x = 30 + progress * 380
                const row = i % 3
                const y = 13 + row * 16
                
                return (
                  <g key={`e-cnt-${i}`} style={{ opacity: progress < 0.85 ? 1 : 1 - (progress - 0.85) * 6 }}>
                    <circle
                      cx={x}
                      cy={y}
                      r="5"
                      fill="#14b8a6"
                      filter="url(#electronGlow)"
                    />
                    <text x={x} y={y + 3} textAnchor="middle" fill="white" fontSize="6" fontWeight="700">
                      e-
                    </text>
                  </g>
                )
              })}
            </g>
          )}
        </g>

        {/* Gold Interdigitated Electrodes - LARGER */}
        <g transform="translate(0, 305)" className={cn("transition-opacity duration-500", activeStep === 3 ? "opacity-100" : "opacity-70")}>
          {/* Label outside */}
          <g transform="translate(-70, 35)">
            <text x="0" y="0" fill="#b45309" fontSize="11" fontWeight="600">
              Gold IDE
            </text>
            <text x="0" y="14" fill="#64748b" fontSize="10">
              Electrodes
            </text>
          </g>
          
          {/* Electrode base - LARGER */}
          <rect x="20" y="0" width="400" height="70" fill="url(#goldGradient)" rx="8" stroke="#f59e0b" strokeWidth="2" />
          
          {/* Interdigitated finger pattern - more prominent */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <rect
              key={`electrode-${i}`}
              x={35 + i * 40}
              y={i % 2 === 0 ? 8 : 32}
              width="16"
              height={i % 2 === 0 ? 45 : 30}
              fill={i % 2 === 0 ? "#fde047" : "#fcd34d"}
              rx="3"
              stroke="#f59e0b"
              strokeWidth="1"
            />
          ))}
          
          {/* Signal measurement display */}
          {activeStep === 3 && (
            <g transform="translate(430, 0)">
              <line x1="0" y1="15" x2="30" y2="15" stroke="#f59e0b" strokeWidth="2" />
              <line x1="0" y1="55" x2="30" y2="55" stroke="#f59e0b" strokeWidth="2" />
              
              <rect x="30" y="0" width="70" height="70" fill="#0f172a" rx="8" />
              <text x="65" y="25" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="500">
                Signal
              </text>
              <text x="65" y="50" textAnchor="middle" fill="#14b8a6" fontSize="18" fontWeight="700" fontFamily="monospace">
                ΔR/R₀
              </text>
            </g>
          )}
        </g>

        {/* Oxygen molecules - Step 3 */}
        {activeStep === 2 && (
          <g>
            {[0, 1, 2, 3, 4].map((i) => {
              const baseY = 130 + Math.sin((animPhase * 0.05 + i) * 2) * 8
              
              return (
                <g key={`o2-group-${i}`} transform={`translate(${45 + i * 85}, ${baseY})`}>
                  {/* O2 molecule - dumbbell shape */}
                  <g className="transition-transform duration-1000">
                    <circle cx="0" cy="0" r="12" fill="#ef4444" stroke="#dc2626" strokeWidth="2" />
                    <circle cx="20" cy="0" r="12" fill="#ef4444" stroke="#dc2626" strokeWidth="2" />
                    <rect x="1" y="-5" width="18" height="10" fill="#ef4444" />
                    <text x="10" y="5" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">
                      O₂
                    </text>
                  </g>
                  
                  {/* Trapping zone at TiO2 surface */}
                  <g transform="translate(10, 55)">
                    <circle 
                      r="20" 
                      fill="none" 
                      stroke="#ef4444" 
                      strokeWidth="2" 
                      strokeDasharray="5 3"
                      opacity="0.6"
                      className="animate-[spin_4s_linear_infinite]"
                    />
                    {/* Trapped electron */}
                    <circle r="8" fill="#14b8a6" opacity="0.8" />
                    <text y="3" textAnchor="middle" fill="white" fontSize="8" fontWeight="700">
                      e-
                    </text>
                  </g>
                </g>
              )
            })}
            
            {/* Explanation label */}
            <g transform="translate(220, 110)">
              <rect x="-120" y="-14" width="240" height="28" fill="white" rx="6" stroke="#ef4444" strokeWidth="1.5" />
              <text x="0" y="5" textAnchor="middle" fill="#dc2626" fontSize="12" fontWeight="600">
                O₂ traps electrons at TiO₂ surface
              </text>
            </g>
          </g>
        )}

        {/* Signal output visualization - Step 4 */}
        {activeStep === 3 && (
          <g transform="translate(0, 310)">
            {/* Signal flow animation */}
            {[0, 1, 2].map((i) => {
              const progress = ((animPhase * 2 + i * 33) % 100) / 100
              const x = 50 + progress * 350
              
              return (
                <g key={`signal-${i}`} style={{ opacity: 0.5 + progress * 0.5 }}>
                  <circle cx={x} cy={35} r="4" fill="#14b8a6" filter="url(#electronGlow)" />
                </g>
              )
            })}
          </g>
        )}
      </g>

      {/* Legend */}
      <g transform="translate(80, 420)">
        <g transform="translate(0, 0)">
          <circle cx="8" cy="0" r="7" fill="#14b8a6" />
          <text x="8" y="3" textAnchor="middle" fill="white" fontSize="7" fontWeight="700">Re</text>
          <text x="24" y="4" fill="#64748b" fontSize="10">Rhenium</text>
        </g>
        
        <g transform="translate(95, 0)">
          <circle cx="8" cy="0" r="7" fill="#e2e8f0" stroke="#94a3b8" />
          <text x="24" y="4" fill="#64748b" fontSize="10">TiO₂</text>
        </g>
        
        <g transform="translate(165, 0)">
          <rect x="2" y="-5" width="14" height="10" fill="#334155" rx="2" />
          <text x="24" y="4" fill="#64748b" fontSize="10">SWCNT</text>
        </g>
        
        <g transform="translate(250, 0)">
          <rect x="2" y="-5" width="14" height="10" fill="url(#goldGradient)" rx="2" stroke="#f59e0b" />
          <text x="24" y="4" fill="#64748b" fontSize="10">Gold Electrode</text>
        </g>
        
        <g transform="translate(365, 0)">
          <circle cx="8" cy="0" r="6" fill="#ef4444" />
          <text x="24" y="4" fill="#64748b" fontSize="10">O₂ Molecule</text>
        </g>
      </g>
    </svg>
  )
}
