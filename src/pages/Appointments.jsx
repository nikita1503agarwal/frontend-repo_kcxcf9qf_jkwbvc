import { useState } from 'react'

export default function Appointments(){
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      patient_name: form.get('patient_name'),
      dob: form.get('dob') || undefined,
      contact: form.get('contact'),
      action: form.get('action'),
      preferred_date: form.get('preferred_date') || undefined,
      reason: form.get('reason') || undefined,
      urgent: form.get('urgent') === 'on',
    }
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/appointments`, {
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
      <h1 className="text-3xl font-bold">Appointments & Prescriptions</h1>

      <div className="mt-6 bg-blue-50 border border-blue-200 p-4 rounded text-sm text-blue-900">
        For medical emergencies, call 999. For urgent medical advice when we are closed, call NHS 111.
      </div>

      <form className="mt-6 grid gap-4" onSubmit={handleSubmit} aria-label="Appointment form">
        <div>
          <label className="block text-sm font-medium" htmlFor="action">I want to</label>
          <select id="action" name="action" required className="mt-1 w-full border rounded px-3 py-2">
            <option value="request">Request an appointment</option>
            <option value="cancel">Cancel an appointment</option>
          </select>
        </div>
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
          <label className="block text-sm font-medium" htmlFor="preferred_date">Preferred date</label>
          <input id="preferred_date" name="preferred_date" type="date" className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="reason">Reason (optional)</label>
          <textarea id="reason" name="reason" rows="4" className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div className="flex items-center gap-2">
          <input id="urgent" name="urgent" type="checkbox" className="" />
          <label htmlFor="urgent" className="text-sm">This is urgent</label>
        </div>
        <button className="bg-blue-700 text-white px-4 py-2 rounded font-semibold">Submit</button>
        {status && (
          <p className={`text-sm ${status.ok ? 'text-emerald-700' : 'text-red-700'}`}>
            {status.ok ? 'Submitted. Our team will contact you.' : `There was a problem: ${status.error}`}
          </p>
        )}
      </form>
    </div>
  )
}
