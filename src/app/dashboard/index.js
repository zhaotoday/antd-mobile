import React from 'react'
import { NavBar, Icon, WhiteSpace, WingBlank, Flex, Carousel } from 'antd-mobile'
import './theme/styles'
module.exports = class extends React.Component {
  state = {
    current: 0
  }

  beforeSlide = (from, to) => {
    console.log(`slide from ${from} to ${to}`);
  }

  slideTo = (index) => {
    this.setState({
      current: index
    })
    console.log('slide to', index);
  }

  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      selectedIndex: this.state.current,
      beforeChange: this.beforeSlide,
      afterChange: this.slideTo,
    }

    return <div>
      <header>
        <NavBar iconName="home" rightContent={[<Icon key="1" type="search" />, <Icon key="2" type="plus" />]}>
          首页
        </NavBar>
      </header>
      <section>
        <WhiteSpace />
        <WingBlank size="md">
          <Carousel {...settings}>
            <Flex
              justify="center"
              className="flex-container-justify">
              <h3>Carousel 1</h3>
            </Flex>
            <Flex
              justify="center"
              className="flex-container-justify">
              <h3>Carousel 2</h3>
            </Flex>
            <Flex
              justify="center"
              className="flex-container-justify">
              <h3>Carousel 3</h3>
            </Flex>
          </Carousel>
        </WingBlank>
      </section>
    </div>
  }
}
