type IconProps = { size?: number; className?: string };

export function AppleGlyph({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#EAF6EF" aria-hidden="true">
      <path d="M16.5 12.6c0-2 1.6-3 1.7-3.1-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.2 2-1.4 2.4-.4 6 1 8 .6 1 1.4 2.1 2.4 2 .9 0 1.3-.6 2.4-.6s1.4.6 2.4.6 1.7-1 2.3-2c.7-1.1 1-2.2 1-2.3-.1 0-2-.8-2-3zM14.7 6.3c.5-.6.9-1.5.8-2.4-.8 0-1.7.5-2.2 1.2-.5.5-.9 1.4-.8 2.3.9.1 1.8-.5 2.2-1.1z" />
    </svg>
  );
}

export function PlayGlyph({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={(size * 22) / 20} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3.6 2.3 13.4 12 3.6 21.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1z" fill="#7FD8A8" />
      <path d="m16.5 8.9 2.9 1.6c1 .6 1 1.9 0 2.5l-2.9 1.6L13.9 12l2.6-3.1z" fill="#EAF6EF" />
      <path d="M3.6 2.3c.3-.2.7-.2 1.1 0l11 6.2L13.4 12 3.6 2.3z" fill="#43c637" />
      <path d="M13.4 12l2.3 3.2-11 6.2c-.4.2-.8.2-1.1 0L13.4 12z" fill="#2EA323" />
    </svg>
  );
}

export function WhatsappGlyph({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3a9 9 0 00-7.7 13.6L3 21l4.6-1.2A9 9 0 1012 3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 9.5c0 3.5 2.5 6 6 6 .6 0 1.2-.5 1.2-1.1 0-.3-.7-1-1.2-1.3-.4-.2-.8 0-1 .3-.2.2-.5.3-.8.1-1-.5-1.8-1.3-2.3-2.3-.1-.3 0-.6.2-.8.3-.2.5-.6.3-1-.3-.5-1-1.2-1.3-1.2-.6 0-1.1.6-1.1 1.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WhatsappSolid({ size = 30 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3a9 9 0 00-7.7 13.6L3 21l4.6-1.2A9 9 0 1012 3z" fill="#fff" />
      <path
        d="M8.6 8.9c0 3.6 2.9 6.5 6.5 6.5.6 0 1.3-.6 1.3-1.2 0-.3-.8-1.1-1.3-1.4-.4-.2-.9-.1-1.1.2-.2.3-.6.4-.9.2-1.1-.5-2-1.4-2.5-2.5-.2-.3 0-.7.2-.9.3-.2.4-.7.2-1.1-.3-.6-1.1-1.3-1.4-1.3-.6 0-1.2.7-1.2 1.3z"
        fill="#1F6E54"
      />
    </svg>
  );
}

export function ArrowRight({ size = 17 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Shield({ size = 15, color = "#7FD8A8" }: IconProps & { color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V5l7-3z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
