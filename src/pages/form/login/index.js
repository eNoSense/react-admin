import React, { Component } from "react";
import { Card, Form, Input, Button, message, Icon, Checkbox } from "antd";
import "./index.less";
const FormItem = Form.Item;

class FormLogin extends Component {
  handleSubmit = () => {
    const userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((error, values) => {
      if (!error) {
        message.success(
          `${userInfo.username}, 你要使用密码 ${userInfo.password} 登录嘛`
        );
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="demo-wrapper">
        <Card title="登录行内表单">
          <Form layout="inline">
            <FormItem>
              <Input placeholder="请输入用户名" />
            </FormItem>
            <FormItem>
              <Input placeholder="请输入密码" />
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>

        <Card title="登录水平方向">
          <Form className="middle">
            <FormItem>
              {getFieldDecorator("username", {
                initialValue: "",
                rules: [
                  { required: true, message: "用户名不能为空" },
                  { min: 5, max: 10, message: "长度不在范围内" },
                  {
                    pattern: /^[a-zA-Z][a-zA-Z0-9_]*$/g,
                    message: "用户名必须以字母开头, 且只能包含英文或数字"
                  }
                ]
              })(
                <Input
                  prefix={<Icon type="user" />}
                  placeholder="请输入用户名"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("password", {
                initialValue: "123456",
                rules: [{ required: true, message: "密码不能为空" }]
              })(
                <Input prefix={<Icon type="lock" />} placeholder="请输入密码" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true,
                rules: []
              })(<Checkbox>记住密码</Checkbox>)}
              <Button type="link" className="r">忘记密码</Button>
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>
                登录
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Form.create()(FormLogin);
