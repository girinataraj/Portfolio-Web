import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    try {
      await resend.emails.send({
        from: "Portfolio Contact <noreply@girinataraj.dev>",
        to: ["girinataraj765@gmail.com"],
        subject: `New Contact Form Message from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Message</h1>
            </div>
            
            <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <div style="margin-bottom: 20px;">
                <h3 style="color: #374151; margin: 0 0 8px 0; font-size: 16px;">From:</h3>
                <p style="color: #6b7280; margin: 0; font-size: 18px; font-weight: 600;">${name}</p>
              </div>
              
              <div style="margin-bottom: 20px;">
                <h3 style="color: #374151; margin: 0 0 8px 0; font-size: 16px;">Email:</h3>
                <p style="color: #6b7280; margin: 0; font-size: 16px;">
                  <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
                </p>
              </div>
              
              <div style="margin-bottom: 20px;">
                <h3 style="color: #374151; margin: 0 0 8px 0; font-size: 16px;">Message:</h3>
                <div style="background: #f3f4f6; padding: 20px; border-radius: 6px; border-left: 4px solid #667eea;">
                  <p style="color: #374151; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
                <p style="color: #9ca3af; margin: 0; font-size: 14px;">
                  This message was sent from your portfolio contact form at ${new Date().toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        `,
        text: `
New Contact Form Message

From: ${name}
Email: ${email}

Message:
${message}

Sent at: ${new Date().toLocaleString()}
        `,
      })

      console.log("Email sent successfully to girinataraj765@gmail.com")
      return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 })
    } catch (emailError) {
      console.error("Failed to send email:", emailError)
      console.log("Contact form submission (email failed):", { name, email, message })
      return NextResponse.json({ message: "Message received! I'll get back to you soon." }, { status: 200 })
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}
