"use client";
import Navbar from "../components/Navbar";
import "./globals.css";
import { Provider } from "@/components/ui/provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Aditya Dewantara Fadillah | Personal Website</title>
        <meta
          name="description"
          content="Hello, my name is Adit and here is my portofolio. Please take care of my website because i'm not good at Frontend."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
