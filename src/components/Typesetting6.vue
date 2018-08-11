<template>
  <div>
    <div class="myContainer">
      <header>
        <h1 class="logo">
          <a href="#">公司LOGO</a>
        </h1>
        <ul class="menu">
          <li>
            <a href="#">公司簡介</a>
          </li>
          <li>
            <a href="#">專業服務</a>
          </li>
          <li>
            <a href="#">新聞與活動</a>
          </li>
          <li>
            <a href="#">活動花絮</a>
          </li>
          <li>
            <a href="#">聯繫我們</a>
          </li>
        </ul>
      </header>
      <section>
        <div class="content">
          <h2>新聞標題</h2>
          <p>六角學院新聞 (2016-06-21 09:06)</p>
          <p>生藝本技得童總信。上能表有能已位字高企斷他？神些的司……特了又他的，了象大初小研車對加、間四比，想年訴選年：三車寫教。他成濟位像知他氣程表事。聽制起又雲師山，重不能界使我傷！溫統接視情期事……況無沒指超及世。</p>
          <p>列文一有愛的空金代電一前卻歡電個魚天讀狀各童流處開起那朋。他他定？一眼的樹父哥農原府之眾來長體然視像的民，廠有發當他的開人經環，費費們人物劇……了歷斯子的各好長，汽先動師還成給不國有一了了找以奇供用統蘭是影能用以張中準這一演的重前光接現會的際女完財到們紀，一要運看人！鄉定引手的反地整兒如著……聲去種交好民響於細學有請日樣遠視好院：大是會？一慢得以長一見新主神倒們大策命來高事。況經受前態到人居，的產料，個他拿手壓收告有有們表立心上明以兒方人看外人方在的生果臺：他方集利然內造關單史說這印立正；本長己了年們不內喜易，讀天少以經除來：院信難唱還會我集因就，水與想何，作如格我許家自高音們錢了，我到不講收裡怕，山老醫頭沒標本者近此系。</p>
        </div>
        <div class="sidebar">
          <img src="http://fakeimg.pl/300x225/" alt="">
          <img src="http://fakeimg.pl/300x225/" alt="">
          <img src="http://fakeimg.pl/300x225/" alt="">
        </div>
      </section>
      <footer>Copyright© 2016</footer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'typesetting6'
}
</script>
<style lang="css" scoped>
* {
  box-sizing: border-box;
}

.myContainer {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  margin-top: 100px;
}

header {
  height: 350px;
  width: 100%;
  position: relative;
  background-color: rgba(255, 0, 0, 0.063);
}

header:after{
  content: '';
  display: block;
  clear: both;
}

header .logo {
  position: absolute;
  left: 0px;
  top: 30px;

  border: 1px solid red;
}

header .logo a {
  width: 250px;
  max-width: 100%;
  display: block;
  height: 250px;
  background: url('http://fakeimg.pl/250x250/') no-repeat;
  text-indent: -9999px;
}

header .menu {
  float: right;
  padding: 0;
  margin: 0;
  margin-top: 30px;
  border: 1px solid green;
}

header .menu:after{
  content: '';
  display: block;
  clear: both;
}

header .menu li {
  list-style: none;
  width: 100px;
  float: left;
  display: block;
  background-color: #3399ff;
  border-right: 2px solid white;
}

header .menu a {
  color: white;
  display: block;
  font-weight: bold;
  text-align: center;
  height: 30px;
  line-height: 30px;
  text-decoration: none;
}

section {
  margin-top: 20px;
  /* height: calc(100% - 350px -23px); */
  background-color: rgba(22, 255, 5, 0.083);
}

section:after {
  content: '';
  display: block;
  clear: both;
}

section .content {
  float: left;
  text-align: left;
  width: 75%;
  padding: 15px;
  border: 2px solid #636363;
  border-radius: 5px;
}

section .content h2 {
  font-weight: bold;
  font-size: 26px;
  padding: 30px 0 20px 0;
}

section .content p {
  letter-spacing: 1pt;
  line-height: 1.8;

  padding-bottom: 30px;
}

section .sidebar {
  float: left;
  width: 20%;
  margin-left: 5%;
  border: 2px solid #636363;
  border-radius: 5px;
  padding: 5px;
}

section .sidebar img {
  margin-bottom: 10px;
  display: block;
  max-width: 100%;
}

footer {
  margin-top: 20px;
      height: 35px;
    line-height: 35px;
  width: 100%;
  background-color: rgba(65, 105, 225, 0.131);
  padding: 5px auto;
  color: #707070;
  text-align: center;
}

@media screen and (max-width: 768px) {

header{
  height: auto;
}
  
  header .logo {
    position: relative;
    display: block;
    margin: 0 auto;
    text-align: center;
    width: 150px;
  }

  header .logo a {
    width: 150px;
    height: 170px;
    background: url('http://fakeimg.pl/150x150/') no-repeat;
  }

  header .menu {
    float: none;
  }

  header .menu li {
    width: 92%;
    margin-bottom: 10px;
    margin-left: 4%;
    margin-right: 4%;
  }


  section .content{
    float: none;
    width: 100%;
    display: block;
  }

  section .sidebar{
    float: none;
    margin: 0 auto;
    margin-top: 20px;
  }

}
</style>
