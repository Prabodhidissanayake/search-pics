import "./App.css";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";

function App() {
  const handlleSubmit = (term) => {
    searchImages(term);
  };
  return (
    <div className="App">
      <SearchBar onSubmit={handlleSubmit} />
    </div>
  );
}

export default App;
