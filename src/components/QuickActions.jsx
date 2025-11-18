import { FileText, CalendarCheck, MessageSquare, UserPlus, FlaskConical } from 'lucide-react'
import { Link } from 'react-router-dom'

const actions = [
  {
    title: 'Order Repeat Prescription',
    to: '/prescriptions',
    icon: FileText,
    desc: 'Request your repeat medications quickly and securely',
    color: 'bg-blue-600 hover:bg-blue-500',
  },
  {
    title: 'Request/Cancel Appointment',
    to: '/appointments',
    icon: CalendarCheck,
    desc: 'Tell us your needs and we will get back to you',
    color: 'bg-emerald-600 hover:bg-emerald-500',
  },
  {
    title: 'Contact the Surgery Online',
    to: '/contact',
    icon: MessageSquare,
    desc: 'Non-urgent admin queries to our team',
    color: 'bg-slate-700 hover:bg-slate-600',
  },
  {
    title: 'Register as a New Patient',
    to: '/register',
    icon: UserPlus,
    desc: 'Check eligibility and complete a quick form',
    color: 'bg-teal-700 hover:bg-teal-600',
  },
  {
    title: 'Get Test Results',
    to: '/results',
    icon: FlaskConical,
    desc: 'Find out how to access your lab results',
    color: 'bg-indigo-700 hover:bg-indigo-600',
  },
]

export default function QuickActions() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <h2 className="text-2xl font-bold text-slate-900">How can we help today?</h2>
        <p className="text-slate-600 mt-1">Quick access to the most common tasks</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {actions.map(({ title, to, icon: Icon, desc, color }) => (
            <Link key={title} to={to} className={`group rounded-lg p-4 text-white ${color} focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900`}>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/20 rounded">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-white/90 text-sm mt-1">{desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
