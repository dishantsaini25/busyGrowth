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

    console.log('📧 Sending admin email to:', process.env.EMAIL_TO);
    await transporter.sendMail({
      from: `"BusyGrowth" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Lead: ${formData.name}`,
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`,
    });
    console.log('✅ Admin email sent');

    console.log('📧 Sending auto-reply to:', formData.email);
    await transporter.sendMail({
      from: `"BusyGrowth Studio" <${process.env.EMAIL_USER}>`,
      to: formData.email,
      subject: 'Thanks for reaching out!',
      text: `Hey ${formData.name.split(' ')[0]}!\n\nWe'll get back within 24h.\n\nWhatsApp: +91 93527 57834`,
    });
    console.log('✅ Auto-reply sent');

    return Response.json(
      { success: true, message: 'Thank you!' },
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