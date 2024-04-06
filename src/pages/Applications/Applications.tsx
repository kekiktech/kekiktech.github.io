import { Box, Button } from "@neo4j-ndl/react";
import * as st from "./Applications.module.scss";
import { useNavigate } from "react-router-dom";
import { PRIVACY_POLICIES_ROUTE } from "../../constants/utils/routes";
import applications from "../../constants/applications";

const Applications = () => {
  const navigate = useNavigate();

  return (
    <div className={st.container}>
      <h2 className={st.heading}>Applications</h2>
      {applications.map((app) => (
        <Box borderRadius="sm" padding="6" className={st.box}>
          <h5>{app.name}</h5>
          {app.description}
          <Button
            className={st.button}
            onClick={() => navigate(`${PRIVACY_POLICIES_ROUTE}/${app.id}`)}
          >
            View Privacy Policy
          </Button>
        </Box>
      ))}
    </div>
  );
};

export default Applications;
