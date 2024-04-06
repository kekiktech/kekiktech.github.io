import { Box } from "@neo4j-ndl/react";
import * as st from "./PrivacyPolicies.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import privacyPolicies from "../../constants/privacyPolicies";
import { useEffect, useState } from "react";
import { HOME_ROUTE } from "../../constants/utils/routes";

const PrivacyPolicies = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { application } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!application || !privacyPolicies[application]) {
      navigate(HOME_ROUTE);
    } else {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className={st.container}>
      {isLoaded && (
        <Box borderRadius="sm" padding="6" className={st.box}>
          <h5>Privacy Policy</h5>
          {application && privacyPolicies[application]}
        </Box>
      )}
    </div>
  );
};

export default PrivacyPolicies;
