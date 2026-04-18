export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 30;

export async function POST(request) {
  try {
    const formData = await request.json();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      return Response.json(
        { success: false, message: 'Name, email, and phone are required.' },
        { status: 400 }
      );
    }

    // Dynamically import Resend
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    const interestLabels = {
      'growth-plan': 'Free Growth Plan (Strategy Call)',
      'ads': 'Meta / Google Ads Management',
      'content': 'Reels & Content Studio',
      'automation': 'WhatsApp / Email Automation',
      'course': 'Full Digital Marketing Course',
      'performance-course': 'Performance Marketing Course',
    };

    // =============================================
    // 🌟 PREMIUM ADMIN EMAIL TEMPLATE
    // =============================================
    const adminHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
              line-height: 1.6; 
              color: #0f172a; 
              background: #f8fafc;
              margin: 0;
              padding: 20px;
            }
            .container { 
              max-width: 600px; 
              margin: 0 auto; 
              background: #ffffff;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            }
            .header { 
              background: linear-gradient(135deg, #d4a017 0%, #f5c76a 50%, #d4a017 100%); 
              padding: 30px; 
              text-align: center; 
            }
            .header h1 { 
              color: #ffffff; 
              margin: 0; 
              font-size: 28px; 
              font-weight: 700;
              text-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .header p {
              color: rgba(255,255,255,0.9);
              margin: 8px 0 0;
              font-size: 14px;
            }
            .content { 
              padding: 30px; 
            }
            .badge {
              display: inline-block;
              background: linear-gradient(135deg, #d4a017, #f5c76a);
              color: #ffffff;
              padding: 6px 16px;
              border-radius: 30px;
              font-size: 14px;
              font-weight: 600;
              margin-bottom: 20px;
            }
            .field { 
              margin-bottom: 20px; 
              border-bottom: 1px solid #e2e8f0; 
              padding-bottom: 15px; 
            }
            .field-label { 
              font-size: 12px; 
              text-transform: uppercase; 
              letter-spacing: 0.5px; 
              color: #64748b; 
              margin-bottom: 5px; 
              font-weight: 600;
            }
            .field-value { 
              font-size: 16px; 
              color: #0f172a; 
              font-weight: 500; 
            }
            .interest-tag { 
              background: #f1f5f9; 
              color: #d4a017; 
              padding: 4px 14px; 
              border-radius: 20px; 
              font-size: 14px; 
              font-weight: 600;
              display: inline-block;
            }
            .quick-actions { 
              margin-top: 25px; 
              padding: 20px; 
              background: #f8fafc; 
              border-radius: 12px; 
            }
            .quick-actions h3 {
              margin: 0 0 15px;
              color: #0f172a;
              font-size: 16px;
            }
            .btn { 
              display: inline-block; 
              background: #25D366; 
              color: white !important; 
              padding: 10px 20px; 
              border-radius: 30px; 
              text-decoration: none; 
              font-weight: 600;
              font-size: 14px;
              margin-right: 10px;
              margin-bottom: 10px;
            }
            .btn-email {
              background: #0099cc;
            }
            .footer { 
              margin-top: 30px; 
              text-align: center; 
              font-size: 12px; 
              color: #94a3b8; 
              padding: 20px;
              border-top: 1px solid #e2e8f0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 New Strategy Call Request</h1>
              <p>Lead generated from BusyGrowth Studio website</p>
            </div>
            <div class="content">
              <span class="badge">📞 Follow up within 24 hours</span>
              
              <div class="field">
                <div class="field-label">Contact Details</div>
                <div class="field-value">${formData.name}</div>
                <div style="margin-top: 5px; color: #64748b; font-size: 14px;">${formData.email} • ${formData.phone}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Business Type</div>
                <div class="field-value">${formData.businessType || 'Not specified'}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Interested In</div>
                <div class="field-value">
                  <span class="interest-tag">${interestLabels[formData.interest] || formData.interest}</span>
                </div>
              </div>
              
              ${formData.message ? `
                <div class="field">
                  <div class="field-label">Additional Message</div>
                  <div class="field-value">${formData.message.replace(/\n/g, '<br>')}</div>
                </div>
              ` : ''}
              
              <div class="quick-actions">
                <h3>⚡ Quick Actions</h3>
                <a href="mailto:${formData.email}" class="btn btn-email">📧 Reply via Email →</a>
                <a href="https://wa.me/${formData.phone.replace(/\D/g, '')}" class="btn">💬 Message on WhatsApp →</a>
              </div>
            </div>
            <div class="footer">
              <strong>BusyGrowth Studio</strong> • Jaipur, India<br>
              Performance Marketing Agency for Founders & Creators
            </div>
          </div>
        </body>
      </html>
    `;

    // =============================================
    // 🌟 PREMIUM USER AUTO-REPLY TEMPLATE
    // =============================================
    const userHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
              line-height: 1.6; 
              color: #0f172a; 
              background: #f8fafc;
              margin: 0;
              padding: 20px;
            }
            .container { 
              max-width: 600px; 
              margin: 0 auto; 
              background: #ffffff;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            }
            .logo { 
              text-align: center; 
              padding: 30px;
              background: #ffffff;
            }
            .logo span { 
              font-size: 32px; 
              font-weight: bold; 
              background: linear-gradient(135deg, #d4a017 0%, #f5c76a 100%); 
              -webkit-background-clip: text; 
              -webkit-text-fill-color: transparent; 
            }
            .content { 
              padding: 0 30px 30px; 
            }
            h2 { 
              color: #0f172a; 
              margin: 0 0 10px;
              font-size: 26px;
            }
            .highlight {
              background: linear-gradient(135deg, #d4a017, #f5c76a);
              color: white;
              padding: 2px 8px;
              border-radius: 20px;
              font-weight: 600;
              display: inline-block;
              font-size: 14px;
              margin-bottom: 20px;
            }
            .steps { 
              margin: 30px 0; 
            }
            .step { 
              display: flex; 
              margin-bottom: 20px; 
            }
            .step-number { 
              width: 36px; 
              height: 36px; 
              background: linear-gradient(135deg, #d4a017, #f5c76a); 
              color: #ffffff; 
              border-radius: 50%; 
              display: flex; 
              align-items: center; 
              justify-content: center; 
              font-weight: bold; 
              margin-right: 15px; 
              flex-shrink: 0; 
              box-shadow: 0 4px 10px rgba(212, 160, 23, 0.3);
            }
            .step-content { 
              flex: 1; 
            }
            .step-content strong { 
              color: #0f172a; 
              font-size: 16px;
            }
            .step-content p {
              margin: 5px 0 0;
              color: #64748b;
              font-size: 14px;
            }
            .cta { 
              background: #f1f5f9; 
              padding: 20px; 
              border-radius: 12px; 
              margin: 25px 0; 
              text-align: center;
            }
            .cta p {
              margin: 0 0 5px;
              font-weight: 600;
            }
            .contact-info {
              background: #ffffff;
              border: 1px solid #e2e8f0;
              border-radius: 12px;
              padding: 20px;
              margin-top: 20px;
            }
            .contact-row {
              display: flex;
              align-items: center;
              margin-bottom: 12px;
            }
            .contact-icon {
              width: 32px;
              color: #d4a017;
              font-size: 18px;
            }
            .footer { 
              margin-top: 30px; 
              text-align: center; 
              font-size: 12px; 
              color: #94a3b8; 
              padding: 20px;
              border-top: 1px solid #e2e8f0;
              background: #fafafa;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="logo">
              <span>BusyGrowth Studio</span>
            </div>
            <div class="content">
              <h2>Hey ${formData.name.split(' ')[0]}! 👋</h2>
              <span class="highlight">Thanks for reaching out</span>
              
              <p style="font-size: 16px; color: #334155; margin: 20px 0;">We've received your request for a <strong>${interestLabels[formData.interest] || formData.interest}</strong> and we're excited to learn more about your business.</p>
              
              <div class="steps">
                <div class="step">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <strong>We'll reach out within 24 hours</strong>
                    <p>Expect a WhatsApp message or email from our team to schedule your strategy call.</p>
                  </div>
                </div>
                <div class="step">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <strong>30-45 min strategy session</strong>
                    <p>We'll audit your current digital presence and map out actionable growth levers.</p>
                  </div>
                </div>
                <div class="step">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <strong>Custom growth roadmap</strong>
                    <p>Walk away with a clear, no-fluff plan tailored to your goals.</p>
                  </div>
                </div>
              </div>
              
              <div class="cta">
                <p>💡 Want to prepare for the call?</p>
                <p style="color: #64748b; font-size: 14px;">Think about: Current numbers, biggest bottlenecks, and 6-12 month goals.</p>
              </div>
              
              <div class="contact-info">
                <div class="contact-row">
                  <div class="contact-icon">📱</div>
                  <div><strong>WhatsApp:</strong> +91 93527 57834 <span style="color: #25D366; margin-left: 8px;">(Save this)</span></div>
                </div>
                <div class="contact-row">
                  <div class="contact-icon">📧</div>
                  <div><strong>Email:</strong> hello@busygrowth.studio</div>
                </div>
                <div class="contact-row">
                  <div class="contact-icon">🌐</div>
                  <div><strong>Website:</strong> busygrowth.studio</div>
                </div>
              </div>
              
              <p style="margin-top: 25px; font-size: 15px;">Talk soon,<br><strong style="color: #d4a017;">Team BusyGrowth Studio</strong><br><span style="color: #64748b; font-size: 13px;">Jaipur, India • Working worldwide 🌍</span></p>
            </div>
            <div class="footer">
              © ${new Date().getFullYear()} BusyGrowth Studio. All rights reserved.<br>
              You received this email because you submitted a form on our website.
            </div>
          </div>
        </body>
      </html>
    `;

    // Send Admin Email
    const { error: adminError } = await resend.emails.send({
      from: 'BusyGrowth Leads <onboarding@resend.dev>',
      to: [process.env.EMAIL_TO],
      subject: `🎯 New Lead: ${formData.name} from ${formData.businessType || 'Website'}`,
      html: adminHtml,
    });

    if (adminError) {
      console.error('Admin email error:', adminError);
      throw new Error(adminError.message);
    }

    // Send User Auto-reply
    const { error: userError } = await resend.emails.send({
      from: 'BusyGrowth Studio <onboarding@resend.dev>',
      to: [formData.email],
      subject: `✅ Thanks for reaching out, ${formData.name.split(' ')[0]}! | BusyGrowth Studio`,
      html: userHtml,
    });

    if (userError) {
      console.error('User email error:', userError);
      // Don't throw - admin email already sent
    }

    return Response.json(
      { success: true, message: 'Thank you! We\'ll get back within 24 hours.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Contact form error:', error.message);
    return Response.json(
      { success: false, message: 'Something went wrong. Please WhatsApp us at +91 93527 57834.' },
      { status: 500 }
    );
  }
}