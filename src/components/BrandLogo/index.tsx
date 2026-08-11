type BrandLogoProps = {
  name: string;
  alt?: string;
  size?: number;
};

export default function BrandLogo({
  name,
  alt,
  size = 48,
}: BrandLogoProps) {
  return (
    <img
      src={`https://cdn.simpleicons.org/${name}`}
      alt={alt ?? `${name} logo`}
      width={size}
      height={size}
      loading="lazy"
    />
  );
}