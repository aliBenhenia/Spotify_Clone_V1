import Header from "./components/header/Header";
import Nav from "./components/navbar/Nav";
import Home from "./components/home/Home";
import GlobalStyle from "./global_styles"
import ProviderContext from "./context/Provider"
function App() {
  return (
    <div className="App">
      <ProviderContext>
          <GlobalStyle />
          <Header />
          <div className = "row">
              <Nav grid = "col-md-2"/>
              <Home grid = "col-md-10"/>
          </div>
      </ProviderContext>
    </div>
  );
}

export default App;
