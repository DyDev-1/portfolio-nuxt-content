import { z } from 'zod';
import nodemailer from 'nodemailer';

const { apiSecret } = useRuntimeConfig();

const mailTransport = nodemailer.createTransport({
  host: apiSecret.MAILHOST,
  port: apiSecret.MAILPORT,
  secure: true,
  auth: {
    user: apiSecret.MAILUSER,
    pass: apiSecret.MAILPASSWORD,
  },
});

export default defineEventHandler(async (event) => {
  const validated = z
    .object({
      name: z.string().min(1),
      email: z.string().email({ message: 'Please provide a valid email' }),
      message: z.string().min(3),
    })
    .safeParse(await readBody(event));

  if (validated.error) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid input',
      data: validated.error.format(),
    });
  }

  const { data: body } = validated;

  try {
    await mailTransport.verify();
    const mail = await mailTransport.sendMail({
      from: `"${body.name}" <${body.email}>`,
      to: apiSecret.CONTACTMAIL, // The recipient email
      subject: 'Contact Form Submission',
      html: `
        <h1>Contact Form Submission</h1>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `,
    });
if(mail){
  return { statusCode: 200, message: 'Email sent successfully' }; 
}
   
  } catch (error) {
    throw createError({
      statusCode: 503,
      statusMessage: 'Email service unavailable',
    });
  }
});
