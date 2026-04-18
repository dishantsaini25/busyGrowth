export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 30;

export async function POST(request) {
  try {
    const formData = await request.json();
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone) {
      return Response.json(
        { success: false, message: 'Name, email, and phone are required.' },
        { status: 400 }
      );
    }

    // ⭐ FORCE READ ENV VARIABLES
    const EMAIL_HOST = process.env.EMAIL_HOST;
    const EMAIL_PORT = process.env.EMAIL_PORT;
    const EMAIL_SECURE = process.env.EMAIL_SECURE;
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const EMAIL_TO = process.env.EMAIL_TO;

    // Debug: Check if variables exist
    console.log('ENV Check:', {
      HOST: EMAIL_HOST || 'MISSING',
      PORT: EMAIL_PORT || 'MISSING',
      USER: EMAIL_USER || 'MISSING',
      PASS: EMAIL_PASS ? 'EXISTS' : 'MISSING',
      TO: EMAIL_TO || 'MISSING'
    });

    // If any variable is missing, return error
    if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
      return Response.json(
        { 
          success: false, 
          message: 'Server configuration error. Missing email settings.' 
        },
        { status: 500 }
      );
    }

    const nodemailer = await import('nodemailer');
    
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: parseInt(EMAIL_PORT),
      secure: EMAIL_SECURE === 'true',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // Verify connection
    await transporter.verify();
    console.log('✅ SMTP connection verified');

    // Send Admin Email
    await transporter.sendMail({
      from: `"BusyGrowth Leads" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      subject: `🎯 New Lead: ${formData.name}`,
      html: `
        <h1>New Lead</h1>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Business:</strong> ${formData.businessType || 'N/A'}</p>
        <p><strong>Interest:</strong> ${formData.interest}</p>
        <p><strong>Message:</strong> ${formData.message || 'N/A'}</p>
      `,
    });

    // Send User Auto-reply
    await transporter.sendMail({
      from: `"BusyGrowth Studio" <${EMAIL_USER}>`,
      to: formData.email,
      subject: '✅ Thanks for reaching out! | BusyGrowth Studio',
      html: `
        <h1>Thanks ${formData.name.split(' ')[0]}!</h1>
        <p>We received your request and will get back within 24 hours.</p>
        <p><strong>Your interest:</strong> ${formData.interest}</p>
        <p>Save our WhatsApp: <strong>+91 93527 57834</strong></p>
      `,
    });

    return Response.json(
      { success: true, message: 'Thank you! We\'ll get back within 24 hours.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Contact form error:', error.message);
    return Response.json(
      { success: false, message: 'Server error: ' + error.message },
      { status: 500 }
    );
  }
}