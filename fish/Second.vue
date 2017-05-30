<template>
    <div>
        <aaa></aaa>
        <div id="container-second" class="wrapper">
            <div id="container-second-nav">
                <input type="text" placeholder="&nbsp;&nbsp;搜索歌曲"/>
                <img src="../assets/images/search.png" alt=""/>
            </div>
            <h3 id="container-second-nav-font">巅峰榜</h3>
            <div id="container-second-content">
                <div class="empty-box">
                    <img src='' alt=""/>
                    <ul>
                        <li><span class="font-left"></span><span class="font-right"></span></li>
                    </ul>
                </div>
            </div>
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