import { NextResponse } from 'next/server'

const PAYSTACK_INITIALIZE_URL = 'https://api.paystack.co/transaction/initialize'

type InitializePayload = {
  amount?: number
  email?: string
  name?: string
  phone?: string
  frequency?: string
  currency?: string
}

function getBaseUrl(request: Request) {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()

  if (configuredUrl) {
    return configuredUrl.replace(/\/$/, '')
  }

  return new URL(request.url).origin
}

export async function POST(request: Request) {
  const secretKey = process.env.PAYSTACK_SECRET_KEY

  if (!secretKey) {
    return NextResponse.json(
      { error: 'Paystack secret key is not configured.' },
      { status: 500 },
    )
  }

  let payload: InitializePayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid donation request.' }, { status: 400 })
  }

  const amount = Number(payload.amount)
  const email = payload.email?.trim()
  const name = payload.name?.trim()
  const phone = payload.phone?.trim()
  const frequency = payload.frequency === 'monthly' ? 'monthly' : 'one-time'
  const currency = payload.currency || process.env.PAYSTACK_CURRENCY || 'NGN'
  const monthlyPlanCode = process.env.PAYSTACK_MONTHLY_PLAN_CODE?.trim()

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  if (!Number.isFinite(amount) || amount < 100) {
    return NextResponse.json(
      { error: 'Donation amount must be at least 100.' },
      { status: 400 },
    )
  }

  if (frequency === 'monthly' && !monthlyPlanCode) {
    return NextResponse.json(
      { error: 'Monthly donations need PAYSTACK_MONTHLY_PLAN_CODE in .env.' },
      { status: 500 },
    )
  }

  const callbackUrl = `${getBaseUrl(request)}/get-involved/donate/thank-you`
  const transactionPayload = {
    amount: Math.round(amount * 100),
    email,
    currency,
    callback_url: callbackUrl,
    ...(frequency === 'monthly' && monthlyPlanCode ? { plan: monthlyPlanCode } : {}),
    metadata: {
      custom_fields: [
        {
          display_name: 'Donor name',
          variable_name: 'donor_name',
          value: name || 'Anonymous donor',
        },
        {
          display_name: 'Phone',
          variable_name: 'phone',
          value: phone || 'Not supplied',
        },
        {
          display_name: 'Donation frequency',
          variable_name: 'donation_frequency',
          value: frequency,
        },
      ],
    },
  }

  try {
    const response = await fetch(PAYSTACK_INITIALIZE_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transactionPayload),
    })

    const data = await response.json()

    if (!response.ok || !data.status) {
      return NextResponse.json(
        { error: data.message || 'Unable to initialize Paystack donation.' },
        { status: response.status || 502 },
      )
    }

    return NextResponse.json({
      authorizationUrl: data.data.authorization_url,
      accessCode: data.data.access_code,
      reference: data.data.reference,
    })
  } catch {
    return NextResponse.json(
      { error: 'Unable to reach Paystack. Please try again.' },
      { status: 502 },
    )
  }
}
