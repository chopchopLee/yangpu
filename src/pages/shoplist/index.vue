<template>
    <div class="list">
        <header>品牌引导</header>
        <ul class="container">
             <li v-for="(item,index) in list" :key="index">
                <img :src="item.imgUrl" alt="" class="shop-img">
                <img alt="" :src="item.logoUrl" class="logo-img" :style="{'background:black': item.black}">
             </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return{
            list:[
                {imgUrl:require('../../statics/img/boroyujia.png'),logoUrl:require('../../statics/img/youziyouwei.png'),black:true},
                {imgUrl:require('../../statics/img/boroyujia.png'),logoUrl:require('../../statics/img/youziyouwei.png'),black:true},
                {imgUrl:require('../../statics/img/boroyujia.png'),logoUrl:require('../../statics/img/youziyouwei.png'),black:true},
                {imgUrl:require('../../statics/img/boroyujia.png'),logoUrl:require('../../statics/img/youziyouwei.png'),black:true},
                {imgUrl:require('../../statics/img/boroyujia.png'),logoUrl:require('../../statics/img/youziyouwei.png'),black:true},
                {imgUrl:require('../../statics/img/boroyujia.png'),logoUrl:require('../../statics/img/youziyouwei.png'),black:true},
                {imgUrl:require('../../statics/img/boroyujia.png'),logoUrl:require('../../statics/img/youziyouwei.png'),black:true},
                {imgUrl:require('../../statics/img/boroyujia.png'),logoUrl:require('../../statics/img/youziyouwei.png'),black:true},
                {imgUrl:require('../../statics/img/boroyujia.png'),logoUrl:require('../../statics/img/youziyouwei.png'),black:true},
                {imgUrl:require('../../statics/img/boroyujia.png'),logoUrl:require('../../statics/img/youziyouwei.png'),black:true},
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
.list{
    padding 200px 0
    width 100%
    height 100%
    background #fff
    header{
        font-size 40px
        font-weight bold
    }
    .container{
        margin 100px auto
        display flex
        justify-content space-evenly
        flex-wrap: wrap
        li{
            padding 20px 10px
            background #fff
            width 240px
            margin 20px auto
            box-shadow 0px 2px 10px rgba(0,0,0,0.13);
            border-radius 10px
            .shop-img{
                width 100%
            }
            .logo-img{
                width 100%
            }
        }
        
    }
}
</style>