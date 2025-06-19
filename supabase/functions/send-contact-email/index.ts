import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const TO_EMAIL = "bestdear113@gmail.com"; // Updated to your actual email

serve(async (req: Request) => {
  // CORS preflight handler
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Contact form function called");
    
    // Check if RESEND_API_KEY is available
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!resendKey) {
      console.error("RESEND_API_KEY is not set");
      return new Response(
        JSON.stringify({ error: "Email service is not configured. Please contact the administrator." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const resend = new Resend(resendKey);
    
    // Parse the form data
    const { name, email, subject, message } = await req.json();
    console.log("Form data received:", { name, email, subject: subject?.substring(0, 50) });

    // Basic validation
    if (!name || !email || !subject || !message) {
      console.error("Missing required fields:", { name: !!name, email: !!email, subject: !!subject, message: !!message });
      return new Response(
        JSON.stringify({ error: "Missing required fields." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Compose HTML
    const html = `
      <h2>New Contact Message from Your Portfolio Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;word-break:break-word;">${message}</pre>
    `;

    console.log("Attempting to send email to:", TO_EMAIL);
    
    // Try to send the email
    const emailResult = await resend.emails.send({
      from: "Lovable Contact Form <onboarding@resend.dev>",
      to: [TO_EMAIL],
      reply_to: email,
      subject: `[Portfolio] ${subject}`,
      html,
    });

    console.log("Resend response:", emailResult);

    if (emailResult.error) {
      console.error("Resend error details:", emailResult.error);
      
      // Check for common Resend errors and provide helpful messages
      let errorMessage = emailResult.error.message || String(emailResult.error);
      
      if (errorMessage.includes("API key")) {
        errorMessage = "Email service authentication failed. Please contact the administrator.";
      } else if (errorMessage.includes("domain")) {
        errorMessage = "Email domain not verified. Please contact the administrator.";
      } else if (errorMessage.includes("rate limit")) {
        errorMessage = "Too many emails sent. Please try again in a few minutes.";
      }
      
      return new Response(
        JSON.stringify({ error: errorMessage }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Email sent successfully:", emailResult.data);
    
    // Success
    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    // Improved error logging
    let niceError = error?.message ? error.message : String(error);
    console.error("Function error details:", {
      message: niceError,
      name: error?.name,
      stack: error?.stack
    });

    // Provide user-friendly error messages for common issues
    if (niceError.includes("fetch")) {
      niceError = "Network error occurred. Please check your internet connection and try again.";
    } else if (niceError.includes("JSON")) {
      niceError = "Invalid request format. Please refresh the page and try again.";
    }

    return new Response(
      JSON.stringify({ error: niceError }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
