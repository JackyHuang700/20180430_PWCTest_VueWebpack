<template>
  <div class="col-md-12">
    <section style="display:inline-block;">
      <h3>InfoCard</h3>
      <div class="card2">
        <div class="header card2StyleBGC">Header</div>
        <div class="body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eum porro ratione eius nemo commodi doloremque officia voluptates necessitatibus aut nulla magnam dignissimos maiores, debitis voluptas vel iste cumque pariatur consequatur veniam ut deserunt minus? Cum, aut optio. Nam voluptatem esse reiciendis accusamus consectetur, totam, ipsum ut reprehenderit nesciunt minima excepturi ab aspernatur doloribus odit dolore velit expedita commodi temporibus porro ducimus beatae eaque cupiditate! Ab, ex error consequatur debitis perspiciatis ut omnis optio molestiae alias commodi ad accusamus blanditiis facilis quos itaque nobis explicabo quis minima vel quam aliquam. Aspernatur, natus deserunt rem pariatur dicta officia excepturi repudiandae quisquam.</div>
        <div class="footer">Footer</div>
      </div>
    </section>
    <section style="display:inline-block;">
      <h3>InfoCard</h3>
      <div class="card2">
        <div class="header card2Style2BGC">Header</div>
        <div class="body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eum porro ratione eius nemo commodi doloremque officia voluptates necessitatibus aut nulla magnam dignissimos maiores, debitis voluptas vel iste cumque pariatur consequatur veniam ut deserunt minus? Cum, aut optio. Nam voluptatem esse reiciendis accusamus consectetur, totam, ipsum ut reprehenderit nesciunt minima excepturi ab aspernatur doloribus odit dolore velit expedita commodi temporibus porro ducimus beatae eaque cupiditate! Ab, ex error consequatur debitis perspiciatis ut omnis optio molestiae alias commodi ad accusamus blanditiis facilis quos itaque nobis explicabo quis minima vel quam aliquam. Aspernatur, natus deserunt rem pariatur dicta officia excepturi repudiandae quisquam.</div>
        <div class="footer">Footer</div>
      </div>
    </section>
    <section style="display:inline-block;">
      <h3>InfoCard</h3>
      <div class="card2">
        <div class="header card2Style3BGC">Header</div>
        <div class="body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eum porro ratione eius nemo commodi doloremque officia voluptates necessitatibus aut nulla magnam dignissimos maiores, debitis voluptas vel iste cumque pariatur consequatur veniam ut deserunt minus? Cum, aut optio. Nam voluptatem esse reiciendis accusamus consectetur, totam, ipsum ut reprehenderit nesciunt minima excepturi ab aspernatur doloribus odit dolore velit expedita commodi temporibus porro ducimus beatae eaque cupiditate! Ab, ex error consequatur debitis perspiciatis ut omnis optio molestiae alias commodi ad accusamus blanditiis facilis quos itaque nobis explicabo quis minima vel quam aliquam. Aspernatur, natus deserunt rem pariatur dicta officia excepturi repudiandae quisquam.</div>
        <div class="footer">Footer</div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'component8_15'
}
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
  padding: 0;
  margin: 0;
}

/* 三 */
.card2 {
  width: 100%;
  max-width: 450px;
  cursor: pointer;
  box-shadow: 0px 2px 2px #dfe6f0;
  text-align: left;
}

.card2 .header {
  padding: 10px 20px;
  min-height: 50px;
  line-height: 50px;
  height: auto;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  border-radius: 5px 5px 0 0;
  color: white;
  /* border: 1px solid red; */
}

.card2 .body {
  color: #bdc5cd;
  font-weight: 400;
  padding: 10px 20px;
  font-size: 14px;
  letter-spacing: 1px;
}

.card2 .footer {
  min-height: 50px;
  line-height: 50px;
  height: auto;
  border-radius: 0 0 5px 5px;
  /* border: 1px solid red; */
  background-color: #f4f6f8;
  color: #666;
  font-size: 15px;
  padding: 0 10px;
  font-weight: 500;
}

.card2StyleBGC {
  background-color: #80ace9;
}
.card2Style2BGC {
  background-color: #68cf8c;
}
.card2Style3BGC {
  background-color: #ed7070;
}
</style>