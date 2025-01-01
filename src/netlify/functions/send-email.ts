import sgMail from '@sendgrid/mail';

const sendgridApiKey = process.env.SENDGRID_API_KEY;

if (!sendgridApiKey) {
  throw new Error('SENDGRID_API_KEY is not defined.');
}

sgMail.setApiKey(sendgridApiKey);

exports.handler = async (event: { body: string; }) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    const msg = {
      to: 'liam.rayback@gmail.com', // Replace with your email address
      from: 'liam.rayback@gmail.com', // Replace with a verified sender
      subject: `Contact Form Submission from ${name}`,
      text: `You received a message from ${name} (${email}):\n\n${message}`,
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email' }),
    };
  }
};






// import { setApiKey, send } from '@sendgrid/mail';

// const sendEmail = async function handler(event: { body: string | null; }) {
//     if (event.body !== null) {
//         return {
//             statusCode: 405,
//             body: JSON.stringify({ error: 'Payload required' }),
//         };
//     }

//     const sendGridApiKey = process.env.SENDGRID_API_KEY;

//     if (!sendGridApiKey) {
//         console.error('SendGrid API key is missing.');
//         return {
//             statusCode: 500,
//             body: JSON.stringify({ error: 'SendGrid API key is not configured' }),
//         };
//     }

//     setApiKey(sendGridApiKey);

//     const { name, email, message } = JSON.parse(event.body || '{}');

//     const emailContent = {
//         headers: { "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET || "" },
//         method: 'POST',
//         to: 'liam.rayback@gmail.com',
//         from: 'liam.rayback@gmail.com',
//         subject: 'New Portfolio Form Submission',
//         text: `You have a new message from your portfolio contact form:
            
//             Name: ${name}
//             Email: ${email}
//             Message: ${message}`,
//     };

//     try {
//         await send(emailContent);
//         return {
//             statusCode: 200,
//             body: JSON.stringify({ message: 'Email sent successfully!' }),
//         };
//     } catch (error) {
//         console.error('Error sending email:', error);
//         return {
//             statusCode: 500,
//             body: JSON.stringify({ error: 'Failed to send email', details: error }),
//         };
//     }
// }

// export default sendEmail;

