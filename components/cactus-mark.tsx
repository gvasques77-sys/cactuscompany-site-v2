type CactusMarkProps = {
  size?: number;
  className?: string;
  /** Cor do corpo do cacto */
  body?: string;
  /** Cor da base/vaso */
  base?: string;
  /** Exibe a base/vaso sob o cacto */
  showBase?: boolean;
};

/**
 * Marca Saguaro — o logotipo geométrico da Cactus Company.
 * Cacto construído com cápsulas: tronco central + dois braços + base.
 */
export function CactusMark({
  size = 40,
  className,
  body = "#7fd8a8",
  base = "#1f6e54",
  showBase = true,
}: CactusMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g fill={body}>
        <rect x="20.5" y="6" width="7" height="34" rx="3.5" />
        <rect x="10" y="20" width="6" height="16" rx="3" />
        <rect x="10" y="20" width="13" height="6" rx="3" />
        <rect x="32" y="15" width="6" height="21" rx="3" />
        <rect x="25" y="15" width="13" height="6" rx="3" />
      </g>
      {showBase ? <rect x="16" y="39" width="16" height="5" rx="2.5" fill={base} /> : null}
    </svg>
  );
}
