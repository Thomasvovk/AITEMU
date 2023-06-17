export const apiKey = "35a4c87e8d814732916ac9e38857a151";
export const apiUrlGames = "https://api.rawg.io/api/games";
export const apiUrlPlatforms = "https://api.rawg.io/api/platforms";
export const apiUrlPublisher = "https://api.rawg.io/api/publishers";
export const queryMetacritic = "metacritic=90-100";
export const pageSize = "page_size=50";
export const recentGamesReleases = "dates=30days";

export const apiGameID = `${apiUrlGames}/:id?&key=${apiKey}`;
export const apiAllGamesMetacritics = `${apiUrlGames}?${queryMetacritic}&${pageSize}&key=${apiKey}`;
export const apiRecentGamesReleases = `${apiUrlGames}?${recentGamesReleases}&key=${apiKey}`;
export const apiAllPlatforms = `${apiUrlPlatforms}?key=${apiKey}`;
export const apiAllPublishers = `${apiUrlPublisher}?key=${apiKey}`;

export const apiPlatforms = `${apiUrlPlatforms}?${pageSize}$key=${apiKey}`;
