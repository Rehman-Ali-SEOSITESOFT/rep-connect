import Link from "next/link";
import style from "./slug.module.css";
export default function Page({ params }) {
  const { slug } = params;

  return (
    <section className={style.sale__material}>
      <h2>category {slug}</h2>
      <Link href="/downloadable-sales-material/">Goto Back</Link>
    </section>
  );
}
