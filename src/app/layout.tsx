import type { Metadata } from "next";
import { Inter, Lexend_Deca } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const lexend = Lexend_Deca({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "koiroy",
  description:
    "hey there! my name is roy, aka koiroy. i am a young musician from the chicago area. I play jazz piano, and produce & compose music digitally. i play piano in the jazzardous waste jazz trio, and i release music online as koiroy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
