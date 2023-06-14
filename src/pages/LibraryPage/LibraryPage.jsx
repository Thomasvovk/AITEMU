import Card from "../../components/Card/Card";
import "../LibraryPage/LibraryPage.scss";
import axios from "axios";
import { apiAllGamesMetacritics } from "../Utilities/API";
import { useEffect, useState } from "react";

function LibraryPage() {
  const [allGames, setAllGames] = useState([]);

  useEffect(() => {
    axios.get(apiAllGamesMetacritics).then((response) => {
      setAllGames(response.data.results);
    });
  }, []);

  function openGame(id) {
    console.log(id);
  }

  return (
    <>
      <h1 className="library">Library</h1>
      <div className="library__container">
        <div className="library__filter">
          <select className="library__select" name="genres" id="genres">
            <option className="library__option" value="Genres">
              Genres
            </option>
            <option className="library__option" value="Action">
              Action
            </option>
            <option className="library__option" value="Indie">
              Indie
            </option>
            <option className="library__option" value="Adventure">
              Adventure
            </option>
            <option className="library__option" value="RPG">
              RPG
            </option>
            <option className="library__option" value="Strategy">
              Strategy
            </option>
            <option className="library__option" value="Shooter">
              Shooter
            </option>
            <option className="library__option" value="Casual">
              Casual
            </option>
            <option className="library__option" value="Simulation">
              Simulation
            </option>
            <option className="library__option" value="Puzzle">
              Puzzle
            </option>
            <option className="library__option" value="Puzzle">
              Puzzle
            </option>
            <option className="library__option" value="Arcade">
              Arcade
            </option>
            <option className="library__option" value="Platformer">
              Platformer
            </option>
            <option className="library__option" value="MMORPG">
              MMORPG
            </option>
            <option className="library__option" value="Racing">
              Racing
            </option>
            <option className="library__option" value="Sports">
              Sports
            </option>
            <option className="library__option" value="Fighting">
              Fighting
            </option>
            <option className="library__option" value="Family">
              Family
            </option>
            <option className="library__option" value="Board Games">
              Board Games
            </option>
            <option className="library__option" value="Card">
              Card
            </option>
          </select>

          <select className="library__select" name="publishers" id="publishers">
            <option className="library__option" value="publishers">
              Publishers
            </option>
            <option className="library__option" value="Electronic Arts">
              Electronic Arts
            </option>
            <option className="library__option" value="Ubisoft Entertainment">
              Ubisoft Entertainment
            </option>
            <option className="library__option" value="Microsoft Studios">
              Microsoft Studios
            </option>
            <option className="library__option" value="SEGA">
              SEGA
            </option>
            <option className="library__option" value="2K Games">
              2K Games
            </option>
            <option className="library__option" value="Bethesda Softworks">
              Bethesda Softworks
            </option>
            <option className="library__option" value="Feral Interactive">
              Feral Interactive
            </option>
            <option className="library__option" value="Valve">
              Valve
            </option>
            <option className="library__option" value="Capcom">
              Capcom
            </option>
            <option
              className="library__option"
              value="Sony Computer Entertainment"
            >
              Sony Computer Entertainment
            </option>
            <option
              className="library__option"
              value="Warner Bros. Interactive"
            >
              Warner Bros. Interactive
            </option>
            <option className="library__option" value="THQ Nordic">
              THQ Nordic
            </option>
            <option className="library__option" value="Devolver Digital">
              Devolver Digital
            </option>
            <option className="library__option" value="Activision Blizzard">
              Activision Blizzard
            </option>
            <option
              className="library__option"
              value="Bandai Namco Entertainment"
            >
              Bandai Namco Entertainment
            </option>
            <option className="library__option" value="Nintendo">
              Nintendo
            </option>
            <option className="library__option" value="Rockstar Games">
              Rockstar Games
            </option>
            <option className="library__option" value="505 Games">
              505 Games
            </option>
            <option className="library__option" value="Disney Interactive">
              Disney Interactive
            </option>
            <option className="library__option" value="Konami">
              Konami
            </option>
            <option className="library__option" value="Take Two Interactive">
              Take Two Interactive
            </option>
            <option className="library__option" value="Blizzard Entertainment">
              Blizzard Entertainment
            </option>
            <option className="library__option" value="Majesco Entertainment">
              Majesco Entertainment
            </option>
            <option className="library__option" value="Infogrames">
              Infogrames
            </option>
          </select>

          <select className="library__select" name="platforms" id="platforms">
            <option className="library__option" value="platforms">
              Platfroms
            </option>
            <option className="library__option" value="PC">
              PC
            </option>
            <option className="library__option" value="PlayStation 5">
              PlayStation 5
            </option>
            <option className="library__option" value="PlayStation 4">
              PlayStation 4
            </option>
            <option className="library__option" value="Xbox One">
              Xbox One
            </option>
            <option className="library__option" value="Xbox Series S/X">
              Xbox Series S/X
            </option>
            <option className="library__option" value="Nintendo Switch">
              Nintendo Switch
            </option>
            <option className="library__option" value="iOS">
              iOS
            </option>
            <option className="library__option" value="Android">
              Android
            </option>
            <option className="library__option" value="Nintendo 3DS">
              Nintendo 3DS
            </option>
            <option className="library__option" value="Nintendo DS">
              Nintendo DS
            </option>
            <option className="library__option" value="Nintendo DSi">
              Nintendo DSi
            </option>
            <option className="library__option" value="macOS">
              macOS
            </option>
            <option className="library__option" value="Linux">
              Linux
            </option>
            <option className="library__option" value="Xbox 360">
              Xbox 360
            </option>
            <option className="library__option" value="PlayStation 3">
              PlayStation 3
            </option>
            <option className="library__option" value="PlayStation 2">
              PlayStation 2
            </option>
            <option className="library__option" value="PlayStation">
              PlayStation
            </option>
            <option className="library__option" value="PS Vita">
              PS Vita
            </option>
            <option className="library__option" value="PSP">
              PSP
            </option>
            <option className="library__option" value="Wii U">
              Wii U
            </option>
            <option className="library__option" value="Wii">
              Wii
            </option>
            <option className="library__option" value="Game Boy">
              Game Boy
            </option>
            <option className="library__option" value="Web">
              Web
            </option>
          </select>
        </div>
        <button className="library__button">Show</button>
      </div>
      <div className="library__games">
        {allGames.map((item) => {
          return (
            <Card
              name={item.name}
              image={item.background_image}
              id={item.id}
              open={openGame}
            />
          );
        })}
      </div>
    </>
  );
}

export default LibraryPage;
