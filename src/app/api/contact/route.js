import { NextResponse } from 'next/server';
import { sendContactEmail } from '../../../lib/email';

export async function POST(request) {
  try {
    const formData = await request.json();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and phone are required.' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Phone validation (Indian format)
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid 10-digit Indian phone number.' },
        { status: 400 }
      );
    }

    // Send emails
    await sendContactEmail({
      ...formData,
      phone: cleanPhone, // Send cleaned phone number
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! We\'ll get back to you within 24 hours.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Something went wrong. Please try again or WhatsApp us directly.' 
      },
      { status: 500 }
    );
  }
}