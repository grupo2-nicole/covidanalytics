import Linha from "./graphs/linha";
import { Pizza } from "./graphs/pizza";


export function Test() {
  return (
    <div className="App" style={{ width: "25%", height: "25%" }}>
      <Pizza />
      <Linha />
    </div>
  );
}
