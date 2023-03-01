export default function Page({ params }) {
  const { slug } = params;

  return (
    <div>
      <h2>Dynmaic Page = {slug}</h2>
    </div>
  );
}
