import { Form, Icon, Input, Button } from 'antd';
import { Component } from 'react';
import styles from './index.less';
const FormItem = Form.Item;
const bg = require("../../assets/1.jpg");

class Login extends Component {
    constructor() {
        super()
        this.state = {
            account: '',
            password: '',
        }
    }
    submit = () => {
        console.log(1)
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <>
                <div>
                    <div className="background" style={{ backgroundImage: `url(${bg})` }}></div>
                    <div className={styles.login}>
                        <div className={styles.avatar}>
                            <img src={require('../../assets/avatar/avatar.png')} alt="头像" />
                        </div>
                        <div style={{ width: '50%' }}>
                            <p className="text-c">欢迎归来</p>
                            <div className="mb10"></div>
                            <Form>
                                <FormItem>
                                    {
                                        getFieldDecorator('account', {
                                            initialValue: this.state.account,
                                        })(<Input placeholder="用户名"/>)
                                    }
                                </FormItem>
                                <FormItem>
                                    {
                                        getFieldDecorator('password', {
                                            initialValue: this.state.password,
                                        })(<Input type="password" placeholder="密码"/>)
                                    }
                                </FormItem>
                            </Form>
                            {/* <Input
                            placeholder="用户名"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            size="large"
                        />
                        <div className="mb10"></div>
                        <Input
                            placeholder="密码"
                            type="password"
                            prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            size="large"
                        /> */}
                            <div className="mb10"></div>
                            <div className="text-r">
                                <a to="/register" style={{ marginRight: '10px' }}>注册</a>
                                <Button type="primary" size="large" onClick={this.submit}>登录</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
};

export default Form.create()(Login);