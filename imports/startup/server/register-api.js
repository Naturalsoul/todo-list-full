import { createApolloServer } from "meteor/apollo"
import { makeExecutableSchema } from "graphql-tools"
import merge from "lodash/merge"

import ResolutionSchema from "../../api/resolutions/Resolution.graphql"
import UsersSchema from "../../api/users/User.graphql"
import GoalsSchema from "../../api/goals/Goal.graphql"
import ResolutionResolvers from "../../api/resolutions/resolvers"
import UserResolvers from "../../api/users/resolvers"
import GoalResolvers from "../../api/goals/resolvers"


// aasdsasasasdasd

const typeDefs = [
    ResolutionSchema,
    UsersSchema,
    GoalsSchema
]

const resolvers = merge(ResolutionResolvers, UserResolvers, GoalResolvers)

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

createApolloServer({ schema })