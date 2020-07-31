import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import Carousel from '@brainhubeu/react-carousel';
import {Ellipsis, Img} from "./index";

function ImgViewer(props) {
    const imgList = props.list != null? typeof props.list == "string"? new Array(props.list) : props.list : new Array();

    const moveSlide = (arrow:string) => {
        let idx:number = props.activeIdx;
        if(arrow == 'prev') {
            idx = idx-1;
            if(idx < 0) idx = props.list.length;
        }
        else {
            idx = idx+1;
            if(idx > props.list.length-1) idx = 0;
        }
        props.setActiveIdx(idx);
    }

    const closeImgViewer = () => {
        if(props.closeViewer != null) props.closeViewer();
    }

    const getFilename = (src) => {
        if(src != null){
            const splitSrc = src.split('/');
            return splitSrc[splitSrc.length-1];
        }
        return '';
    }

  return (
      <ImgViewerComp isShow={props.isShow}>
          <Carousel
              centered
              onChange={(idx)=>props.setActiveIdx(idx)}
              value={props.activeIdx}
              infinite={false}
          >
              {imgList && imgList.length > 0 ?
                  imgList.map((el, key) => {
                      return (
                          <div key={key} className={'imgBox'}>
                              <img src={el}/>
                          </div>
                      )
                  }) : null
              }
          </Carousel>
          <div className={'closeBtn'} onClick={closeImgViewer}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M20 2.01429L17.9857 0L10 7.98571L2.01429 0L0 2.01429L7.98571 10L0 17.9857L2.01429 20L10 12.0143L17.9857 20L20 17.9857L12.0143 10L20 2.01429Z"
                      fill="#E9E9E9"/>
              </svg>
          </div>
          {imgList && imgList.length > 1?
              <div className="controllers">
                  <div onClick={() => moveSlide('prev')}>
                      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M7.40991 1.41L2.82991 6L7.40991 10.59L5.99991 12L-8.72135e-05 6L5.99991 -1.23266e-07L7.40991 1.41Z"
                              fill="white"/>
                      </svg>
                  </div>
                  <div onClick={() => moveSlide('next')}>
                      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 10.59L4.58 6L0 1.41L1.41 0L7.41 6L1.41 12L0 10.59Z" fill="white"/>
                      </svg>
                  </div>
              </div>
              : null
          }
          {props.companyData != null?
          <CompanyInfoComp>
              <div>
                  <Img src={props.companyData.company_thumbnail} width={'80px'} height={'80px'}></Img>
                  <div className={'companyInfo'}>
                      <div>{props.companyData.company_name}</div>
                      <div><Ellipsis line={2}>{props.companyData.company_description}</Ellipsis></div>
                  </div>
              </div>
              <div>
                  {getFilename(imgList[props.activeIdx])}
              </div>
          </CompanyInfoComp>
          : null }
      </ImgViewerComp>
    )
}

const CompanyInfoComp = styled.div`
display: flex;
align-items: center;
position: absolute;
bottom: 0;
width: 100%;
height: 112px;
background: rgba(0, 0, 0, 0.48);
> * {
    color: #FFFFFF;
    :first-child {
        padding: 16px;
        width: 400px;
        display: flex;
        > * {
            &:first-child {
                border: 1px solid #E9E9E9;
                box-sizing: border-box;
                border-radius: 8px;
                margin-right: 16px;
            }
            &:last-child {
                > *{
                    &:first-child {
                        font-style: normal;
                        font-weight: bold;
                        font-size: 14px;
                        line-height: 22px;
                        color: #FFFFFF;
                        margin-bottom: 12px;
                    }
                    &:last-child {
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 20px;
                        color: #E9E9E9;
                    }
                }
            }
        }
    }
    :last-child {
        flex: 1;
        text-align: right;
        margin-right: 40px;
    }
}
`;

interface ImgViewerCompProps {
    isShow: boolean
}

const ImgViewerComp = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.64);
    z-index: 102;
    .closeBtn {
        position: absolute;
        top: 54px;
        right: 54px;
    }
    .imgBox {
        width: auto;
        height: auto;
        height: 100vh;
        line-height: 100vh;
        > img {
            width: auto;
            height: auto;
            max-width: 1280px;
            margin: 0;
            border: 0;
            border-radius: 0;
            vertical-align: middle;
        }
    }
    .controllers {
        > *{
            position: absolute;
            top: 50%;
            margin-top: -9px;
            :first-child { left: 16px; }
            :last-child { right: 16px; }
        }
    }
`;

export default ImgViewer;