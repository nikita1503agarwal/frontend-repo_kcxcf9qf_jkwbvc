export default function ContactHours(){
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">Contact & Opening Hours</h1>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div className="space-y-2 text-slate-700">
          <p><span className="font-semibold">Address:</span> Thorkhill Gardens, Thames Ditton, Surrey, KT7 0UP, UK</p>
          <p><span className="font-semibold">Phone:</span> 020 8398 3141</p>
          <p><span className="font-semibold">Opening Hours:</span> Monday to Friday, 8:00 AM – 6:00 PM (Closed Weekends)</p>
          <p className="text-sm text-slate-600">If the surgery is closed and you require urgent medical advice, please call NHS 111.</p>
        </div>
        <div>
          <div className="aspect-[4/3] w-full border rounded overflow-hidden">
            <iframe
              title="Map of Thorkhill Surgery"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=Thorkhill%20Gardens%2C%20Thames%20Ditton%2C%20Surrey%2C%20KT7%200UP&output=embed`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
