export default function CardImage({ image }) {
  const { src, alt, href } = image;
  return (
    <div className="info-img accent-border item">
      <a href={href}>
        <img src={src} alt={alt} />
      </a>
    </div>
  );
}
