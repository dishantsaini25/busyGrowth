export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 30;

export async function POST(request) {
  try {
    const formData = await request.json();
    
    if (!formData.name || !formData.email || !formData.phone) {
      return Response.json(
        { success: false, message: 'Name, email, and phone are required.' },
        { status: 400 }
      );
    }

    const nodemailer = await import('nodemailer');
    
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log('📧 Attempting to verify SMTP...');
    await transporter.verify();
    console.log('✅ SMTP verified');

    // Interest labels
    const interestLabels = {
      'growth-plan': 'Free Growth Plan (Strategy Call)',
      'ads': 'Meta / Google Ads Management',
      'content': 'Reels & Content Studio',
      'automation': 'WhatsApp / Email Automation',
      'course': 'Full Digital Marketing Course',
      'performance-course': 'Performance Marketing Course',
    };

    // Business type labels
    const businessLabels = {
      'd2c': 'D2C Brand',
      'service': 'Service Business',
      'creator': 'Content Creator / Influencer',
      'local': 'Local Business',
      'saas': 'SaaS / Tech',
      'other': 'Other',
    };

    // =============================================
    // ADMIN EMAIL - Full Details
    // =============================================
    const adminHtml = `
      <!DOCTYPE html>
      <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family: Arial, sans-serif; background: #f8fafc; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
            <div style="background: linear-gradient(135deg, #d4a017, #f5c76a); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px;">🚀 New Lead</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0;">From BusyGrowth Studio Website</p>
            </div>
            <div style="padding: 30px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 12px; text-transform: uppercase;">Full Name</td><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0f172a;">${formData.name}</td></tr>
                <tr><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 12px; text-transform: uppercase;">Email</td><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0f172a;">${formData.email}</td></tr>
                <tr><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 12px; text-transform: uppercase;">Phone</td><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0f172a;">${formData.phone}</td></tr>
                <tr><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 12px; text-transform: uppercase;">Business Type</td><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0f172a;">${businessLabels[formData.businessType] || formData.businessType || 'Not specified'}</td></tr>
                <tr><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 12px; text-transform: uppercase;">Interested In</td><td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #d4a017;">${interestLabels[formData.interest] || formData.interest}</td></tr>
                ${formData.message ? `<tr><td style="padding: 12px 0; color: #64748b; font-size: 12px; text-transform: uppercase;">Message</td><td style="padding: 12px 0; font-weight: 600; color: #0f172a;">${formData.message.replace(/\n/g, '<br>')}</td></tr>` : '<tr><td style="padding: 12px 0; color: #64748b; font-size: 12px; text-transform: uppercase;">Message</td><td style="padding: 12px 0; color: #94a3b8;">No message</td></tr>'}
              </table>
              
              <div style="margin-top: 25px; padding: 20px; background: #f8fafc; border-radius: 12px;">
                <p style="margin: 0 0 10px; font-weight: 600;">⚡ Quick Actions</p>
                <a href="mailto:${formData.email}" style="display: inline-block; background: #0099cc; color: white; padding: 10px 20px; border-radius: 30px; text-decoration: none; margin-right: 10px;">📧 Reply via Email</a>
                <a href="https://wa.me/${formData.phone.replace(/\D/g, '')}" style="display: inline-block; background: #25D366; color: white; padding: 10px 20px; border-radius: 30px; text-decoration: none;">💬 WhatsApp</a>
              </div>
            </div>
            <div style="padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
              BusyGrowth Studio • Jaipur, India
            </div>
          </div>
        </body>
      </html>
    `;

    const adminText = `
NEW LEAD: ${formData.name}
------------------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Business Type: ${businessLabels[formData.businessType] || formData.businessType || 'N/A'}
Interest: ${interestLabels[formData.interest] || formData.interest}
Message: ${formData.message || 'No message'}
    `;

    console.log('📧 Sending admin email to:', process.env.EMAIL_TO);
    await transporter.sendMail({
      from: `"BusyGrowth Leads" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `🎯 New Lead: ${formData.name} - ${businessLabels[formData.businessType] || formData.businessType || 'Website'}`,
      text: adminText,
      html: adminHtml,
    });
    console.log('✅ Admin email sent');

    // =============================================
    // USER AUTO-REPLY
    // =============================================
    const userHtml = `
      <!DOCTYPE html>
      <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family: Arial, sans-serif; background: #f8fafc; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
            <div style="text-align: center; padding: 30px;">
              <span style="font-size: 32px; font-weight: bold; background: linear-gradient(135deg, #d4a017, #f5c76a); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">BusyGrowth Studio</span>
            </div>
            <div style="padding: 0 30px 30px;">
              <h2 style="color: #0f172a; margin: 0 0 10px;">Hey ${formData.name.split(' ')[0]}! 👋</h2>
              <p style="font-size: 16px; color: #334155;">Thanks for reaching out! We received your request for <strong style="color: #d4a017;">${interestLabels[formData.interest] || formData.interest}</strong>.</p>
              
              <div style="margin: 25px 0;">
                <div style="display: flex; margin-bottom: 15px;"><span style="width: 30px; height: 30px; background: #d4a017; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px;">1</span><div><strong>We'll reach out within 24 hours</strong><br><span style="color: #64748b; font-size: 14px;">Expect a WhatsApp message or email from our team.</span></div></div>
                <div style="display: flex; margin-bottom: 15px;"><span style="width: 30px; height: 30px; background: #d4a017; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px;">2</span><div><strong>30-45 min strategy session</strong><br><span style="color: #64748b; font-size: 14px;">We'll audit your digital presence and map out growth levers.</span></div></div>
                <div style="display: flex;"><span style="width: 30px; height: 30px; background: #d4a017; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px;">3</span><div><strong>Custom growth roadmap</strong><br><span style="color: #64748b; font-size: 14px;">Walk away with a clear plan tailored to your goals.</span></div></div>
              </div>
              
              <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-top: 20px;">
                <p style="margin: 0 0 10px; font-weight: 600;">📞 Save our contact</p>
                <p style="margin: 5px 0;">📱 WhatsApp: <strong>+91 93527 57834</strong></p>
                <p style="margin: 5px 0;">📧 Email: <strong>hello@busygrowth.studio</strong></p>
              </div>
              
              <p style="margin-top: 25px;">Talk soon,<br><strong>Team BusyGrowth Studio</strong><br><span style="color: #64748b; font-size: 13px;">Jaipur, India • Working worldwide 🌍</span></p>
            </div>
            <div style="padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
              © ${new Date().getFullYear()} BusyGrowth Studio. All rights reserved.
            </div>
          </div>
        </body>
      </html>
    `;

    console.log('📧 Sending auto-reply to:', formData.email);
    await transporter.sendMail({
      from: `"BusyGrowth Studio" <${process.env.EMAIL_USER}>`,
      to: formData.email,
      subject: `✅ Thanks for reaching out, ${formData.name.split(' ')[0]}! | BusyGrowth Studio`,
      html: userHtml,
    });
    console.log('✅ Auto-reply sent');

    return Response.json(
      { success: true, message: 'Thank you! We\'ll get back within 24 hours.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Error:', error.message);
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}