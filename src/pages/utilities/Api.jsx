export const apiKey = "fd5e01bfaeee4bcc905db6d589957270";
export const apiUrlGames = "https://api.rawg.io/api/games";
export const apiUrlPlatforms = "https://api.rawg.io/api/platforms";
export const apiUrlPublisher = "https://api.rawg.io/api/publishers";
export const queryMetacritic = "metacritic=90-100";
export const pageSize = "page_size=50";

export const apiAllGamesMetacritics = `${apiUrlGames}?${queryMetacritic}&${pageSize}&key=${apiKey}`;
export const apiAllPlatforms = `${apiUrlPlatforms}?key=${apiKey}`;
export const apiAllPublishers = `${apiUrlPublisher}?key=${apiKey}`;
