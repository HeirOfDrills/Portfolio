export default function CardImage({ image }) {
  const { src, alt } = image;
  return (
    <div className="info-img accent-border item">
      <img src={src} alt={alt} />
    </div>
  );
}
