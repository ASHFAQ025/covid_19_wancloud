import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Menu, Breadcrumb } from "antd";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CountriesRecords from "./CountriesRecords";
import Home from "./Home";
import { getAllRecords } from "../serivces/actions";
const { Header, Footer, Sider, Content } = Layout;

class MainContext extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
     
    };
  }
  componentDidMount() {
    this.props.dispatch(getAllRecords());
  }

  render() {
    console.log(this.props);
    return (
      <Router>
        <Layout>
          <Header className="header">
            <h1>Corona Virus 19 Record </h1>
          </Header>
          <div style={{ display: "flex" }}>
            <Layout className="side-bar">
              <div className="menu">
                <Link to="/">
                  <h3>Home</h3>
                </Link>
                <Link to="/counteries">
                  <h3>Counteries</h3>
                </Link>
              </div>
            </Layout>
            <Content className="content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/counteries" component={CountriesRecords} />
              </Switch>
            </Content>
          </div>
          <Footer className='footer'>copy right</Footer>
        </Layout>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { state: state.coivdReducer, dispatch: state.dispatch };
};

export default connect(mapStateToProps)(MainContext);

{
  /* <Layout className="main-container">
<Router>
  <Header className="header">
    <h1>Corona Virus 19 Record </h1>
  </Header>
  <div className="container">
    <Sider className="side-bar">
      <div className="menu">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/counteries">
          <h3>Counteries</h3>
        </Link>
      </div>
    </Sider>
    <Content className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/counteries" component={CountriesRecords} />
      </Switch>
    </Content>
  </div>
</Router>
</Layout> */
}
