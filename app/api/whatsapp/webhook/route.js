import { NextResponse } from "next/server";

export async function POST(req) {
  const { to, name, classTime } = await req.json();

  const res = await fetch(
    `https://graph.facebook.com/v19.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        type: "template",
        template: {
          name: "hu_class_reminder_15min_es_hx7edcde95508",
          language: { code: "es" },
          components: [
            {
              type: "body",
              parameters: [
                { type: "text", text: name },
                { type: "text", text: classTime }
              ]
            }
          ]
        }
      })
    }
  );

  const data = await res.json();

  return NextResponse.json(data);
}
