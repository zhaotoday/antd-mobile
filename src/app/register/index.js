import React from 'react'
import styles from './theme/styles'

import { NavBar, Popover, Icon, List, InputItem, Button, WingBlank, WhiteSpace, Toast } from 'antd-mobile'
import { createForm } from 'rc-form';

module.exports = createForm()(class extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  state = {
    visible: false,
    selected: '',
  }

  componentDidMount() {
  }

  render() {
    const { getFieldProps } = this.props.form;

    return <section className={styles.register}>
      <NavBar iconName={false} rightContent={
      <Popover
        visible={this.state.visible}
        overlay={[
          <Popover.Item key="4" value="scan" iconName="file-text">关于</Popover.Item>,
          <Popover.Item key="4" value="scan" iconName="file-unknown">帮助</Popover.Item>
        ]}
        popupAlign={{
          overflow: { adjustY: 0, adjustX: 0 },
          offset: [-2, 15],
        }}
        onVisibleChange={this.handleVisibleChange}
        onSelect={this.onSelect}>
          <div style={{
            height: '100%',
            padding: '0 0.3rem',
            marginRight: '-0.3rem',
            display: 'flex',
            alignItems: 'center',
          }}>
            <Icon type="ellipsis" />
          </div>
        </Popover>
      }>
        注册
      </NavBar>
      <WhiteSpace size="lg" />

      <List>
        <InputItem type="phone" placeholder="输入手机号" extra={
            <Button type="ghost" size="small" inline style={{ position: 'absolute', right: '.21rem', top: '.21rem' }}>获取验证码</Button>
          }
          {...getFieldProps('phone', {
            initialValue: '',
          })}>
          手机号
        </InputItem>
        <InputItem type="number" placeholder="输入手机收到的验证码" maxLength={6}
          {...getFieldProps('number', {
            initialValue: '',
          })}>
          验证码
        </InputItem>
        <InputItem type="password" placeholder="输入密码">
          密码
        </InputItem>
        <InputItem type="password" placeholder="确认密码">
          确认密码
        </InputItem>
      </List>
      <WhiteSpace size="lg" />
      <WingBlank>
        <Button type="primary" onClick={this._handleSubmit}>确定</Button>
        <WhiteSpace size="lg" />
        <Button type="ghost" size="small" inline onClick={this._handleSubmit}>我要登陆</Button>
        <Button type="ghost" size="small" inline style={{ float: 'right' }} onClick={this._handleSubmit}>忘记密码</Button>
      </WingBlank>
    </section>
  }

  onSelect = (opt) => {
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  }

  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  }

  _handleSubmit = () => {
    Toast.fail('请输入手机号', 2)
  }
})
