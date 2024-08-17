export default function SignInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-full">{children}</div>;
}
