import { z } from 'zod';
import nodemailer from 'nodemailer';

const config = useRuntimeConfig();

const mailTransport = nodemailer.createTransport({
  host: config.NUXT_MAIL_SMPT,
  port: config.NUXT_MAIL_PORT,
  auth: {
    user: config.NUXT_MAIL_USERNAME,
    pass: config.NUXT_MAIL_PASSWORD,
  },
});

export default defineEventHandler(async (event) => {
  const validated = z
    .object({
      name: z.string().min(1),
      message: z.string().min(3),
      email: z.string().email({ message: 'Please provide a valid email' }),
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
    const mail = await mailTransport.sendMail({
    //   form: `"${body.name}" <${body.email}>`,
      to: config.CONTACTMAIL,
      subject: 'Contact Form Submission',
      text: body.message,
      html: body.message,
    });

   console.log('Message send: %s', mail);
   console.log('Url Message: %d', nodemailer.getTestMessageUrl(mail));
   
   
    return { statusCode: 200, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error.stack || error.message);
    throw createError({
      statusCode: 503,
      statusMessage: 'Email service unavailable',
    });
  }
});
