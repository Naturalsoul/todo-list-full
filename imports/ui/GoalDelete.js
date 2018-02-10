import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const deleteGoal = gql`
  mutation deleteGoal($id: String!) {
    deleteGoal(_id: $id) {
      _id
    }
  }
`;

class GoalDelete extends Component {
  deleteGoal = () => {
    this.props.deleteGoal({
      variables: {
        id: this.props.goal._id
      }
    })
  }

  render() {
    return (
      <div>
        <span onClick={this.deleteGoal}>X</span>
      </div>
    );
  }
}

export default graphql(deleteGoal, {
  name: "deleteGoal",
  options: {
    refetchQueries: ["Resolutions"]
  }
})(GoalDelete);