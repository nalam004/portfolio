import styled from "styled-components";
import React from 'react'

export const Card = styled.div`
  width: 450px;
  height: 250px;
  background-color: white;
  box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin: 1.5rem;
`;

export const Demo = styled.div`
  position: absolute;
  width: 130px;
  height: 100%;
  transition: width 0.4s;
  overflow: hidden;
  z-index: 2;

  &:hover {
    width: 100%;
    border-radius: 0 5px 5px 0;
  }
`;

export const CardInfo = styled.div`
  width: 310px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  box-sizing: border-box;
  padding: 1rem;
  padding-top: 0;
`;

export const Img = styled.img`
  width: 450px;
  height: 250px;
`;

const Item = ({ title, image, description }) => {
  return (
    <>
      <Card>
        <Demo>
          <Img src={image} alt=''/>
        </Demo>
        <CardInfo>
          <h1>{title}</h1>
          <p>{description}</p>
          <span>Hover over me for demo</span>
        </CardInfo>
      </Card>
    </>
  );
};

export default Item;