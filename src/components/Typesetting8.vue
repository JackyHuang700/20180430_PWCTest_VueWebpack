<template>
  <div class="container-fluid mt-2">
    <div class="row">
      <div class="col-2 colStyle" v-for="(item, index) in typesettingList" :key="index">
        <a :href="item.href" target="_blank">
          <p>{{item.title}}</p>
          <img :src="require('@/assets/Typesetting8/' + item.imgSrc)" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'typesetting8',
  computed: {
    typesettingList () {
      return [
        {
          title: 'login',
          href: 'https://codepen.io/flannerydesigns/pen/dPYzNR',
          imgSrc: 'p0.jpg'
        },
        {
          title: 'login',
          href: 'https://codepen.io/l3lackMegas/pen/dJJNzp',
          imgSrc: 'p1.jpg'
        },
        {
          title: 'login',
          href: 'https://codepen.io/limon669/pen/YYPLQG',
          imgSrc: 'p2.jpg'
        },
        {
          title: 'login',
          href: 'https://codepen.io/dpinnick/pen/LjdLmo',
          imgSrc: 'p3.jpg'
        },
        {
          title: 'login',
          href: 'https://codepen.io/magnus16/pen/emNbav',
          imgSrc: 'p4.jpg'
        },
        {
          title: 'login',
          href: 'https://codepen.io/andytran/pen/GpyKLM',
          imgSrc: 'p5.jpg'
        },
        {
          title: 'login',
          href: 'https://codepen.io/andreasstorm/pen/kgoxd',
          imgSrc: 'p6.jpg'
        },
        {
          title: 'login',
          href: 'https://codepen.io/nedev/pen/EVaGqW',
          imgSrc: 'p7.jpg'
        },
        {
          title: 'login - [實作路由: /#/component10]',
          href: 'https://auth.91app.com/identity/login?signin=2d6fa3cee902766ecdfb3a102838997d',
          imgSrc: 'p22.jpg'
        },
        {
          title: 'login - [實作路由: /#/component9]',
          href: 'https://cms.straas.io/#/users/sign_in',
          imgSrc: 'p23.jpg'
        },
        {
          title: 'login - [實作路由: /#/component13]',
          href: 'https://www.youtube.com/playlist?list=PLwTi4JslRNFScEAPOJoLyxWFbJWdxcWEb',
          imgSrc: 'p24.png'
        },
        {
          title: 'infoCard',
          href: 'https://codepen.io/valentingalmand/pen/xGpRrW',
          imgSrc: 'p9.jpg'
        },
        {
          title: 'infoCard',
          href: 'https://codepen.io/meowwwls/pen/reQQeb',
          imgSrc: 'p10.jpg'
        },
        {
          title: 'infoCard',
          href: 'https://codepen.io/vincebrown/pen/emJoga',
          imgSrc: 'p11.jpg'
        },
        {
          title: 'infoCard',
          href: 'https://codepen.io/elcanziba/pen/evBZGB',
          imgSrc: 'p12.jpg'
        },
        {
          title: 'infoCard',
          href: 'https://codepen.io/kjbrum/pen/GWdeJX',
          imgSrc: 'p13.jpg'
        },
        {
          title: 'infoCard',
          href: 'https://codepen.io/skeurentjes/pen/lerjo',
          imgSrc: 'p14.jpg'
        },
        {
          title: 'infoCard',
          href: 'https://codepen.io/Momciloo/pen/meZMBm',
          imgSrc: 'p15.jpg'
        },
        {
          title: 'infoCard',
          href: 'https://codepen.io/jkh-wsd/pen/mRxLvb',
          imgSrc: 'p16.jpg'
        },
        {
          title: 'infoCard',
          href: 'https://codepen.io/MikeKelley/pen/VjqqJw',
          imgSrc: 'p17.jpg'
        },
        {
          title: 'infoCard',
          href: 'https://codepen.io/rubenl/pen/yYWEBy',
          imgSrc: 'p18.jpg'
        },
        {
          title: 'infoCard',
          href: 'https://codepen.io/themihel/pen/mywpEp',
          imgSrc: 'p19.jpg'
        },
        {
          title: 'infoCard',
          href: 'https://codepen.io/rosst/pen/jmpROG',
          imgSrc: 'p20.jpg'
        },
        {
          title: 'infoCard',
          href: '',
          imgSrc: 'p21.jpg'
        },
        /* 尚未填寫完成 */
        // {
        //   title: 'Sliding Sidebar  - [實作路由: /#/component14]',
        //   href: 'https://www.youtube.com/watch?v=3PZAlID3T78&list=PLwTi4JslRNFScEAPOJoLyxWFbJWdxcWEb&index=54&t=9s',
        //   imgSrc: ''
        // }
      ]
    }
  }
}
</script>
<style lang="css" scoped>
* {
  font-family: 'Noto Sans TC', sans-serif;
}

.colStyle {
  margin: 20px 0;
  /* box-shadow: 0 0 10px #666; */
  background-color: rgba(242, 227, 213, 0.362);
  padding: 0 5px;
}

.colStyle a {
  /* background-color: rgba(242, 227, 213, 0.9); */
  /* border: 1px solid red; */
  /* height: 100%;*/
  width: 100%;
  display: inline-block;
  padding: 10px;
}

.colStyle p {
  display: block;
  width: 100%;
  height: 100%;
  margin-bottom: 0px;
  font-style: 14px;
}

.colStyle img {
  max-width: 450px;
  width: 100%;
  height: auto;
}
</style>
