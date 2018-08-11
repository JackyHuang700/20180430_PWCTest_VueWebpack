<template>
  <div>
    <div class="wrap">
      <ul>
        <li>
          <img src="http://fakeimg.pl/200x150/" alt="">
          <p>測試文案測試文案測試文案</p>
        </li>
        <li><img src="http://fakeimg.pl/200x150/" alt="">
          <p>測試文案測試文案測試文案</p>
        </li>
        <li><img src="http://fakeimg.pl/200x150/" alt="">
          <p>測試文案測試文案測試文案</p>
        </li>
        <li>
          <img src="http://fakeimg.pl/200x150/" alt="">
          <p>測試文案測試文案測試文案</p>
        </li>
      </ul>
    </div>
    <div class="main">

    </div>
  </div>
</template>
<script>
export default {
  name: 'typesetting4'
}
</script>
<style lang="css" scoped>
* {
  box-sizing: border-box;
}

.wrap {
  width: 100%;
  max-width: 1080px;
  border: 2px solid red;
  margin: 0 auto;
  margin-top: 100px;
}

.wrap:after {
  content: '';
  display: block;
  clear: both;
}

.wrap ul {
  list-style: none;
  padding-left: 0px;
}

.wrap li {
  float: left;
  margin-right: 0.25%;
  margin-left: 0.25%;
  width: 24.5%;
  transition: width .4s linear;
}

.wrap img {
  border: 2px solid gray;
  padding: 10px;
  /* 有這個才會全展開 */
  width: 100%;
  max-width: 100%;
}

.wrap p {
  text-align: left;
  line-height: 110%;
  font-size: 11pt;
  font-weight: bold;
  margin: 5px;
}

.main {
  width: 100%;
  max-width: 1080px;
  height: 200px;
  background-color: #eee;
  margin: 0 auto;
  margin-top: 10px;
}

@media screen and (max-width: 767px) {
  .wrap li{
    width: 49.5%;
  }
}

@media screen and (max-width: 480px) {
  .wrap li{
    width: 99.5%;
    margin-top: 20px;
  }

  .wrap p{
    text-align: center;
  }
}

</style>
