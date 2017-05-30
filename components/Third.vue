<template>
    <div>
        <aaa></aaa>
        <div id="container-third" class="wrapper">
            <div id="container-third-nav">
                <input type="text" placeholder="&nbsp;&nbsp;搜索歌曲"/>
                <img src="../assets/images/search.png" alt=""/>
            </div>
            <div id="container-third-banner">
            </div>
            <h3 id="container-third-font">全部歌曲</h3>
            <ul id="container-third-content">
                <li><img src="" alt=""/><span>songname</span></li>
                <li><img src="" alt=""/><span>songname</span></li>
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