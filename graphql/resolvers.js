import { getMovies } from "./movie_db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
  },
};

export default resolvers;
