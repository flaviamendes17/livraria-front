
export const metadata = {
  title: "Biblioteca Virtual",
};
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body>{children}</body>
    </html>
);
}