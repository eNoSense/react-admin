import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import Util from "./../../utils/utils";
import Axios from './../../axios'
import "./index.less";

export default class Header extends Component {
  state = {
    weather: '晴，今天傍晚20点钟后转阴，其后晴'
  }
  
  componentWillMount() {
    this.setState({
      userName: "瓜坤"
    });
    setInterval(() => {
      const sysTime = Util.formatDate(new Date().getTime());
      this.setState({
        sysTime
      });
    }, 1000);
    // this.getWeatherAPIData()
  }

  getWeatherAPIData() {
    // const city = 'beijing'
    const city = '120.1917600632,30.1843831324'
    Axios.jsonp({
      // url: `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=xUFWNUzW3ukdoGFGkz0tlualH3zEh67k`
      url: `https://api.caiyunapp.com/v2/TAkhjf8d1nlSlspN/${city}/hourly.json`
    }).then((response) => {
      console.log('gua response: ', response)
      const weather = response.result.hourly.description
      console.log('data', weather)
      this.setState({
        weather
      })
    })
  }
  
  render() {
    return (
      <header className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎, {this.state.userName}</span>
            <Button type="link">退出</Button>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-detail">{this.state.weather}</span>
          </Col>
        </Row>
      </header>
    );
  }
}
