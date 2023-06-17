import "../NewReleasesPage/NewReleasesPage.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiRecentGamesReleases } from "../Utilities/API";
import Card from "../../components/Card/Card";
import axios from "axios";

function NewReleasesPage() {
  const [newReleases, setnewReleases] = useState([]);
  const arr = [];

  useEffect(() => {
    axios.get(apiRecentGamesReleases).then((response) => {
      arr.push(response.data.results);
      setnewReleases(response.data.results);
    });
  }, []);

  console.log(newReleases);

  return (
    <>
      <h1 className="home__buttom-title">New Releases</h1>
      <div className="home__games">
        {newReleases.map((item) => {
          return (
            <Link to={`/new-releases`}>
              <Card
                name={item.name}
                image={item.background_image}
                // id={item.id}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default NewReleasesPage;
