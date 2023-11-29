import Button from "../../../components/Button";
import Card from "../../../components/Card";

export default function Promotion() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="mt-30 mb-30">
            <Card title="Página de promoção" />
          </div>
          <div className="dflex">
            <Button text="Quero participar" />
          </div>
        </div>
      </section>
    </main>
  );
}