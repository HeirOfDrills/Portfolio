import CardBody from "./CardBody";
import CardImage from "./CardImage";
import "./InfoCard.css";

export default function InfoCard({ card }) {
  const { type, image, body, flip = false } = card;

  const content = [<CardImage image={image} />, <CardBody body={body} />];

  if (flip) content.push(content.shift()); //If it's a flipped card, the image happens after the body

  return (
    <section id={type} className="">
      <div className="info-card accent-border group ">{content}</div>
    </section>
  );
}
