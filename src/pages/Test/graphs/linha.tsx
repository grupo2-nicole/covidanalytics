import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

function Linha() {

  const data = {
    // Valores do gráfico
    labels: ["Red", "Yellow", "Blue"],
    datasets: [
      {
        // Título do gráfico
        label: "Gráfico de linha",
        // Dados do gráfico
        data: [10, 20, 30],
        // Cor em baixo da linha
        backgroundColor: "rgba(0,255,0,0.2)",
        // Cor da linha
        borderColor: "green",
        // Curvas da linha
        tension: 0.3,
        // Habilita cor em baixo da linha?
        fill: true,
        // Ponto das labels: https://www.chartjs.org/docs/latest/samples/line/point-styling.html
        pointStyle: "rectRot",
        // Cor da borda do point
        pointBorderColor: "blue",
        // Cor do point
        pointBackgroundColor: "#fff",
        // Linha visível?
        showLine: true,
        // Estilo Dashed
        borderDash: [5, 5],
      },
      // Mais de um dataset
      {
        label: "Gráfico de linha 2",
        data: [15, 25, 15],
        backgroundColor: "rgba(255,0,0,0.2)",
        borderColor: "red",
        tension: 0.3,
        fill: true,
        pointStyle: "rectRounded",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  };
  return <Line data={data} />;
}

export default Linha;
