import React from 'react'
import Button from 'components/weui/button'
import Cell from 'components/weui/cell'
import Form from 'components/weui/form/form'
import Input from 'components/weui/form/input'
import Label from 'components/weui/label'
import Toast from 'components/weui/toast'
import I from 'components/i'
import styles from './theme/styles'

module.exports = class extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  state = {
    showLoading: false
  }

  render() {
    return <section className={styles.register}>
      <I type="user" className={styles.user} />
      <Form>
        <Form.Cell>
          <Cell.Header>
            <Label>手机号</Label>
          </Cell.Header>
          <Cell.Body>
            <Input type="tel" placeholder="输入手机号" />
          </Cell.Body>
        </Form.Cell>
        <Form.Cell>
          <Cell.Header>
            <Label>手机验证码</Label>
          </Cell.Header>
          <Cell.Body>
            <Input type="tel" placeholder="输入验证码" />
          </Cell.Body>
          <Cell.Footer>
            <Button size="small" type="default">获取验证码</Button>
          </Cell.Footer>
        </Form.Cell>
        <Form.Cell>
          <Cell.Header>
            <Label>密码</Label>
          </Cell.Header>
          <Cell.Body>
            <Input type="password" placeholder="输入密码" />
          </Cell.Body>
        </Form.Cell>
      </Form>
      <Button.Area>
        <Button type="primary" onClick={this._handleClickRegister}>注册</Button>
        <Button size="small" type="default" onClick={this._handleClickLogin}>我要登陆</Button>
        <Button size="small" type="default" style={{ float: 'right' }}>忘记密码</Button>
      </Button.Area>
      <Toast icon="loading" show={this.state.showLoading}>提交中...</Toast>
    </section>
  }

  /*
   注册
   */
  _handleClickRegister = () => {
    this.setState({
      showLoading: true
    })
    //this.context.router.push('register')
  }

  /*
   跳转到登陆页面
   */
  _handleClickLogin = () => {
    this.context.router.push('login')
  }
}
