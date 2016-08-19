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

  componentDidMount() {
  }

  render() {
    return <section className={styles.login}>
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
            <Label>密码</Label>
          </Cell.Header>
          <Cell.Body>
            <Input type="password" placeholder="输入密码" />
          </Cell.Body>
        </Form.Cell>
      </Form>
      <Button.Area>
        <Button type="primary" onClick={this._handleClickLogin}>登陆</Button>
        <Button size="small" type="default" onClick={this._handleClickRegister}>我要注册</Button>
        <Button size="small" type="default" style={{ float: 'right' }}>忘记密码</Button>
      </Button.Area>
      <Toast icon="loading" show={this.state.showLoading}>登陆中...</Toast>
    </section>
  }

  /*
   登陆
   */
  _handleClickLogin = () => {
    /*
    notice.error('手机格式错误<br/>密码不能为空')
    return
     */
    this.setState({
      showLoading: true
    })

    this.context.router.push('/')
  }

  /*
   跳转到注册页面
   */
  _handleClickRegister = () => {
    this.context.router.push('register')
  }
}
