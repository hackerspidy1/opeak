
import "./globals.css";



export const metadata = {
  title: "Opeak",
  description: "Opeak",
};

export default function RootLayout({ children }) {
  return (
    <html >
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}