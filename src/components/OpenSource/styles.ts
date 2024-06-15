import styled from "styled-components";


export const Container = styled.section`
  margin-top: 12rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .opensources{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .opensource{
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      &:hover{
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 20px;
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 5.0rem;
        }
      }
      
      h3{
        margin-bottom: 2rem;
        text-align:center;
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        text-align:center;
        a{
          color: #FFFF;
          //border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }
      p > img{
         height: 125px;
         width: 270px;
         border-radius: 4px;
      }

      footer{
        margin-top: auto;
       
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }

    }
  }

  @media (max-width: 960px){
    .opensources{
      grid-template-columns: 1fr 1fr;
     
    }
    .opensource{
      width: 280px;
       margin:auto;
    }
  }

  @media (max-width: 740px){
    .opensources{
      grid-template-columns: 1fr;
      
    }
    .opensource{
      width: 280px;
       margin:auto;
    }
  }
`