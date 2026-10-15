import axios from 'axios'
import { NextResponse } from 'next/server'

const INVICTUS_URL = 'https://api.invictuspayv2.com.br/api/v1/transactions'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const amount = Math.round(Number(body.amount) * 100)
    const description = String(body.description || 'Vídeo personalizado').trim()

    if (!Number.isInteger(amount) || amount < 4500) {
      return NextResponse.json({ message: 'O valor mínimo do personalizado é R$ 45,00.' }, { status: 400 })
    }

    const response = await axios.post(INVICTUS_URL, {
      amount,
      paymentMethod: 'pix',
      customer: {
        name: 'Cliente do pedido',
        email: 'pagamento@geovannafox.com',
        document: '12345678909',
        phone: '11999999999',
      },
      items: [{ quantity: 1, amount, description, externalRef: `personalizado-${crypto.randomUUID()}` }],
      pix: { expirationInSeconds: 1800 },
    }, {
      headers: { 'X-Api-Key': process.env.INVICTUS_API_KEY, 'Content-Type': 'application/json' },
      timeout: 15000,
    })

    const data = response.data
    const transaction = data.data || data
    const pix = transaction.pix || transaction.payment || data.pix || data.payment || data
    const code = pix.qr_code || pix.copyPaste || pix.copy_paste || pix.qrCodeText || pix.qr_code_text || pix.emv || pix.qrCode || pix.code
    const rawImage = pix.qr_code_base64 || pix.qrCodeImage || pix.qrCodeBase64 || pix.qr_code_image || pix.qrCodeUrl
    const image = typeof rawImage === 'string' ? rawImage : rawImage?.data ? `data:${rawImage.type || 'image/png'};base64,${rawImage.data}` : undefined
    if (!code) return NextResponse.json({ message: 'A Invictus criou a cobrança, mas não retornou o código Pix.' }, { status: 502 })
    return NextResponse.json({ pix: { id: transaction.id || data.id || data.txId || data.transactionId, code: String(code), image } })
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const data = error.response?.data
      const message = data?.message || data?.error || data?.errors?.[0]?.message
      return NextResponse.json({ message: message || 'A Invictus recusou a cobrança. Tente novamente em alguns segundos.' }, { status: error.response?.status || 502 })
    }
    return NextResponse.json({ message: 'Não foi possível gerar o Pix do personalizado.' }, { status: 500 })
  }
}

export const runtime = 'nodejs'
