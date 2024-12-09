import "./globals.css";

export const metadata = {
  title: "Calculator",
  description: "A simple arithmetic calculator and a BMI calculator.",
  charSet: "utf-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
