import React from 'react'
import actionCreators from '../redux/actions'
import connect from 'react-redux/lib/components/connect'

import { Body, Foot } from 'app/layout'

import 'themes/global'
import { Button } from 'antd-mobile';

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
      <Button loading>sss</Button>
      <Foot ref="foot" />
    </section>
  }
}

module.exports = Comp
