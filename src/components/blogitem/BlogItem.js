import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import { arrow } from "../../utils/Icons";

function BlogItem({
  title,
  title2,
  desc,
  desc2,
  date,
  image1,
  writer,
  userIcon,
  image2,
}) {
  const theme = useTheme();

  //state
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <BlogItemStyled theme={theme}>
      <img src={image1} alt="..." className="blog-image" />
      <p className="date">{date}</p>
      <h4>{title}</h4>
      <button onClick={openModal}>{arrow} szczegóły</button>
      {showModal && <div onClick={closeModal} className="click-overlay"></div>}
      {showModal && (
        <div className="show-modal">
          <div className="modal-content">
            <img src={image2} alt="..." />
            <div className="user-info">
              <p>
                {userIcon}
                {writer}
              </p>
              <p className="date">{date}</p>
            </div>
            <h2>{title2}</h2>
            <p>{desc}</p>
            <img src={image1} alt="..." />
            <p>{desc2}</p>
            <div className="share-content">
              <p>Udział: </p>
              <a href="#" target="_blank" rel="noreferrer noopener">
                Facebook
              </a>
              <a href="#" target="_blank" rel="noreferrer noopener">
                Instagram
              </a>
              <a href="#" target="_blank" rel="noreferrer noopener">
                Twitter
              </a>
              {/* <a href="#" target="_blank" rel="noreferrer noopener">
                LinkedIn
              </a> */}
            </div>
          </div>
        </div>
      )}
    </BlogItemStyled>
  );
}

const BlogItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .blog-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  .date {
    padding: 0.1rem 0.6rem;
    background: ${(props) => props.theme.colorGrey};
    align-self: flex-start;
    margin: 1rem 0;
  }
  h4 {
    font-size: clamp(1.2rem, 1.5vw, 1.5rem);
  }
  button {
    text-transform: uppercase;
    margin-top: 1.8rem;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    background-color: transparent;
    display: flex;
    align-items: center;
    outline: none;
    border: none;
    color: inherit;
    cursor: pointer;
    gap: 1rem;
    i {
      transition: transform 0.2s ease-in-out;
    }
    &:hover {
      color: ${(props) => props.theme.colorYellow};
      i {
        transform: translateX(3px);
      }
    }
  }

  .show-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 50%;
    max-height: 94%;
    background: ${(props) => props.theme.colorBg6};
    transform: translate(-50%, -50%);
    z-index: 12;
    overflow-y: auto;
    border-radius: 10px;

    @media only screen and (max-width: 768px) {
      width: 80%;
    }
    &::-webkit-scrollbar {
      width: 0;
    }
    .modal-content {
      padding: 2rem 1.5rem;
      position: relative;

      @media only screen and (max-width: 768px) {
        width: 100%;
      }

      img {
        width: 100%;
        object-fit: cover;
        height: 400px;

        @media only screen and (max-width: 676px) {
        }
        &:first-child {
          width: 100%;
          height: 550px;
          object-fit: cover;

          @media only screen and (max-width: 676px) {
          }
        }
      }
      .user-info {
        display: flex;
        align-items: center;
        background: transparent;
        gap: 1.5rem;
        margin-top: 2rem;
        p {
          margin-bottom: 0;
          margin-top: 0;
          i {
            color: ${(props) => props.theme.colorGreen};
          }
          &:first-child {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
        }
        .date {
          background: transparent;
          padding-left: 1.5rem;
          position: relative;
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            width: 0.5rem;
            height: 0.5rem;
            background-color: ${(props) => props.theme.colorYellow};
            border-radius: 50%;
          }
        }
      }
      h2 {
        font-size: clamp(1.5rem, 2vw, 3rem);
        margin: 2rem 0;
      }
      p {
        margin-bottom: 2rem;
      }
      .share-content {
        display: flex;
        align-items: center;
        gap: 1rem;

        @media only screen and (max-width: 768px) {
          flex-wrap: wrap;
        }
        a {
          text-decoration: underline;
          font-weight: 500;
        }
        p {
          margin-bottom: 0;
        }
      }
    }
  }

  .click-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 11;

    @media only screen and (max-width: 768px) {
    }
  }
`;

export default BlogItem;
