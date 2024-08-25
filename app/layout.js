import MainHeader from "../components/main-header/main-header"
import Footer from "../components/main-footer/main-footer";
import "./globals.css";

export const metadata = {
  title: "Hands United",
  description:
    "Supporting immigrant families with children who are Deaf or hard of hearing to connect and grow with their child.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        <div className='content-wrapper'>{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
