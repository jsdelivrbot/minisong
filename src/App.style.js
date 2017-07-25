import styled from 'styled-components'

export const Background = styled.div`
  height: 100vh;
  // background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('${require('./love-svg.jpg')}');
  background-image: url('${require("./love-svg.jpg")}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: invert(20%) brightness(45%);
`
