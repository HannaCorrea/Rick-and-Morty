import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./detailCharacter.css";

function DetailCharacter() {
  const params = useParams();
  const [character, setCharacter] = useState();

  async function getDetailsCharacter() {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${params.characterId}`
    );
    const data = await response.json();

    setCharacter(data);
  }

  console.log(character);

  useEffect(function () {
    getDetailsCharacter();
  }, []);

  return character ? (
    <main className="character-details-container">
      <img className="character-image" src={character.image} alt="/" />
      <div className="character-detail-description-principal">
        <h1 className="character-name">{character.name}</h1>
        <div className="character-detail-description">
          <h3 className="character-gender">
            Gender <span>{character.gender}</span>
          </h3>
          <h3 className="character-origin">
            Origin <span>{character.origin.name}</span>
          </h3>
          <h3 className="character-location">
            Location <span>{character.location.name}</span>
          </h3>
          <h3 className="character-specie">
            Species <span>{character.species}</span>
          </h3>
          <h3 className="character-status">
            Status <span>{character.status}</span>
          </h3>
        </div>
      </div>
    </main>
  ) : null;
}

export default DetailCharacter;
