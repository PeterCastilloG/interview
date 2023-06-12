export const metadata = {
  title: "Global S1",
  description: "Develop By GS1",
  icons: {
    icon:'/logo.png',
},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
