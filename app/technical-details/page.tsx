"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Download } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Figure1Concept } from "@/components/oxygen-sensor/figures/figure-1-concept"
import { Figure2Fabrication } from "@/components/oxygen-sensor/figures/figure-2-fabrication"
import { Figure3Sensing } from "@/components/oxygen-sensor/figures/figure-3-sensing"
import { Figure4Sensitivity } from "@/components/oxygen-sensor/figures/figure-4-sensitivity"
import { Figure5Selectivity } from "@/components/oxygen-sensor/figures/figure-5-selectivity"
import { Figure6Ambient } from "@/components/oxygen-sensor/figures/figure-6-ambient"
import { EnergyDiagram } from "@/components/oxygen-sensor/figures/energy-diagram"

export default function TechnicalDetailsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      {/* Sub-header */}
      <div className="py-3 px-6 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to overview</span>
          </Link>
          <a 
            href="https://doi.org/10.1002/advs.202405694" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700 transition-colors"
          >
            View full publication
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-6">
            Technical Deep Dive
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight text-balance max-w-4xl">
            A Dye-Sensitized Sensor for Oxygen Detection under Visible Light
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-3xl mb-4">
            This page explains the science behind our breakthrough oxygen sensor in accessible terms, 
            walking through each key finding from the research paper published in Advanced Science.
          </p>
          <p className="text-sm text-slate-400 mb-6">
            Wettstein L, Specht J, Kesselring V, Sieben L, Pan Y, Kach D, Baster D, Krumeich F, El Kazzi M, Bezdek MJ.{" "}
            <em>Adv. Sci.</em> 2024, 11, 2405694.{" "}
            <a href="https://doi.org/10.1002/advs.202405694" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
              DOI: 10.1002/advs.202405694
            </a>
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-sm rounded-full">Carbon Nanotubes</span>
            <span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-sm rounded-full">Photosensitizers</span>
            <span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-sm rounded-full">Chemiresistive Sensors</span>
            <span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-sm rounded-full">Room Temperature Operation</span>
            <span className="px-3 py-1.5 bg-slate-100 text-slate-600 text-sm rounded-full">Visible Light Activation</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">Introduction</h2>
              <h3 className="text-2xl font-semibold text-slate-900">The Challenge</h3>
            </div>
            <div className="md:col-span-2 space-y-6">
              <p className="text-slate-600 leading-relaxed">
                Oxygen is everywhere in our environment and essential for life. Being able to measure oxygen 
                levels accurately is crucial across many fields - from monitoring patient health to checking 
                water quality to controlling industrial processes like food packaging and automobile exhaust analysis.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Current oxygen sensors have significant limitations. Metal oxide sensors need to be heated 
                to high temperatures (200-500 degrees C), consuming lots of power. Electrochemical sensors have 
                consumable parts that wear out. Optical sensors require expensive spectrometers and bulky equipment.
                Single-use colorimetric probes can only be read once.
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong className="text-slate-900">The innovation:</strong> The researchers borrowed a concept from 
                dye-sensitized solar cells and flipped it on its head. In solar cells, oxygen is a problem - it degrades 
                performance by trapping electrons. Here, this "problem" becomes the feature: oxygen's electron-trapping 
                behavior is exactly what creates the sensing signal.
              </p>
              <div className="p-5 bg-teal-50 rounded-xl border border-teal-100">
                <p className="text-sm text-teal-800 italic leading-relaxed">
                  {"\"Our sensor material has a modular structure - we want to chemically modify the components so that other relevant target molecules can be detected.\""}
                </p>
                <p className="text-sm text-teal-600 mt-2 font-medium">- Prof. Dr. Mate J. Bezdek, ETH Zurich</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Figure 1: Core Concept */}
      <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">Figure 1</h2>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">The Core Concept</h3>
              <p className="text-sm text-slate-500 mb-4">
                Hover over the diagram to explore each component
              </p>
              <div className="text-sm text-slate-400 italic">
                Adapted from Wettstein et al., Adv. Sci. 2024, Fig. 1
              </div>
            </div>
            <div className="md:col-span-2">
              <Figure1Concept />
              <div className="mt-8 space-y-4">
                <h4 className="font-semibold text-slate-900">What you are seeing:</h4>
                <p className="text-slate-600 leading-relaxed">
                  This diagram shows the sensor's layered structure. At the top, a rhenium-based molecule 
                  (the "photosensitizer") absorbs green light. When photons hit this molecule, it gets excited and 
                  wants to transfer electrons downward through the titanium dioxide (TiO2) layer and into the 
                  carbon nanotubes (SWCNTs). But when oxygen molecules are present, they intercept and trap 
                  those electrons before they can reach the nanotubes.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  This electron trapping changes the electrical resistance of the nanotube network, and that 
                  resistance change is measured by the gold interdigitated electrodes (IDE) at the bottom. More oxygen means 
                  more electron trapping, which means a larger, measurable signal.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  <strong className="text-slate-900">Key insight:</strong> The rhenium complex 
                  {"[("}<sup>P</sup>{"bpy)(CO)"}{"3"}{"ReBr]"} is similar to dyes used in solar cells, but here it serves 
                  as an oxygen-sensitive "antenna" rather than an electricity generator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Figure 2: How we built it */}
      <section className="py-16 md:py-20 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">Figure 2</h2>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Building the Sensor</h3>
              <p className="text-sm text-slate-500 mb-4">
                Click through the fabrication steps
              </p>
              <div className="text-sm text-slate-400 italic">
                Adapted from Wettstein et al., Adv. Sci. 2024, Fig. 2
              </div>
            </div>
            <div className="md:col-span-2">
              <Figure2Fabrication />
              <div className="mt-8 space-y-4">
                <h4 className="font-semibold text-slate-900">Fabrication process explained:</h4>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <div className="text-teal-600 font-semibold mb-2">Step 1: Spray Coating</div>
                    <p className="text-sm text-slate-600">
                      A mixture of carbon nanotubes and titanium dioxide particles is sprayed onto 
                      gold interdigitated electrodes with 200-micrometer gaps. The process is optimized 
                      to create films with 1-5 kilo-ohm resistance.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <div className="text-teal-600 font-semibold mb-2">Step 2: Dye Immersion</div>
                    <p className="text-sm text-slate-600">
                      The coated chip is soaked for 16 hours in a DMSO solution containing the rhenium 
                      photosensitizer. The molecules naturally anchor to the TiO2 surface through their 
                      phosphonate chemical groups.
                    </p>
                  </div>
                </div>

                <h4 className="font-semibold text-slate-900 mt-6">Confirming the structure:</h4>
                <p className="text-slate-600 leading-relaxed">
                  The paper uses multiple analysis techniques to verify the sensor was built correctly:
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <div className="text-sm font-semibold text-slate-800 mb-1">Microscopy (SEM/TEM)</div>
                    <p className="text-xs text-slate-500">
                      Revealed TiO2 particles (~296 nm diameter) attached to SWCNT bundles, confirming 
                      the composite structure.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <div className="text-sm font-semibold text-slate-800 mb-1">Infrared Spectroscopy</div>
                    <p className="text-xs text-slate-500">
                      Showed characteristic vibrations of the rhenium complex's carbonyl groups at 
                      2033 and 1928 cm-1, proving it's attached.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <div className="text-sm font-semibold text-slate-800 mb-1">XPS & UV-Vis Analysis</div>
                    <p className="text-xs text-slate-500">
                      X-ray analysis confirmed rhenium, phosphorus, nitrogen, and bromine atoms. UV-Vis showed 
                      the dye absorbs light up to 484 nm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Figure 3: How sensing works */}
      <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">Figure 3</h2>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">The Sensing Mechanism</h3>
              <p className="text-sm text-slate-500 mb-4">
                Watch the animated sensor response
              </p>
              <div className="text-sm text-slate-400 italic">
                Adapted from Wettstein et al., Adv. Sci. 2024, Fig. 3
              </div>
            </div>
            <div className="md:col-span-2">
              <Figure3Sensing />
              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">The test setup:</h4>
                  <p className="text-slate-600 leading-relaxed">
                    The researchers built a custom testing platform with mass flow controllers that deliver 
                    precise gas mixtures to a sealed chamber housing four sensor devices. A glass window 
                    allows green LED light (516 nm wavelength) to reach the sensors without disturbing the 
                    gas flow.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Understanding the signal:</h4>
                  <p className="text-slate-600 leading-relaxed">
                    When exposed to 1000 ppm of oxygen under green light, the sensor shows 
                    a <strong className="text-slate-900">30.5% drop in resistance</strong> (with only 4.3% variation 
                    across devices). The response peaks within 6 seconds and fully recovers after 
                    purging with nitrogen for 9 minutes. This is both fast and repeatable.
                  </p>
                </div>

                <div className="p-5 bg-white rounded-xl border border-slate-200">
                  <h5 className="font-semibold text-slate-900 mb-3">Why does resistance drop?</h5>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Carbon nanotubes behave like p-type semiconductors - they conduct electricity through 
                    positive charge carriers called "holes." Under light with no oxygen, the photosensitizer 
                    injects electrons into the nanotubes, filling these holes and increasing resistance.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    When oxygen is present, it traps these photoexcited electrons before they reach the nanotubes. 
                    Fewer electrons means more holes remain available for conduction, so resistance stays lower.
                    The more oxygen, the more trapping, the bigger the resistance difference.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Every component is essential:</h4>
                  <p className="text-slate-600 leading-relaxed mb-3">
                    The paper systematically tested what happens when you remove each component:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-1.5 shrink-0" />
                      <p className="text-sm text-slate-600"><strong className="text-slate-800">Without TiO2:</strong> No meaningful oxygen response - the bridge between the dye and nanotubes is missing.</p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-1.5 shrink-0" />
                      <p className="text-sm text-slate-600"><strong className="text-slate-800">Without the Re dye:</strong> Small, irreversible signal from TiO2 surface defects filling with oxygen - not useful for sensing.</p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-1.5 shrink-0" />
                      <p className="text-sm text-slate-600"><strong className="text-slate-800">Without SWCNTs:</strong> Resistance too high to measure - the conductive backbone is gone.</p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-1.5 shrink-0" />
                      <p className="text-sm text-slate-600"><strong className="text-slate-800">Without light:</strong> No response at all - the photosensitizer needs light to start the electron transfer process.</p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-1.5 shrink-0" />
                      <p className="text-sm text-slate-600"><strong className="text-slate-800">With other dyes (N3, N719):</strong> Popular solar cell dyes performed worse, showing the Re complex is uniquely suited for oxygen sensing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Diagram */}
      <section className="py-16 md:py-20 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">Figure 3E</h2>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">The Electron Highway</h3>
              <p className="text-sm text-slate-500 mb-4">
                How electrons flow through the system
              </p>
              <div className="text-sm text-slate-400 italic">
                Adapted from Wettstein et al., Adv. Sci. 2024, Fig. 3E
              </div>
            </div>
            <div className="md:col-span-2">
              <EnergyDiagram />
              <div className="mt-8 space-y-4">
                <h4 className="font-semibold text-slate-900">Reading the energy diagram:</h4>
                <p className="text-slate-600 leading-relaxed">
                  Think of this like a height map for electrons. Electrons naturally want to "fall" 
                  to lower energy levels, just like a ball rolls downhill. The vertical axis shows 
                  energy (in volts vs. NHE - a standard reference point in electrochemistry).
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <div className="text-sm font-semibold text-slate-800 mb-2">The downhill path:</div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      The rhenium dye absorbs green light (2.56 eV of energy) and its excited state sits 
                      at -0.93V. This is higher than the TiO2 conduction band (-0.5V), which is higher than 
                      where electrons sit in SWCNTs. Electrons naturally cascade downhill through this chain.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <div className="text-sm font-semibold text-slate-800 mb-2">Oxygen as gatekeeper:</div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Oxygen molecules intercept electrons during this downhill journey. The more oxygen present, 
                      the more electrons get captured, and fewer reach the SWCNTs. The ground-state potential 
                      of the dye (~1.63V) allows surface water to regenerate the sensitizer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Figure 4: Sensitivity */}
      <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">Figure 4</h2>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Sensitivity Performance</h3>
              <p className="text-sm text-slate-500 mb-4">
                Interact with the concentration curves
              </p>
              <div className="text-sm text-slate-400 italic">
                Adapted from Wettstein et al., Adv. Sci. 2024, Fig. 4
              </div>
            </div>
            <div className="md:col-span-2">
              <Figure4Sensitivity />
              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">What the data shows:</h4>
                  <p className="text-slate-600 leading-relaxed">
                    The sensor responds linearly to oxygen concentrations from 50 to 500 ppm in 1-minute 
                    exposures. This linear relationship is critical for practical use - it means you can 
                    calculate exact oxygen levels from a simple resistance reading without complex algorithms.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 text-center">
                    <div className="text-3xl font-semibold text-teal-600">2.2 ppm</div>
                    <div className="text-sm text-slate-500 mt-1">Detection limit (1 min)</div>
                    <div className="text-xs text-slate-400 mt-1">That is 0.00022% oxygen</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200 text-center">
                    <div className="text-3xl font-semibold text-teal-600">157 ppb</div>
                    <div className="text-sm text-slate-500 mt-1">Detection limit (60 min)</div>
                    <div className="text-xs text-slate-400 mt-1">Parts per billion sensitivity</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200 text-center">
                    <div className="text-3xl font-semibold text-teal-600">0-20%</div>
                    <div className="text-sm text-slate-500 mt-1">Full operating range</div>
                    <div className="text-xs text-slate-400 mt-1">From trace to ambient levels</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Exponential at higher concentrations:</h4>
                  <p className="text-slate-600 leading-relaxed">
                    At oxygen levels above 500 ppm and up to 20% (atmospheric levels), the response 
                    follows an exponential curve rather than linear. This is typical for sensors approaching 
                    saturation and can still be calibrated accurately using standard curves.
                  </p>
                </div>

                <div className="p-5 bg-teal-50 rounded-xl border border-teal-100">
                  <h5 className="font-semibold text-teal-900 mb-2">Humidity tolerance: 0-80% RH</h5>
                  <p className="text-sm text-teal-700">
                    The sensor performs consistently across a wide humidity range. This is a major 
                    breakthrough because humidity interference is one of the biggest challenges facing 
                    carbon nanotube-based sensors. Most competing technologies fail or drift significantly 
                    when moisture is present.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Figure 5: Selectivity */}
      <section className="py-16 md:py-20 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">Figure 5</h2>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Selectivity & Stability</h3>
              <p className="text-sm text-slate-500 mb-4">
                Compare responses to different gases
              </p>
              <div className="text-sm text-slate-400 italic">
                Adapted from Wettstein et al., Adv. Sci. 2024, Fig. 5
              </div>
            </div>
            <div className="md:col-span-2">
              <Figure5Selectivity />
              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Why selectivity matters:</h4>
                  <p className="text-slate-600 leading-relaxed">
                    A sensor is only useful if it responds specifically to what you want to measure. 
                    Real-world environments contain dozens of different gases. The researchers tested 
                    the sensor against six common interfering gases at 1000 ppm each.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <h5 className="text-sm font-semibold text-slate-800 mb-2">Gases that don't interfere:</h5>
                    <ul className="space-y-1.5">
                      <li className="text-sm text-slate-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        Nitrous oxide (N2O) - minimal response
                      </li>
                      <li className="text-sm text-slate-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        Carbon dioxide (CO2) - minimal response
                      </li>
                      <li className="text-sm text-slate-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        Hydrogen (H2) - minimal response
                      </li>
                      <li className="text-sm text-slate-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        Methane (CH4) - minimal response
                      </li>
                      <li className="text-sm text-slate-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        Ethylene (C2H4) - minimal response
                      </li>
                      <li className="text-sm text-slate-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        Carbon monoxide (CO) - minimal response
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <h5 className="text-sm font-semibold text-slate-800 mb-2">What this tells us about the mechanism:</h5>
                    <ul className="space-y-2">
                      <li className="text-sm text-slate-600">
                        <strong className="text-slate-700">No CO2 response:</strong> Light does not create reactive 
                        anion species on the sensor surface (which would react with CO2).
                      </li>
                      <li className="text-sm text-slate-600">
                        <strong className="text-slate-700">No H2 response:</strong> Unlike hot metal oxide sensors, 
                        this sensor doesn't undergo reduction by hydrogen at room temperature.
                      </li>
                      <li className="text-sm text-slate-600">
                        <strong className="text-slate-700">No CO/C2H4 response:</strong> The rhenium dye stays 
                        intact under light - no ligand loss that would create binding sites for these gases.
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">No poisoning effect:</h4>
                  <p className="text-slate-600 leading-relaxed">
                    After exposing the sensor to all interferant gases, the oxygen response was re-tested 
                    and showed no signal loss. This means the sensor doesn't get "poisoned" by other 
                    gases - critical for long-term deployment in complex environments.
                  </p>
                </div>

                <div className="p-5 bg-teal-50 rounded-xl border border-teal-100">
                  <h5 className="font-semibold text-teal-900 mb-2">3+ Month Bench Stability</h5>
                  <p className="text-sm text-teal-700">
                    Sensors stored on an open laboratory bench - exposed to ambient air, light, and 
                    temperature fluctuations - showed no significant loss of oxygen sensing performance 
                    after 3 months. Extended light exposure tests also showed stable operation. This 
                    is remarkable durability for a molecular sensor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Figure 6: Real-world operation */}
      <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">Figure 6</h2>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Ambient Operation</h3>
              <p className="text-sm text-slate-500 mb-4">
                Performance under real-world conditions
              </p>
              <div className="text-sm text-slate-400 italic">
                Adapted from Wettstein et al., Adv. Sci. 2024, Fig. 6
              </div>
            </div>
            <div className="md:col-span-2">
              <Figure6Ambient />
              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">The ultimate real-world test:</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Most trace-level sensors are tested starting from zero oxygen. But in real deployments, 
                    the sensor must detect small changes while already surrounded by normal air (20.0% oxygen, 
                    or 200,000 ppm). This is much harder - like trying to hear a whisper at a concert.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">How it was tested:</h4>
                  <p className="text-slate-600 leading-relaxed">
                    The sensor was equilibrated under green light in synthetic air (20.0% O2 in N2). 
                    Then the oxygen concentration was systematically decreased by diluting with nitrogen, 
                    creating small drops of 50-500 ppm from the 200,000 ppm baseline. The sensor detected 
                    changes as small as 26 ppm even from this high background.
                  </p>
                </div>

                <div className="p-5 bg-white rounded-xl border border-slate-200">
                  <h5 className="font-semibold text-slate-900 mb-3">Dynamic Range: 0 to 200,000 ppm</h5>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    This extraordinary range spans from parts-per-billion detection in controlled environments 
                    to monitoring fluctuations in ambient air at 20% oxygen. The response remained linear 
                    and reversible throughout.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    This result is what makes the sensor viable for real-world field deployment, from 
                    industrial process control to portable environmental monitoring to medical breath analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">Conclusion</h2>
            <h3 className="text-3xl font-semibold text-slate-900 mb-6 text-balance">A New Paradigm in Oxygen Sensing</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              By combining concepts from solar cell technology with advanced nanomaterials, the researchers 
              created an oxygen sensor that operates at room temperature, uses minimal power (under 0.6 watts), 
              and achieves sensitivity and selectivity that matches or exceeds existing commercial solutions.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              The key achievements demonstrated in this paper:
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-3 text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                Parts-per-billion oxygen sensitivity using only visible light and room temperature
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                Exceptional selectivity - no response to six common interfering gases
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                Humidity tolerance from 0-80% relative humidity
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                Multi-month stability with no performance degradation
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                Dynamic range spanning 0 to 200,000 ppm
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                Modular design adaptable to detect other environmental gases
              </li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-8">
              The approach demonstrated here - using light-harvesting molecules to enable selective 
              gas detection - opens new possibilities for distributed sensor networks in environmental 
              monitoring, portable medical diagnostics, and industrial safety.
            </p>
          </div>
        </div>
      </section>

      {/* Publication & Resources */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2 text-center">Resources</h2>
          <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">Publication & Further Reading</h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
            <a 
              href="https://doi.org/10.1002/advs.202405694" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-teal-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <ExternalLink className="w-5 h-5 text-teal-500" />
                <span className="text-sm font-semibold text-slate-900">Full Publication</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-2">
                "A Dye-Sensitized Sensor for Oxygen Detection under Visible Light"
              </p>
              <p className="text-xs text-slate-400">
                Advanced Science, Vol. 11, Issue 43, 2024
              </p>
            </a>
            <a 
              href="https://ethz.ch/en/news-and-events/eth-news/news/2025/03/this-nanotube-has-a-nose-for-oxygen.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-teal-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <ExternalLink className="w-5 h-5 text-teal-500" />
                <span className="text-sm font-semibold text-slate-900">ETH News Article</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-2">
                "This nanotube has a nose for oxygen"
              </p>
              <p className="text-xs text-slate-400">
                ETH Zurich News, March 2025
              </p>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white h-12 rounded-xl">
              <Link href="/#contact">
                Discuss licensing opportunities
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-slate-200 bg-transparent h-12 rounded-xl">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to overview
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            Research by ETH Zurich, Department of Chemistry and Applied Biosciences
          </p>
          <a 
            href="https://doi.org/10.1002/advs.202405694" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-slate-600 transition-colors"
          >
            DOI: 10.1002/advs.202405694
          </a>
        </div>
      </footer>
    </main>
  )
}
