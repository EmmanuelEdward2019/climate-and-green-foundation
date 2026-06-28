'use client'

import { FormEvent, useMemo, useState } from 'react'
import { ArrowRight, Heart, Loader2, ShieldCheck } from 'lucide-react'

type GiftLevel = {
  amount: number
  label: string
  impact: string
  recommended: boolean
}

type DonationFormProps = {
  giftLevels: GiftLevel[]
}

export default function DonationForm({ giftLevels }: DonationFormProps) {
  const defaultAmount = giftLevels[2]?.amount || giftLevels[0]?.amount || 5000
  const [selectedAmount, setSelectedAmount] = useState(defaultAmount)
  const [customAmount, setCustomAmount] = useState(String(defaultAmount))
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const activeAmount = useMemo(() => {
    const parsedCustomAmount = Number(customAmount)

    if (customAmount && Number.isFinite(parsedCustomAmount) && parsedCustomAmount > 0) {
      return parsedCustomAmount
    }

    return selectedAmount
  }, [customAmount, selectedAmount])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/paystack/initialize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: activeAmount,
          email,
          name,
          phone,
          frequency: 'one-time',
        }),
      })
      const data = await response.json()

      if (!response.ok || !data.authorizationUrl) {
        throw new Error(data.error || 'Unable to start this donation.')
      }

      window.location.href = data.authorizationUrl
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : 'Unable to start this donation. Please try again.',
      )
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div>
        <h2 className="heading-lg mb-5 text-center">Choose your impact.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          {giftLevels.map((level) => {
            const isSelected = selectedAmount === level.amount

            return (
              <button
                key={level.amount}
                type="button"
                onClick={() => {
                  setSelectedAmount(level.amount)
                  setCustomAmount(String(level.amount))
                }}
                className={`relative px-5 py-4 rounded-xl border-2 text-left transition-all duration-200 hover:shadow-md group ${
                  isSelected
                    ? 'border-forest-green bg-forest-green/5 shadow-sm'
                    : level.recommended
                      ? 'border-lime-green bg-lime-green/5'
                      : 'border-border-color hover:border-forest-green'
                }`}
                aria-pressed={isSelected}
              >
                {level.recommended && (
                  <span className="absolute top-3 right-3 bg-lime-green text-white font-comfortaa font-semibold text-xs px-2 py-0.5 rounded-full">
                    Popular
                  </span>
                )}
                <p className="font-garamond font-semibold text-xl text-text-primary mb-1">
                  {level.label}
                </p>
                <p className="font-garamond text-base text-text-secondary">{level.impact}</p>
              </button>
            )
          })}
        </div>

        <div className="p-4 rounded-xl border border-border-color">
          <label
            htmlFor="custom-amount"
            className="font-garamond font-semibold text-base text-text-primary mb-2 block"
          >
            Custom amount
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              id="custom-amount"
              type="number"
              className="input-field"
              placeholder="Enter amount in NGN"
              min="100"
              value={customAmount}
              onChange={(event) => {
                setCustomAmount(event.target.value)
                setSelectedAmount(Number(event.target.value))
              }}
            />
            <button type="button" className="btn-outline flex-shrink-0" onClick={() => {
              setSelectedAmount(defaultAmount)
              setCustomAmount(String(defaultAmount))
            }}>
              Clear
            </button>
          </div>
          <p className="font-garamond text-sm text-text-secondary mt-2 italic">
            Whatever you can give, we will put to work.
          </p>
        </div>
      </div>

      <div className="bg-neutral-bg rounded-xl border border-forest-green/20 p-5 sm:p-6">
        <div className="w-12 h-12 rounded-full bg-forest-green/10 flex items-center justify-center mb-4">
          <Heart size={24} className="text-forest-green" />
        </div>
        <h2 className="heading-md mb-2">Complete your donation.</h2>
        <p className="font-garamond text-base text-text-secondary mb-4">
          You will be sent to Paystack to complete a secure payment of{' '}
          <strong className="text-text-primary">NGN {activeAmount.toLocaleString()}</strong>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
          <div>
            <label htmlFor="donor-name" className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">
              Name
            </label>
            <input
              id="donor-name"
              type="text"
              className="input-field"
              placeholder="Your full name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="donor-email" className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">
              Email *
            </label>
            <input
              id="donor-email"
              type="email"
              className="input-field"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="donor-phone" className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">
            Phone
          </label>
          <input
            id="donor-phone"
            type="tel"
            className="input-field"
            placeholder="+234"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>

        {error && (
          <p className="font-comfortaa text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-5">
            {error}
          </p>
        )}

        <button type="submit" className="btn-primary w-full sm:w-auto gap-2" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Redirecting to Paystack
            </>
          ) : (
            <>
              Donate with Paystack
              <ArrowRight size={16} />
            </>
          )}
        </button>

        <p className="font-comfortaa text-xs text-text-secondary mt-4 flex items-center gap-2">
          <ShieldCheck size={15} className="text-forest-green" />
          Secure checkout is handled by Paystack.
        </p>
      </div>
    </form>
  )
}
