import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LoginList } from "./login/LoginList";
import { LoginCreate } from "./login/LoginCreate";
import { LoginEdit } from "./login/LoginEdit";
import { LoginShow } from "./login/LoginShow";
import { DashboardList } from "./dashboard/DashboardList";
import { DashboardCreate } from "./dashboard/DashboardCreate";
import { DashboardEdit } from "./dashboard/DashboardEdit";
import { DashboardShow } from "./dashboard/DashboardShow";
import { PatientList } from "./patient/PatientList";
import { PatientCreate } from "./patient/PatientCreate";
import { PatientEdit } from "./patient/PatientEdit";
import { PatientShow } from "./patient/PatientShow";
import { AboutPageList } from "./aboutPage/AboutPageList";
import { AboutPageCreate } from "./aboutPage/AboutPageCreate";
import { AboutPageEdit } from "./aboutPage/AboutPageEdit";
import { AboutPageShow } from "./aboutPage/AboutPageShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"HealthWebApp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Login"
          list={LoginList}
          edit={LoginEdit}
          create={LoginCreate}
          show={LoginShow}
        />
        <Resource
          name="Dashboard"
          list={DashboardList}
          edit={DashboardEdit}
          create={DashboardCreate}
          show={DashboardShow}
        />
        <Resource
          name="Patient"
          list={PatientList}
          edit={PatientEdit}
          create={PatientCreate}
          show={PatientShow}
        />
        <Resource
          name="AboutPage"
          list={AboutPageList}
          edit={AboutPageEdit}
          create={AboutPageCreate}
          show={AboutPageShow}
        />
      </Admin>
    </div>
  );
};

export default App;
