import React from 'react'
import styles from './theme/styles'

export default class extends React.Component {
  static propTypes = {
    type: React.PropTypes.string,
    className: React.PropTypes.string
  }

  static defaultProps = {
    type: '',
    className: ''
  }

  render() {
    const { type, className, ...otherProps } = this.props
    return <i className={`${styles.iconfont} ${styles['icon-' + type]} ${className}`} {...otherProps} />
  }
}
