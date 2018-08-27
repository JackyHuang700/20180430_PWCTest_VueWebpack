<template>
  <div class="col-md-3 text-left pl-5">
    <div class="text-center mb-5">
      <a href="https://www.youtube.com/watch?v=BKhoo6RSEDU&t=24s&index=42&list=PLwTi4JslRNFScEAPOJoLyxWFbJWdxcWEb" target="_blank">
        <h2>Move Placeholder To Top on Focus And While Typing</h2>
      </a>
    </div>
    <div>
      <div class="box">
        <h2>Contact Us</h2>
        <form action="">
          <div>
            <input type="text" required>
            <label for="">Name</label>
          </div>
          <div>
            <input type="text" required>
            <label for="">Email</label>
          </div>
          <div>
            <textarea type="text" required></textarea>
            <label for="">Message</label>
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'component8_8'
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
}

/**/
$templateColor: #f7497d;
.box {
  width: 400px;
  background-color: #fff;
  padding: 40px;
  border: 1px solid rgca(0, 0, 0, 0.1);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  h2 {
    margin: 0 auto 40px;
    padding: 0;
    color: $templateColor;
  }

  input {
    padding: 10px 0;
    margin-bottom: 30px;
  }

  textarea {
    height: 80px;
    padding: 10px 0;
    margin-bottom: 40px;
  }

  input,
  textarea {
    box-sizing: border-box;
    width: 100%;
    box-shadow: none;
    outline: none;
    border: none;
    border-bottom: 2px solid #999;

    // 移動
    &:focus ~ label,
    // 搭配 required tag
    &:valid ~ label{
      top: -12px;
      left: 0;
      color: $templateColor;
      font-size: 12px;
      font-weight: bold;
    }

    &:focus, 
    &:valid{
      border-bottom: 2px solid $templateColor;
    }
  }

  [type='submit'] {
    border: none;
    cursor: pointer;
    background-color: $templateColor;
    color: #fff;
    margin-bottom: 0;
    width: 100%;
    padding: 10px 0;
  }

  form {
    div {
      position: relative;

      label {
        position: absolute;
        top: 10px;
        left: 0;
        color: #999;
        transition: top .2s ease-in-out;
        pointer-events: none;
      }
    }
  }
}
</style>