export default function CardBody({ body }) {
  const { title, text, frontend_repo = null, backend_repo = null } = body;

  const links = [];
  if (frontend_repo)
    links.push(
      <p key={links.length + 1}>
        [ <a href={frontend_repo}>Frontend Source Code</a> ]
      </p>
    );

  if (backend_repo)
    links.push(
      <p key={links.length + 1}>
        [ <a href={backend_repo}>Backend Source Code</a> ]
      </p>
    );

  let divClasses = "info-body";
  if (!links.length) divClasses += " flex-double";
  else divClasses += " flex-single";

  // If text isn't an object, map through each line of text as it's own paragraph
  const textLines =
    typeof text !== "object"
      ? text.split("\n").map((line, key) => {
          return <p key={key}>{line}</p>;
        })
      : // If it is an object, then we will assume it is already JSX
        text;

  return (
    <div className={divClasses}>
      <div className="info-title">
        <h2 className="">{title}</h2>
      </div>
      <div className="info-text-wrapper">
        <div className="info-text ">
          {textLines}
          {links}
        </div>
      </div>
    </div>
  );
}
