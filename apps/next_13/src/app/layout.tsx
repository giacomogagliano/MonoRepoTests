import React from "react";
import StyledComponentsRegistry from "../components/Registry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body style={{ height: "100vh", margin: 0, backgroundColor: "red" }}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
