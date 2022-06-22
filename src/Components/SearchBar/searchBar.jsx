import Image2 from "../../Assets/img2.jpg";
import "./searchBar.css";

function SearchBar() {
  return (
    <section className="principal-search-container">
      <h1 className="principal-title">Rick and Morty</h1>
      <img className="search-container-image" src={Image2} alt="" />
      <form className="search-form-container" action="">
        <input type="text" />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
