export default function CardBody({ body }) {
  const { title, text, frontend_repo = null, backend_repo = null } = body;

  const links = [];
  if (frontend_repo)
    links.push(
      <p key={links.length + 1}>
        <a href={frontend_repo}>View Frontend Source Code</a>
      </p>
    );

  if (backend_repo)
    links.push(
      <p key={links.length + 1}>
        <a href={backend_repo}>View Backend Source Code</a>
      </p>
    );

  return (
    <div className="info-body item-double">
      <div className="info-title ">
        <h2 className="">{title}</h2>
      </div>
      <div className="info-text ">
        {text}
        {links}
      </div>
    </div>
  );
}
