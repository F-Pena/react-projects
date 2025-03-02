'use client';

export default function Error({ error }) {
  return <>
  <div className="error">
    <h1>An error occurred!</h1>
    <p>
      Failed to fetch meal data.
    </p>
  </div>
  </>;
}