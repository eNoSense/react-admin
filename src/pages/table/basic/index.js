import React, { Component } from "react";
import { Card, Table } from "antd";
import "./index.less";

export default class BasicTable extends Component {
  state = {};
  componentDidMount() {
    const dataSource = [
      {
        id: 0,
        username: "gua1",
        gender: "1",
        state: "1",
        hobby: "1",
        birthday: "2001-01-01",
        address: "杭州市滨江区",
        time: "09:00"
      },
      {
        id: 1,
        username: "gua1",
        gender: "1",
        state: "1",
        hobby: "1",
        birthday: "2001-01-01",
        address: "杭州市滨江区",
        time: "09:00"
      }
    ];
    this.setState({ dataSource });
  }

  render() {
    const columns = [
      { title: "id", dataIndex: "id" },
      { title: "用户名", dataIndex: "username" },
      { title: "姓名", dataIndex: "gender" },
      { title: "状态", dataIndex: "state" },
      { title: "爱好", dataIndex: "hobby" },
      { title: "生日", dataIndex: "birthday" },
      { title: "地址", dataIndex: "address" },
      { title: "起床时间", dataIndex: "time" }
    ];
    return (
      <div className="demo-wrapper">
        <Card title="表格">
          <Table
            bordered
            pagination={false}
            columns={columns}
            dataSource={this.state.dataSource}
          />
        </Card>
      </div>
    );
  }
}
