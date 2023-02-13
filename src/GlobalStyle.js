import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Khojki:wght@400;500;600;700&display=swap');
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
   }
   html {
      scroll-behavior: smooth;
      overflow-x: hidden;
   }
   body {
      background-color: #1E1E1E;;
      font-family: 'Noto Serif Khojki', serif;
      font-size: clamp(1rem, 1.5rem, 1.2rem);
      overflow-x: hidden;
       &::-webkit-scrollbar{
            width: 6px;
        }
        &::-webkit-scrollbar-thumb{
            background-color: #ff4c60;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-track{
            background-color: #222121;
        }

        /* MODAL */

.services__modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
}
.services__modal-content {
  width: 500px;
  position: relative;
  background: #fff;
  padding: 4.5rem 2.5rem 2.5rem;
  border-radius: 1.5rem;
  color: #333;
  z-index: 999 !important;
}
.services__modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 1.5rem;
  color: #000;
  cursor: pointer;
}
.services__modal-title {
  font-size: 1.65rem;
  font-weight: 500;
  margin-bottom: 1.8rem;
  text-align: center;
}
.services__modal-description {
  font-size: 1rem;
  padding: 0 0.5rem;
  margin-bottom: 2rem;
  text-align: left;
  color: #222121;
  line-height: 1rem;
}
.services__modal-services {
  row-gap: 0.75rem;
}
.services__modal-services img {
  height: 150px;
  width: fit-content;
  object-fit: contain;
  box-shadow: 0px -1px 15px -5px #454343;
  -webkit-box-shadow: 0px -1px 15px -5px #dad0d0;
  display: block;
  margin: auto;
}
.services__modal-service {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
}
.services__modal-icon {
  color: hsl(var(--hue), var(--sat), 20%);
  font-size: 1.1rem;
}
.services__modal-info {
  font-size: 0.875rem;
}

/* Active Modal */

.active-modal {
  opacity: 1;
  visibility: visible;
}

@media (max-width: 676px) {
  .services__modal-description {
    font-size: 0.8rem;
  }
}

    }

    a, button, input{
        font-family: inherit;
        font-size: inherit;
        text-decoration: none;
    }

    button {
        background: none;
        border: none;
    }

    #tsparticles{
        height: 100vh ;
    }

    .center-title{
        text-align: center;
        width: 50%;
        margin: 0 auto;
    }

    .blob{
        position: absolute;
        bottom: -110px;
        right: -70px;
        width: 140px;
        height: 140px;
        background: #fff;
        border-radius: 50%;
        transition: all .3s ease-in-out;
        pointer-events: none;
        opacity: 0.2;
        border: 0 solid rgb(249, 215, 76);
    }
`;
