

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import theme from '@/theme';


import { ThemeProvider } from "@emotion/react";



export default function MuiProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
        {children}
        </ThemeProvider>

        </AppRouterCacheProvider>

      </body>
    </html>
  );
}
