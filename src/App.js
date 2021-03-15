import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
      <Router>
          <div className="App">
            <Header />
            <Layout>
              <Switch>
                  <Route path="/">
                      <Dashboard/>
                  </Route>
              </Switch>
            </Layout>
        </div>
      </Router>
  );
}

export default App;
