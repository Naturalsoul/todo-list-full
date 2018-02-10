import Goals from "./goals"

export default {
    Mutation: {
        createGoal (obj, { name, resolutionId }) {
            const goalId = Goals.insert({
                name,
                resolutionId,
                completed: false
            })

            return Goals.findOne(goalId)
        },

        toggleGoal (obj, { _id }) {
            const goal = Goals.findOne(_id)

            Goals.update(_id, {
                $set: {
                    completed: !goal.completed
                }
            })

            goal.completed = !goal.completed

            return goal
        },

        removeGoal (obj, { _id }) {
            const res = Goals.remove(_id)

            return res
        }
    }
}