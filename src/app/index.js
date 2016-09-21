import React from 'react'
import actionCreators from '../redux/actions'
import connect from 'react-redux/lib/components/connect'

import { Body, Foot } from 'app/layout'
import { Button, NavBar, Icon } from 'antd-mobile'

import 'themes/global'

@connect(
  state => ({
    article: state.article
  }),
  dispatch => ({
    postArticle: (options) => dispatch(actionCreators.postArticle(options))
  })
)
class Comp extends React.Component {
  componentDidMount() {
    this.props.postArticle({
      data: {
        title: 'the title'
      }
    })

    this.refs.foot.tab = this.props.location.pathname
  }

  componentWillReceiveProps(nextProps) {
    this.refs.foot.tab = nextProps.location.pathname
  }

  render() {
    return <section>
      <Body>{this.props.children}</Body>
      <div style={{ padding: 8 }}>
        <NavBar leftContent="返回"
          rightContent={[<Icon key="0" type="user" />, <Icon key="1" type="search" />, <Icon key="2" type="plus" />]}
        >NavBar</NavBar>
        <div style={{ height: 8 }} />
        <NavBar leftContent="返回" mode="light"
          rightContent={[<Icon key="0" type="user" />, <Icon key="1" type="search" />, <Icon key="2" type="plus" />]}
        >NavBar</NavBar>
      </div>
      <Button loading>登陆</Button>
      <Foot ref="foot" />
    </section>
  }
}

module.exports = Comp
