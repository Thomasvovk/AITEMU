export const apiKey = "3423dd2bedf34760a779ed7b418c69d0";
export const apiUrlGames = "https://api.rawg.io/api/games";
export const apiUrlPlatforms = "https://api.rawg.io/api/platforms";
export const apiUrlPublisher = "https://api.rawg.io/api/publishers";
export const queryMetacritic = "metacritic=90-100";
export const pageSize = "page_size=50";
export const recentGamesReleases = "dates=2023-05-01,2023-05-31";
export const apiGameList = `${apiUrlGames}?key=${apiKey}`;

export const apiGameID = `${apiUrlGames}/:id?&key=${apiKey}`;
export const apiAllGamesMetacritics = `${apiUrlGames}?${queryMetacritic}&${pageSize}&key=${apiKey}`;
export const apiRecentGamesReleases = `${apiUrlGames}?${recentGamesReleases}&key=${apiKey}`;
export const apiAllPlatforms = `${apiUrlPlatforms}?key=${apiKey}`;
export const apiAllPublishers = `${apiUrlPublisher}?key=${apiKey}`;
export const apiPlatforms = `${apiUrlPlatforms}?${pageSize}$key=${apiKey}`;
