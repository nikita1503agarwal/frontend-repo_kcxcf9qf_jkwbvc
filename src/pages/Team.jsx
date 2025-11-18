export default function Team(){
  const partners = [
    { name: 'Dr Roberts', role: 'GP Partner' },
    { name: 'Dr Mitchell', role: 'GP Partner' },
    { name: 'Dr Taki', role: 'GP Partner' },
  ]
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">Meet the Team</h1>
      <p className="text-slate-600 mt-2">Our experienced clinicians and staff are here to support your health.</p>
      <div className="mt-6 grid sm:grid-cols-3 gap-4">
        {partners.map(p => (
          <div key={p.name} className="border rounded p-4">
            <div className="w-16 h-16 rounded-full bg-slate-200" aria-hidden="true" />
            <p className="mt-3 font-semibold">{p.name}</p>
            <p className="text-sm text-slate-600">{p.role}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 bg-emerald-50 border border-emerald-200 rounded">
        CQC Rating: <span className="font-semibold">Overall Good</span> — <a className="underline" href="https://www.cqc.org.uk/" target="_blank" rel="noreferrer">View our CQC profile</a>
      </div>
    </div>
  )
}
