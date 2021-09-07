import "./LoadingMessage.css";
export default function LoadingMessage({ itemToLoad = null }) {
  return <p className="loader">Now Loading {itemToLoad}...</p>;
}
