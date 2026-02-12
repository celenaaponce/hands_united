import MainHeader from "../components/main-header/main-header";
import Footer from "../components/main-footer/main-footer";
import "./globals.css";

export const metadata = {
  title: "Hands United",
  description:
    "Supporting immigrant families with Deaf and hard of hearing children.",
  openGraph: {
    title: "Hands United",
    description:
      "Supporting immigrant families with Deaf and hard of hearing children.",
    url: "https://handsunitedor.org",
    siteName: "Hands United",
    images: [
      {
        url: "https://handsunitedor.org/images/social-preview.png", // change if needed
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
    "https://www.linkedin.com/company/hands-united"
  ]
};

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <MainHeader />
        <div className="content-wrapper">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
