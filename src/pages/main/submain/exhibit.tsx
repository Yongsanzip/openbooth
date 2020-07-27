import React, {Component, useState} from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../../modules/index";
import { getExhibitionReducer } from "../../../modules/exhibition/exhibition";

import { Category, RollingButton, Booth } from './../../../components/index'

import dummyImg from "../../../assets/img/bg-dummy.png";

function Exhibit(props) {
    const dispatch = useDispatch();
    let exhibition = useSelector((state: RootState) => state.exhibitionReducer.data);
    if(exhibition == null){
        exhibition = {};
        dispatch(getExhibitionReducer());
    }
    else{
        if(exhibition.length < 2) exhibition = exhibition[0];
    }

    const [categoryPage, setCategoryPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedCategory_title, setSelectCategory_title] = useState('');
    const [selectedCategory_datas, setSelectedCategory_datas] = useState([]);
    let categoryList = exhibition.data;

    const _movePrevCategoryPage = () => {
        setCategoryPage(categoryPage > 1 ? categoryPage - 1 : 1);
    }
    const _moveNextCategoryPage = () => {
        let categoryPageVal = categoryPage;
        const categoryTotalPage = categoryList.length;
        categoryPageVal = Math.ceil(categoryTotalPage / 3) > categoryPage ? categoryPage + 1 : categoryPage;
        setCategoryPage(categoryPageVal);
    }

    const setSelectedCategoryItem = (el)=> {
        console.log(el);
        setSelectedCategory(el);
        setSelectCategory_title(el.category);
        setSelectedCategory_datas(typeof el.booth == "object"? new Array(el.booth) : el.booth);
    }

    return (
        <ExhibitComp>
            <div>
                <div>
                    <div className='titleBox'>
                        <div className='title'>Exhibition category</div>
                        <div className='catRollingBtns'>
                            <RollingButton toLeft onClick={_movePrevCategoryPage} />
                            <RollingButton toRight onClick={_moveNextCategoryPage} />
                        </div>
                    </div>
                    <CategoryListComp>
                        {categoryList && categoryList.length > 0 ?
                            categoryList.slice((categoryPage-1)*3, (categoryPage-1)*3 + 3).map((el, key) => {
                                return (
                                    <Category key={key} data={el} listType="companyProfile" onClickTitle={()=>setSelectedCategoryItem(el)} />
                                )
                            }) : null
                        }
                    </CategoryListComp>
                </div>
            </div>
            <div>
                <div>
                    <div className='titleBox'>
                        <div className='title'>{ selectedCategory == null? 'View all' : selectedCategory_title }</div>
                    </div>
                    <CategoryListComp className=''>
                        {selectedCategory != null && selectedCategory_datas.length > 0 ?
                            selectedCategory_datas.map((el, key) => {
                                return (
                                    <Booth data={el} key={key} />
                                )
                            }) : null
                        }
                    </CategoryListComp>
                </div>

            </div>
        </ExhibitComp>
    )
}

const ExhibitComp = styled.div`
width: 100%;
> div {
    margin-bottom: 80px;
    :last-child { border-top: 1px solid #E9E9E9; box-sizing: border-box; }
    > div {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        margin-top: 80px;
        & .titleBox {
            display: flex;
            .title {
                flex: 1;
                font-weight: bold;
                font-size: 24px;
                line-height: 32px;
                color: #000000;
            }
            .catRollingBtns {
                > *{
                    display: inline-block;
                }
            }
        }
    }
}
`;
const CategoryListComp = styled.div`
margin-top: 40px;
> * {
    display: inline-block;
                margin: 0 40px 40px 0;
    vertical-align: top;
                :nth-child(3n){ margin-right: 0; }
}
`;

export default Exhibit;
