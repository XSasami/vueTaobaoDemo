<template>
    <div>
        <!--视图  -->
        <router-view></router-view>

        <!--底部固定选项卡  -->
        <nav class="mui-bar mui-bar-tab">
            <router-link to="/home" class="mui-tab-item">
                <span class="mui-icon my-icon icon-shouye-xianxing"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link to="/logistics" class="mui-tab-item">
                <span class="mui-icon my-icon icon-yunshuzhongwuliu-xianxing"></span>
                <span class="mui-tab-label">物流</span>
            </router-link>
            <a class="mui-tab-item" href="#tabbar-with-contact">
                <span class="mui-icon my-icon icon-caigou-xianxing">
                    <!-- <span class="mui-badge">9</span> -->
                </span>
                <span class="mui-tab-label">购物车</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-map">
                <span class="mui-icon my-icon icon-yonghu-xianxing"></span>
                <span class="mui-tab-label">我的淘宝</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-map">
                <span class="mui-icon my-icon icon-gengduo-hengxiang"></span>
                <span class="mui-tab-label">更多</span>
            </a>
        </nav>
    </div>
</template>
