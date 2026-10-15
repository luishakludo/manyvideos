import axios from 'axios'
import { NextResponse } from 'next/server'

const SIGILO_URL = 'https://app.sigilopay.com.br/api/v1/gateway/pix/receive'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const amount = Number(body.amount)
    const name = String(body.name || '').trim()
    const document = String(body.document || '').replace(/\D/g, '')
    const email = String(body.email || '').trim()
    const phone = String(body.phone || '').trim()

    if (!Number.isFinite(amount) || amount < 0.01 || !name || document.length !== 11 || !email || !phone) {
      return NextResponse.json({ message: 'Informe nome, CPF válido, e-mail, telefone e um valor válido.' }, { status: 400 })
    }

    const response = await axios.post(SIGILO_URL, {
      identifier: `home-${crypto.randomUUID()}`,
      amount: Math.round(amount * 100) / 100,
      client: { name, document, email, phone },
      products: [{ id: String(body.productId || 'home-video'), name: String(body.productName || 'Conteúdo da Home'), quantity: 1, price: Math.round(amount * 100) / 100 }],
      metadata: { provider: 'Home', orderId: `home-${String(body.productId || 'video')}-${crypto.randomUUID()}` },
    }, {
      headers: {
        'Content-Type': 'application/json',
        'x-public-key': process.env.SIGILO_PUBLIC_KEY,
        'x-secret-key': process.env.SIGILO_SECRET_KEY,
      },
      timeout: 15000,
    })

    return NextResponse.json(response.data)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const apiError = error.response?.data
      const validationDetails = Array.isArray(apiError?.details) ? apiError.details.map((item: { path?: string; error?: { message?: string } }) => `${item.path || 'campo'}: ${item.error?.message || 'valor inválido'}`).join(' | ') : ''
      return NextResponse.json({ message: validationDetails || apiError?.message || apiError?.errorDescription || 'Não foi possível gerar o Pix.' }, { status: error.response?.status || 502 })
    }
    return NextResponse.json({ message: 'Não foi possível gerar o Pix.' }, { status: 500 })
  }
}
