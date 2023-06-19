export const apiKey = "3423dd2bedf34760a779ed7b418c69d0";
export const apiUrlGames = "https://api.rawg.io/api/games";
export const apiUrlPlatforms = "https://api.rawg.io/api/platforms";
export const apiUrlPublisher = "https://api.rawg.io/api/publishers";
export const apiGenres = "https://api.rawg.io/api/genres";
export const queryMetacritic = "metacritic=90,100";
export const pageSize = "page_size=200";
export const recentGamesReleases = "dates=2023-05-01,2023-05-31";
// export const screenshots = "screenshots";
// export const id = ":id";
export const search = "search='";

export const apiGameID = `${apiUrlGames}/:id?&key=${apiKey}`;
export const apiGameList = `${apiUrlGames}?${pageSize}&key=${apiKey}`;
export const apiAllGamesMetacritics = `${apiUrlGames}?${queryMetacritic}&${pageSize}&key=${apiKey}`;
export const apiRecentGamesReleases = `${apiUrlGames}?${pageSize}&${recentGamesReleases}&key=${apiKey}`;
export const apiPlatformsList = `${apiUrlPlatforms}?${pageSize}&key=${apiKey}`;
export const apiPublishersList = `${apiUrlPublisher}?${pageSize}&key=${apiKey}`;
export const apiGenresList = `${apiGenres}?${pageSize}&key=${apiKey}`;

export const apiSearch = `${apiUrlGames}?${search}&key=${apiKey}`;

// export const gameScreenshots = `${apiUrlGames}${id}${screenshots}&key=${apiKey}`;
