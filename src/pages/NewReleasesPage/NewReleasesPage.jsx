import "../NewReleasesPage/NewReleasesPage.scss";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import axios from "axios";
import { apiRecentGamesReleases } from "../utilities/API";

function NewReleasesPage() {
  // const [recentGames, setRecentGames] = useState ([]);

  // useEffect(()=> {
  //     axios
  //     .get(apiRecentGamesReleases)
  //     .then((response) => {
  //         setRecentGames(response.data)
  //     })
  // })

  return (
    <>
      <h1 className="new-release">New Releases </h1>
    </>
  );
}

export default NewReleasesPage;
