<template>
    <div class="outWrap">
        <!--顶部固定栏  -->
        <header>
            <div class="header-wrap">
                <div class="search-placeholder">
                    <h3><b class="my-icon icon-search"></b>寻找宝贝店铺</h3>
                </div>
            </div>
        </header>
        <section class="home-swipe">
            <mt-swipe :auto="3000" :speed="0">
                <mt-swipe-item>1</mt-swipe-item>
                <mt-swipe-item>2</mt-swipe-item>
                <mt-swipe-item>3</mt-swipe-item>
                <mt-swipe-item>4</mt-swipe-item>
                <mt-swipe-item>5</mt-swipe-item>
                <mt-swipe-item>6</mt-swipe-item>
                <mt-swipe-item>7</mt-swipe-item>
                <mt-swipe-item>8</mt-swipe-item>
            </mt-swipe>
        </section>
        <section class="tentrance10 banxin">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-2">
                    <a href="#">
                        <span></span>
                        <div class="mui-media-body">天猫</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-2">
                    <a href="#">
                        <span></span>
                        <div class="mui-media-body">聚划算</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-2">
                    <a href="#">
                        <span></span>
                        <div class="mui-media-body">天猫国际</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-2">
                    <a href="#">
                        <span></span>
                        <div class="mui-media-body">外卖</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-2">
                    <a href="#">
                        <span></span>
                        <div class="mui-media-body">天猫超市</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-2">
                    <a href="#">
                        <span></span>
                        <div class="mui-media-body">充值中心</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-2">
                    <a href="#">
                        <span></span>
                        <div class="mui-media-body">飞猪旅行</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-2">
                    <a href="#">
                        <span></span>
                        <div class="mui-media-body">领金币</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-2">
                    <a href="#">
                        <span></span>
                        <div class="mui-media-body">外卖</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-2">
                    <a href="#">
                        <span></span>
                        <div class="mui-media-body">分类</div>
                    </a>
                </li>
            </ul>
        </section>
        <section class="toutiao">
            <ul class="banxin">
                <li>
                    <a href="#">头条 1</a>
                </li>
                <li>
                    <a href="#">头条 2</a>
                </li>
                <li>
                    <a href="#">头条 3</a>
                </li>
                <li>
                    <a href="#">头条 4</a>
                </li>
            </ul>
        </section>
        <section class="goods-banner banxin">
            <div class="g-b-l"></div>
            <div class="g-b-r">
                <div></div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
        <section class="goodsView1">
            <hgroup class="title">
                <h4></h4>
            </hgroup>
            <div class="content banxin">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </section>
        <section class="goodsView2">
            <hgroup class="title">
                <h4></h4>
            </hgroup>
            <div class="content banxin">
                <ul>
                    <li></li>
                    <li></li>
                </ul>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </section>
        <section class="goodsView1">
            <hgroup class="title">
                <h4></h4>
            </hgroup>
            <div class="content banxin">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </section>
        <footer></footer>
    </div>
</template>

<style scoped>
@import '../../../statics/css/base.css';


/*home css  */

.outWrap {
    padding-bottom: 50px;
}

.banxin {
    padding: 0 10px;
    background-color: #fff;
}


/*顶部搜索栏部分 B  */

header {
    width: 100%;
    background-color: #FE5400;
}

header .header-wrap {
    padding: 0.5rem 0.8rem 0.5rem 3rem;
    background: url('../../../statics/images/logo.png') no-repeat 0.4rem center;
    background-size: 2.2rem 1.7rem;
}

header .header-wrap .search-placeholder {
    width: 100%;
    background-color: #B52600;
    border-radius: 0.3rem;
    text-align: center;
    box-sizing: border-box;
}

header .header-wrap .search-placeholder h3 {
    display: inline-block;
    height: 24px;
    line-height: 20px;
    color: #F0E0DC;
    font-size: 1.3rem;
    margin: 0;
    font-weight: normal;
}

header .header-wrap .search-placeholder h3 b {
     font-size: 1.9rem; 
    font-style: normal;
    color: #fff;
    padding-right: 2px;
}









/*顶部搜索栏部分 E  */


/*首页轮播图部分 B  */

.home-swipe {
    height: 120px;
}

.home-swipe .mint-swipe .mint-swipe-items-wrap .mint-swipe-item {
    line-height: 120px;
    text-align: center;
    background-color: yellowgreen;
}

.home-swipe .mint-swipe .mint-swipe-indicators {
    width: 100%;
    text-align: right;
    padding-right: 0.5rem;
    left: 0;
    -webkit-transform: translateX(0);
    transform: translateX(0);
}









/*首页轮播图部分 E  */


/*10宫格部分 B  */

.tentrance10 .mui-grid-view.mui-grid-9 {
    border: none;
    background-color: #fff;
    padding-bottom: 1rem;
}

.tentrance10 .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;
    font-size: 13px;
    padding-top: 0;
    padding-bottom: 0;
}

.tentrance10 .mui-grid-view.mui-grid-9 .mui-table-view-cell>a:not(.mui-btn) {
    padding-bottom: 0;
}

.tentrance10 .mui-grid-view.mui-grid-9 .mui-table-view-cell a span {
    display: block;
    width: 3.8rem;
    height: 3.8rem;
    border-radius: 50%;
    background-color: yellowgreen;
    margin: 0 auto;
}

.tentrance10 .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
    font-size: 1rem;
}









/*10宫格部分 E  */


/*头条部分 B  */

.toutiao {
    position: relative;
    height: 37px;
    margin-top: 2px;
    overflow: hidden;
}

.toutiao ul {
    position: absolute;
    width: 100%;
}

.toutiao ul li a {
    display: block;
    height: 37px;
    line-height: 37px;
}





/*头条部分 E  */


/*好货部分 B  */

.goods-banner {
    height: 200px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 5px;
    display: flex;
}

.goods-banner .g-b-l {
    height: 100%;
    width: 40%;
    background-color: orange;
}

.goods-banner .g-b-r {
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
}

.goods-banner>.g-b-r>div:nth-of-type(1) {
    flex: 1;
    background-color: greenyellow;
}

.goods-banner>.g-b-r>div:nth-of-type(2) {
    flex: 1;
    display: flex;
}

.goods-banner>.g-b-r>div:nth-of-type(2)>div:nth-of-type(1) {
    flex: 1;
    background-color: purple;
}

.goods-banner>.g-b-r>div:nth-of-type(2)>div:nth-of-type(2) {
    flex: 1;
    background-color: hotpink;
}









/*好货部分 E  */


/*goodsView1 B  */

section.goodsView1 {
    margin-top: 10px;
}

section.goodsView1>hgroup.title h4 {
    height: 30px;
    background-color: paleturquoise;
    margin: 0;
}

section.goodsView1>.content {
    height: 210px;
    display: flex;
    flex-direction: column;
}

section.goodsView1>.content>ul {
    flex: 1;
    display: flex;
}

section.goodsView1>.content>ul>li {
    flex: 1;
    background-color: skyblue;
}

section.goodsView1>.content>ul>li:nth-of-type(1) {
    flex: 1.5;
    background-color: yellow;
}









/*goodsView1 E  */


/*goodsView2 B  */

section.goodsView2 {
    margin-top: 10px;
}

hgroup.title {}

section.goodsView2>hgroup.title h4 {
    height: 30px;
    background-color: paleturquoise;
    margin: 0;
}

section.goodsView2>.content {
    height: 210px;
    display: flex;
    flex-direction: column;
}

section.goodsView2>.content>ul {
    flex: 1;
    display: flex;
}

section.goodsView2>.content>ul>li {
    flex: 1;
    background-color: skyblue;
}

section.goodsView2>.content>ul>li:nth-of-type(1) {
    background-color: yellow;
}








/*goodsView2 E  */


/*footer  B */

footer {
    height: 120px;
    background-color: grey;
    margin-top: 10px;
}








/*footer  E */
</style>

<script>
import bus from '../common/commonvue'
import $ from 'jquery'

export default {
    data() {
        return {
            Timer: null
        }
    },
    mounted() {
        this.mySwiper();
    },
    destroyed() {
        clearInterval(this.Timer)
    },
    methods: {
        mySwiper() {
            let count = 0;
            let itemHeight = parseInt($('.toutiao >ul >li >a').css('height'));

            this.Timer = setInterval(function () {
                count++;
                $('.toutiao ul').css({
                    'top': -(count * itemHeight)
                });
                if (count == 3) {
                    count = -1;
                }
            }, 3000)
        }
    }
}
</script>
