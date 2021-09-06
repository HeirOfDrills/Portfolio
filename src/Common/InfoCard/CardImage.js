export default function CardImage({ image }) {
  const { src, alt, href } = image;

  let divClasses = "info-img accent-border item";
  if (href) divClasses += " deploy-wrap";

  const deployText = href ? (
    <div className="deploy-screen">
      <div className="deploy-text">Click to View Deployment!</div>
    </div>
  ) : null;

  return (
    <a href={href} className={divClasses}>
      <img src={src} alt={alt} />
      {deployText}
    </a>
  );
}
