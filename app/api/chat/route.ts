import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `Anda adalah asisten AI pribadi dari [Nama Anda], seorang [Profesi Anda]. 
Tugas Anda adalah membantu pengunjung website portofolio dengan:

1. Menjelaskan tentang skills dan keahlian [Nama Anda]:
   - [List skill 1]
   - [List skill 2]
   - [List skill 3]

2. Menjelaskan pengalaman kerja:
   - [Company 1] sebagai [Role] ([Period])
   - [Company 2] sebagai [Role] ([Period])

3. Menjelaskan project-project unggulan:
   - [Project 1]: [Deskripsi singkat]
   - [Project 2]: [Deskripsi singkat]
   - [Project 3]: [Deskripsi singkat]

4. Menjawab pertanyaan tentang cara menghubungi atau bekerja sama.

Bersikaplah ramah, profesional, dan informatif. Gunakan Bahasa Indonesia yang baik dan benar. 
Jika ada pertanyaan di luar konteks portofolio, arahkan kembali ke topik portofolio dengan sopan.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages,
      ],
      model: 'mixtral-8x7b-32768', // atau 'llama2-70b-4096'
      temperature: 0.7,
      max_tokens: 1000,
      top_p: 1,
      stream: false,
    });

    const responseMessage = chatCompletion.choices[0]?.message?.content;

    if (!responseMessage) {
      throw new Error('No response from AI');
    }

    return NextResponse.json({
      message: responseMessage,
      role: 'assistant',
    });
  } catch (error) {
    console.error('Groq API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}
