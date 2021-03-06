import React from "react";
import { Link } from 'react-router-dom';

import Listitem from "./listitem";
import CompanyListitem from "./companylistitem"
import styled from "styled-components";

function List(props) {

    const { list, type, showIndex } = props;
    return (
        <CategoryListComp>
            {list && list.length > 0 ?
                list.slice(0, 3).map((item, key) => {
                    return (
                        type === 'companyProfile'?
                            <Link to='/company'  key={key}><CompanyListitem idx={key} item={item} showIndex={showIndex} /></Link>
                            :<Listitem key={key} idx={key} item={item} showIndex={showIndex} />
                    )
                }) : null }
        </CategoryListComp>
    )
}

const CategoryListComp = styled.div`
a {
    cursor: default;
    text-decoration: none;
}
`;

export default List;