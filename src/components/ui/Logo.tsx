import Image from "next/image";
import Link from "next/link";

export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 focus:outline-none"
      aria-label="Přejít na úvodní stránku"
    >
      <Image
        src="/brand/logo-stolni tenis.png"
        alt="Aplikace pro stolní tenis"
        width={size}
        height={size}
        priority
        className="shrink-0"
      />
      <div className="leading-tight">
        <div className="text-white font-semibold">Stolní tenis</div>
        <div className="text-brand-100 text-xs opacity-90">Metodika trenérů</div>
      </div>
    </Link>
  );
}
