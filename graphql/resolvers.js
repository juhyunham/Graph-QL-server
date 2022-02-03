const ham = {
  name: "hamjuhyun",
  age: 30,
  gender: "female",
};

const resolvers = {
  Query: {
    person: () => ham,
  },
};

export default resolvers;
