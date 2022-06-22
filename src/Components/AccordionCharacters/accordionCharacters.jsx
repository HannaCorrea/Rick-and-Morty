import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import charactersBanner from "../../Assets/personajes.jpg";

function AccordionCharacters() {
  const [characters, setCharacters] = useState();
  const [accordion, setAccordion] = useState(true);

  function handleAccordion() {
    setAccordion(!accordion);
  }

  async function getCharacters() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    setCharacters(data.results);
  }

  useEffect(function () {
    getCharacters();
  }, []);

  return (
    <div className="options-container">
      <div className="option-container-desktop">
        <img src={charactersBanner} alt="" />
        <button onClick={handleAccordion}>
          <h2 className="button-title">
            PERSONAJES
            <i
              className={
                accordion === true ? "fas fa-chevron-up" : "fas fa-angle-down"
              }
            ></i>
          </h2>
        </button>
      </div>
      <section
        className={`characters-container
              ${accordion === true ? "characters-container---active" : ""}
            `}
      >
        {characters?.map(function (character) {
          return (
            <div className="contenedor" key={character.id}>
              <Link
                to={`/character/${character.id}`}
                className="characters-names"
              >
                <img src={character.image} alt="" />
                <h2>{character.name}</h2>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default AccordionCharacters;
