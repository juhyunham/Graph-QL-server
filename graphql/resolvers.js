import { getMovies } from "./movie_db";

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
  },
};

export default resolvers;
