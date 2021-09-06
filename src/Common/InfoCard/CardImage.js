export default function CardImage({ image }) {
  const { src, alt, href } = image;

  let divClasses = "info-img accent-border item";
  if (href) divClasses += " deploy-wrap";

  const deployText = href ? (
    <div className="deploy-text">Click to View Deployment!</div>
  ) : null;

  return (
    <div className={divClasses}>
      <a href={href}>
        <img src={src} alt={alt} />
        {deployText}
      </a>
    </div>
  );
}
