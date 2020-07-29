import React from 'react';
import styled from "styled-components";
import {Button} from "./index";

function LiveCompanyBox(props) {
  return (
      <LiveCompanyBoxComp >
          <div>Company name</div>
          <h1>Lorem ipsum dolor sit amet Pellentesque vitae</h1>
          <div>
              <span className={'category'}>#category</span>
              <span className={'category'}>#category</span>
              <span className={'category'}>#category</span>
          </div>
          <div>Vestibulum tincidunt mattis nunc, sit amet iaculis dui varius eu. Morbi efficitur semper velit sit amet euismod. Proin scelerisque suscipit aliquam.</div>
          <div className={'btns'}>
              <Button fill={'fill'} width={160} height={48}>Now Live!</Button>
              <Button type={'whiteLine'} width={160} height={48}>View Information</Button>
          </div>
      </LiveCompanyBoxComp>
  )
}

const LiveCompanyBoxComp = styled.div`
    width: 620px;
    height: 400px;
    margin-top: -200px;
    overflow: hidden;
    font-weight: bold;
    font-size: 16px;
    line-height: 28px;
    color: #FFFFFF;
    > * {
        margin-bottom: 32px;
        :last-child { margin-bottom: 0 }
        &.btns {
            margin-top: 16px;
            > * {
                display: inline-block;
                margin-right: 16px;
                :last-child { margin-right: 0 }
            }
        }
    }
    > h1 {
        font-weight: 800;
        font-size: 40px;
        line-height: 52px;
    }
`;

export default LiveCompanyBox;
