import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SidenavBar from "@/components/SidenavBar/page";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="../assets/img/apple-icon.png"
        />
        <link rel="icon" type="image/png" href="../assets/img/favicon.png" />
        <title>Next Admin</title>
        {/* <!--     Fonts and icons     --> */}
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        {/* <!-- Font Awesome Icons --> */}
        <script
          src="https://kit.fontawesome.com/42d5adcbca.js"
          crossOrigin="anonymous"
        ></script>
        {/* <!-- Nucleo Icons --> */}
        <link href="../assets/css/nucleo-icons.css" rel="stylesheet" />
        <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />
        {/* <!-- Main Styling --> */}
        <link
          href="../assets/css/argon-dashboard-tailwind.css?v=1.0.1"
          rel="stylesheet"
        />
      </head>
      {/* <body className={inter.className}>{children}</body> */}
      <body className="m-0 font-sans text-base antialiased font-normal dark:bg-slate-900 leading-default bg-gray-50 text-slate-500">
       
        {/* <SidenavBar /> */}
        {children}
      </body>

      <Script
        src="../assets/js/plugins/perfect-scrollbar.min.js"
        async
      ></Script>
      <Script
        src="../assets/js/argon-dashboard-tailwind.js?v=1.0.1"
        async
      ></Script>
    </html>
  );
}
