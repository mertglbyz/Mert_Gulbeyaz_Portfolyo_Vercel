import type { ReactNode } from "react";

function IconFrame({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden>
      {children}
    </svg>
  );
}

export const skillIcons = {
  "React Native": (
    <IconFrame>
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="currentColor" strokeWidth="1.4" />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.2"
        stroke="currentColor"
        strokeWidth="1.4"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4.2"
        stroke="currentColor"
        strokeWidth="1.4"
        transform="rotate(120 12 12)"
      />
    </IconFrame>
  ),
  TypeScript: (
    <IconFrame>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M8 10.2h8M12 10.2V18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </IconFrame>
  ),
  Expo: (
    <IconFrame>
      <path
        d="M12 3.5 20 8v8l-8 4.5L4 16V8l8-4.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M12 12V21" stroke="currentColor" strokeWidth="1.4" />
    </IconFrame>
  ),
  "EAS Build": (
    <IconFrame>
      <path
        d="M4 17V7l8-4 8 4v10l-8 4-8-4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M4 7l8 4 8-4M12 11v10" stroke="currentColor" strokeWidth="1.4" />
    </IconFrame>
  ),
  Supabase: (
    <IconFrame>
      <path
        d="M15.5 3.5 7 14h5l-1.5 6.5L19 10h-5l1.5-6.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </IconFrame>
  ),
  "Node.js": (
    <IconFrame>
      <path
        d="M12 3 20 7.5v9L12 21 4 16.5v-9L12 3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M12 8.2v7.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </IconFrame>
  ),
  Docker: (
    <IconFrame>
      <path
        d="M4 14.5c1.2 3 4.2 5 8 5 5.2 0 8.5-2.8 9.2-7.2-2 .8-3.8.6-5.2-.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <rect x="6" y="9" width="3.2" height="3.2" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
      <rect x="10" y="9" width="3.2" height="3.2" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
      <rect x="14" y="9" width="3.2" height="3.2" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
      <rect x="10" y="5.2" width="3.2" height="3.2" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
    </IconFrame>
  ),
  "Oracle Cloud": (
    <IconFrame>
      <ellipse cx="12" cy="12" rx="8.5" ry="4.8" stroke="currentColor" strokeWidth="1.6" />
    </IconFrame>
  ),
  GCP: (
    <IconFrame>
      <path
        d="M12 4.5 19 16.5H5L12 4.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="13.2" r="1.4" fill="currentColor" />
    </IconFrame>
  ),
  AWS: (
    <IconFrame>
      <path
        d="M5 15.5c2.8 2.4 11.2 2.4 14 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 8h3.2l.8 6H10M14.2 8 16 14h-1.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconFrame>
  ),
  Python: (
    <IconFrame>
      <path
        d="M9 7.5h6.5A3.5 3.5 0 0 1 19 11v3.5h-5M15 16.5H8.5A3.5 3.5 0 0 1 5 13V9.5h5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="10" cy="6.2" r="0.9" fill="currentColor" />
      <circle cx="14" cy="17.8" r="0.9" fill="currentColor" />
    </IconFrame>
  ),
  Pandas: (
    <IconFrame>
      <path d="M8 4v16M16 4v16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 8h3M13 12h3M8 16h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </IconFrame>
  ),
  "Scikit-learn": (
    <IconFrame>
      <circle cx="8" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16" cy="8.5" r="2.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16" cy="15.5" r="2.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10.6 10.8 14.2 9.2M10.6 13.2 14.2 14.8" stroke="currentColor" strokeWidth="1.3" />
    </IconFrame>
  ),
  SQL: (
    <IconFrame>
      <ellipse cx="12" cy="7" rx="7" ry="2.6" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M5 7v10c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V7"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </IconFrame>
  ),
  NumPy: (
    <IconFrame>
      <path d="M7 5v14l10-14v14" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </IconFrame>
  ),
  Matplotlib: (
    <IconFrame>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 12 17 8.5M12 12l-2.5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </IconFrame>
  ),
  Seaborn: (
    <IconFrame>
      <path
        d="M5 16c2-5 4-7 7-7s5 2 7 7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="8" cy="11" r="1.2" fill="currentColor" />
      <circle cx="12" cy="8.5" r="1.2" fill="currentColor" />
      <circle cx="16" cy="11" r="1.2" fill="currentColor" />
    </IconFrame>
  ),
  "Jupyter Notebook": (
    <IconFrame>
      <rect x="4" y="4.5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 9h8M8 12.5h8M8 16h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </IconFrame>
  ),
} as const;

export type SkillName = keyof typeof skillIcons;
