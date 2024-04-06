import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import {
  HOME_ROUTE,
  APPLICATIONS_ROUTE,
  PRIVACY_POLICIES_ROUTE,
} from "./constants/utils/routes";
import Applications from "./pages/Applications";
import PrivacyPolicies from "./pages/PrivacyPolicies";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Navigate to={HOME_ROUTE} replace />} />
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route
          path={`${PRIVACY_POLICIES_ROUTE}/:application`}
          element={<PrivacyPolicies />}
        />
        <Route path={APPLICATIONS_ROUTE} element={<Applications />} />
        <Route path="*" element={<Navigate to={HOME_ROUTE} replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
