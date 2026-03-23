"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ExternalLink, Mail, ArrowRight, Award, BookOpen, Newspaper } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
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
    <section id="contact" className="py-24 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Inventors Section */}
        <div className={cn(
          "mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2 text-center">The Team</h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-12 text-center text-balance">
            Meet the inventors
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Prof. Dr. Mate Bezdek */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors">
              <div className="flex items-start gap-5 mb-5">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center shrink-0">
                  <span className="text-teal-700 text-xl font-bold">MB</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Prof. Dr. Mate J. Bezdek</h4>
                  <p className="text-sm text-slate-500">Principal Investigator</p>
                  <p className="text-sm text-teal-600">
                    Assistant Professor, Functional Coordination Chemistry
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                Mate leads the Functional Coordination Chemistry group at ETH Zurich. His research 
                spans organometallic chemistry, carbon nanomaterial-metal hybrids, and stimuli-responsive 
                materials for environmental gas sensing. Previously at MIT and Princeton University.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span className="text-slate-700">Porter Ogden Jacobus Fellowship, Princeton University</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BookOpen className="w-4 h-4 text-teal-500" />
                  <span className="text-slate-700">PhD Princeton, Postdoc MIT (Swager Group)</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <a 
                  href="https://bezdek.ethz.ch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-teal-600 hover:text-teal-700 transition-colors flex items-center gap-1"
                >
                  Visit research group
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Lionel Wettstein */}
            <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors">
              <div className="flex items-start gap-5 mb-5">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center shrink-0">
                  <span className="text-slate-700 text-xl font-bold">LW</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Lionel Wettstein</h4>
                  <p className="text-sm text-slate-500">First Author & Lead Researcher</p>
                  <p className="text-sm text-teal-600">
                    PhD Student, Functional Coordination Chemistry
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                Lionel is a doctoral student in the Bezdek group at ETH Zurich, specializing in the 
                development of molecular sensors for environmental gas detection. He designed and 
                built the oxygen sensor prototype and led the experimental characterization.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <BookOpen className="w-4 h-4 text-teal-500" />
                  <span className="text-slate-700">D-CHAB, ETH Zurich</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <a 
                  href="https://bezdek.ethz.ch/people/person-detail.MjY1NDQ1.TGlzdC80MjQwLC0zODg5MDc4NDg=.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-teal-600 hover:text-teal-700 transition-colors flex items-center gap-1"
                >
                  View profile
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Additional co-authors */}
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-400">
              With contributions from Julia Specht, Vera Kesselring, Leif Sieben, Yanlin Pan, Daniel Kach, 
              Dominika Baster, Frank Krumeich, and Mario El Kazzi
            </p>
          </div>
        </div>

        {/* Press Coverage */}
        <div className={cn(
          "mb-16 transition-all duration-700 delay-100",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">Press coverage</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <a 
              href="https://ethz.ch/en/news-and-events/eth-news/news/2025/03/this-nanotube-has-a-nose-for-oxygen.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-xl border border-slate-200 hover:border-teal-200 hover:bg-teal-50/30 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <Newspaper className="w-4 h-4 text-slate-400 group-hover:text-teal-500 transition-colors" />
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">ETH Zurich</span>
              </div>
              <p className="text-sm font-medium text-slate-800 group-hover:text-teal-900 transition-colors leading-snug">
                {"\"This nanotube has a nose for oxygen\""}
              </p>
              <p className="text-xs text-slate-400 mt-2">March 2025</p>
            </a>
            <a 
              href="https://phys.org/news/2025-03-carbon-nanotube-sensor-efficiently-oxygen.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-xl border border-slate-200 hover:border-teal-200 hover:bg-teal-50/30 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <Newspaper className="w-4 h-4 text-slate-400 group-hover:text-teal-500 transition-colors" />
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">Phys.org</span>
              </div>
              <p className="text-sm font-medium text-slate-800 group-hover:text-teal-900 transition-colors leading-snug">
                {"\"Carbon nanotube sensor efficiently detects oxygen\""}
              </p>
              <p className="text-xs text-slate-400 mt-2">March 2025</p>
            </a>
            <a 
              href="https://www.chemeurope.com/en/news/1185781/this-nanotube-has-a-nose-for-oxygen.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-xl border border-slate-200 hover:border-teal-200 hover:bg-teal-50/30 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <Newspaper className="w-4 h-4 text-slate-400 group-hover:text-teal-500 transition-colors" />
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">ChemEurope</span>
              </div>
              <p className="text-sm font-medium text-slate-800 group-hover:text-teal-900 transition-colors leading-snug">
                {"\"This nanotube has a nose for oxygen\""}
              </p>
              <p className="text-xs text-slate-400 mt-2">March 2025</p>
            </a>
          </div>
        </div>

        {/* CTA Card */}
        <div className={cn(
          "bg-slate-900 rounded-3xl p-8 md:p-12 transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800 mb-6">
              <span className="text-teal-400 text-sm font-medium">Licensing Opportunity</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 text-balance">
              Interested in this technology?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              This technology is available for licensing through ETH Zurich Transfer. 
              The platform can be adapted to detect other gases beyond oxygen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-3">Technology Readiness</h3>
              <p className="text-slate-400 text-sm mb-4">
                A prototype has been built and tested in laboratory conditions with 
                demonstrated linear response, interferant immunity, and multi-month stability.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex flex-1">
                  {[1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className="flex-1 h-2 bg-teal-500 first:rounded-l"
                    />
                  ))}
                  {[5, 6, 7, 8, 9].map((level) => (
                    <div
                      key={level}
                      className={cn(
                        "flex-1 h-2 bg-slate-700",
                        level === 9 && "rounded-r"
                      )}
                    />
                  ))}
                </div>
                <span className="text-sm text-teal-400 font-medium shrink-0">TRL 4</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-3">IP Status</h3>
              <p className="text-slate-400 text-sm mb-4">
                Patent pending. The technology has been validated in laboratory environment.
                The sensor platform is modular and adaptable to other target gases.
              </p>
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <span>Reference: 2024-034</span>
                <span className="text-slate-700">|</span>
                <span>Market: ~$1.4B annually</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-white font-medium h-12 rounded-xl"
              asChild
            >
              <a href="mailto:transfer@sl.ethz.ch">
                <Mail className="w-5 h-5 mr-2" />
                Contact ETH Transfer
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-white hover:bg-slate-800 bg-transparent h-12 rounded-xl"
              asChild
            >
              <Link href="/technical-details">
                <ArrowRight className="w-5 h-5 mr-2" />
                Read the technical deep dive
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
