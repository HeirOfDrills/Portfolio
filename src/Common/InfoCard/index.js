import CardBody from "./CardBody";
import CardImage from "./CardImage";
import "./InfoCard.css";

export default function InfoCard({ card }) {
  const { type, image, body } = card;
  return (
    <section id={type} className="">
      <div className="info-card accent-border group ">
        <CardImage image={image} />
        <CardBody body={body} />
      </div>
    </section>
  );
}
