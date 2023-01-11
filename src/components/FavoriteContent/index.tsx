import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { useContext } from "react";
import { FavoriteContext } from "../../contexts/FavoriteContext";
import { FavoriteStyle } from "./style";
import x from '../../assets/x.png'
import { SearchContext } from "../../contexts/SearchContext";
import Button from "@mui/material/Button";
import { WhatsappShareButton, WhatsappIcon } from "react-share"


export function FavoriteContent(){
    const { dataModal,setOpenModal,deleteFavoriteId } = useContext(FavoriteContext);
    const { findMapImg } = useContext(SearchContext);
    
    return(
        <FavoriteStyle>
           <button onClick={()=>setOpenModal(false)}><img src={x} alt="close button" /></button>
           <h2>{dataModal[0].data.state}</h2>
           <section>
            <div className="div_text">
                <TableContainer>
                    <Table>
                    <TableBody>
                        <TableRow key={Math.random()}>
                            <TableCell>Suspeitos</TableCell>
                            <TableCell align="right">{dataModal[0].data.suspects}</TableCell>
                        </TableRow>
                        <TableRow key={Math.random()}>
                            <TableCell>Mortes</TableCell>
                            <TableCell align="right">{dataModal[0].data.deaths}</TableCell>
                        </TableRow>
                        <TableRow key={Math.random()}>
                            <TableCell>Casos</TableCell>
                            <TableCell align="right">{dataModal[0].data.cases}</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                </TableContainer>
                <WhatsappShareButton url={`
                Dados atualizados do COVID em ${dataModal[0].data.state}:
                ❓ SUSPEITOS => ${dataModal[0].data.suspects} 
                🦠 CASOS => ${dataModal[0].data.cases} 
                ☠️ MORTES => ${dataModal[0].data.deaths}
                `} >
                    <div className="iconContainer">
                        <WhatsappIcon round size={"36px"} />
                    </div>
                </WhatsappShareButton>
                <Button variant="contained" onClick={()=>deleteFavoriteId(dataModal[0].id)}>Excluir</Button>
            </div>
            <img src={findMapImg(dataModal[0].data.uf)} alt="estado brasileiro" />
           </section>
        </FavoriteStyle>
    )
}