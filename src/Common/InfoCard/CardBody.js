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

  return (
    <div className={divClasses}>
      <div className="info-title">
        <h2 className="">{title}</h2>
      </div>
      <div className="info-text ">
        {text}
        {links}
      </div>
    </div>
  );
}
