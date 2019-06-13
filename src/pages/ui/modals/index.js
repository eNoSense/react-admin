import React, { Component } from "react";
import { Card, Button, Modal } from "antd";
import "./index.less";

export default class Modals extends Component {
  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false
  };

  handleOpen = type => {
    this.setState({
      [type]: true
    });
  };

  handleConfirm = (type) => {
    Modal[type]({
      title: '确认?',
      content: '你确定嘛? 真的确定嘛?',
      onOk() {
        console.log('Ok')
      },
      onCancel() {
        console.log('Cancel')
      }
    })
  }

  render() {
    return (
      <div className="demo-wrapper">
        <Card title="基础模态框">
          <Button onClick={() => this.handleOpen("showModal1")} type="primary">
            Open
          </Button>
          <Button onClick={() => this.handleOpen("showModal2")} type="primary">
            自定义页脚
          </Button>
          <Button onClick={() => this.handleOpen("showModal3")} type="primary">
            顶部20px弹框
          </Button>
          <Button onClick={() => this.handleOpen("showModal4")} type="primary">
            水平垂直居中
          </Button>
        </Card>

        <Card title="信息确认框">
          <Button onClick={() => this.handleConfirm("confirm")} type="primary">
            Confirm
          </Button>
          <Button onClick={() => this.handleConfirm("info")} type="primary">
            Info
          </Button>
          <Button onClick={() => this.handleConfirm("success")} type="primary">
            Success
          </Button>
          <Button onClick={() => this.handleConfirm("warning")} type="primary">
            Warning
          </Button>
        </Card>

        <Modal
          title="React"
          visible={this.state.showModal1}
          onCancel={() => {
            this.setState({
              showModal1: false
            });
          }}
        >
          <p>学习</p>
        </Modal>

        <Modal
          title="React"
          visible={this.state.showModal2}
          okText="下一步"
          cancelText="好的"
          onCancel={() => {
            this.setState({
              showModal2: false
            });
          }}
        >
          <p>学习2</p>
        </Modal>

        <Modal
          title="React"
          visible={this.state.showModal3}
          style={{ top: 20 }}
          onCancel={() => {
            this.setState({
              showModal3: false
            });
          }}
        >
          <p>学习3</p>
        </Modal>

        <Modal
          title="React"
          visible={this.state.showModal4}
          wrapClassName="vertical-center-modal"
          onCancel={() => {
            this.setState({
              showModal4: false
            });
          }}
        >
          <p>学习4</p>
        </Modal>
      </div>
    );
  }
}
