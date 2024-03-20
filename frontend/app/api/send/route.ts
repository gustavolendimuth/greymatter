import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const NEXT_PUBLIC_RESEND_API_KEY = process.env.NEXT_PUBLIC_RESEND_API_KEY;

export async function POST(req: NextRequest) {
  let requestBody;

  try {
    requestBody = await req.json();
  } catch (err) {
    return new NextResponse('Invalid JSON in request body', { status: 400 });
  }

  console.log('requestBody', requestBody);

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${NEXT_PUBLIC_RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: `${requestBody.from} <noreply@greymatter.technology>`,
      to: [requestBody.to],
      subject: requestBody.subject,
      html: requestBody.data,
      attachments: requestBody.attachments,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    return new NextResponse(`Error: ${data.message}`, { status: res.status });
  }

  return new NextResponse('Email sent successfully');
}
