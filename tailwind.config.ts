import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      fontFamily: {
        figtree: ["var(--font-figtree)", "sans-serif"],
        doto: ["var(--font-doto)", "sans-serif"],
      },
    },
  },
} satisfies Config;
