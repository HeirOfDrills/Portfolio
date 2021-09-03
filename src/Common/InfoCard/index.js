import CardBody from "./CardBody";
import CardImage from "./CardImage";
import "./InfoCard.css";

export default function InfoCard({ card }) {
  const { type, image, body, flip = false } = card;

  const content = [
    <CardImage key="card-image" image={image} />,
    <CardBody key="card-body" body={body} />,
  ];

  let className = `info-card accent-border`;
  if (flip) {
    content.push(content.shift()); // If it's a flipped card, the image happens after the body
    className += ` flipped`; // and add the flipped class
  }

  // This allows us to make sure that project cards have a 1:1 flex layout instead of the 1:2 of other cards
  if (type.includes("project")) {
    className += ` project`;
  }

  return (
    <section id={type} className="">
      <div className={className}>{content}</div>
    </section>
  );
}
