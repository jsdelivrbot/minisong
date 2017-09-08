import styled from 'styled-components'

export const Background = styled.div`
  height: 100vh;
  // background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('${require('./love-svg.jpg')}');
  background-image: url('${require('./love-svg.jpg')}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: invert(20%) brightness(74%);
  animation: fade ease-in-out 2s;
  animation: fade-together ease-in-out 2s forwards; 

  @keyframes fade {
    from {
      opacity: 0;
      transform: scale(1);
    }
    to {
      opacity: 1;
    }
  }

  // @keyframes fade-together {
  //   from { 
  //   transform: scaleX(1);
  //   transform: scaleY(1);
  //   }
  //   to {
  //   transform: scaleX(1.025);
  //   transform: scaleY(1.025);
  //   }
  // }
`
