import Resolutions from "./resolutions"
import Goals from "../goals/goals"

export default {
    Query: {        
        resolutions(obj, arg, { userId }) {
            return Resolutions.find({userId}).fetch()
        }
    },

    Resolution: {
        goals: resolution => Goals.find({resolutionId: resolution._id}).fetch(),
        completed: resolution => {
            const goals = Goals.find({resolutionId: resolution._id, completed: false}).fetch()
            return !goals.length
        }
    },

    Mutation: {
        createResolution (obj, { name }, { userId }) {
            const resolutionId = Resolutions.insert({
                name,
                userId
            })

            return Resolutions.findOne(resolutionId)
        },

        removeResolution (obj, { _id }) {
            Resolutions.remove(_id)

            return ""
        }
    }
}