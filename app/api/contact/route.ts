import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, email, phone, company, product, quantity, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email to admin (ONLY email sent now)
    const mailOptions = {
      from: "GreenChem Global leads",
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `New Product Enquiry from ${name}`,
      html: `
        <h2>New Product Enquiry Received</h2>
        <hr/>

        <h3>Customer Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>

        <h3>Product Details</h3>
        <p><strong>Product of Interest:</strong> ${product || "Not specified"}</p>
        <p><strong>Estimated Quantity:</strong> ${quantity || "Not specified"}</p>

        <h3>Message / Requirements</h3>
        <p>${message.replace(/\n/g, "<br/>")}</p>

        <hr/>
        <p style="color: #666; font-size: 12px;">
          <strong>GreenChem Global Exports LLP</strong><br/>
          Bharuch, Gujarat – 392001, India<br/>
          Phone: +91 92747 10944<br/>
          <em>Green Today, Global Tomorrow</em>
        </p>
      `,
    }

    // Send ONLY admin email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      message: "Enquiry sent successfully",
    })

  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}