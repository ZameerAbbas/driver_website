'use client'

import { useState } from 'react'
import { Loader2 } from 'lucide-react'

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const formData = new FormData(e.currentTarget)
      
      // Using Formspree - replace YOUR_FORM_ID with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Failed to send form')
      }

      setIsSuccess(true)
      ;(e.target as HTMLFormElement).reset()
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to send quote request. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border border-border rounded-lg bg-card text-card-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="John Doe"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-border rounded-lg bg-card text-card-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="john@example.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-2 border border-border rounded-lg bg-card text-card-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="(337) 492-6772"
        />
      </div>

      {/* Shipping Type */}
      <div>
        <label htmlFor="shipping_type" className="block text-sm font-medium text-card-foreground mb-2">
          Shipping Type *
        </label>
        <select
          id="shipping_type"
          name="shipping_type"
          required
          className="w-full px-4 py-2 border border-border rounded-lg bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="">Select a shipping type</option>
          <option value="long-haul">Long-haul Freight</option>
          <option value="regional">Regional Delivery</option>
          <option value="specialized">Specialized Hauling</option>
          <option value="custom">Custom Solution</option>
        </select>
      </div>

      {/* Origin */}
      <div>
        <label htmlFor="origin" className="block text-sm font-medium text-card-foreground mb-2">
          Pickup Location *
        </label>
        <input
          type="text"
          id="origin"
          name="origin"
          required
          className="w-full px-4 py-2 border border-border rounded-lg bg-card text-card-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="City, State or Address"
        />
      </div>

      {/* Destination */}
      <div>
        <label htmlFor="destination" className="block text-sm font-medium text-card-foreground mb-2">
          Delivery Location *
        </label>
        <input
          type="text"
          id="destination"
          name="destination"
          required
          className="w-full px-4 py-2 border border-border rounded-lg bg-card text-card-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="City, State or Address"
        />
      </div>

      {/* Cargo Details */}
      <div>
        <label htmlFor="cargo_details" className="block text-sm font-medium text-card-foreground mb-2">
          Cargo Details
        </label>
        <textarea
          id="cargo_details"
          name="cargo_details"
          rows={4}
          className="w-full px-4 py-2 border border-border rounded-lg bg-card text-card-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
          placeholder="Describe your cargo (weight, dimensions, special requirements, etc.)"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
          Additional Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full px-4 py-2 border border-border rounded-lg bg-card text-card-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
          placeholder="Any special requests or additional information?"
        />
      </div>

      {/* Success Message */}
      {isSuccess && (
        <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
          Quote request sent successfully! We'll contact you soon.
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || isSuccess}
        className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Sending...
          </>
        ) : (
          'Send Quote Request'
        )}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        * Required fields. We'll respond within 24 hours.
      </p>
    </form>
  )
}
