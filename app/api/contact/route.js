import axios from 'axios';
import nodemailer from 'nodemailer';
import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();
  const { name, email, message } = payload;

  if (!name || !email || !message) {
    return NextResponse.json({
      success: false,
      message: "Name, email, and message are required.",
    }, { status: 400 });
  };

  const mailHost = process.env.MAIL_HOST;
  const mailPort = process.env.MAIL_PORT;
  const mailUser = process.env.MAIL_USER;
  const mailPass = process.env.MAIL_PASS;

  if (!mailHost || !mailPort || !mailUser || !mailPass) {
    return NextResponse.json({
      success: false,
      message: "Email service is not configured.",
    }, { status: 500 });
  };

  try {
    const transporter = nodemailer.createTransport({
      host: mailHost,
      port: Number(mailPort),
      secure: Number(mailPort) === 465,
      auth: {
        user: mailUser,
        pass: mailPass,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_FROM || mailUser,
      replyTo: email,
      to: mailUser,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Message sending failed!",
    }, { status: 500 });
  };

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat_id = process.env.TELEGRAM_CHAT_ID;

  if (token && chat_id) {
    try {
      const url = `https://api.telegram.org/bot${token}/sendMessage`;
      const telegramMessage = `New message from ${name}\n\nEmail: ${email}\n\nMessage:\n ${message}\n\n`;
      await axios.post(url, { text: telegramMessage, chat_id });
    } catch (error) {
      console.error(error?.response?.data || error);
    }
  };

  return NextResponse.json({
    success: true,
    message: "Message sent successfully!",
  }, { status: 200 });
};
