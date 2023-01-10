import Linha from "./graphs/Line";
import { Pizza } from "./graphs/Pie";

export function Test() {
  const arr = [
    {
      label: "Gráfico 1",
      data: [15, 25, 15],
    },
    {
      label: "Gráfico 2",
      data: [105, 25, 15],
    },
  ];

  return (
    <div className="App" style={{ width: "25%", height: "25%" }}>
      <Pizza
        values={[15, 25, 15]}
        labels={["Red", "Yellow", "Blue"]}
        title="Casos"
      />
      <Linha info={arr} labels={["Red", "Yellow", "Blue"]} title="Mortes" />
    </div>
  );
}
