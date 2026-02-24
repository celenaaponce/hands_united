import MainHeader from "../components/main-header/main-header";
import Footer from "../components/main-footer/main-footer";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://handsunitedor.org"),
  title: "Hands United",
  description:
    "Supporting immigrant families with Deaf and hard of hearing children.",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NonprofitOrganization",
    name: "Hands United",
    url: "https://handsunitedor.org",
    logo: "https://handsunitedor.org/event-logo.png",
    sameAs: [
      "https://www.youtube.com/@handsunitedor",
      "https://www.instagram.com/handsunitedor",
      "https://www.facebook.com/handsunitedor",
      "https://www.linkedin.com/company/hands-united",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>

      {/* THEME WILL BE APPLIED HERE */}
      <body>
        <MainHeader />
        <div className="content-wrapper">{children}</div>
        <Footer />
      </body>
    </html>
  );
}