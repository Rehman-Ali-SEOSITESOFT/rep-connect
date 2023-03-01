import Link from "next/link";

export default function Page({ params }) {
  const { slug } = params;

  return (
    <div>
      <h2>Dynmaic Page = {slug}</h2>
      <Link href="/downloadable-sales-material/">Goto Back</Link>
    </div>
  );
}
