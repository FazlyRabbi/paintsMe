import "tailwindcss/tailwind.css";
import "../styles/globals.css";
// imports swiper sliders
import { AuthProvider } from "@/context/AuthContext";
import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "@material-tailwind/react";
import { CardProvider } from "@/context/CardContext";
import "swiper/swiper-bundle.css";
import { SessionProvider } from "next-auth/react";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={session}>
        <ThemeProvider>
          <AuthProvider>
            <CardProvider>
              <SidebarProvider>
                <Component {...pageProps} />
              </SidebarProvider>
            </CardProvider>
          </AuthProvider>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
