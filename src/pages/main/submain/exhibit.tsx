import React, {Component, useState} from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../../modules/index";
import { getExhibitionReducer, getBoothListReducer, getSelectedExhibitCategoryReducer, setSelectedExhibitCategoryReducer } from "../../../modules/exhibition/exhibition";

import { Category, RollingButton, Booth } from './../../../components/index'

function Exhibit(props) {
    let languageData = useSelector((state: RootState) => state.tokenReducer.languageData);

    //최초 호출, 전체 전시 카테고리 목록
    const dispatch = useDispatch();
    let exhibition = useSelector((state: RootState) => state.exhibitionReducer.data);
    if(exhibition == null){
        exhibition = {};
        dispatch(getExhibitionReducer());
    }
    else{
        if(exhibition.length < 2) exhibition = exhibition[0];
    }

    //최초 호출, 전체 부스 목록
    let boothList = useSelector((state: RootState) => state.exhibitionReducer.boothList);
    if(boothList == null){
        boothList = {};
        let BoothListData = {
            category_id: ''
        };
        dispatch(getBoothListReducer(BoothListData));
    }
    else{
        if(boothList.length < 2) boothList = boothList[0];
    }

    //선택한 전시 카테고리
    let selectedCategory = useSelector((state: RootState) => state.exhibitionReducer.selectedExhibit);
    const setSelectedCategoryItem = (el)=> {
        console.log(el);
        dispatch(setSelectedExhibitCategoryReducer(el));
    }

    //Exhibition category 목록 페이징
    const [categoryPage, setCategoryPage] = useState(1);
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

    return (
        <ExhibitComp>
            <div>
                <div>
                    <div className='titleBox'>
                        <div className='title'>{languageData.ExhibitionCategoryTitle}</div>
                        <div className='catRollingBtns'>
                            <RollingButton toLeft onClick={_movePrevCategoryPage} />
                            <RollingButton toRight onClick={_moveNextCategoryPage} />
                        </div>
                    </div>
                    <CategoryListComp categoryPage={categoryPage}>
                        <div>
                            {categoryList && categoryList.length > 0 ?
                                categoryList.map((el, key) => {
                                    return (
                                        <Category key={key} data={el} listType="companyProfile" onClickTitle={()=>setSelectedCategoryItem(el)} />
                                    )
                                }) : null
                            }
                        </div>
                    </CategoryListComp>
                </div>
            </div>
            <div>
                <div>
                    <div className='titleBox'>
                        <div className='title'>{ selectedCategory == null? languageData == null? '' : languageData.viewAll : selectedCategory.category }</div>
                    </div>
                    <CategoryListComp>
                        <div>
                            {selectedCategory != null && typeof selectedCategory.booth.length == "undefined"?
                                <Link to='/company' ><Booth data={selectedCategory.booth} /></Link> :
                                selectedCategory != null && selectedCategory.booth.length > 0 ?
                                    selectedCategory.booth.map((el, key) => {
                                        return (
                                            <Link to='/company' key={key}><Booth data={el} key={key} /></Link>
                                        )
                                    }) : boothList != null && boothList.length > 0 ?
                                    boothList.map((el, key) => {
                                        return (
                                            <Link to='/company' key={key}><Booth data={el} key={key} /></Link>
                                        )
                                    }) : null
                            }
                        </div>
                    </CategoryListComp>
                </div>

            </div>
        </ExhibitComp>
    )
}

const ExhibitComp = styled.div`
width: 100%;
a {
    text-decoration: none;
}
> div {
    padding-bottom: 80px;
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
export default Exhibit;

const CategoryListComp = styled.div`
margin-top: 40px;
width: 100%;
height: 460px;
overflow: hidden;
> * {
    width: 100%;
    height: 100%;
    transform: ${(props:any) => (props.categoryPage > 1 ? 'translatex(-'+(100 * (props.categoryPage - 1))+'%)' : '')};
    transition: transform 0.5s 0s ease, box-shadow 0.3s 0s ease-in-out;
    display: flex;
     > * {
        display: inline-block;
        margin: 0 40px 40px 0;
        vertical-align: top;
        :nth-child(3n){ margin-right: 0; }
    }
}
`;
