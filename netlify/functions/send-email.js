import { setApiKey, send } from '@sendgrid/mail';

const sendEmail = async function handler(event) {
    if (event.body !== null) {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Payload required' }),
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

export default sendEmail;



// import { Handler } from "@netlify/functions";
// import fetch from "node-fetch";

// const handler = async function(event) {
//   if (event.body === null) {
//     return {
//       statusCode: 400,
//       body: JSON.stringify("Payload required"),
//     };
//   }

//   const requestBody = JSON.parse(event.body);

//   //automatically generated snippet from the email preview
//   //sends a request to an email handler for a subscribed email
//   await fetch(`${process.env.URL}/.netlify/functions/emails/subscribed`, {
//     headers: {
//       "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
//     },
//     method: "POST",
//     body: JSON.stringify({
//       from: requestBody.inviteeEmail,
//       to: requestBody.subscriberEmail,
//       subject: "You've been subscribed",
//       parameters: {
//         name: requestBody.subscriberName,
//         email: requestBody.subscriberEmail,
//       },
//     }),
//   });

//   return {
//     statusCode: 200,
//     body: JSON.stringify("Subscribe email sent!"),
//   };
// };

// export { handler };
