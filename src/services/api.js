const getApiData = (results) => {
  return fetch(
    `https://owen-wilson-wow-api.herokuapp.com/wows/random?results=${results}`
  )
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((movie, index) => {
        console.log(movie.video);
        return {
          id: index,
          poster: movie.poster,
          name: movie.movie,
          quote: movie.full_line,
          year: movie.year.toString(),
          director: movie.director,
          audio: movie.audio,
          video: movie.video['720p'],
        };
      });
      return dataClean;
    });
};
export default getApiData;
