import styled from "styled-components";
import { FcEmptyTrash, FcCheckmark } from 'react-icons/fc';


export const Container = styled.div`
background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Title = styled.h3`
display: flex;
align-items: center;
justify-content: center;
font-size: 60px;
background-image: linear-gradient(
    to right,
    #1B1B1B,
    #b90504,
    #990100,
    #0F0F0F
  );
color: aliceblue;
  padding: 1px;
  width: 15%;
  font-family: Verdana, Tahoma, sans-serif;
  animation: h3bounce 4s infinite;
  cursor: pointer;
  @keyframes h3bounce {
  50% {
    transform: scale(1);
  }

  10% {
    transform: scale(1);
  }

  15% {
    transform: scale(1);
  }

  20% {
    transform: scale(1) rotate(-5deg);
  }

  25% {
    transform: scale(1) rotate(5deg);
  }

  30% {
    transform: scale(1) rotate(-3deg);
  }

  35% {
    transform: scale(1) rotate(2deg);
  }

  40% {
    transform: scale(1) rotate(0);
  }
}
`


export const ToDoList = styled.div`
background: white;
padding: 30px 20px;
border-radius: 5px;
    ul{
        padding: 0;
        margin-top: 40px;
    }
    position: static;
`

export const Input = styled.input`
height: 40px;
border: 2px solid rgba(209, 211, 212, 0.4);
border-radius: 5px;
margin-right: 40px;
width: 342px;
`

export const Button = styled.button`
background: #8052ec;
border: none;
height: 40px;
color: #ffffff;
border-radius: 5px;
font-weight: 900;
padding: 20px 30px;
font-size: 17px;
line-height: 2px;
width: 130px;
background-image: linear-gradient(
    to right,
    #ef3c2d,
    #cb1b16,
    #333333,
    #990100,
    #b90504
  );
  box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
  text-align:center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;  
cursor: pointer;

&:hover{
    background-position: 100% 0;
    -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

&:active{
    opacity: 0.6;
}
`

export const ListItem = styled.div`
background: ${props => props.isFinished ? '#60d394' : '#E4E4E4'};
height: 60px;
box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 30px;
padding: 0 10px;
width: 500px;

li{
    list-style: none;
    
}
`

export const TrashIcon = styled(FcEmptyTrash)`
cursor: pointer;
`

export const CheckIcon = styled(FcCheckmark)`
cursor: pointer;
`