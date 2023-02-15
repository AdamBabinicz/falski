import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";

function TimelineItem({ duration, title, desc, icon }) {
  const theme = useTheme();
  return (
    <TimelineItemStyled theme={theme}>
      <div className="timeline-info">
        <p className="duration">{duration}</p>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
      <div className="icon">{icon}</div>
    </TimelineItemStyled>
  );
}

const TimelineItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 4rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  position: relative;
  border-left: 1px solid ${(props) => props.theme.colorPrimary};

  .timeline-info p {
    font-size: clamp(1rem, 2vw, 1.1rem);
  }

  @media screen and (max-width: 676px) {
    padding-left: 0.8rem;
  }
  .timeline-info p {
    width: 100%;
  }
  .duration {
    color: ${(props) => props.theme.colorGrey2};
    font-size: clamp(1rem, 2vw, 1.1rem);
  }
  h4 {
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    margin: 0.5rem 0;
  }
  .icon {
    position: absolute;
    left: -9px;
    top: 13px;
    i {
      color: ${(props) => props.theme.colorPrimary};
    }
  }
`;

export default TimelineItem;
