import React, { Component } from "react";
import { Row, Col } from "antd";
import Aside from "./component/aside";
import Header from "./component/header";
import Footer from "./component/footer";
import "./style/common.less";

export default class Admin extends Component {
  render() {

    return (
      <Row className="container">
        <Col span={3} className="aside">
          <Aside />
        </Col>
        <Col span={21} className="main">
          <Header />

          <Row className="content">
            content
            {this.props.children}
          </Row>

          <Footer />
        </Col>
      </Row>
    );
  }
}
