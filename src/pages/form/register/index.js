import React, { Component } from "react";
import {
  Card,
  Form,
  Button,
  Input,
  Checkbox,
  Radio,
  Select,
  Switch,
  DatePicker,
  TimePicker,
  Upload,
  Icon,
  message,
  InputNumber
} from "antd";
import "./index.less";
import moment from "moment";
const { Item: FormItem } = Form;
const { Group: RaidoGroup } = Radio;
const { Option } = Select;
const { TextArea } = Input;

class FormRegister extends Component {
  state = {}

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          avatar: imageUrl,
          loading: false
        })
      );
    }
  };

  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue()
    console.log(userInfo)
    message.success(
      `${userInfo.username}, 你要使用密码 ${userInfo.password} 登录嘛`
    );
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 4
      },
      wrapperCol: {
        xs: 24,
        sm: 12
      }
    };

    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 4
        }
      }
    }

    const rowObject = {
      minRows: 4,
      maxRows: 8
    };

    return (
      <div className="demo-wrapper">
        <Card title="注册表单">
          <Form>
            <FormItem label="用户名" {...formItemLayout}>
              {getFieldDecorator("username", {
                initialValue: "",
                rules: [{ required: true, message: "用户名不能为空" }]
              })(<Input placeholder="请输入用户名" />)}
            </FormItem>
            <FormItem label="密码" {...formItemLayout}>
              {getFieldDecorator("password", {
                initialValue: "",
                rules: [{ required: true, message: "密码不能为空" }]
              })(<Input placeholder="请输入密码" />)}
            </FormItem>
            <FormItem label="性别" {...formItemLayout}>
              {getFieldDecorator("gender", {
                initialValue: 1
              })(
                <RaidoGroup>
                  <Radio value={1}>男</Radio>
                  <Radio value={2}>女</Radio>
                </RaidoGroup>
              )}
            </FormItem>

            <FormItem label="年龄" {...formItemLayout}>
              {getFieldDecorator("age", {
                initialValue: 17
              })(<InputNumber />)}
            </FormItem>

            <FormItem label="当前状态" {...formItemLayout}>
              {getFieldDecorator("state", {
                initialValue: "1"
              })(
                <Select>
                  <Option value="1">咸鱼一条</Option>
                  <Option value="2">咸鱼两条</Option>
                  <Option value="3">咸鱼三条</Option>
                </Select>
              )}
            </FormItem>

            <FormItem label="爱好" {...formItemLayout}>
              {getFieldDecorator("hobby", {
                initialValue: ["1", "3"]
              })(
                <Select mode="multiple">
                  <Option value="1">唱歌</Option>
                  <Option value="2">打球</Option>
                  <Option value="3">跳舞</Option>
                  <Option value="4">蔡徐坤</Option>
                </Select>
              )}
            </FormItem>

            <FormItem label="是否已婚" {...formItemLayout}>
              {getFieldDecorator("marray", {
                valuePropName: "checked",
                initialValue: true
              })(<Switch />)}
            </FormItem>

            <FormItem label="生日" {...formItemLayout}>
              {getFieldDecorator("birthday", {
                initialValue: moment()
              })(<DatePicker showTime />)}
            </FormItem>

            <FormItem label="联系地址" {...formItemLayout}>
              {getFieldDecorator("address", {
                initialValue: "杭州市滨江区长河街道"
              })(<TextArea autosize={rowObject} />)}
            </FormItem>

            <FormItem label="早起时间" {...formItemLayout}>
              {getFieldDecorator("getUpTime", {
                initialValue: moment()
              })(<TimePicker />)}
            </FormItem>

            <FormItem label="头像" {...formItemLayout}>
              {getFieldDecorator("avatar", {
                // initialValue: moment()
              })(
                <Upload
                  listType="picture"
                  showUploadList={false}
                  onChange={this.handleChange}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                >
                  {this.state.avatar ? (
                    <img src={this.state.avatar} alt="" />
                  ) : (
                    <Icon type="plus" />
                  )}
                </Upload>
              )}
            </FormItem>
                    
            <FormItem {...offsetLayout}>
              {getFieldDecorator("readshit", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>我已阅读过协议</Checkbox>)}
            </FormItem>

            <FormItem {...offsetLayout}>
              <Button type="primary" onClick={this.handleSubmit}>注册</Button>
            </FormItem>
            
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create()(FormRegister);
