export default function LoadingMessage({ itemToLoad }) {
  return (
    <div className="buffer-circle">
      <span className="">Now Loading {itemToLoad}...</span>
    </div>
  );
}
