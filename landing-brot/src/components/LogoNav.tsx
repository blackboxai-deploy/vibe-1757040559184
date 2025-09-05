import logoImage from "@/assets/images/LogoNav.png";

const LogoNav = ({
  className = "",
  isScrolled = false,
  height = 48,
  src,
  disableBlend = false,
}: {
  className?: string;
  isScrolled?: boolean;
  height?: number | string; // px number or any valid CSS size
  src?: string; // allow overriding image source (e.g., transparent PNG/SVG)
  disableBlend?: boolean; // disable blend effect over hero
}) => {
  return (
    <img
      src={src || logoImage}
      alt="Panadería Brot"
      className={`w-auto object-contain ${className} ${
        !isScrolled && !disableBlend
          ? 'drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] mix-blend-multiply'
          : ''
      }`}
      style={{ height: typeof height === 'number' ? `${height}px` : height }}
      loading="lazy"
    />
  );
};

export default LogoNav;