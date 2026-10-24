import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

type TransferNotification = {
  name?: string
  email?: string
  currency?: string
  amount?: string
  message?: string
}

const DATA_DIR = path.join(process.cwd(), '.data')
const NOTIFICATIONS_FILE = path.join(DATA_DIR, 'transfer-notifications.json')

async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true })
  } catch {
    // already exists
  }
}

export async function POST(request: Request) {
  let payload: TransferNotification

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const name = payload.name?.trim() || 'Anonymous'
  const email = payload.email?.trim() || ''
  const currency = payload.currency?.trim() || ''
  const amount = payload.amount?.trim() || ''
  const message = payload.message?.trim() || ''

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const notification = {
    id: `tn_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    name,
    email,
    currency,
    amount,
    message,
    createdAt: new Date().toISOString(),
  }

  try {
    await ensureDataDir()

    let existing: typeof notification[] = []
    try {
      const raw = await fs.readFile(NOTIFICATIONS_FILE, 'utf-8')
      existing = JSON.parse(raw)
    } catch {
      // file doesn't exist yet
    }

    existing.unshift(notification)
    await fs.writeFile(NOTIFICATIONS_FILE, JSON.stringify(existing, null, 2))

    return NextResponse.json({ success: true, message: 'Thank you! We have been notified of your transfer.' })
  } catch {
    return NextResponse.json(
      { error: 'Unable to save notification. Please contact us directly.' },
      { status: 500 },
    )
  }
}
