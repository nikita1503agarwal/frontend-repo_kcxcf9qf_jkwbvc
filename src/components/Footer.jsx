export default function Footer(){
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <p className="text-white font-semibold">Thorkhill Surgery</p>
          <p className="text-sm text-slate-400 mt-1">Thorkhill Gardens, Thames Ditton, Surrey, KT7 0UP</p>
          <p className="text-sm text-slate-400 mt-1">Phone: 020 8398 3141</p>
          <p className="text-xs text-slate-500 mt-3">If the surgery is closed and you require urgent medical advice, please call NHS 111.</p>
        </div>
        <div>
          <p className="text-white font-semibold">Opening Hours</p>
          <p className="text-sm text-slate-400 mt-1">Mon–Fri: 8:00 AM – 6:00 PM</p>
          <p className="text-sm text-slate-400">Weekends: Closed</p>
        </div>
        <div>
          <p className="text-white font-semibold">Useful Links</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-400">
            <li><a className="hover:text-white underline-offset-4 hover:underline" href="https://www.nhs.uk/nhs-services/urgent-and-emergency-care-services/when-to-use-111/" target="_blank" rel="noreferrer">NHS 111</a></li>
            <li><a className="hover:text-white underline-offset-4 hover:underline" href="https://www.cqc.org.uk/" target="_blank" rel="noreferrer">Care Quality Commission</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Thorkhill Surgery</div>
    </footer>
  )
}
