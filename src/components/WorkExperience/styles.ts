import styled from "styled-components";


// export const Container = styled.section`
//   margin-top: 15rem;
//   margin-bottom: 20rem;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 2rem;
  
//   img{
    
//     width: 350px;
//     height: 200px;
//     border-radius: 14px;
//   }

//   p{
//     font-size: 1.8rem;
//     letter-spacing: 0.1rem;
//     font-weight: 500;
//   }
  
//   .work-text{
//     padding-top: 40px;
//   }
  
  
//   @media (max-width: 960px){
//     display: block;
//     text-align: center;
//     .workexperience-right{
//     margin-top:30px;
//     }
//     //  .imageL{
//     //    margin-left: 0px;
//     // }
//     // .imageR{
//     //    margin-left: 0px;
//     // }
//     img{
//     margin-left: -176px;
//     }
// }

//   @media only screen and (max-width: 480px) {
//    display: block;
//     text-align: center;
//    img{
//      margin-left: -176px;
//    }
//   //  .imageR{
//   //    margin-left: 0px;
//   //  }
//   }

  
// `

// ...existing code...
export const Container = styled.section`
  margin-top: 15rem;
  margin-bottom: 20rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .workexperience-left, .workexperience-right {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .imageL img {
    width: 350px;
    max-width: 100%;
    height: auto;
    border-radius: 14px;
    object-fit: cover;
    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  .work-text {
    padding-top: 40px;
    max-width: 500px;
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;
    .workexperience-right {
      margin-top: 30px;
    }
    .workexperience-left, .workexperience-right {
      justify-content: center;
    }
    .imageL img {
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 480px) {
    display: block;
    text-align: center;
    .imageL img {
      margin-left: 0;
    }
  }
`
