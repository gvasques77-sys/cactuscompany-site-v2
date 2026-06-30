type CactusMarkProps = {
  size?: number;
  body?: string;
  showBase?: boolean;
  className?: string;
};

export function CactusMark({
  size = 42,
  body = "#23b63d",
  showBase = true,
  className,
}: CactusMarkProps) {
  const baseOpacity = showBase ? 1 : 0;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="1024" height="1024" rx="224" fill="#F6FBF8" />
      <path
        d="M768 704C704 768 616 804 512 804C344 804 208 668 208 500C208 332 344 196 512 196C616 196 704 232 768 296"
        stroke="#102319"
        strokeWidth="94"
        strokeLinecap="round"
      />
      <rect x="494" y="307" width="104" height="523" rx="52" fill={body} />
      <rect x="402" y="478" width="82" height="214" rx="41" fill={body} />
      <rect x="612" y="418" width="82" height="274" rx="41" fill={body} />
      <rect x="420" y="803" width="256" height="66" rx="33" fill={body} opacity={baseOpacity} />
    </svg>
  );
}
