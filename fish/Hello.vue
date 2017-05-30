<template>
    <div id="container" class="wrapper">
        <aaa></aaa>
        <div id="banner">
        </div>
        <div id="news">
            <div id="news-ipt">
                <input type="text" placeholder="&nbsp;&nbsp;搜索歌曲"/>
                <img src="../assets/images/1.jpg" alt=""/>
            </div>
        </div>
        <div id="classify">
            <a href="">全部歌手</a>
            <a href="">歌曲分类</a>
        </div>
        <div id="content">
            <h3 id="title">新歌速递</h3>
            <div id="content-imgs">
                <div data-star="">
                    <img src="" alt=""/>
                    <span>15d1f5df</span>
                </div>
                <div data-star="">
                    <img src="" alt=""/>
                    <span>31516515</span>
                </div>
                <div data-star="">
                    <img src="" alt=""/>
                    <span>31516515</span>
                </div>
            </div>
        </div>
        <div id="marketing">
            <h3>每日推介</h3>
            <h3>更多</h3>
            <div id="marketing-content">
                <ul>
                    <img src="" alt=""/>
                </ul>
                <ul id="marketing-content-font">
                    <li><span class="font-left">雨天</span><span class="font-right">杰伦</span></li>
                    <li><span class="font-left">雨天</span><span class="font-right">杰伦</span></li>
                    <li><span class="font-left">雨天</span><span class="font-right">杰伦</span></li>
                </ul>
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
    mounted(){
      this.get();
    },
    methods:{
      get(){
          console.log(this.songList);
      }
    },
    components:{
        aaa:Nav,
        props:['songList']
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import '../assets/css/common.css';
    @import '../assets/css/index.css';
    @import '../assets/css/index2.css';
</style>
