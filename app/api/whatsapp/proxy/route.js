export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return new Response("Missing URL", { status: 400 });
  }

  try {
    const response = await fetch(url);
    const text = await response.text();

    return new Response(text, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  } catch (err) {
    return new Response("Fetch failed", { status: 500 });
  }
}