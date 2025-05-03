const htmlAppreciationTemplate = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Visiting</title>
    <style type="text/css">
        /* Base styles */
        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #444444;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-weight: 300;
            font-size: 28px;
        }
        .content {
            padding: 30px;
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 12px;
            color: #999999;
            background-color: #f5f5f5;
        }
        .button {
            display: inline-block;
            padding: 12px 24px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white !important;
            text-decoration: none;
            border-radius: 30px;
            margin: 20px 0;
            font-weight: 500;
            text-align: center;
        }
        .signature {
            margin-top: 30px;
            font-style: italic;
            color: #666666;
        }
        .portfolio-item {
            margin: 20px 0;
            border-bottom: 1px solid #eeeeee;
            padding-bottom: 20px;
        }
        /* Responsive */
        @media screen and (max-width: 600px) {
            .email-container {
                width: 100%;
                border-radius: 0;
            }
            .header h1 {
                font-size: 24px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Thank You for Visiting My Portfolio</h1>
        </div>
        
        <div class="content">
            <p>Hello there,</p>
            
            <p>I noticed you recently visited my portfolio website, and I wanted to personally thank you for taking the time to explore my work.</p>
            
            <p>As a web developer and designer, I'm passionate about creating digital experiences that are both beautiful and functional". Your interest means a lot to me!</p>
            
            <div class="portfolio-item">
                <h3>Featured Work</h3>
                <p>In case you missed it, here's one of my recent projects:</p>
                <p><strong>Future Project</strong> - [Brief description]</p>
                <a href="[Link to project]" class="button">View This Project</a>
            </div>
            
            <p>I'd love to hear your thoughts or discuss how we might work together. Feel free to reply to this email or connect with me through any of these channels:</p>
            
            <p style="text-align: center;">
                <a href="https://www.tiktok.com/@hydramagmenace7?lang=en" style="margin: 0 10px; color: #667eea; text-decoration: none;">TikTok</a> • 
                <a href="https://x.com/Elvinoace" style="margin: 0 10px; color: #667eea; text-decoration: none;">Twitter</a> • 
                <a href="http://elvin-profile.netlify.app" style="margin: 0 10px; color: #667eea; text-decoration: none;">Website</a>
            </p>
            
            <a href="https://wa.me/254790670542?text=Hello!%20I'm%20interested%20in%20your%20services." class="button" style="display: block; width: 200px; margin: 30px auto;">Get In Touch</a>
            
            <div class="signature">
                <p>Warm regards,</p>
                <p><strong>Elvin Omondi Juma</strong></p>
                <p>Full Stack Web Developer</p>
            </div>
        </div>
        
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Elvin. All rights reserved.</p>
            <p>
                <a target="_blank" href="[Unsubscribe Link]" style="color: #999999; text-decoration: none;">Unsubscribe</a> | 
                <a href="http://elvin-profile.netlify.app" style="color: #999999; text-decoration: none;">Website</a>
            </p>
        </div>
    </div>
</body>
</html>
`;

module.exports = htmlAppreciationTemplate;
