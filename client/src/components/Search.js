import React, { Component } from "react";
// import { withRouter } from "react-router";
import Progress from "react-progress-2";
// import "./bodyPage";
// import url from "./url";

class Search extends Component {
  constructor(props) {
    super(props);
    // BodyPage.caller(updateOnQuery('terr'))
    this.state = {
      results: [],
      term: "",
      redirect: false
    };

    this.submit = this.submit.bind(this);
    this.changeTerm = this.changeTerm.bind(this);
  }

  changeTerm(event) {
    this.setState({ term: event.target.value });
  }

  componentWillUpdate() {
    Progress.hide();
  }
  componentWillUnmount() {
    this.setState({ term: "", results: [] });
    console.log("kkk");
  }
  submit(event) {
    Progress.show();
    event.preventDefault();
    let urll = `${url}/api/r_search/?q=` + this.state.term;
    fetch(urll, {})
      .then(res => res.json())
      .then(respone => {
        let data = {
          results: respone.results,
          redirect: true
        };
        this.setState(data);
        this.props.history.push({
          pathname: "/results",
          search: "?query=" + this.state.term,
          state: { detail: respone.results }
        });
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input
            onChange={this.changeTerm}
            className="form-control "
            placeholder="Search ..."
          />
        </form>
      </div>
    );
  }
}


export default withRouter(Search);