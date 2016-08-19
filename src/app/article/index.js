import React from 'react'

module.exports = class extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}
