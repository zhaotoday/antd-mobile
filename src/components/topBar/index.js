import React from 'react'
import Left from './components/left'
import Right from './components/right'
import Title from './components/title'
import styles from './theme/styles'

class TopBar extends React.Component {
  static propTypes = {
    title: React.PropTypes.string
  }

  static defaultProps = {
    title: ''
  }

  render() {
    return <div className={styles['top-bar']}>
      {this.props.children}
    </div>
  }
}

TopBar.Left = Left
TopBar.Right = Right
TopBar.Title = Title

export default TopBar
