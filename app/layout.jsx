import { Toaster } from "sonner";
import "./globals.css";

export const metadata = {
  title: "Hicham Full-Stack web Developer",
  description:
    "Welcome on my portfolio, I'am Hicham a fullstack web developer, I can develop applications, websites, databases et more, contact me and your dream will be true",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="relative z-0 bg-primary">
        <Toaster richColors />
        {children}
      </body>
    </html>
  );
}
