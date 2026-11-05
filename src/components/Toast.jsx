import { Check } from 'lucide-react'

export default function Toast({ message }) {
  return (
    <div className={`toast${message ? ' show' : ''}`} role="status" aria-live="polite">
      <Check /><span>{message}</span>
    </div>
  )
}
