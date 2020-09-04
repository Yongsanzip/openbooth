import React  from 'react';
import styled from "styled-components";

function Ellipsis(props){
  return (
      <EllipsisComp line={props.line}>
        {props.children}
      </EllipsisComp>
  )
}

interface EllipsisCompProps{
  line:any
}
const EllipsisComp = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${(props: EllipsisCompProps) => (props.line != null && props.line > 1 ? props.line : '1')};
  -webkit-box-orient: vertical;
  
  word-break: break-word;
}
`;
// word-break: break-all;
export default Ellipsis;