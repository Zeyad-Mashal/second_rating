import "./globals.css";
export const metadata = {
  title: "Second Rating",
  description: "Created By Zeyad Mashaal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
