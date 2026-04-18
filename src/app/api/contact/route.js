export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const formData = await request.json();
    
    // ⭐ HARDCODE FOR TESTING - REPLACE WITH YOUR ACTUAL KEY
    const TEST_API_KEY = 're_HECj7LWc_67kPbZY9Y8hzoPbPYo9KymY9'; // ← Apni Resend API key yahan dalo
    const TEST_EMAIL_TO = 'dishantsaini514@gmail.com';
    
    const { Resend } = await import('resend');
    const resend = new Resend(TEST_API_KEY);

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [TEST_EMAIL_TO],
      subject: `Test: ${formData.name}`,
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`,
    });

    return Response.json({ success: true, message: 'Email sent!', result });
    
  } catch (error) {
    return Response.json({ 
      success: false, 
      message: error.message,
      code: error.code 
    });
  }
}