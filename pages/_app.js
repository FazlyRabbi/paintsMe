import "tailwindcss/tailwind.css";
import "../styles/globals.css";
// imports swiper sliders
import { AuthProvider } from "@/context/AuthContext";
import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "@material-tailwind/react";
import { CardProvider } from "@/context/CardContext";
import "swiper/swiper-bundle.css";

export default function MyApp({ Component, pageProps }) {
  // if (pageProps.protected && !user) {
  //   return (
  //     <Layout>Loading...</Layout>
  //   )
  // }

  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <CardProvider>
            <SidebarProvider>
              <Component {...pageProps} />
            </SidebarProvider>
          </CardProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}
