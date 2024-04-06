import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import {
  HOME_ROUTE,
  APPLICATIONS_ROUTE,
  PRIVACY_POLICIES_ROUTE,
} from "./constants/utils/routes";
import Applications from "./pages/Applications";
import PrivacyPolicies from "./pages/PrivacyPolicies";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Navigate to={HOME_ROUTE} replace />} />
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route
          path={`${PRIVACY_POLICIES_ROUTE}/:application`}
          element={<PrivacyPolicies />}
        />
        <Route path={APPLICATIONS_ROUTE} element={<Applications />} />
        <Route path="*" element={<Navigate to={HOME_ROUTE} replace />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
