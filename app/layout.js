import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
 weight:["400","500","600","700"],
  subsets: ["latin"],
});
const ovo = Ovo({
 weight:["400"],
  subsets: ["latin"],
});


// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "My Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
