import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

export function Pizza() {
  // Gráfico de pizza
  const dataPie = {
    datasets: [
      {
        // Dados
        data: [10, 20, 30],
        // Cores
        backgroundColor: ["red", "blue", "yellow"],
      },
    ],
    // Valores
    labels: ["Red", "Yellow", "Blue"],
  };
  return <Pie data={dataPie} />;
}
