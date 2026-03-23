export function Footer() {
  return (
    <footer className="py-8 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
              <span className="text-white text-sm font-semibold">O₂</span>
            </div>
            <span className="text-slate-900 font-medium">Dye-Sensitized Oxygen Sensor</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://ethz.ch/transfer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 text-sm transition-colors"
            >
              ETH Transfer
            </a>
            <a
              href="https://doi.org/10.1002/advs.202405694"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 text-sm transition-colors"
            >
              Publication
            </a>
            <a
              href="mailto:transfer@sl.ethz.ch"
              className="text-slate-500 hover:text-slate-900 text-sm transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-slate-200 text-center">
          <p className="text-slate-400 text-xs">
            Published in Advanced Science 2024, 11, 2405694. Patent pending.
          </p>
        </div>
      </div>
    </footer>
  )
}
