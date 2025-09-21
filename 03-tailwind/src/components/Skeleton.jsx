export function Skeleton({ className }) {
  return (
    <div
      className={`animate-pulse bg-surface/60 ${className || ""}`}
      role="status"
      aria-hidden="true"
    ></div>
  );
}
