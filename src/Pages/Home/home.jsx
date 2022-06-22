import SearchBar from "../../Components/SearchBar/searchBar.jsx";
import Locations from "../../Assets/ubicaciones.jpg";
import Episodes from "../../Assets/episodios.jpg";
import AccordionCharacters from "../../Components/AccordionCharacters/accordionCharacters.jsx";
import "./home.css";

function Home() {
  return (
    <main>
      <SearchBar />
      <AccordionCharacters />
      <section className="principal-options-container">
        <div className="options-container">
          <img src={Locations} alt="" />
          <button>
            <h2 className="button-title">
              UBICACIONES <i className="fas fa-angle-down"></i>
            </h2>
          </button>
          <section></section>
        </div>
        <div className="options-container">
          <img src={Episodes} alt="" />
          <button>
            <h2 className="button-title">
              EPISODIOS <i className="fas fa-angle-down"></i>
            </h2>
          </button>
        </div>
      </section>
    </main>
  );
}

export default Home;
