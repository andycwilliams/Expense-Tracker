import Link from "next/link";
import "./globals.css";
// import ApolloProviderWrapper from "../components/ApolloProviderWrapper";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expense Tracker",
  description: "Track your expenses easily",
  // icons: {
  //   icon: "/favicon.ico",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ApolloProviderWrapper> */}
        <header className="flex justify-center items-center text-white">
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <small>
            &copy; {new Date().getFullYear()}. Expense Tracker. All rights
            reserved.
          </small>
        </footer>
        {/* </ApolloProviderWrapper> */}
      </body>
    </html>
  );
}
