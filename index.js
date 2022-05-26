const { graphql, buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query {
        users:User
    }

    type User {
        id
        email
        name
        avatarUrl
    }
`);

const rootValue = {
  message: () => "GraphQL works",
};

graphql(
  schema,
  `
    {
      message
    }
  `,
  rootValue
)
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
