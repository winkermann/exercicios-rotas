import { Link } from "react-router-dom";
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
            <Link to="/subscription">
              <Button text="Quero participar" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
