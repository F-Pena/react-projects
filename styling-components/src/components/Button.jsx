export default function Button({ children, ...props }) {
  return <button {...props} className="font-semibold uppercase rounded-md px-4 py-2 text-stone-900 bg-amber-400 hover:bg-amber-500">{children}</button>;
}