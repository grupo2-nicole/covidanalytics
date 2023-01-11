import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer/TableContainer";
import TableRow from "@mui/material/TableRow";
import { useContext, useEffect, useState } from "react";
import { ChartContext } from "../../contexts/ChartContext";
import { SearchContext } from "../../contexts/SearchContext";
import { LineChart } from "../Graphs/Line";
import { PieChart } from "../Graphs/Pie";

export function BrazilModal() {
  const {
    brazilCases,
    findHistoryCasesState,
    showPercentageProportionalCasesState,
    showPercentageProportionalDeathsState,
  } = useContext(ChartContext);
  const [show, setShow] = useState(false);
  const { states } = useContext(SearchContext);
  useEffect(() => {
    if (brazilCases) {
      setShow(true);
    }
  }, [brazilCases]);

  const numberPopulation: number[] = states.map(
    (info, index) =>
      (info.percentageCases = showPercentageProportionalCasesState(info))
  );

  const numberPopulationDeaths: number[] = states.map(
    (info, index) =>
      (info.percentageDeaths = showPercentageProportionalDeathsState(info))
  );
  console.log(numberPopulationDeaths);

  numberPopulation.sort((n1: number, n2: number) => n1 - n2);
  numberPopulationDeaths.sort((n1: number, n2: number) => n1 - n2);
  return (
    <section>
      teste
      {show && (
        <LineChart
          title="Números de casos Brasil"
          labels={brazilCases.map(({ day }) => day)}
          info={[
            {
              data: brazilCases.map(({ total }) => total),
              label: "Casos",
            },
          ]}
        />
      )}
      {show &&
        states.map((state, index) => (
          <LineChart
            key={index}
            title={state.state}
            labels={findHistoryCasesState(state.uf).map(({ day }) => day)}
            info={[
              {
                data: findHistoryCasesState(state.uf).map(({ total }) => total),
                label: "Casos",
              },
            ]}
          />
        ))}
      <h1>Número proporcional de casos por estados</h1>
      <TableContainer>
        <Table>
          <TableBody>
            {states.map((info, index) => (
              <TableRow key={index}>
                <TableCell>{info.state}</TableCell>
                <TableCell align="right">
                  {(
                    showPercentageProportionalCasesState(info)?.toFixed(2) + ""
                  ).replace(".", ",")}
                  %
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h1>Número proporcional de mortes por estados</h1>
      <TableContainer>
        <Table>
          <TableBody>
            {states.map((info, index) => (
              <TableRow key={index}>
                <TableCell>{info.state}</TableCell>
                <TableCell align="right">
                  {(
                    showPercentageProportionalDeathsState(info)?.toFixed(2) + ""
                  ).replace(".", ",")}
                  %
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <PieChart
        title="Mortos absolutos"
        labels={states.map(({ state }) => state)}
        values={states.map(({ deaths }) => deaths)}
      />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <PieChart
        title="Casos absolutos"
        labels={states.map(({ state }) => state)}
        values={states.map(({ cases }) => cases)}
      />
    </section>
  );
}
