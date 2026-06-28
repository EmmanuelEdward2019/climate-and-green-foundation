import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const secretKey = process.env.PAYSTACK_SECRET_KEY
  const { searchParams } = new URL(request.url)
  const reference = searchParams.get('reference')

  if (!secretKey) {
    return NextResponse.json(
      { error: 'Paystack secret key is not configured.' },
      { status: 500 },
    )
  }

  if (!reference) {
    return NextResponse.json({ error: 'Missing Paystack reference.' }, { status: 400 })
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
      return NextResponse.json(
        { error: data.message || 'Unable to verify this donation.' },
        { status: response.status || 502 },
      )
    }

    return NextResponse.json({
      status: data.data.status,
      amount: data.data.amount / 100,
      currency: data.data.currency,
      reference: data.data.reference,
      paidAt: data.data.paid_at,
      donorEmail: data.data.customer?.email,
    })
  } catch {
    return NextResponse.json(
      { error: 'Unable to reach Paystack. Please try again.' },
      { status: 502 },
    )
  }
}
