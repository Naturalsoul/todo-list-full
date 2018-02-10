import { createApolloServer } from "meteor/apollo"
import { makeExecutableSchema } from "graphql-tools"


import ResolutionSchema from "../../api/resolutions/Resolution.graphql"

const testSchema = `
type Query {
    hi: String
    resolutions: [Resolution]
}
`

const typeDefs = [
    testSchema,
    ResolutionSchema
]

const resolvers = {
    Query: {
        hi() {
            return "Hello World!";
        },
        
        resolutions() {
            return [
                {
                    _id: "asdf",
                    name: "Nombre :D!"
                }
            ]
        }
    }
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

createApolloServer({ schema })