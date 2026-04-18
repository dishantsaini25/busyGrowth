export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

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

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return Response.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Phone validation (Indian format)
    const cleanPhone = formData.phone.replace(/\D/g, '');
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return Response.json(
        { success: false, message: 'Please enter a valid 10-digit Indian phone number.' },
        { status: 400 }
      );
    }

    // Dynamically import nodemailer (Turbopack fix)
    const nodemailer = await import('nodemailer');
    
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify connection
    await transporter.verify();
    console.log('✅ SMTP connection verified');

    // Admin Email Template
    const adminHtml = `
      <!DOCTYPE html>
      <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h1 style="color: #d4a017;">🎯 New Lead: ${formData.name}</h1>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td><strong>Email:</strong></td><td>${formData.email}</td></tr>
            <tr><td><strong>Phone:</strong></td><td>${formData.phone}</td></tr>
            <tr><td><strong>Business Type:</strong></td><td>${formData.businessType || 'N/A'}</td></tr>
            <tr><td><strong>Interest:</strong></td><td>${formData.interest || 'N/A'}</td></tr>
            <tr><td><strong>Message:</strong></td><td>${formData.message || 'No message'}</td></tr>
          </table>
          <hr>
          <p style="color: #666;">Lead generated from BusyGrowth Studio website</p>
        </body>
      </html>
    `;

    const adminText = `
NEW LEAD: ${formData.name}
------------------------
Email: ${formData.email}
Phone: ${formData.phone}
Business: ${formData.businessType || 'N/A'}
Interest: ${formData.interest || 'N/A'}
Message: ${formData.message || 'No message'}
    `;

    // Send Admin Notification
    await transporter.sendMail({
      from: `"BusyGrowth Leads" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `🎯 New Lead: ${formData.name}`,
      text: adminText,
      html: adminHtml,
    });

    // User Auto-reply Template
    const interestLabels = {
      'growth-plan': 'Free Growth Plan (Strategy Call)',
      'ads': 'Meta / Google Ads Management',
      'content': 'Reels & Content Studio',
      'automation': 'WhatsApp / Email Automation',
      'course': 'Digital Marketing Course',
      'performance-course': 'Performance Marketing Course',
    };

    const userHtml = `
      <!DOCTYPE html>
      <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h1 style="color: #d4a017;">Thanks ${formData.name.split(' ')[0]}! 🎉</h1>
          <p>We received your request for <strong>${interestLabels[formData.interest] || formData.interest}</strong>.</p>
          <h3>What happens next?</h3>
          <ol>
            <li>We'll reach out within 24 hours on WhatsApp/Email</li>
            <li>Schedule a 30-45 min strategy call</li>
            <li>You'll get a custom growth roadmap</li>
          </ol>
          <p><strong>Save our WhatsApp:</strong> +91 93527 57834</p>
          <p>Talk soon,<br><strong>Team BusyGrowth Studio</strong><br>Jaipur, India</p>
        </body>
      </html>
    `;

    // Send User Auto-reply
    await transporter.sendMail({
      from: `"BusyGrowth Studio" <${process.env.EMAIL_USER}>`,
      to: formData.email,
      subject: '✅ Thanks for reaching out! | BusyGrowth Studio',
      html: userHtml,
    });

    return Response.json(
      { success: true, message: 'Thank you! We\'ll get back within 24 hours.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Contact form error:', error);
    
    // Don't expose internal error details to client
    return Response.json(
      { 
        success: false, 
        message: 'Something went wrong. Please try again or WhatsApp us directly at +91 93527 57834.' 
      },
      { status: 500 }
    );
  }
}