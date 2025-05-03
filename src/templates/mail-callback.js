export const htmlTemplate = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
    <style type="text/css">
        /* Base styles */
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f7f7f7;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background: #ffffff;
        }
        .header {
            background-color: #4a6baf;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .content {
            padding: 20px;
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 12px;
            color: #777;
            border-top: 1px solid #eee;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #4a6baf;
            color: white !important;
            text-decoration: none;
            border-radius: 5px;
            margin: 15px 0;
        }
        /* Responsive */
        @media screen and (max-width: 600px) {
            .email-container {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Hello from ClassMind</h1>
        </div>
        
        <div class="content">
            <h2>Dear Valued Client,</h2>
            <p>Thank you for reaching out to us. We appreciate your interest in our services.</p>
            
            <p>Here's what you can expect from us:</p>
            <ul>
                <li>Professional and reliable service</li>
                <li>Quick response times</li>
                <li>Custom solutions tailored to your needs</li>
            </ul>
            
            <p>If you have any questions, feel free to reply to this email or contact us directly.</p>
            
            <a href="https://elvin-profile.netlify.app" class="button">Visit Our Website</a>
            
            <p>Best regards,</p>
            <p><strong>The Team</strong></p>
        </div>
        
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            <p>
                <a href="https://yourwebsite.com/privacy">Privacy Policy</a> | 
                <a href="https://yourwebsite.com/terms">Terms of Service</a>
            </p>
        </div>
    </div>
</body>
</html>
`;
