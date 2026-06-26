import { createFileRoute } from "@tanstack/react-router";
import { LangProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import Portfolio from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leonardo Gouvea — Full-Stack Dev & Data Analyst" },
      { name: "description", content: "Game-inspired portfolio: Full-Stack Developer & Data Analyst. From code to insight." },
      { property: "og:title", content: "Leonardo Gouvea — Dev & Data" },
      { property: "og:description", content: "From code to insight." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <LangProvider>
        <Portfolio />
      </LangProvider>
    </ThemeProvider>
  );
}
