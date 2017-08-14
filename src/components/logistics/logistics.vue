<template>
    <div class="outWarp">
        <header>
            <div class="back"><a href="#">返回</a></div>
            <hgroup>
                <h3>物流订单<span class="my-icon icon-xiangshangshouqi"></span></h3>
            </hgroup>
        </header>
    </div>
</template>

<style scoped>
@import '../../../statics/css/base.css';
.outWarp header {
     background-color: #f3f3f3; 
    border-bottom: 1px solid #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
    text-shadow: none;
    text-align: center;
    position: relative;
    background: -webkit-gradient(linear,left top,left bottom,from(#f9f9f9),to(#eee));
}

.outWarp header hgroup {
    display: inline-block;
}

.outWarp header hgroup h3 {
    font-weight: 400;
    font-size: 1.4rem;
    height: 47px;
    line-height: 47px;
    color: #666;
}

.outWarp header hgroup h3 span {
    font-weight: bold;
    padding-left: 5px;
}

.outWarp header .back {
    font-size: 1.4rem;
    float: left;
    border: 1px solid #666;
    padding: 3px;
    position: absolute;
    top: 12px;
    left: 20px;
}

.outWarp header .back a {
    display: block;
    color: #333;
}
</style>

