import React, { Component } from "react";
import { Card, Table, Modal, Button, message } from "antd";
import axios from "./../../../axios";
import "./index.less";

export default class BasicTable extends Component {
  state = {
    dataSource2: []
  };
  componentDidMount() {
    const dataSource = [
      {
        key: 1,
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
        key: 2,
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
    this.request();
  }

  request = () => {
    axios
      .ajax({
        url: "/table/list",
        // url: "test/exception",
        data: { params: { page: 1 } }
      })
      .then(response => {
        this.setState({
          dataSource2: response.data.items,
          selectedRowKeys: [],
          selectedRowIds: null
        });
      });
  };

  onRowClick = (record, index) => {
    let selectedKey = [index];
    Modal.info({
      title: "信息",
      content: `用户名${record.username}, 的爱好是 ${record.hobby}`
    });
    this.setState({ selectedRowKeys: selectedKey, selectedItem: record });
  };

  handleDelete = () => {
    const ids = this.state.selectedRowIds || [];
    Modal.confirm({
      title: "确认",
      content: `您确定要删除这些数据嘛?${ids.join(",")}`,
      onOk: () => {
        message.success("删除成功");
        this.request()
      }
    });
  };

  render() {
    const columns = [
      { title: "id", dataIndex: "id" },
      { title: "用户名", dataIndex: "username" },
      {
        title: "性别",
        dataIndex: "gender",
        render(gender) {
          return gender === 1 ? "男" : "女";
        }
      },
      {
        title: "状态",
        dataIndex: "state",
        render(state) {
          let config = {
            1: "瓜一个",
            2: "瓜两个",
            3: "瓜三个",
            4: "瓜四个",
            5: "瓜五个"
          };
          return config[state];
        }
      },
      {
        title: "爱好",
        dataIndex: "hobby",
        render(hobby) {
          let config = {
            1: "爱瓜一",
            2: "爱瓜两",
            3: "爱瓜三",
            4: "爱瓜四",
            5: "爱瓜五"
          };
          return config[hobby];
        }
      },
      { title: "生日", dataIndex: "birthday" },
      { title: "地址", dataIndex: "address" },
      { title: "起床时间", dataIndex: "time" }
    ];

    const paginationConfig = {
      current: 1,
      pageSize: 10,
      total: 30
    };
    const { selectedRowKeys } = this.state;

    // const rowSelectionConfig = {
    //   type: "radio",
    //   selectedRowKeys
    // };

    const rowCheckSelectionConfig = {
      type: "checkbox",
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        const selectedRowIds = selectedRows.map(row => {
          return row.id;
        });
        this.setState({
          selectedRowKeys,
          selectedRowIds
        });
      }
    };

    return (
      <div className="demo-wrapper">
        <Card title="基础表格">
          <Table
            bordered
            pagination={false}
            columns={columns}
            dataSource={this.state.dataSource}
          />
        </Card>

        <Card title="Mock 动态渲染表格">
          <Table
            pagination={paginationConfig}
            columns={columns}
            dataSource={this.state.dataSource2}
          />
        </Card>

        <Card title="Mock 单选">
          <div>
            <Button onClick={this.handleDelete}>删除</Button>
          </div>
          <Table
            rowSelection={rowCheckSelectionConfig}
            pagination={paginationConfig}
            columns={columns}
            // onRow={(record, index) => {
            //   return {
            //     onClick: () => {
            //       this.onRowClick(record, index);
            //     }
            //   };
            // }}
            dataSource={this.state.dataSource2}
          />
        </Card>
      </div>
    );
  }
}
