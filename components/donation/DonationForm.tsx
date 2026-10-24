'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Copy,
  Check,
  CreditCard,
  Heart,
  Loader2,
  Send,
  ShieldCheck,
  X,
} from 'lucide-react'

type Currency = {
  code: string
  symbol: string
  name: string
  accountNumber: string
  flag: string
}

const currencies: Currency[] = [
  { code: 'GBP', symbol: '£', name: 'Pound Sterling', accountNumber: '5061807898', flag: '🇬🇧' },
  { code: 'NGN', symbol: '₦', name: 'Nigerian Naira', accountNumber: '1312325669', flag: '🇳🇬' },
  { code: 'USD', symbol: '$', name: 'US Dollar', accountNumber: '5076052391', flag: '🇺🇸' },
  { code: 'EUR', symbol: '€', name: 'Euro', accountNumber: '5081522531', flag: '🇪🇺' },
]

const BANK_DETAILS = {
  accountName: 'Climate And Green World Foundation',
  bankName: 'Zenith Bank',
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    PaystackPop: any
  }
}

/* ─────────────────────────────── Paystack Section ─────────────────────────── */
function PaystackSection() {
  const [amount, setAmount] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handlePaystack() {
    setError('')

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    const parsedAmount = Number(amount)
    if (!parsedAmount || parsedAmount < 1) {
      setError('Please enter a valid amount.')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/paystack/initialize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: parsedAmount,
          currency: 'NGN',
          email,
          name,
          frequency: 'one-time',
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.accessCode) {
        throw new Error(data.error || 'Unable to start this donation.')
      }

      if (typeof window !== 'undefined' && window.PaystackPop) {
        const handler = window.PaystackPop.setup({
          key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
          email,
          amount: Math.round(parsedAmount * 100),
          currency: 'NGN',
          ref: data.reference,
          access_code: data.accessCode,
          onClose: () => setIsLoading(false),
          callback: () => {
            window.location.href = '/get-involved/donate/thank-you'
          },
        })
        handler.openIframe()
      } else {
        window.location.href = data.authorizationUrl
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Unable to start this donation. Please try again.',
      )
      setIsLoading(false)
    }
  }

  return (
    <div className="rounded-2xl border-2 border-forest-green bg-gradient-to-br from-forest-green/[0.03] to-forest-green/[0.08] overflow-hidden">
      {/* Header */}
      <div className="bg-forest-green px-6 py-5 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
          <CreditCard size={22} className="text-white" />
        </div>
        <div>
          <h3 className="font-garamond font-semibold text-xl text-white leading-tight">
            Pay Online with Paystack
          </h3>
          <p className="font-comfortaa text-xs text-white/70 mt-0.5">
            Card · Bank · USSD · Mobile Money
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="p-5 sm:p-6 space-y-4">
        <p className="font-garamond text-base text-text-secondary">
          Make a secure online donation instantly. Enter your details and click pay — Paystack will
          handle the rest.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">
              Name <span className="text-text-secondary font-normal">(optional)</span>
            </label>
            <input
              type="text"
              className="input-field text-sm"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">
              Email *
            </label>
            <input
              type="email"
              className="input-field text-sm"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError('')
              }}
              required
            />
          </div>
        </div>

        <div>
          <label className="font-comfortaa text-xs font-semibold text-text-primary block mb-1.5">
            Amount (₦) *
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-garamond text-text-secondary text-lg">
              ₦
            </span>
            <input
              type="number"
              className="input-field text-sm pl-8"
              placeholder="Enter amount"
              min="1"
              step="any"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value)
                setError('')
              }}
              required
            />
          </div>
        </div>

        {error && (
          <p className="font-comfortaa text-xs text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-2.5">
            {error}
          </p>
        )}

        <button
          type="button"
          onClick={handlePaystack}
          disabled={isLoading}
          className="w-full btn-primary justify-center gap-2 py-3.5 text-base"
        >
          {isLoading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Opening Paystack…
            </>
          ) : (
            <>
              <Heart size={18} />
              Donate Now
              <ArrowRight size={16} />
            </>
          )}
        </button>

        <p className="font-comfortaa text-xs text-text-secondary flex items-center justify-center gap-1.5">
          <ShieldCheck size={13} className="text-forest-green flex-shrink-0" />
          Secure 256-bit encrypted checkout by Paystack
        </p>
      </div>
    </div>
  )
}

/* ─────────────── Transfer Card with "I have transferred" ─────────────────── */
function TransferCard({ currency }: { currency: Currency }) {
  const [copied, setCopied] = useState(false)
  const [showNotify, setShowNotify] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [transferAmount, setTransferAmount] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [sent, setSent] = useState(false)

  function copyAccount() {
    navigator.clipboard.writeText(currency.accountNumber).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  async function handleNotify() {
    setError('')

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email so we can confirm your donation.')
      return
    }

    setIsSending(true)

    try {
      const response = await fetch('/api/transfer-notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          currency: currency.code,
          amount: transferAmount,
          message,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Unable to send notification.')
      }

      setSent(true)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Unable to send notification. Please try again.',
      )
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="rounded-2xl border-2 border-border-color bg-white overflow-hidden transition-all duration-300 hover:border-forest-green/40 hover:shadow-lg">
      {/* Header */}
      <div className="bg-forest-green/5 px-5 py-4 flex items-center gap-3 border-b border-border-color">
        <span className="text-2xl leading-none">{currency.flag}</span>
        <div className="flex-1 min-w-0">
          <p className="font-garamond font-semibold text-xl text-text-primary leading-none">
            {currency.symbol}{' '}
            <span className="text-base">{currency.code}</span>
          </p>
          <p className="font-comfortaa text-[11px] text-text-secondary mt-0.5">{currency.name}</p>
        </div>
      </div>

      <div className="p-5 space-y-3">
        {/* Bank details */}
        <div className="flex items-center gap-2 mb-1">
          <Building2 size={13} className="text-forest-green flex-shrink-0" />
          <p className="font-comfortaa text-[11px] font-semibold text-text-secondary uppercase tracking-wide">
            {BANK_DETAILS.bankName}
          </p>
        </div>
        <p className="font-garamond text-sm text-text-secondary leading-snug">
          {BANK_DETAILS.accountName}
        </p>
        <div className="flex items-center gap-2">
          <p className="font-garamond font-bold text-2xl text-text-primary tracking-wide tabular-nums">
            {currency.accountNumber}
          </p>
          <button
            type="button"
            onClick={copyAccount}
            title="Copy account number"
            className="p-1.5 rounded-lg hover:bg-forest-green/10 transition-colors text-text-secondary hover:text-forest-green"
          >
            {copied ? (
              <Check size={14} className="text-forest-green" />
            ) : (
              <Copy size={14} />
            )}
          </button>
        </div>

        <div className="border-t border-border-color pt-3">
          {!showNotify && !sent && (
            <button
              type="button"
              onClick={() => setShowNotify(true)}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-forest-green/30 text-forest-green font-comfortaa font-semibold text-sm hover:bg-forest-green/5 transition-all duration-200"
            >
              <CheckCircle2 size={15} />
              I Have Transferred
            </button>
          )}

          {sent && (
            <div className="bg-forest-green/5 rounded-xl px-4 py-3 flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-forest-green flex-shrink-0 mt-0.5" />
              <p className="font-garamond text-sm text-forest-green leading-snug">
                Thank you! We&apos;ve been notified of your transfer and will confirm it shortly.
              </p>
            </div>
          )}

          {showNotify && !sent && (
            <div className="space-y-2.5">
              <div className="flex items-center justify-between mb-1">
                <p className="font-comfortaa text-xs font-semibold text-text-secondary uppercase tracking-wide">
                  Notify us of your transfer
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setShowNotify(false)
                    setError('')
                  }}
                  className="p-1 rounded-lg hover:bg-neutral-100 transition-colors text-text-secondary"
                >
                  <X size={14} />
                </button>
              </div>

              <input
                type="text"
                className="input-field text-sm"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className="input-field text-sm"
                placeholder="Email address *"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError('')
                }}
                required
              />
              <input
                type="text"
                className="input-field text-sm"
                placeholder={`Amount transferred (${currency.symbol})`}
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
              />
              <textarea
                className="input-field text-sm resize-none"
                rows={2}
                placeholder="Any additional message (optional)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              {error && (
                <p className="font-comfortaa text-xs text-red-700 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
                  {error}
                </p>
              )}

              <button
                type="button"
                onClick={handleNotify}
                disabled={isSending}
                className="w-full btn-primary justify-center gap-2 text-sm py-2.5"
              >
                {isSending ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    Send Notification
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ──────────────────────────── Main Export ──────────────────────────────────── */
export default function DonationForm() {
  return (
    <div className="space-y-10">
      {/* ── Section 1: Paystack ──────────────────────────────────────────── */}
      <div>
        <div className="text-center mb-6">
          <h2 className="heading-lg mb-2">Donate Instantly</h2>
          <p className="font-garamond text-lg text-text-secondary max-w-xl mx-auto">
            Click the button below and pay securely with your card, bank account, USSD or mobile
            money via Paystack.
          </p>
        </div>
        <div className="max-w-lg mx-auto">
          <PaystackSection />
        </div>
      </div>

      {/* ── Divider ──────────────────────────────────────────────────────── */}
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-border-color" />
        <span className="font-comfortaa text-xs font-semibold text-text-secondary uppercase tracking-wider">
          Or transfer directly
        </span>
        <div className="flex-1 h-px bg-border-color" />
      </div>

      {/* ── Section 2: Bank Transfers ────────────────────────────────────── */}
      <div>
        <div className="text-center mb-6">
          <h2 className="heading-lg mb-2">Bank Transfer</h2>
          <p className="font-garamond text-lg text-text-secondary max-w-xl mx-auto">
            Transfer directly to our {BANK_DETAILS.bankName} account in your preferred currency.
            After transferring, click &quot;I Have Transferred&quot; to let us know.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {currencies.map((currency) => (
            <TransferCard key={currency.code} currency={currency} />
          ))}
        </div>
      </div>

    </div>
  )
}
