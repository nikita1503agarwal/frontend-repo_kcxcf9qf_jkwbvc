export default function Info(){
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">Patient Information</h1>
      <div className="mt-4 space-y-4 text-slate-700">
        <p>Find practice policies, accessibility information, and how to access your medical records.</p>
        <ul className="list-disc ml-5">
          <li>Accessibility: This site aims to meet WCAG 2.1 AA standards.</li>
          <li>How we use your data and your rights.</li>
          <li>Zero tolerance to abuse of staff.</li>
        </ul>
      </div>
    </div>
  )
}
