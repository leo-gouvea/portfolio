import type { ComponentType } from "react";
import {
  SiPython, SiReact, SiJavascript, SiOpenjdk, SiPhp, SiNodedotjs,
  SiMysql, SiN8N, SiOpenapiinitiative, SiTotvs,
} from "react-icons/si";
import { BarChart3, Sigma, Sheet } from "lucide-react";

/* Maps skill label -> small icon component.
   To add or swap an icon, edit this map. */
export const skillIcons: Record<string, ComponentType<{ className?: string }>> = {
  Python: SiPython,
  Java: SiOpenjdk,
  JavaScript: SiJavascript,
  React: SiReact,
  PHP: SiPhp,
  "Node.js": SiNodedotjs,
  SQL: SiMysql,
  n8n: SiN8N,
  "REST APIs": SiOpenapiinitiative,

  "Power BI": BarChart3,
  DAX: Sigma,
  "Excel Advanced": Sheet,
  "ERP TOTVS RM": SiTotvs,
};