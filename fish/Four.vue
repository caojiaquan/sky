<template>
    <div>
        <aaa></aaa>
        <div id="container-four" class="wrapper">
            <ul>
                <li><span>登录帐号</span><span>》</span></li>
                <li><span>我的歌单</span><span>》</span></li>
                <li><span>我的收藏</span><span>》</span></li>
                <li><span>设置</span><span>》</span></li>
                <li><span>问题于建议</span><span>》</span></li>
                <li><span>检测更新</span><span>》</span></li>
                <li><span>关于</span><span>》</span></li>
                <li><span>作者详情</span><span>》</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Nav from './Nav.vue'
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components:{
            aaa:Nav
        }
    }
</script>

<style>
    @import '../assets/css/common.css';
    @import '../assets/css/index.css';
    @import '../assets/css/index2.css';
</style>