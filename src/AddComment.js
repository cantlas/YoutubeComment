import React from "react";

class AddComment extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: "",
      user: "Edward Miller"
    };
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState(
      {
        ...this.state,
        comment: e.target.value
      },
      () => console.log(this.state)
    );
  }
  submitComment(e) {
    this.props.submitComment(this.state);
    console.log("submitted");
  }
  clearComment(e) {
    this.setState(
      {
        ...this.state,
        comment: ""
      },
      () => console.log(this.state)
    );
  }
  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <div className="user__avatar" />
        <form onSubmit={this.submitComment.bind(this)}>
          <input
            value={this.state.comment}
            id="addcomment"
            onChange={this.handleChange.bind(this)}
            placeholder="Add a public comment..."
          />
          <button
            style={{
              float: "right",
              marginTop: "5px",
              fontSize: "12px",
              padding: "8px 10px 8px 10px",
              backgroundColor: "#2693e6",
              border: "none",
              color: "white"
            }}
            type="submit"
          >
            COMMENT
          </button>
          <button
            type="button"
            style={{
              float: "right",
              marginTop: "5px",
              marginRight: "5px",
              fontSize: "12px",
              padding: "8px 10px 8px 10px",
              backgroundColor: "#2693e6",
              border: "none",
              color: "white"
            }}
            onClick={this.clearComment.bind(this)}
          >
            CANCEL
          </button>
        </form>
      </div>
    );
  }
}

export default AddComment;
