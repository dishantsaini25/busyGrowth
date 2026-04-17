import nodemailer from 'nodemailer';

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Email templates
const templates = {
  // Admin notification email
  adminNotification: (formData) => ({
    subject: `🎯 New Lead: ${formData.name} from ${formData.businessType || 'Website'}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1a1a1a; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f5c76a 0%, #c99f44 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0; }
            .header h1 { color: #050815; margin: 0; font-size: 24px; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 12px 12px; }
            .field { margin-bottom: 20px; border-bottom: 1px solid #e0e0e0; padding-bottom: 15px; }
            .field-label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #666; margin-bottom: 5px; }
            .field-value { font-size: 16px; color: #1a1a1a; font-weight: 500; }
            .badge { display: inline-block; background: #f5c76a; color: #050815; padding: 4px 12px; border-radius: 20px; font-size: 14px; font-weight: 600; margin-top: 10px; }
            .footer { margin-top: 30px; text-align: center; font-size: 12px; color: #999; }
            .interest-tag { background: #e8f4fd; color: #0066cc; padding: 2px 10px; border-radius: 12px; font-size: 13px; display: inline-block; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 New Strategy Call Request</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Contact Details</div>
                <div class="field-value">${formData.name}</div>
                <div style="margin-top: 5px; color: #666;">${formData.email} • ${formData.phone}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Business Type</div>
                <div class="field-value">${formData.businessType || 'Not specified'}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Interested In</div>
                <div class="field-value">
                  <span class="interest-tag">${getInterestLabel(formData.interest)}</span>
                </div>
              </div>
              
              ${formData.message ? `
                <div class="field">
                  <div class="field-label">Additional Message</div>
                  <div class="field-value">${formData.message.replace(/\n/g, '<br>')}</div>
                </div>
              ` : ''}
              
              <div class="badge">
                📞 Follow up within 24 hours
              </div>
              
              <div style="margin-top: 20px; padding: 15px; background: #fff; border-radius: 8px;">
                <strong>Quick Actions:</strong><br>
                <a href="mailto:${formData.email}" style="color: #0066cc;">Reply via Email →</a><br>
                <a href="https://wa.me/${formData.phone.replace(/\D/g, '')}" style="color: #25D366;">Message on WhatsApp →</a>
              </div>
            </div>
            <div class="footer">
              BusyGrowth Studio • Jaipur, India<br>
              Lead generated from website contact form
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
NEW LEAD: ${formData.name}
------------------------
Email: ${formData.email}
Phone: ${formData.phone}
Business Type: ${formData.businessType || 'N/A'}
Interest: ${getInterestLabel(formData.interest)}
Message: ${formData.message || 'No additional message'}

Quick Actions:
- Email: mailto:${formData.email}
- WhatsApp: https://wa.me/${formData.phone.replace(/\D/g, '')}
    `,
  }),

  // Auto-reply to user
  userAutoReply: (formData) => ({
    subject: '✅ Thanks for reaching out, ' + formData.name.split(' ')[0] + '! | BusyGrowth Studio',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1a1a1a; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .logo { text-align: center; margin-bottom: 30px; }
            .logo span { font-size: 28px; font-weight: bold; background: linear-gradient(135deg, #f5c76a 0%, #c99f44 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 12px; }
            h2 { color: #050815; margin-top: 0; }
            .steps { margin: 30px 0; }
            .step { display: flex; margin-bottom: 20px; }
            .step-number { width: 30px; height: 30px; background: #f5c76a; color: #050815; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0; }
            .step-content { flex: 1; }
            .step-content strong { color: #050815; }
            .cta { background: #050815; color: white; padding: 15px 25px; text-align: center; border-radius: 8px; margin: 25px 0; }
            .cta a { color: #f5c76a; text-decoration: none; font-weight: bold; }
            .footer { margin-top: 30px; text-align: center; font-size: 12px; color: #999; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="logo">
              <span>BusyGrowth Studio</span>
            </div>
            <div class="content">
              <h2>Hey ${formData.name.split(' ')[0]}! 👋</h2>
              
              <p>Thanks for reaching out to BusyGrowth Studio. We've received your request for a <strong>${getInterestLabel(formData.interest)}</strong> and we're excited to learn more about your business.</p>
              
              <div class="steps">
                <div class="step">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <strong>We'll reach out within 24 hours</strong><br>
                    <span style="color: #666;">Expect a WhatsApp message or email from our team to schedule your strategy call.</span>
                  </div>
                </div>
                <div class="step">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <strong>30-45 min strategy session</strong><br>
                    <span style="color: #666;">We'll audit your current digital presence and map out actionable growth levers.</span>
                  </div>
                </div>
                <div class="step">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <strong>Custom growth roadmap</strong><br>
                    <span style="color: #666;">Walk away with a clear, no-fluff plan tailored to your goals.</span>
                  </div>
                </div>
              </div>
              
              <div class="cta">
                <strong>Want to prepare for the call?</strong><br>
                Think about: Current revenue/growth numbers, biggest bottlenecks, and where you want to be in 6-12 months.
              </div>
              
              <p>In the meantime, you can:</p>
              <ul>
                <li>📱 Save our WhatsApp: <strong>+91 93527 57834</strong></li>
                <li>📧 Email us directly: <a href="mailto:hello@busygrowth.studio" style="color: #0066cc;">hello@busygrowth.studio</a></li>
                <li>🎓 Check out our <a href="https://busygrowth.studio/course" style="color: #0066cc;">Digital Marketing Course</a></li>
              </ul>
              
              <p style="margin-top: 30px;">Talk soon,<br><strong>Team BusyGrowth Studio</strong><br><span style="color: #999;">Jaipur, India</span></p>
            </div>
            <div class="footer">
              © ${new Date().getFullYear()} BusyGrowth Studio. All rights reserved.<br>
              You received this email because you submitted a form on our website.
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
Hey ${formData.name.split(' ')[0]}! 👋

Thanks for reaching out to BusyGrowth Studio. We've received your request for a ${getInterestLabel(formData.interest)}.

WHAT HAPPENS NEXT:
1. We'll reach out within 24 hours (WhatsApp or email)
2. Schedule a 30-45 min strategy session
3. You'll receive a custom growth roadmap

PREPARE FOR THE CALL:
Think about: Current numbers, biggest bottlenecks, and 6-12 month goals.

QUICK CONTACTS:
WhatsApp: +91 93527 57834
Email: hello@busygrowth.studio
Course: https://busygrowth.studio/course

Talk soon,
Team BusyGrowth Studio
Jaipur, India
    `,
  }),
};

// Helper function to get readable interest label
function getInterestLabel(interest) {
  const labels = {
    'growth-plan': 'Free Growth Plan (Strategy Call)',
    'ads': 'Meta / Google Ads Management',
    'content': 'Reels & Content Studio',
    'automation': 'WhatsApp / Email Automation',
    'course': 'Digital Marketing Course',
  };
  return labels[interest] || interest;
}

// Main email sending function
export async function sendContactEmail(formData) {
  const transporter = createTransporter();

  try {
    // Verify connection
    await transporter.verify();

    // 1. Send notification to admin
    const adminEmail = templates.adminNotification(formData);
    await transporter.sendMail({
      from: `"BusyGrowth Leads" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      cc: process.env.EMAIL_CC,
      subject: adminEmail.subject,
      text: adminEmail.text,
      html: adminEmail.html,
    });

    // 2. Send auto-reply to user
    const userEmail = templates.userAutoReply(formData);
    await transporter.sendMail({
      from: `"BusyGrowth Studio" <${process.env.EMAIL_USER}>`,
      to: formData.email,
      subject: userEmail.subject,
      text: userEmail.text,
      html: userEmail.html,
    });

    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Failed to send email: ' + error.message);
  }
}