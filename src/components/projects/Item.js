import styled from "styled-components";
import React from 'react'

export const TabPane = styled.div`
positon: relative;  
`;

export const TabInfo = styled.div`
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: center;
-webkit-justify-content: center;
-ms-flex-pack: center; 
justify-content: center;
-webkit-box-align: center;
-webkit-align-items: center;
-ms-flex-align: center;
align-items: center;

@media (max-width: 900px) {
  display: block;
}

`;

export const TabImg = styled.img`
width: 60%;
max-width: 100%;
margin-bottom: auto;
border-radius: 5px;

@media (max-width: 900px) {
  width: 100%;
}

`;

export const TabText = styled.div`
position: static;
left: 0%;
top: 0%;
right: auto;
bottom: auto;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
margin-top: 0%;
margin-bottom: auto;
padding-left: 15px;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-webkit-flex-direction: column;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-align: start;
-webkit-align-items-flex: start;
-ms-flex-align: start;
align-items: flex-start;

@media (max-width: 900px) {
  padding: 10px 0px 5px 0px;
}

`;

export const TabPara = styled.p`
font-size: 20px;
margin-top: auto;
margin-bottom: auto;
padding-bottom: 15px;
color: #444440;
text-align: justify;
line-height: 30px;
`;

const Item = ({ image, link, description }) => {
  return (
    <>
      <TabPane>
        <TabInfo>
          <TabImg src={image} alt=''/>
          <TabText>
            <TabPara>{description}</TabPara>
            <a target="_blank" rel="noreferrer" href={link} className="btn">Learn More</a>
          </TabText>
        </TabInfo>
      </TabPane>
    </>
  );
};

export default Item;