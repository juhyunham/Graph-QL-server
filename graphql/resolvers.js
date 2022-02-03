import { getMovies, getById, addMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMoive: (_, { name, scroe }) => addMovie(name, score),
  },
};

export default resolvers;
