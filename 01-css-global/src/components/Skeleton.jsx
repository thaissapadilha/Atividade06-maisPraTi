export default function Skeleton({ type }) {
  if (type === "card") {
    return (
      <div className="card">
        <div className="card-img skeleton"></div>
        <div className="card-content">
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-btn"></div>
        </div>
      </div>
    );
  }

  return <div className="skeleton"></div>;
}
