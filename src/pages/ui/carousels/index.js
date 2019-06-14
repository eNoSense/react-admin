import React, { Component } from "react";
import { Card, Carousel } from "antd";
import "./index.less";

export default class Carousels extends Component {
  render() {
    return (
      <div className="demo-wrapper">
        <Card title="文字背景轮播">
          <Carousel autoplay effect="fade">
            <div>
              <h3>Ant Motion Banner - Javascript</h3>
            </div>
            <div>
              <h3>Ant Motion Banner - html</h3>
            </div>
            <div>
              <h3>Ant Motion Banner - css</h3>
            </div>
          </Carousel>
        </Card>

        <Card title="图片背景轮播" className="slider-wrapper">
          <Carousel autoplay >
            <div>
              <img src="/gallery/1.png" alt="" />
            </div>
            <div>
              <img src="/gallery/3.png" alt="" />
            </div>
            <div>
              <img src="/gallery/2.png" alt="" />
            </div>
          </Carousel>
        </Card>
      </div>
    );
  }
}
