'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Building2, CreditCard, Heart, Loader2, Receipt, ShieldCheck } from 'lucide-react'

type Currency = {
  code: string
  symbol: string
  name: string
  accountNumber: string
}

const currencies: Currency[] = [
  { code: 'GBP', symbol: '£', name: 'Pound Sterling', accountNumber: '5061807898' },
  { code: 'NGN', symbol: '₦', name: 'Nigerian Naira', accountNumber: '1312325669' },
  { code: 'USD', symbol: '$', name: 'US Dollar', accountNumber: '5076052391' },
  { code: 'EUR', symbol: '€', name: 'Euro', accountNumber: '5081522531' },
]

const BANK_DETAILS = {
  accountName: 'Climate And Green World Foundation',
  bankName: 'Zenith Bank',
}

type PaymentMethod = 'paystack' | 'bank-transfer' | 'tax-free'

const paymentMethods: {
  id: PaymentMethod
  label: string
  description: string
  icon: typeof CreditCard
}[] = [
  {
    id: 'paystack',
    label: 'Paystack',
    description: 'Card, bank, USSD and mobile money checkout.',
    icon: CreditCard,
  },
  {
    id: 'bank-transfer',
    label: 'Bank transfer',
    description: 'Transfer directly to our account for the currency you selected.',
    icon: Building2,
  },
  {
    id: 'tax-free',
    label: 'Tax free donation',
    description: 'Prefer to make a tax free donation, contact us for details.',
    icon: Receipt,
  },
]

export default function DonationForm() {
  const [currency, setCurrency] = useState<Currency | null>(null)
  const [method, setMethod] = useState<PaymentMethod>('paystack')
  const [amount, setAmount] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

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
          amount: Number(amount),
          currency: currency?.code,
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
    <div className="space-y-7">
      {/* Currency selection */}
      <div>
        <h2 className="heading-lg mb-5 text-center">
          Donate In £ , ₦ , $ , €
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {currencies.map((option) => {
            const isSelected = currency?.code === option.code

            return (
              <button
                key={option.code}
                type="button"
                onClick={() => {
                  setCurrency(option)
                  setError('')
                }}
                className={`px-5 py-6 rounded-xl border-2 text-center transition-all duration-200 hover:shadow-md ${
                  isSelected
                    ? 'border-forest-green bg-forest-green/5 shadow-sm'
                    : 'border-border-color hover:border-forest-green'
                }`}
                aria-pressed={isSelected}
              >
                <p className="font-garamond font-semibold text-3xl text-text-primary mb-1">
                  {option.symbol}
                </p>
                <p className="font-comfortaa text-xs text-text-secondary uppercase tracking-wide">
                  {option.code}
                </p>
              </button>
            )
          })}
        </div>
        {!currency && (
          <p className="font-garamond text-base text-text-secondary mt-4 text-center italic">
            Choose a currency to continue to a payment method.
          </p>
        )}
      </div>

      {currency && (
        <>
          {/* Payment method for the selected currency */}
          <div className="bg-neutral-bg rounded-xl border border-forest-green/20 p-5 sm:p-6">
            <h2 className="heading-md mb-2">Choose a payment method.</h2>
            <p className="font-garamond text-base text-text-secondary mb-5">
              Payment methods available for donations in {currency.name} ({currency.symbol}).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {paymentMethods.map((option) => {
                const Icon = option.icon
                const isSelected = method === option.id

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => {
                      setMethod(option.id)
                      setError('')
                    }}
                    className={`px-5 py-4 rounded-xl border-2 text-left transition-all duration-200 hover:shadow-md bg-white ${
                      isSelected
                        ? 'border-forest-green shadow-sm'
                        : 'border-border-color hover:border-forest-green'
                    }`}
                    aria-pressed={isSelected}
                  >
                    <Icon size={20} className="text-forest-green mb-3" />
                    <p className="font-garamond font-semibold text-lg text-text-primary mb-1">
                      {option.label}
                    </p>
                    <p className="font-garamond text-sm text-text-secondary">
                      {option.description}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>

          {method === 'paystack' ? (
            <form onSubmit={handleSubmit}>
              <div className="bg-neutral-bg rounded-xl border border-forest-green/20 p-5 sm:p-6">
                <div className="w-12 h-12 rounded-full bg-forest-green/10 flex items-center justify-center mb-4">
                  <Heart size={24} className="text-forest-green" />
                </div>
                <h2 className="heading-md mb-2">Complete your donation.</h2>
                <p className="font-garamond text-base text-text-secondary mb-4">
                  Enter any amount you wish to give. You will be sent to Paystack to complete a
                  secure payment in {currency.code}.
                </p>

                <div className="mb-4">
                  <label
                    htmlFor="donation-amount"
                    className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5"
                  >
                    Amount ({currency.symbol}) *
                  </label>
                  <input
                    id="donation-amount"
                    type="number"
                    className="input-field"
                    placeholder={`Enter any amount in ${currency.code}`}
                    min="1"
                    step="any"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                    required
                  />
                </div>

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
          ) : (
            <div className="bg-neutral-bg rounded-xl border border-forest-green/20 p-5 sm:p-6">
              <div className="w-12 h-12 rounded-full bg-forest-green/10 flex items-center justify-center mb-4">
                <Heart size={24} className="text-forest-green" />
              </div>
              <h2 className="heading-md mb-2">
                {method === 'bank-transfer' ? 'Donate by bank transfer.' : 'Make a tax free donation.'}
              </h2>
              <p className="font-garamond text-base text-text-secondary mb-5">
                {method === 'bank-transfer'
                  ? `Transfer any amount you wish to our ${currency.name} (${currency.symbol}) account below.`
                  : `Prefer to make a tax free donation, contact us for details. You are welcome to give any amount you wish in ${currency.name}.`}
              </p>

              {method === 'bank-transfer' && (
                <dl className="bg-white rounded-xl border border-border-color divide-y divide-border-color mb-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-5 py-4">
                    <dt className="font-comfortaa text-xs font-semibold text-text-secondary uppercase tracking-wide sm:w-40 flex-shrink-0">
                      Account Name
                    </dt>
                    <dd className="font-garamond text-lg text-text-primary">
                      {BANK_DETAILS.accountName}
                    </dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-5 py-4">
                    <dt className="font-comfortaa text-xs font-semibold text-text-secondary uppercase tracking-wide sm:w-40 flex-shrink-0">
                      Bank Name
                    </dt>
                    <dd className="font-garamond text-lg text-text-primary">
                      {BANK_DETAILS.bankName}
                    </dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-5 py-4">
                    <dt className="font-comfortaa text-xs font-semibold text-text-secondary uppercase tracking-wide sm:w-40 flex-shrink-0">
                      Account Number
                    </dt>
                    <dd className="font-garamond font-semibold text-lg text-forest-green tracking-wide">
                      {currency.accountNumber}{' '}
                      <span className="font-comfortaa text-xs text-text-secondary uppercase tracking-wide">
                        {currency.symbol} {currency.name}
                      </span>
                    </dd>
                  </div>
                </dl>
              )}

              <Link href="/contact" className="btn-primary inline-flex gap-2">
                Contact us
                <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </>
      )}

      {/* Alternative giving routes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl border border-border-color">
          <p className="font-garamond text-base text-text-primary">
            Prefer to make a tax free donation, contact us for details.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-3 font-comfortaa font-semibold text-sm text-forest-green hover:text-lime-green transition-colors"
          >
            Contact us
            <ArrowRight size={14} />
          </Link>
        </div>
        <div className="p-5 rounded-xl border border-border-color">
          <p className="font-garamond text-base text-text-primary">
            Prefer to donate by bank transfer? Select a currency above, then choose Bank transfer
            for our account details.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-3 font-comfortaa font-semibold text-sm text-forest-green hover:text-lime-green transition-colors"
          >
            Contact us
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}
