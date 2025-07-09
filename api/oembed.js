export default function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "Missing URL parameter" });
  }

  // Your Vercel deployed domain (adjust accordingly)
  const domain = "https://b1data.vercel.app";

  // Normalize URL for matching
  const normalizedUrl = url.endsWith('/') ? url.slice(0, -1) : url;

  // Match home page
  if (normalizedUrl === domain) {
    return res.json({
      version: "1.0",
      type: "rich",
      provider_name: "B1Data",
      provider_url: domain,
      title: "B1Data - Home Page",
      html: `<iframe src="${domain}/index.html" width="400" height="300" frameborder="0"></iframe>`,
      width: 400,
      height: 300,
    });
  }

  // Match user.html page
  if (normalizedUrl === `${domain}/user.html`) {
    return res.json({
      version: "1.0",
      type: "rich",
      provider_name: "B1Data",
      provider_url: domain,
      title: "User - B1Data",
      html: `<iframe src="${domain}/user.html" width="400" height="300" frameborder="0"></iframe>`,
      width: 400,
      height: 300,
    });
  }

  // Default fallback
  return res.status(404).json({ error: "URL not supported for embedding" });
}
