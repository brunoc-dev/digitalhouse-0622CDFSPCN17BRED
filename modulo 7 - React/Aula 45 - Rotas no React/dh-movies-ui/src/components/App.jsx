import SideBar from "./SideBar";
import { ContentWrapper } from "./ContentWrapper";
import '../assets/css/app.css'
import { Route, Routes } from "react-router-dom";
import LastMovieInDb from "./LastMovieInDb";
import GenresInDb from "./GenresInDb";
import ContentTop from "./ContentTop";

function App() {
  return (
    <div id="wrapper">
      <SideBar />

      <Routes>
        <Route path="/" exact Component={ContentWrapper} />
        <Route path="/lastMovieInDb" Component={LastMovieInDb} />
        <Route path="/genresInDb" Component={GenresInDb} />
        <Route path="/info" Component={ContentTop} />
      </Routes>
    </div>
  );
}

export default App;
