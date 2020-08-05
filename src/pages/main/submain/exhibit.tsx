import React, {Component, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../../modules/index";
import { getExhibitionReducer, getBoothListReducer, getSelectedExhibitCategoryReducer, setSelectedExhibitCategoryReducer } from "../../../modules/exhibition/exhibition";

import { Category, CategoryTitle, RollingButton, Booth } from './../../../components/index'
import {getBrowserSize} from "../../../common/common";

function Exhibit(props) {
    const languageData = useSelector((state: RootState) => state.tokenReducer.languageData);
    const [deviceType, setDeviceType] = useState('pc');
    const _setDeviceType = () => {
        setDeviceType(getBrowserSize());
    }

    useEffect(()=>{
        _setDeviceType();
        window.addEventListener('resize', _setDeviceType);

        return function cleanup() {
            window.removeEventListener('resize', _setDeviceType);
        };
    }, []);

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
                    {deviceType != 'pc'?
                    <CategoryTitleListComp>
                        <div>
                        {categoryList && categoryList.length > 0 ?
                            categoryList.map((el, key) => {
                                return (
                                    <CategoryTitle key={key} data={el} _onClick={()=>setSelectedCategoryItem(el)} />
                                )
                            }) : null
                        }
                        </div>
                    </CategoryTitleListComp>
                    :
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
                    }
                </div>
            </div>
            <div>
                <div>
                    <div className='titleBox'>
                        <div className='title'>{ selectedCategory == null? languageData == null? '' : languageData.viewAll : selectedCategory.category }</div>
                    </div>
                    <CategoryListComp categoryPage={null}>
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

export default Exhibit;

const CategoryTitleListComp = styled.div`
width: 100%;
overflow-y: hidden;
overflow-x: auto;
> div {
    display: flex;
    width: fit-content;
    > * {
        margin-right: 8px;
        :first-child { margin-left: 20px; }
        :last-child { margin-right: 20px; }
    }
}
`;
interface CategoryListCompProps {
    categoryPage: any
}
const CategoryListComp = styled.div`
width: 100%;
overflow: hidden;
${({theme}) => theme.media.desktop`
margin-top: 40px;
height: 460px;
`}
${({theme}) => theme.media.mobile`
margin-top: 0;
padding: 0 20px;
height: auto;
`}
> * {
    width: 100%;
    height: 100%;
    transform: ${(props: CategoryListCompProps) => (props.categoryPage != null && props.categoryPage > 1 ? 'translatex(-'+(100 * (props.categoryPage - 1))+'%)' : '')};
    transition: transform 0.5s 0s ease, box-shadow 0.3s 0s ease-in-out;
    display: flex;
    ${({theme}) => theme.media.mobile`
    flex-direction: column;
    `}
     > * {
        display: inline-block;
        vertical-align: top;
        ${({theme}) => theme.media.desktop`
        margin: 0 40px 40px 0;
        :nth-child(3n){ margin-right: 0; }
        `}
        ${({theme}) => theme.media.mobile`
        margin: 0 0 16px 0;
        :last-child { margin-bottom: 40px; }
        `}
    }
}
`;

const ExhibitComp = styled.div`
width: 100%;
a {
    text-decoration: none;
}
> div {
    ${({theme}) => theme.media.desktop`
    padding-bottom: 80px;
    `}
    ${({theme}) => theme.media.mobile`
    padding-bottom: 24px;
    `}
    :last-child { border-top: 1px solid #E9E9E9; box-sizing: border-box; }
    > div {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        & .titleBox {
            display: flex;
            ${({theme}) => theme.media.desktop`
            padding-top: 80px;
            `}
            ${({theme}) => theme.media.mobile`
            padding-top: 24px;
            padding-left: 20px;
            padding-bottom: 16px;
            `}
            .title {
                flex: 1;
                font-weight: bold;
                color: #000000;
                ${({theme}) => theme.media.desktop`
                font-size: 24px;
                line-height: 32px;
                `}
                ${({theme}) => theme.media.mobile`
                font-size: 14px;
                line-height: 22px;
                `}
            }
            .catRollingBtns {
                > *{
                    display: inline-block;
                }
                ${({theme}) => theme.media.mobile`
                display: none;
                `}
            }
        }
    }
}
`;
