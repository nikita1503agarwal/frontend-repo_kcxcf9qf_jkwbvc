import { useEffect, useState } from 'react'

export default function News(){
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try{
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/news`)
        if(!res.ok) throw new Error('Failed to load news')
        const data = await res.json()
        setItems(data)
      } catch(err){
        setError(err.message)
      }
    }
    load()
  }, [])

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">News & Updates</h1>
      {error && <p className="text-sm text-red-700 mt-4">{error}</p>}
      <div className="mt-6 grid gap-4">
        {items.length === 0 && !error && (
          <p className="text-slate-600">No updates yet.</p>
        )}
        {items.map((n, idx) => (
          <article key={idx} className="border rounded p-4">
            <h3 className="font-semibold">{n.title}</h3>
            <p className="text-sm text-slate-700 mt-1">{n.body}</p>
            {n.published_at && (
              <p className="text-xs text-slate-500 mt-2">Published: {new Date(n.published_at).toLocaleString()}</p>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
