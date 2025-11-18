import Spline from '@splinetool/react-spline'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/70 to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
        <div className="max-w-xl">
          <p className="inline-block bg-blue-600/20 text-blue-200 border border-blue-500/30 px-3 py-1 rounded-full text-xs tracking-wide mb-4">NHS GP PRACTICE</p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">High-quality, local NHS care in Thames Ditton</h1>
          <p className="mt-4 text-slate-200">We provide accessible, patient‑centred care for our community. Register, book appointments and manage prescriptions online.</p>

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <Link to="/prescriptions" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600">
              Order Repeat Prescription
              <ChevronRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Link>
            <Link to="/appointments" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600">
              Request / Cancel Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
