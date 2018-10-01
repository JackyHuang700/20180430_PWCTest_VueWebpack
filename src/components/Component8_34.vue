
<template>
  <div class="col-md-12">
    <div class="col-md-12 text-center mx-5">
      <a href="https://spa.e-record.com.tw/login?href=https%3A%2F%2Fspa.e-record.com.tw%2Fhandle-sign%2F24741882" target="_blank">
        <h5>快記資訊</h5>
      </a>
    </div>
    <div class="col-md-12">
      <div class="ersCardShadow" style="overflow: hidden;">
        <div class="ersRemindGroup">
          <h5>系統公告</h5>
          <h6>
            <div>
              <a href="javascript:;"> E-record為提升服務品質，將於107/08/27（一）上午10：30至11：00，進行系統更版與維護。</a>
            </div>
          </h6>
        </div>
      </div>
      <div class="ersCardShadow" style="overflow: hidden;">
        <div class="ersRemindGroup">
          <h5>系統公告</h5>
          <h6>
            <div>
              <a href="javascript:;"> E-record為提升服務品質，將於107/08/27（一）上午10：30至11：00，進行系統更版與維護。</a>
            </div>
          </h6>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'component8_34'
}
</script>
<style lang="scss" scoped>
.ersCardShadow {
  overflow: hidden;
  padding: 0;
  margin: 10px;
  box-sizing: border-box;
  background-color: hsla(0, 0%, 100%, 0.5);
  border-bottom: 2px solid #a8b7d2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: 0.2s;
  width: 100%;
  max-width: 350px;
  border-radius: 4px;
  display: inline-block;

  &:hover {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
    background-color: #fff;
  }

  > * {
    box-sizing: border-box;
  }

  .ersRemindGroup {
    position: relative;
    right: 0;
    padding: 6px 15px;

    h5 {
      font-size: 15px;
      font-weight: 600;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.1;
    }

    a {
      color: #337ab7;
      text-decoration: none;
      background-color: transparent;
      transition: color 0.3s linear;
      font-weight: 400;
      font-size: 14px;

      &:hover {
        outline: 0;
        color: #23527c;
      }
    }
  }
}
</style>
