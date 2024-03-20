import { NextRequest, NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

// export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  let requestBody;

  try {
    requestBody = await req.json();
  } catch (err) {
    return new NextResponse('Invalid JSON in request body', { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtpout.secureserver.net',
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: 'mail@greymatter.technology',
      pass: 'cw!ysNsgJ8^YpZz',
    },
  });

  console.log('requestBody', requestBody);
  let res;

  try {
    res = await transporter.sendMail({
      from: '"Grey Matter" <mail@greymatter.technology>',
      to: requestBody.to,
      subject: requestBody.subject, // Subject line
      html: requestBody.data, // html body
      attachments: requestBody.attachments,
    });
  } catch (err) {
    console.error('Error sending email', err);
    return new NextResponse('Error sending email', { status: 500 });
  }

  return new NextResponse(`Message sent: ${res.response}`);
}
