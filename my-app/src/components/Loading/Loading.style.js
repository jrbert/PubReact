import styled from "styled-components";

export const Animation = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    background-color: #0F0F0F;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    
    p {
    color: #5AEBD1;
    margin-top: 5px;
    font-family: sans-serif;
    letter-spacing: 3px;
    font-size: 15px;
  }
    

    
    
    @-webkit-keyframes motion {
    0% {
      transform: translateX(0) scale(1);
    }
    25% {
      transform: translateX(-50px) scale(0.3);
    }
    50% {
      transform: translateX(0) scale(1);
    }
    75% {
      transform: translateX(50px) scale(0.3);
    }
    100% {
      transform: translateX(0) scale(1);
    }
  }

  @keyframes motion {
    0% {
      transform: translateX(0) scale(1);
    }
    25% {
      transform: translateX(-50px) scale(0.3);
    }
    50% {
      transform: translateX(0) scale(1);
    }
    75% {
      transform: translateX(50px) scale(0.3);
    }
    100% {
      transform: translateX(0) scale(1);
    }
  }
    `

    
export const Beer = styled.div`
    width: 80px;
    height: 70px; 
    -webkit-animation: motion 3s cubic-bezier(0.77, 0, 0.175, 1) infinite;
            animation: motion 3s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 0 0 46.5vw;
    
    

  img{
      width: 80px;
      padding-bottom: 10px;
  }
`
export const Loader = styled.div``