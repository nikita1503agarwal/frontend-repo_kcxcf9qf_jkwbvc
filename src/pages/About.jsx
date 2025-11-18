export default function About(){
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">About Thorkhill Surgery</h1>
      <p className="text-slate-700 mt-3">Our mission is to improve the health and wellbeing of our community through accessible, high‑quality primary care delivered with compassion, dignity and respect.</p>
      <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded">
        CQC Rating: <span className="font-semibold">Overall Good</span> — <a className="underline" href="https://www.cqc.org.uk/" target="_blank" rel="noreferrer">View our CQC profile</a>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Our Partners</h2>
        <ul className="mt-2 grid sm:grid-cols-2 gap-2">
          <li className="border rounded p-3">Dr Roberts — GP Partner</li>
          <li className="border rounded p-3">Dr Mitchell — GP Partner</li>
          <li className="border rounded p-3">Dr Taki — GP Partner</li>
        </ul>
      </div>
    </div>
  )
}
