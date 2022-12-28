import React from "react";
import "semantic-ui-css/semantic.min.css";
class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("compulsary field !!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <>
        <div className="ui main">
          <h1></h1>
          <h2>ADD CONTACT</h2>
          <form className="ui form" onSubmit={this.add}>
            <div className="field">
              <label> NAME </label>
              <input
                type="text"
                name="name "
                value={this.state.name}
                placeholder="enter name"
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>
            <div className="field">
              <label> EMAIL </label>
              <input
                type="text"
                name="email "
                placeholder="enter email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            <button className="ui button blue"> ADD</button>
          </form>
        </div>
      </>
    );
  }
}

export default AddContact;
