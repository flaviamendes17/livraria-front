
export const metadata = {
  title: "Biblioteca Virtual",
};
export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
);
}