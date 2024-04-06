import { Button } from "@neo4j-ndl/react";
import st from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
import { APPLICATIONS_ROUTE } from "../../constants/utils/routes";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={st.container}>
      <h1 className={st.heading}>Welcome to kekik!</h1>
      <Button
        className={st.button}
        onClick={() => navigate(APPLICATIONS_ROUTE)}
      >
        View Applications
      </Button>
    </div>
  );
};

export default Home;
