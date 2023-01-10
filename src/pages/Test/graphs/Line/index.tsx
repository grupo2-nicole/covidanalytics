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
import { iLine } from "../types";
import { generateColors } from "../../../../functions/reusable";
import { TitleChartStyle } from "../styles";
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

function Linha({ info, labels, title }: iLine) {
  const data = {
    labels: labels,
    datasets: info.map((el) => {
      el.backgroundColor = generateColors().colorA;
      el.borderColor = generateColors().color;
      el.tension = 0.3;
      el.fill = true;
      el.showLine = true;
      return el;
    }),
  };

  return (
    <div>
      <TitleChartStyle>{title}</TitleChartStyle>
      <Line data={data} />;
    </div>
  );
}

export default Linha;
