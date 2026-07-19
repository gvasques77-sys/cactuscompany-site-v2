import Image from "next/image";

type CactusMarkProps = {
  size?: number;
  className?: string;
};

export function CactusMark({ size = 42, className }: CactusMarkProps) {
  return (
    <Image
      src="/images/cactus-icon.png"
      alt=""
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
      draggable={false}
      sizes={`${size}px`}
      style={{ width: size, height: size, borderRadius: Math.round(size * 0.27), display: "block" }}
    />
  );
}
