import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  margin-bottom: 20rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  img{
    
    width: 350px;
    height: 200px;
    border-radius: 14px;
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  
  .work-text{
    padding-top: 40px;
  }
  
  
  @media (max-width: 960px){
    display: block;
    text-align: center;
    .workexperience-right{
    margin-top:30px;
    }
     .imageL{
       margin-left: 0px;
    }
    .imageR{
       margin-left: 0px;
    }
}

  @media only screen and (max-width: 480px) {
   display: block;
    text-align: center;
   .imageL{
     margin-left: 0px;
   }
   .imageR{
     margin-left: 0px;
   }
  }

  
`