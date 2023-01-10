import { useContext, useEffect, useState } from "react";
import { ChartContext } from "../../contexts/ChartContext";
import { LineChart } from "../Graphs/Line";

export function BrazilModal() {
    const { brazilCases } = useContext(ChartContext);
    const [show, setShow] = useState(false); 
    const [brazilCasesState, setBrazilCasesState] = useState()

    useEffect(() => {
        if (brazilCases) {
            setShow(true);
        }
    }, [brazilCases])

    return (
        <section>
            teste
            {
                show && <LineChart 
                            title="Números de casos Brasil"
                            labels={brazilCases.map(({day}) => day)}
                            info={[{
                                data: brazilCases.map(({total}) => total),
                                label: "Casos",
                            }]}
                        />
            }
        </section>
    );
}