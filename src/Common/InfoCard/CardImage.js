export default function CardImage({ image }) {
  const { src, alt, href } = image;

  const deployText = href ? (
    <div className="deploy-screen">
      <div className="deploy-text">Click to View Deployment!</div>
    </div>
  ) : null;

  let divClasses = "info-img accent-border flex-single";
  if (href) divClasses += " deploy-wrap";

  return (
    <a href={href} className={divClasses}>
      <img src={src} alt={alt} />
      {deployText}
    </a>
  );
}
