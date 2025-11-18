export default function Services(){
  const services = [
    'Routine GP Appointments',
    'Family Planning',
    'Maternity and Midwifery Services',
    'Treatment of Disease/Injury',
    'Surgical Procedures',
    'Diagnostic/Screening Procedures',
  ]
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">Our Services</h1>
      <p className="text-slate-600 mt-2">We offer a wide range of primary care services for you and your family.</p>
      <ul className="mt-6 grid sm:grid-cols-2 gap-3">
        {services.map(s => (
          <li key={s} className="border rounded p-4">{s}</li>
        ))}
      </ul>
    </div>
  )
}
