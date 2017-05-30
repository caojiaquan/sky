<template>
    <div id="nav">
        <h1><router-link to="/main" class="nav-font selected">首页</router-link></h1>
        <h1><router-link to="/second" class="nav-font">推介</router-link></h1>
        <h1><router-link to="/third" class="nav-font">歌单</router-link></h1>
        <h1><router-link to="/four" class="nav-font">我的</router-link></h1>
    </div>
</template>

<script>
    export default {
        name: 'nav',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import '../assets/css/common.css';
    @import '../assets/css/index.css';
    @import '../assets/css/index2.css';
</style>