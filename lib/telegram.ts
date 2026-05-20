interface TelegramMessage {
  name: string;
  email: string;
  message: string;
  timestamp?: string;
}

export async function sendTelegramNotification(data: TelegramMessage): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error('Telegram configuration is missing');
    throw new Error('Telegram configuration is not set');
  }

  const timestamp = data.timestamp || new Date().toLocaleString('id-ID', {
    timeZone: 'Asia/Jakarta',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const messageText = `
<b>🔔 PESAN BARU DARI PORTFOLIO WEBSITE</b>

━━━━━━━━━━━━━━━━━━━━━━

<b>👤 Nama Pengirim:</b>
${data.name}

<b>📧 Alamat Email:</b>
${data.email}

<b>💬 Isi Pesan:</b>
${data.message}

━━━━━━━━━━━━━━━━━━━━━━

<b>📅 Waktu Pengiriman:</b>
${timestamp}

<i>💡 Balas email pengirim untuk menindaklanjuti pesan ini.</i>
  `.trim();

  try {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    });

    const result = await response.json();

    if (!result.ok) {
      console.error('Telegram API error:', result);
      throw new Error(`Telegram API error: ${result.description}`);
    }

    console.log('Telegram notification sent successfully');
    return true;
  } catch (error) {
    console.error('Failed to send Telegram notification:', error);
    throw error;
  }
}

// Function untuk test koneksi Telegram bot
export async function testTelegramConnection(): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  
  if (!botToken) {
    return false;
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/getMe`);
    const data = await response.json();
    return data.ok === true;
  } catch {
    return false;
  }
}
