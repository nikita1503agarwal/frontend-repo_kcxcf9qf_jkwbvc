import { useState } from 'react'

export default function Prescriptions(){
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const meds = (form.get('medications') || '')
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean)

    const payload = {
      patient_name: form.get('patient_name'),
      dob: form.get('dob') || undefined,
      contact: form.get('contact'),
      medications: meds,
      nominated_pharmacy: form.get('pharmacy') || undefined,
      notes: form.get('notes') || undefined,
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/prescriptions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if(!res.ok) throw new Error('Failed to submit')
      setStatus({ ok: true })
      e.currentTarget.reset()
    } catch (err){
      setStatus({ ok: false, error: err.message })
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">Order Repeat Prescription</h1>
      <p className="text-slate-600 mt-2">Send your repeat prescription request securely. For urgent medication needs, contact your nominated pharmacy.</p>

      <form className="mt-6 grid gap-4" onSubmit={handleSubmit} aria-label="Prescription form">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium" htmlFor="patient_name">Full name</label>
            <input id="patient_name" name="patient_name" required className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="dob">Date of birth</label>
            <input id="dob" name="dob" placeholder="DD/MM/YYYY" className="mt-1 w-full border rounded px-3 py-2" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="contact">Contact details</label>
          <input id="contact" name="contact" required className="mt-1 w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium" htmlFor="medications">Medication list</label>
          <textarea id="medications" name="medications" required rows="6" placeholder={"e.g.\nRamipril 10mg\nAtorvastatin 20mg"} className="mt-1 w-full border rounded px-3 py-2 font-mono" />
        </div>

        <div>
          <label className="block text-sm font-medium" htmlFor="pharmacy">Nominated pharmacy</label>
          <input id="pharmacy" name="pharmacy" className="mt-1 w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium" htmlFor="notes">Notes (optional)</label>
          <textarea id="notes" name="notes" rows="4" className="mt-1 w-full border rounded px-3 py-2" />
        </div>

        <button className="bg-blue-700 text-white px-4 py-2 rounded font-semibold">Submit request</button>
        {status && (
          <p className={`text-sm ${status.ok ? 'text-emerald-700' : 'text-red-700'}`}>
            {status.ok ? 'Request sent. We typically process within 2 working days.' : `There was a problem: ${status.error}`}
          </p>
        )}
      </form>
    </div>
  )
}
