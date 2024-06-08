import styled from "styled-components";


export const Container = styled.section`
  // margin-top: 15rem;
  
  // h2{
  //   text-align: center;
  //   font-size: 4rem;
  //   margin-bottom: 8px;
  // }
  // .workexperiences{
  //   display: grid;
  //   grid-template-columns: repeat(3, 1fr);
  //   grid-template-rows: auto;
  //   gap: 2rem;
  //   padding: 1rem;
  //   overflow: hidden;
    
  //   // margin: auto;
    
  //   .workexperience{
  //     padding: 2rem 1.8rem;
  //     background-color: #2b2b2b;
  //     border-radius: 1.2rem;
  //     transition: 0.25s;
  //     display: flex;
  //     flex-direction: column;
  //     height: 100%;
  //     color: #FFF;
      
  //     &:hover{
  //       transform: translateY(-5px);
  //       background-color: var(--pink);
  //     }

  //     header{
  //       display: flex;
  //       align-items: center;
  //       justify-content: space-between;
  //       color: var(--blue);
  //       margin-bottom: 6px;
  //       // .workexperience-links{
  //       //   display: flex;
  //       //   align-items: center;
  //       //   gap: 1rem;
  //       // }
  //       a > img {
  //         width: 5.0rem;
  //       }
  //     }
      
  //     h3{
  //       margin-bottom: 2rem;
  //       text-align:center;
  //     }

  //     p{
  //       letter-spacing: 0.12rem;
  //       margin-bottom: 2rem;
  //       text-align:center;
  //       a{
  //         color: #FFFF;
  //         border-bottom: 1px solid var(--green);
  //         transition: color 0.25s;
  //         &:hover{
  //           color: var(--green);
  //         }
  //       }
  //     }
  //     p > img{
  //        height: 125px;
  //        width: 270px;
  //        border-radius: 4px;
  //     }

  //     footer{
  //       margin-top: auto;
       
  //       .tech-list{
  //         display: flex;
  //         align-items: center;
  //         gap: 2rem;
  //         font-size: 1.4rem;
  //         opacity: 0.6;
  //       }
  //     }

  //   }
  // }

  // @media (max-width: 960px){
  //   .workexperiences{
  //     grid-template-columns:2fr 2fr;
  //     width:610px;
  //   }
  // }

  // @media (max-width: 740px){
  //   .workexperiences{
  //     grid-template-columns: 1fr;
  //     // width:410px;
  //   }
  // }
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  
  .skills-image{
    text-align: center;
    img{
     margin-top: 2rem;
     width: 75%;
     filter: grayscale(0);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }

  @media only screen and (max-width: 480px) {
    .skills-image {
      max-width: 100%;
      margin-top: 4rem;
      // img{
      //   margin-top: 2rem;
      //   width: 100%;
      //   filter: grayscale(0);
      //   transition: filter 0.5s;
      //   &:hover{
      //     filter: grayscale(0);
      //   }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }
    .skills-image{
      display: flex;
      max-width: 100%;
      // img{
      //   margin-top: 2rem;
      //   width: 100%;
      //   filter: grayscale(0);
      //   transition: filter 0.5s;
      //   &:hover{
      //     filter: grayscale(0);
      //   }
    }
}
`