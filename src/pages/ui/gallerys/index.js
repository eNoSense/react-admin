import React, { Component } from "react";
import { Card, Row, Col, Modal } from "antd";
import "./index.less";

export default class Gallerys extends Component {
  state = {
    visible: false
  }
  
  openGallery = (imgSrc) => {
    this.setState({
      visible: true,
      currentImg: imgSrc
    })
  }

  render() {
    const imgs = [
      ["1.png", "2.png", "3.png", "4.png", "5.png"],
      ["6.png", "7.png", "8.png", "9.png", "10.png"],
      ["11.png", "12.png", "13.png", "14.png", "15.png"],
      ["16.png", "17.png", "18.png", "19.png", "20.png"],
      ["21.png", "22.png", "23.png", "24.png", "25.png"]
    ];

    const imgList = imgs.map(list => list.map(img => 
        <Card
          onClick={()=>this.openGallery(img)}
          key={img}
          cover={<img src={'/gallery/' + img} alt="1"/>}
        >
          <Card.Meta
            title="React Admin"
            description="Gua Gua"
          />
        </Card>
      ))

    return (
      <div className="demo-wrapper">
        <Row gutter={12}>
          <Col md={4}>
            {imgList[0]}
          </Col>
          <Col md={4}>
            {imgList[1]}
          </Col>
          <Col md={4}>
            {imgList[2]}
          </Col>
          <Col md={4}>
            {imgList[3]}
          </Col>
          <Col md={4}>
            {imgList[4]}
          </Col>
        </Row>

        <Modal
          visible={this.state.visible}
          onCancel={()=>{this.setState({visible: false})}}
          footer={null}
          title="图片画廊"
        >
          <img className="modalImg" src={'/gallery/' + this.state.currentImg} alt=""/>
        </Modal>
      </div>
    );
  }
}
