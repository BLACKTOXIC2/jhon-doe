'use client';

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "sonner";
import { AnimatePresence, motion } from "framer-motion";

export function Providers({ children }: { children: React.ReactNode }) {
  return (    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Toaster position="bottom-right" expand={true} richColors />
    </NextThemesProvider>
  );
}
