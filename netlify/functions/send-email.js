import { setApiKey, send } from '@sendgrid/mail';

export async function handler(event) {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' }),
        };
    }

    const sendGridApiKey = process.env.SENDGRID_API_KEY;

    if (!sendGridApiKey) {
        console.error('SendGrid API key is missing.');
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'SendGrid API key is not configured' }),
        };
    }

    setApiKey(sendGridApiKey);

    const { name, email, message } = JSON.parse(event.body);

    const emailContent = {
        to: 'liam.rayback@gmail.com',
        from: 'liam.rayback@gmail.com',
        subject: 'New Portfolio Form Submission',
        text: `You have a new message from your portfolio contact form:
        
        Name: ${name}
        Email: ${email}
        Message: ${message}`,
    };

    try {
        await send(emailContent);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully!' }),
        };
    } catch (error) {
        console.error('Error sending email:', error.response?.body || error.message);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send email', details: error.response?.body || error.message }),
        };
    }
}
