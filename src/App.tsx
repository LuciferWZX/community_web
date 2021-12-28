import React, { FC } from "react";
import "@pages/home";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "@pages/home";
import Layouts from "@layouts/index";
import MainLayout from "@layouts/MainLayout";
import Message from "@pages/message";
import UserLayout from "@layouts/UserLayout";
import Login from "@pages/user/login";
const App: FC = () => {
  return (
    <Router>
      <Route
        path={"/"}
        component={() => {
          return (
            <Layouts>
              <Switch>
                <Route
                  path={"/main"}
                  component={(props: any) => {
                    const prefix = props?.match?.path;
                    return (
                      <MainLayout>
                        <Switch>
                          <Route path={`${prefix}/home`} component={Home} />
                          <Route
                            path={`${prefix}/message`}
                            component={Message}
                          />
                          <Redirect exact to={`${prefix}/home`} />
                        </Switch>
                      </MainLayout>
                    );
                  }}
                />
                <Route
                  path={"/user"}
                  component={(props: any) => {
                    const prefix = props?.match?.path;
                    return (
                      <UserLayout>
                        <Switch>
                          <Route path={`${prefix}/login`} component={Login} />
                          <Redirect exact to={`${prefix}/login`} />
                        </Switch>
                      </UserLayout>
                    );
                  }}
                />
                <Redirect exact to="/main/home" />
              </Switch>
            </Layouts>
          );
        }}
      />
    </Router>
  );
};

export default App;
