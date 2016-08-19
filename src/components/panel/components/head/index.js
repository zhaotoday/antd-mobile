import React from 'react'
import styles from './theme/styles'

export default class extends React.Component {
  static propTypes = {
    value: React.PropTypes.string
  }

  static defaultProps = {
    value: ''
  }

  state = {}

  render() {
    return <div className={styles.head}>
      {this.props.children}
    </div>
  }
}
