let cache: any = null;
let lastFetched = 0;

export const getFooterData = async () => {
  const now = Date.now();
  const cacheDuration = 1000 * 60 * 10; // 10 хвилин

  if (cache && now - lastFetched < cacheDuration) {
    return cache;
  }

  const [characterRes, locationRes, episodeRes] = await Promise.all([
    fetch("https://rickandmortyapi.com/api/character"),
    fetch("https://rickandmortyapi.com/api/location"),
    fetch("https://rickandmortyapi.com/api/episode"),
  ]);

  const [characterData, locationData, episodeData] = await Promise.all([
    characterRes.json(),
    locationRes.json(),
    episodeRes.json(),
  ]);

  cache = {
    c_length: characterData.info.count,
    l_length: locationData.info.count,
    e_length: episodeData.info.count,
  };

  lastFetched = now;

  return cache;
};