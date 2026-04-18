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

    const { Resend } = await import('resend');
    
    // Check if API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY missing');
      return Response.json(
        { success: false, message: 'Server configuration error.' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const interestLabels = {
      'growth-plan': 'Free Growth Plan',
      'ads': 'Meta / Google Ads',
      'content': 'Reels & Content',
      'automation': 'WhatsApp / Email Automation',
      'course': 'Full DM Course',
      'performance-course': 'Performance Course',
    };

    // Simple admin email
    console.log('📧 Sending admin email to:', process.env.EMAIL_TO);
    
    const adminResult = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [process.env.EMAIL_TO],
      subject: `New Lead: ${formData.name}`,
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nBusiness: ${formData.businessType || 'N/A'}\nInterest: ${interestLabels[formData.interest] || formData.interest}\nMessage: ${formData.message || 'N/A'}`,
    });

    console.log('✅ Admin email sent:', adminResult);

    // Simple user auto-reply
    console.log('📧 Sending auto-reply to:', formData.email);
    
    const userResult = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [formData.email],
      subject: 'Thanks for reaching out! | BusyGrowth Studio',
      text: `Hey ${formData.name.split(' ')[0]}!\n\nThanks for reaching out. We received your request for ${interestLabels[formData.interest] || formData.interest}.\n\nWe'll get back to you within 24 hours.\n\nWhatsApp: +91 93527 57834\n\nTeam BusyGrowth Studio`,
    });

    console.log('✅ User email sent:', userResult);

    return Response.json(
      { success: true, message: 'Thank you! We\'ll get back within 24 hours.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Contact form error:', error.message);
    console.error('❌ Full error:', JSON.stringify(error, null, 2));
    
    return Response.json(
      { success: false, message: 'Something went wrong. Please WhatsApp us at +91 93527 57834.' },
      { status: 500 }
    );
  }
}