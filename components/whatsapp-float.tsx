import { waLink } from "@/components/company-data";
import { WhatsappSolid } from "@/components/icons";

export function WhatsappFloat() {
  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="wa-float"
    >
      <WhatsappSolid size={30} />
    </a>
  );
}
