import React from 'react'
import actionCreators from '../redux/actions'
import Tab from 'components/weui/tab'
import connect from 'react-redux/lib/components/connect'

import { Body, Foot } from 'app/layout'

import 'weui'
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
    return <Tab>
      <Body>{this.props.children}</Body>
      <Foot ref="foot" />
    </Tab>
  }
}

module.exports = Comp
