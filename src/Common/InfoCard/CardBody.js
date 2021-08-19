export default function CardBody({ body }) {
  const { title, text } = body;
  return (
    <div className="info-body item-double">
      <div className="info-title ">
        <h2 className="">{title}</h2>
      </div>
      <div className="info-text ">
        <p className="">{text}</p>
      </div>
    </div>
  );
}
