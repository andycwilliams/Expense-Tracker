import "./globals.css";
import ApolloProviderWrapper from "../components/ApolloProviderWrapper";

export const metadata = {
  title: "Expense Tracker",
  description: "Track your expenses easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ApolloProviderWrapper>{children}</ApolloProviderWrapper>
      </body>
    </html>
  );
}
