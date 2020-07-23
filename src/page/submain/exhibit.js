import React, { Component } from 'react';
import { Category, RollingButton, Booth } from './../../components/index'
import styled from "styled-components";

import dummyImg from "../../assets/img/bg-dummy.png";

class Exhibit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryPage: 1,
            selectedCategory: null,
            categoryList: [{
                img: dummyImg,
                title: 'IT Solution1',
                datas: [{
                    img: dummyImg,
                    title: 'In faucibus sapien sed accumsan porttitor.',
                    content: 'In faucibus sapien sed accumsan porttitor. Suspen aliquet varius ligula, non venenatis augue.  sapien sed accumsan porttitor. Suspen aliquet varius ligula, non venenatis augue. Utdigss..',
                    company: {
                        img: dummyImg,
                        name: 'company name'
                    }
                },{
                    img: dummyImg,
                    title: 'In faucibus sapien sed accumsan porttitor.',
                    content: 'In faucibus sapien sed accumsan porttitor. Suspen aliquet varius ligula, non venenatis augue. Utdigss..',
                    company: {
                        img: dummyImg,
                        name: 'company'
                    }
                },{
                    img: dummyImg,
                    title: 'In faucibus sapien sed accumsan porttitor.',
                    content: 'In faucibus sapien sed accumsan porttitor. Suspen aliquet varius ligula, non venenatis augue. Utdigss..',
                    company: {
                        img: dummyImg,
                        name: 'company'
                    }
                },{
                    img: dummyImg,
                    title: 'company name',
                    content: 'In faucibus sapien sed accumsan porttitor. Suspen aliquet varius ligula, non venenatis augue. Utdigss..',
                    company: {
                        img: dummyImg,
                        name: 'company'
                    }
                },{
                    img: dummyImg,
                    title: 'company name',
                    content: 'In faucibus sapien sed accumsan porttitor. Suspen aliquet varius ligula, non venenatis augue. Utdigss..',
                    company: {
                        img: dummyImg,
                        name: 'company'
                    }
                }]
            },{
                img: dummyImg,
                title: 'IT Solution2',
                datas: [{
                    img: dummyImg,
                    title: 'company name',
                    content: 'In faucibus sapien sed accumsan porttitor. Suspen aliquet varius ligula, non venenatis augue. Utdigss..',
                    company: {
                        img: dummyImg,
                        name: 'company'
                    }
                }]
            },{
                img: dummyImg,
                title: 'IT Solution3',
                datas: [{
                    img: dummyImg,
                    title: 'company name',
                    content: 'In faucibus sapien sed accumsan porttitor. Suspen aliquet varius ligula, non venenatis augue. Utdigss..',
                    company: {
                        img: dummyImg,
                        name: 'company'
                    }
                }]
            },{
                img: dummyImg,
                title: 'IT Solution4',
                datas: [{
                    img: dummyImg,
                    title: 'company name',
                    content: 'In faucibus sapien sed accumsan porttitor. Suspen aliquet varius ligula, non venenatis augue. Utdigss..',
                    company: {
                        img: dummyImg,
                        name: 'company'
                    }
                }]
            },{
                img: dummyImg,
                title: 'IT Solution5',
                datas: [{
                    img: dummyImg,
                    title: 'company name',
                    content: 'In faucibus sapien sed accumsan porttitor. Suspen aliquet varius ligula, non venenatis augue. Utdigss..',
                    company: {
                        img: dummyImg,
                        name: 'company'
                    }
                }]
            },{
                img: dummyImg,
                title: 'IT Solution6',
                datas: [{
                    img: dummyImg,
                    title: 'company name',
                    content: 'In faucibus sapien sed accumsan porttitor. Suspen aliquet varius ligula, non venenatis augue. Utdigss..',
                    company: {
                        img: dummyImg,
                        name: 'company'
                    }
                }]
            },{
                img: dummyImg,
                title: 'IT Solution7',
                datas: [{
                    img: dummyImg,
                    title: 'company name',
                    content: 'In faucibus sapien sed accumsan porttitor. Suspen aliquet varius ligula, non venenatis augue. Utdigss..',
                    company: {
                        img: dummyImg,
                        name: 'company'
                    }
                }]
            }]
        }
    }

    _movePrevCategoryPage = () => {
        let categoryPage = this.state.categoryPage;
        categoryPage = categoryPage > 1 ? categoryPage - 1 : 1;
        this.setState({
            categoryPage: categoryPage
        })
    }
    _moveNextCategoryPage = () => {
        let categoryPage = this.state.categoryPage;
        const categoryTotalPage = this.state.categoryList.length;
        categoryPage = Math.ceil(categoryTotalPage / 3) > categoryPage ? categoryPage + 1 : categoryPage;
        this.setState({
            categoryPage: categoryPage
        })
    }
    setSelectedCategoryItem = (el)=> {
        this.setState({ selectedCategory: el })
    }

    render() {
        const { categoryList, categoryPage, selectedCategory } = this.state;
        const { _movePrevCategoryPage, _moveNextCategoryPage, setSelectedCategoryItem } = this;

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
                            <div className='title'>{ selectedCategory == null? 'View all' : selectedCategory.title }</div>
                        </div>
                        <CategoryListComp className=''>
                            {selectedCategory != null && selectedCategory.datas && selectedCategory.datas.length > 0 ?
                                selectedCategory.datas.map((el, key) => {
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
