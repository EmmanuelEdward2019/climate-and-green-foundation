import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Heart, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Donation Status',
  description: 'Your Climate & Green World Foundation donation status.',
}

type ThankYouPageProps = {
  searchParams: {
    reference?: string
    trxref?: string
  }
}

async function verifyDonation(reference: string) {
  const secretKey = process.env.PAYSTACK_SECRET_KEY

  if (!secretKey) {
    return {
      ok: false,
      message: 'Paystack is not configured yet. Add your secret key to .env and redeploy.',
    }
  }

  try {
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      {
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
        cache: 'no-store',
      },
    )
    const data = await response.json()

    if (!response.ok || !data.status) {
      return {
        ok: false,
        message: data.message || 'We could not verify this donation.',
      }
    }

    return {
      ok: data.data.status === 'success',
      message:
        data.data.status === 'success'
          ? 'Your donation was received successfully. Thank you for funding the work on the ground.'
          : `Paystack returned this donation as ${data.data.status}.`,
      amount: data.data.amount / 100,
      currency: data.data.currency,
      paidAt: data.data.paid_at,
    }
  } catch {
    return {
      ok: false,
      message: 'We could not reach Paystack to verify this donation.',
    }
  }
}

export default async function DonationThankYouPage({ searchParams }: ThankYouPageProps) {
  const reference = searchParams.reference || searchParams.trxref
  const verification = reference ? await verifyDonation(reference) : null
  const Icon = verification?.ok ? CheckCircle2 : XCircle

  return (
    <section className="section-padding bg-neutral-bg min-h-[70vh] flex items-center">
      <div className="container-max max-w-2xl">
        <div className="bg-white rounded-xl border border-border-color p-8 sm:p-10 text-center shadow-sm">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 ${
              verification?.ok ? 'bg-forest-green/10' : 'bg-red-50'
            }`}
          >
            {verification ? (
              <Icon
                size={30}
                className={verification.ok ? 'text-forest-green' : 'text-red-700'}
              />
            ) : (
              <Heart size={30} className="text-forest-green" />
            )}
          </div>

          <h1 className="heading-lg mb-4">
            {verification?.ok ? 'Thank you for your donation.' : 'Donation status'}
          </h1>

          <p className="font-garamond text-lg text-text-secondary mb-6">
            {verification?.message ||
              'No Paystack reference was supplied, so we could not verify a donation.'}
          </p>

          {verification?.ok && (
            <div className="rounded-xl bg-forest-green/5 border border-forest-green/20 p-4 mb-6">
              <p className="font-comfortaa text-sm text-text-primary">
                {verification.currency} {verification.amount?.toLocaleString()} received
              </p>
              {reference && (
                <p className="font-comfortaa text-xs text-text-secondary mt-1">
                  Reference: {reference}
                </p>
              )}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/get-involved/donate" className="btn-primary">
              Make another donation
            </Link>
            <Link href="/" className="btn-outline">
              Back home
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
