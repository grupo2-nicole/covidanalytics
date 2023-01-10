import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { Brazil } from "../../components/Brazil";
import { Header } from "../../components/Header";
import { SearchEngine } from "../../components/SearchEngine";
import { UserProfile } from "../../components/UserProfile";
import { DashboardStyles } from "./styles";
import { UserContext } from "../../contexts/UserContext";
import { ChartProvider } from "../../contexts/ChartContext";
import { FavoriteContext } from "../../contexts/FavoriteContext";
import { ModalFavorite } from "../../components/FavoriteModal";

export function Dashboard() {
  const navigate = useNavigate();
  const { logedUser } = useContext(UserContext);
  const { openModal } = useContext(FavoriteContext)
  
  useEffect(() => {
    if(!logedUser.id){
      navigate('/login');
    };   

  }, []);
  
  return (
    <DashboardStyles>
      { openModal && <ModalFavorite/> }
      <Header marginTop="8px" />
      <main>
        <UserProfile />
        <SearchEngine />
        <ChartProvider>
          <Brazil />
        </ChartProvider>
      </main>
    </DashboardStyles>
  );
}
