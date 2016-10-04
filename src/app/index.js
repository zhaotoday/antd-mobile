import React from 'react'
import actionCreators from '../redux/actions'
import connect from 'react-redux/lib/components/connect'

import { Footer } from 'app/layout'
import { Button, Icon } from 'antd-mobile'

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

    this.refs.footer.tab = this.props.location.pathname
  }

  componentWillReceiveProps(nextProps) {
    this.refs.footer.tab = nextProps.location.pathname
  }

  render() {
    return <div id="root">
      {this.props.children}
      <Footer ref="footer" />
    </div>
  }
}

module.exports = Comp
