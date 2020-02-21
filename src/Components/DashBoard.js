import React, { Component } from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";
import withStyles from "@material-ui/core/styles/withStyles";
import getelements from "../store/actions/dashActions";
import Element from "./ListElement";
const styles = theme => ({
  footer: {
    position: "fixed",
    bottom: 0,
    width: "100%"
  }
});

export class HomePage extends Component {
  componentDidMount = () => {
    if (!this.props.auth) {
      this.history.push("/login");
    } else {
      this.props.getElements();
    }
  };

  render() {
    const { classes } = this.props;
    const { elements } = this.props.dash.elements;
    return (
      <div>
        {elements.map(ele => (
          <Element singleEle={ele} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.authReducer,
  dash: state.dashReducer
});

const mapDispatchToProps = dispatch => ({
  getElements: user => dispatch(getelements())
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
