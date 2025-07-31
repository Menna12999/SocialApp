"use client";

import MuiProviders from "./mui_providers";
import ReduxProvider from "./redux-provider";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MuiProviders>
          <ReduxProvider>{children}</ReduxProvider>
        </MuiProviders>
      </body>
    </html>
  );
}
