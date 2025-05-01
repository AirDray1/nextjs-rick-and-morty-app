export const getFooterData = async () => {
  let cache: {c_length: number; l_length: number; e_length: number} | null = null;

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

  return cache;
};