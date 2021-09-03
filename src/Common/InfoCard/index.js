import CardBody from "./CardBody";
import CardImage from "./CardImage";
import "./InfoCard.css";

export default function InfoCard({ card }) {
  const { type, image, body, flip = false } = card;

  const content = [
    <CardImage key="card-image" image={image} />,
    <CardBody key="card-body" body={body} />,
  ];

  // All cards have these basic CSS rules
  let styles = `info-card accent-border`;

  // Adds the flipped class and lets flexbox handle content mirroring
  if (flip) styles += ` flipped`;

  // if it's a project card, it has different CSS display rules
  if (type.includes("project")) styles += ` project`;

  return (
    <section id={type} className="">
      <div className={styles}>{content}</div>
    </section>
  );
}
