function AppStoreBadge() {
  return (
    <svg
      viewBox="0 0 165 50"
      className="h-11 w-auto sm:h-12"
      aria-hidden
    >
      <rect
        width="164"
        height="49"
        x="0.5"
        y="0.5"
        rx="8.5"
        fill="#000"
        stroke="rgba(255,255,255,0.28)"
      />
      <path
        fill="#fff"
        d="M29.18 25.42c-.02-3.16 2.58-4.68 2.7-4.76-1.48-2.16-3.78-2.46-4.58-2.48-1.94-.2-3.8 1.14-4.78 1.14-.98 0-2.5-1.12-4.12-1.08-2.12.03-4.08 1.24-5.16 3.14-2.22 3.84-.56 9.52 1.58 12.64 1.06 1.52 2.3 3.22 3.94 3.16 1.58-.06 2.18-1.02 4.08-1.02 1.9 0 2.44 1.02 4.1.98 1.7-.02 2.78-1.54 3.82-3.08 1.2-1.74 1.68-3.44 1.7-3.52-.04-.02-3.28-1.26-3.28-5.12zm-3.08-9.08c.86-1.06 1.44-2.52 1.28-3.98-1.24.06-2.74.84-3.62 1.88-.8.92-1.48 2.42-1.3 3.84 1.38.1 2.78-.7 3.64-1.74z"
      />
      <text
        x="46"
        y="18.5"
        fill="#fff"
        fontFamily="system-ui, -apple-system, Segoe UI, sans-serif"
        fontSize="8.2"
        letterSpacing="0.3"
      >
        Download on the
      </text>
      <text
        x="46"
        y="36.5"
        fill="#fff"
        fontFamily="system-ui, -apple-system, Segoe UI, sans-serif"
        fontSize="17.5"
        fontWeight="600"
        letterSpacing="-0.35"
      >
        App Store
      </text>
    </svg>
  );
}

function PlayStoreBadge() {
  return (
    <svg
      viewBox="0 0 178 50"
      className="h-11 w-auto sm:h-12"
      aria-hidden
    >
      <rect
        width="177"
        height="49"
        x="0.5"
        y="0.5"
        rx="8.5"
        fill="#000"
        stroke="rgba(255,255,255,0.28)"
      />
      <svg x="13" y="12.5" width="23" height="23" viewBox="0 0 24 24">
        <path fill="#00D4FF" d="M3.1 2.5v19L14.2 12 3.1 2.5z" />
        <path fill="#FFCE00" d="m17.6 10-3.4 2 3.4 2 2.7-1.55c.7-.4.7-1.5 0-1.9L17.6 10z" />
        <path fill="#FF3A44" d="M14.2 12 3.1 21.5l14.5-8.4L14.2 12z" />
        <path fill="#00F076" d="M14.2 12 17.6 10 3.1 2.5 14.2 12z" />
      </svg>
      <text
        x="46"
        y="18.5"
        fill="#fff"
        fontFamily="system-ui, Segoe UI, Roboto, sans-serif"
        fontSize="8.2"
        letterSpacing="1.4"
      >
        GET IT ON
      </text>
      <text
        x="46"
        y="36.5"
        fill="#fff"
        fontFamily="system-ui, Segoe UI, Roboto, sans-serif"
        fontSize="17.2"
        fontWeight="600"
        letterSpacing="-0.3"
      >
        Google Play
      </text>
    </svg>
  );
}

export function StoreBadges({
  appStore,
  playStore,
}: {
  appStore?: string;
  playStore?: string;
}) {
  if (!appStore && !playStore) return null;

  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      {appStore ? (
        <a
          href={appStore}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download on the App Store"
          className="inline-flex transition-transform duration-300 hover:scale-[1.03] focus-visible:rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <AppStoreBadge />
        </a>
      ) : null}
      {playStore ? (
        <a
          href={playStore}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get it on Google Play"
          className="inline-flex transition-transform duration-300 hover:scale-[1.03] focus-visible:rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <PlayStoreBadge />
        </a>
      ) : null}
    </div>
  );
}
