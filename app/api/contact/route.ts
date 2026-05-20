import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter').max(100),
  email: z.string().email('Email tidak valid'),
  message: z.string().min(10, 'Pesan minimal 10 karakter').max(1000),
});

async function sendTelegramMessage(text: string) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    throw new Error('Telegram configuration missing');
  }

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
      parse_mode: 'HTML',
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Telegram API error: ${JSON.stringify(error)}`);
  }

  return response.json();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate input
    const validatedData = contactSchema.parse(body);
    const { name, email, message } = validatedData;

    // Format message for Telegram
    const telegramMessage = `
<b>🔔 Pesan Baru dari Portfolio!</b>

<b>👤 Nama:</b> ${name}
<b>📧 Email:</b> ${email}
<b>💬 Pesan:</b>
${message}

<b>📅 Waktu:</b> ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}
    `.trim();

    // Send to Telegram
    await sendTelegramMessage(telegramMessage);

    return NextResponse.json({
      success: true,
      message: 'Pesan berhasil dikirim!',
    });
  } catch (error) {
    console.error('Contact Form Error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validasi gagal', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Gagal mengirim pesan. Silakan coba lagi.' },
      { status: 500 }
    );
  }
}
