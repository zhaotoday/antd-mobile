import React from 'react'
import styles from './theme/styles'
import Head from './components/head'
import Body from './components/body'

const Comp = class extends React.Component {
  static propTypes = {
    value: React.PropTypes.string
  }

  static defaultProps = {
    value: ''
  }

  state = {}

  render() {
    return <div className={styles.panel}>
      {this.props.children}
    </div>
  }
}

Comp.Head = Head
Comp.Body = Body

export default Comp
