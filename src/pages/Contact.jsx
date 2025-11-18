import { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email') || undefined,
      phone: form.get('phone') || undefined,
      message: form.get('message'),
      consent: form.get('consent') === 'on',
    }
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if(!res.ok) throw new Error('Failed to send')
      setStatus({ ok: true })
      e.currentTarget.reset()
    } catch (err){
      setStatus({ ok: false, error: err.message })
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">Contact the Surgery Online</h1>
      <p className="text-slate-600 mt-2">For non-urgent administrative queries only.</p>

      <form className="mt-6 grid gap-4" onSubmit={handleSubmit} aria-label="Contact form">
        <div>
          <label className="block text-sm font-medium" htmlFor="name">Full name</label>
          <input id="name" name="name" required className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="phone">Phone</label>
            <input id="phone" name="phone" className="mt-1 w-full border rounded px-3 py-2" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="message">Message</label>
          <textarea id="message" name="message" required rows="5" className="mt-1 w-full border rounded px-3 py-2" />
        </div>
        <div className="flex items-start gap-2">
          <input id="consent" name="consent" type="checkbox" required className="mt-1" />
          <label htmlFor="consent" className="text-sm">I consent to the surgery storing and processing my details for this query.</label>
        </div>
        <button className="bg-slate-900 text-white px-4 py-2 rounded font-semibold">Send message</button>
        {status && (
          <p className={`text-sm ${status.ok ? 'text-emerald-700' : 'text-red-700'}`}>
            {status.ok ? 'Message sent. We will respond as soon as possible.' : `There was a problem: ${status.error}`}
          </p>
        )}
      </form>
    </div>
  )
}
