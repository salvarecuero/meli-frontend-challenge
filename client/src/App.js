import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import ItemDetails from "./pages/ItemDetails";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route strict path="/items/:id" component={ItemDetails}></Route>
          <Route path="/items" component={SearchResults}></Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
