import { setApiKey, send } from '@sendgrid/mail';

export async function handler(event) {
    // Check for HTTP POST method
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' }),
        };
    }

    setApiKey(process.env.SENDGRID_API_KEY);

    // Parse the request body
    const { name, email, message } = JSON.parse(event.body);

    const emailContent = {
        to: 'liam.rayback@gmail.com', // Replace with your email address
        from: 'liam.rayback@gmail.com', // Replace with your verified SendGrid sender email
        subject: 'New portfolio Form Submission',
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
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send email' }),
        };
    }
}
