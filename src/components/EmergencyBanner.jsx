import { useEffect, useState } from 'react'
import { AlertTriangle, X } from 'lucide-react'

export default function EmergencyBanner() {
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    // Example message; in a real app this could come from the backend
    const storedDismissed = localStorage.getItem('emergencyBannerDismissed')
    const demoMessage = '' // Set to empty to hide by default

    if (!storedDismissed && demoMessage) {
      setMessage(demoMessage)
      setVisible(true)
    }
  }, [])

  if (!visible || !message) return null

  return (
    <div
      role="region"
      aria-label="Urgent notice"
      className="w-full bg-yellow-100 border-b-2 border-yellow-400 text-yellow-900"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-start gap-3" role="alert">
        <AlertTriangle className="w-5 h-5 mt-0.5" aria-hidden="true" />
        <p className="text-sm flex-1">{message}</p>
        <button
          onClick={() => {
            localStorage.setItem('emergencyBannerDismissed', '1')
            setVisible(false)
          }}
          className="p-1 rounded hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          aria-label="Dismiss urgent notice"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
