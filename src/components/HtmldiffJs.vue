<template>
  <div class="container-fluid">
    <div class="row">

      <div class="col-12">
        <div id="oldHtml">
          <p>Some
            <em>old</em> html here</p>
        </div>

        <div id="newHtml">
          <p>Some
            <b>new</b> html goes here</p>
        </div>

        <div id="htmlDiff"></div>

      </div>
    </div>

    <div class="row" id="compareTemplate">

      <!-- 基本訊息 -->
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>基本信息
          </div>
          <div class="card-body">

            <!-- 主鍵 -->
            <input data-val="true" data-val-required="The Id field is required." id="Id" name="Id" type="hidden" value="2">

            <div class="form-row">
              <div class="form-group col-sm-3">
                <!-- 銷貨單號 -->
                <label class="" for="OrderNumber">銷售單號</label>
                <label for="" class="form-control">1805030001</label>
                <!-- <input class="form-control" id="OrderNumber" name="OrderNumber" readonly="readonly" type="text" value="1805030001"> -->
              </div>
              <div class="form-group col-sm-3">
                <!-- 部門 -->
                <label class="" for="Department">部門</label>
                <select class="form-control" id="Department" name="Department">
                  <option selected="selected" value="PRODUCT">產品組</option>
                  <option value="EN">英語組</option>
                  <option value="DE">德語組</option>
                  <option value="JP">日語組</option>
                  <option value="PH">菲律賓組</option>
                </select>

              </div>
              <div class="form-group col-sm-3">
                <!-- 持有人 -->
                <label class="" for="Owner">持有人</label>
                <select class="form-control" id="Owner" name="Owner">
                  <option selected="selected" value="0e80f9c4-c939-4198-8eba-152d27785716">系統監控人員 - 產品組</option>
                  <option value="2f8a8438-85e8-40ea-bfb1-5f07b6d7609e"> - </option>
                  <option value="6f84c8c6-a4e9-4833-a7db-6c624d697bb3"> - </option>
                  <option value="a95087f1-5ea6-4b9e-9945-3bfc9fe9fbae"> - </option>
                  <option value="b185eab7-9007-4534-98e3-7f452712f5b3">業務陳主管 - 產品組</option>
                  <option value="b1a3deea-fd38-493c-82f7-c9bb87ff51c7"> - </option>
                  <option value="d755f09e-4c8f-454c-b22f-c6f8d2fa4431">業務李 - 產品組</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <!-- 市場 -->
                <label class="" for="Market">市場</label>
                <select class="form-control" id="Market" name="Market">
                  <option value="德语市场">德语市场</option>
                  <option value="菲律宾市場">菲律宾市場</option>
                  <option value="南非市场">南非市场</option>
                  <option selected="selected" value="欧美市场">欧美市场</option>
                  <option value="日本市場">日本市場</option>
                </select>
              </div>

              <div class="form-group col-sm-3">
                <!-- 訂單渠道 -->
                <label class="" for="OrderChannel">訂單渠道</label>
                <select class="form-control" id="OrderChannel" name="OrderChannel">
                  <option value="magento">magento</option>
                  <option selected="selected" value="rakuten">rakuten</option>
                  <option value="批發">批發</option>
                  <option value="線下">線下</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <!-- 店鋪名稱 -->
                <label class="" for="ShopName">店鋪名稱</label>
                <select class="form-control" id="ShopName" name="ShopName">
                  <option value="16">COCO EN批发组</option>
                  <option value="22">舊金山店</option>
                  <option value="23">舊金山海灣店</option>
                  <option value="7">CN批发组</option>
                  <option value="8">LB EN 批发组</option>
                  <option value="COCO DE 代理">COCO DE 代理</option>
                  <option value="CocoMelody Physical Store 01, JP">東京日本橋店</option>
                  <option value="CocoMelody Physical Store 02, JP">東京大塚店</option>
                  <option value="CocoMelody Physical Store 03, JP">新潟店</option>
                  <option value="CocoMelody Physical Store CA, US">美国店</option>
                  <option value="CocoMelody Physical Store Fukui, JP">福井店</option>
                  <option value="CocoMelody Physical Store Fukuoka, JP">福岡店</option>
                  <option value="CocoMelody Physical Store Ishikawa, JP">石川店</option>
                  <option selected="selected" value="CocoMelody Physical Store Kyoto, JP">京都店</option>
                  <option value="CocoMelody Physical Store Mie, JP">三重店</option>
                  <option value="CocoMelody Physical Store Nagoya, JP">名古屋店</option>
                  <option value="CocoMelody Physical Store Osaka, JP">大阪店</option>
                  <option value="CocoMelody Physical Store Tokyo, JP">东京店</option>
                  <option value="CocoMelody.AT">奥地利店</option>
                  <option value="CocoMelody.co.za Online Store">CocoMelody.co.za</option>
                  <option value="CocoMelody.co.za Store">南非店</option>
                  <option value="CocoMelody.com">CocoMelody.com</option>
                  <option value="CocoMelody.com SF Online Store">SF Online Store</option>
                  <option value="CocoMelody.com SF Store">SF Store</option>
                  <option value="CocoMelody.de">CocoMelody.de</option>
                  <option value="CocoMelody.de 線下">德国店</option>
                  <option value="CocoMelody.jp">CocoMelody.jp</option>
                  <option value="CocoMelody.ph">CocoMelody.ph</option>
                  <option value="LA BPD store">LA BPD store</option>
                  <option value="LA WD Store">LA WD Store</option>
                  <option value="LandyBridal B2B, JP">日语批发</option>
                  <option value="LandyBridal.jp">LandyBridal.jp</option>
                  <option value="Lazada.com.ph">Lazada.com.ph</option>
                  <option value="Rakuten COCO">Rakuten COCO</option>
                  <option value="Rakuten LB">Rakuten LB</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <!-- 店鋪訂單號 -->
                <label class="" for="ShopOrderNumber">店鋪訂單編號</label>
                <input class="form-control" id="ShopOrderNumber" name="ShopOrderNumber" type="text" value="1805036596">
              </div>
              <div class="form-group col-sm-3">
                <!-- 電商訂單狀態 -->
                <label class="" for="OrderStatus">電商訂單狀態</label>
                <input class="form-control" id="OrderStatus" name="OrderStatus" type="text" value="processing">
              </div>

              <div class="form-group col-sm-3">
                <!-- 處裡日期 -->
                <label class="" for="ProcessingDate">處理日期</label>
                <input class="form-control" data-val="true" data-val-required="The 處理日期 field is required." id="ProcessingDate" name="ProcessingDate" type="text" value="2018/5/3 0:00:00">
              </div>
              <div class="form-group col-sm-3">
                <!-- 客戶性質 -->
                <label class="" for="CustomerNature">客戶性質</label>
                <select class="form-control" id="CustomerNature" name="CustomerNature">
                  <option value="DF">店铺高级定制客人</option>
                  <option value="GJPF">高级零售型批发客人</option>
                  <option value="GWDF">国外店铺客人</option>
                  <option value="PT">平台零售客人</option>
                  <option selected="selected" value="PTPF">普通批发客人</option>
                  <option value="PTPF1">普通零售型批发客人</option>
                  <option value="WGJ">网站高级定制客人</option>
                  <option value="WZ">网站零售客人</option>
                  <option value="YY">样衣客人</option>
                  <option value="DF">店铺高级定制客人</option>
                  <option value="GJPF">高级零售型批发客人</option>
                  <option value="GWDF">国外店铺客人</option>
                  <option value="PT">平台零售客人</option>
                  <option selected="selected" value="PTPF">普通批发客人</option>
                  <option value="PTPF1">普通零售型批发客人</option>
                  <option value="WGJ">网站高级定制客人</option>
                  <option value="WZ">网站零售客人</option>
                  <option value="YY">样衣客人</option>
                </select>
              </div>
              <div class="form-group col-sm-3">

                <!-- 客戶郵件 -->
                <label class="" for="CustomerEmail">客戶郵件</label>
                <input class="form-control" id="CustomerEmail" name="CustomerEmail" type="text" value="customer5487@gmail.com">

              </div>
              <div class="form-group col-sm-3">
                <!-- 客戶 -->
                <label class="" for="CustomerName">客戶姓名</label>
                <label class="" for="">King Wu</label>
                <!-- <input class="form-control" id="CustomerName" name="CustomerName" type="text" value="" > -->
              </div>

              <div class="form-group col-sm-3">
                <!-- 客戶代碼 -->
                <label class="" for="CustomerCode">客戶代碼</label>
                <input class="form-control" id="CustomerCode" name="CustomerCode" type="text" value="">
              </div>
              <div class="form-group col-sm-3">
                <!-- 客戶電話 -->
                <label class="" for="CustomerPhone">客戶電話</label>
                <input class="form-control" id="CustomerPhone" name="CustomerPhone" type="text" value="0414929770">
              </div>
              <div class="form-group col-sm-3">
                <!-- 傳真 -->
                <label class="" for="CustomerFax">客戶傳真</label>
                <input class="form-control" id="CustomerFax" name="CustomerFax" type="text" value="">
              </div>
              <div class="form-group col-sm-3">
                <!-- 訂單類型 -->
                <label class="" for="OrderType">訂單類型</label>
                <select class="form-control" id="OrderType" name="OrderType">
                  <option value="BZ">標準批量訂單</option>
                  <option value="CZ">重做訂單</option>
                  <option value="JS">寄售訂單</option>
                  <option value="KS">快速發貨訂單</option>
                  <option selected="selected" value="LS">零售訂單</option>
                  <option value="MF">免費訂單</option>
                  <option value="PF">批發訂單</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <!-- 包装方式 -->
                <label class="" for="PackageType">包裝方式</label>
                <select class="form-control" id="PackageType" name="PackageType">
                  <option value="01">塑料袋包装</option>
                  <option value="02">泡沫包装</option>
                  <option selected="selected" value="03">硬纸箱包装</option>
                  <option value="04">COCO包装盒</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <!-- 客戶下單日期 -->
                <label class="" for="OrderDate">下單日期</label>
                <input class="form-control" data-val="true" data-val-required="The 下單日期 field is required." id="OrderDate" name="OrderDate" type="text" value="2018/5/3 9:44:00">
              </div>
              <div class="form-group col-sm-3">
                <!-- 建立來源 -->
                <label class="" for="CreateSource">建立來源</label>
                <select class="form-control" id="CreateSource" name="CreateSource">
                  <option selected="selected" value="0">無</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <!-- 關聯訂單 -->
                <label class="" for="AssociatedOrderNumber">關聯訂單</label>
                <select id="AssociatedOrderNumber" name="AssociatedOrderNumber" class="js-data-example-ajax form-control select2-hidden-accessible" data-select2-id="AssociatedOrderNumber" tabindex="-1" aria-hidden="true">
                  <option value="" selected="selected" data-select2-id="1">請選擇</option>
                </select>
                <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="2" style="width: 317.25px;">
                  <span class="selection">
                    <span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-AssociatedOrderNumber-container">
                      <span class="select2-selection__rendered" id="select2-AssociatedOrderNumber-container" role="textbox" aria-readonly="true" title="請選擇">請選擇</span>
                      <span class="select2-selection__arrow" role="presentation">
                        <b role="presentation"></b>
                      </span>
                    </span>
                  </span>
                  <span class="dropdown-wrapper" aria-hidden="true"></span>
                </span>
              </div>
              <div class="form-group col-sm-12">
                <!-- 電商處理留言 -->
                <label class="" for="ProcessingMessage">電商處理留言</label>
                <textarea class="form-control" cols="250" id="ProcessingMessage" name="ProcessingMessage" rows="3"></textarea>

              </div>

              <div class="form-group col-sm-12">
                <!-- 備註 -->
                <label class="" for="Remarks">備註</label>
                <textarea class="form-control" cols="250" id="Remarks" name="Remarks" rows="3"></textarea>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- 帳單訊息 -->
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>帳單訊息
          </div>
          <div class="card-body">
            <div class="form-row">

              <div class="form-group col-sm-3">
                <!-- 賬單人 -->
                <label class="" for="Biller">帳單人</label>
                <input class="form-control" id="Biller" name="Biller" type="text" value="Kylie Jordan">
              </div>

              <div class="form-group col-sm-3">
                <!-- 賬單電話 -->
                <label class="" for="BillPhone">帳單電話</label>
                <input class="form-control" id="BillPhone" name="BillPhone" type="text" value="0414929770">
              </div>

              <div class="form-group col-sm-3"></div>

              <div class="form-group col-sm-3"></div>

              <div class="form-group col-sm-3">
                <!-- 賬單郵編 -->
                <label class="" for="BillZip">帳單郵編</label>
                <input class="form-control" id="BillZip" name="BillZip" type="text" value="5114">
              </div>
              <div class="form-group col-sm-3">
                <!-- 賬單省 -->
                <label class="" for="BillProvince">帳單省</label>
                <input class="form-control" id="BillProvince" name="BillProvince" type="text" value="South Australia">
              </div>
              <div class="form-group col-sm-3">
                <!-- 賬單市 -->
                <label class="" for="BillCity">帳單市</label>
                <input class="form-control" id="BillCity" name="BillCity" type="text" value="Smithfield">
              </div>

              <div class="form-group col-sm-3">
                <!-- 賬單街道 -->
                <label class="" for="BillStreet">帳單街道</label>
                <input class="form-control" id="BillStreet" name="BillStreet" type="text" value="32 Moir St">

              </div>

              <div class="form-group col-sm-12">
                <!-- 賬單地址 -->
                <label class="" for="BillAddress">賬單地址</label>
                <input class="form-control" id="BillAddress" name="BillAddress" type="text" value="32 Moir St, Smithfield, South Australia, AU">

              </div>

              <div class="col-12">
                <button type="button" id="CopyReceiveInfo" class="btn btn-primary">帳單同收貨資訊</button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- 物流訊息 -->
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>物流訊息
          </div>
          <div class="card-body">

            <div class="form-row">
              <div class="form-group col-sm-3">
                <!-- 國家代碼 -->
                <label class="" for="Country">國家代碼</label>
                <select class="form-control" id="Country" name="Country">
                  <option value="AD">Andorra</option>
                  <option value="AE">United Arab Emir.</option>
                  <option value="AF">Afghanistan</option>
                  <option value="AG">Antigua/Barbuda</option>
                  <option value="AI">Anguilla</option>
                  <option value="AL">Albania</option>
                  <option value="AM">Armenia</option>
                  <option value="AN">Dutch Antilles</option>
                  <option value="AO">Angola</option>
                  <option value="AQ">Antarctica</option>
                  <option value="AR">Argentina</option>
                  <option value="AS">Samoa, American</option>
                  <option value="AT">Austria</option>
                  <option value="AU">Australia</option>
                  <option value="AW">Aruba</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BA">Bosnia</option>
                  <option value="BB">Barbados</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BE">Belgium</option>
                  <option value="BF">Burkina</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BH">Bahrain</option>
                  <option value="BI">Burundi</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermuda</option>
                  <option value="BN">Brunei Dar</option>
                  <option value="BO">Bolivia</option>
                  <option value="BQ">Bonaire, Sint Eustat</option>
                  <option value="BR">Brazil</option>
                  <option value="BS">Bahamas</option>
                  <option value="BT">Bhutan</option>
                  <option value="BV">Bouvet Island</option>
                  <option value="BW">Botswana</option>
                  <option value="BY">Belarus</option>
                  <option value="BZ">Belize</option>
                  <option value="CA">Canada</option>
                  <option value="CC">Coconut Islands</option>
                  <option value="CD">Congo, The Democrati</option>
                  <option value="CF">Central African Rep</option>
                  <option value="CG">Congo</option>
                  <option value="CH">Schweiz</option>
                  <option value="CI">Ivory Coast</option>
                  <option value="CK">Cook Islands</option>
                  <option value="CL">Chile</option>
                  <option value="CM">Cameroon</option>
                  <option value="CN">China</option>
                  <option value="CO">Colombia</option>
                  <option value="CR">Costa Rica</option>
                  <option value="CU">Cuba</option>
                  <option value="CV">Cape Verde</option>
                  <option value="CW">Cura?ao</option>
                  <option value="CX">Christmas Island</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czech Republic</option>
                  <option value="DE">Germany</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DK">Denmark</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="DZ">Algeria</option>
                  <option value="EC">Ecuador</option>
                  <option value="EE">Estonia</option>
                  <option value="EG">Egypt</option>
                  <option value="EH">West Sahara</option>
                  <option value="EL">Greece</option>
                  <option value="ER">Eritrea</option>
                  <option value="ES">Spain</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FI">Finland</option>
                  <option value="FJ">Fiji</option>
                  <option value="FK">Falkland Islands</option>
                  <option value="FM">Micronesia</option>
                  <option value="FO">Faroe Islands</option>
                  <option value="FR">France</option>
                  <option value="GA">Gabon</option>
                  <option value="GB">United Kingdom</option>
                  <option value="GD">Grenada</option>
                  <option value="GE">Georgia</option>
                  <option value="GF">French Guayana</option>
                  <option value="GH">Ghana</option>
                  <option value="GI">Gibraltar</option>
                  <option value="GL">Greenland</option>
                  <option value="GM">Gambia</option>
                  <option value="GN">Guinea</option>
                  <option value="GP">Guadeloupe</option>
                  <option value="GQ">Equatorial Guinea</option>
                  <option value="GS">S. Sandwich Ins</option>
                  <option value="GT">Guatemala</option>
                  <option value="GU">Guam</option>
                  <option value="GW">Guinea</option>
                  <option value="GY">Guyana</option>
                  <option value="HK">Hong Kong</option>
                  <option value="HM">Heard/McDnld Islnds</option>
                  <option value="HN">Honduras</option>
                  <option value="HR">Croatia</option>
                  <option value="HT">Haiti</option>
                  <option value="HU">Hungary</option>
                  <option value="ID">Indonesia</option>
                  <option value="IE">Ireland</option>
                  <option value="IL">Israel</option>
                  <option value="IN">India</option>
                  <option value="IQ">Iraq</option>
                  <option value="IR">Iran</option>
                  <option value="IS">Iceland</option>
                  <option value="IT">Italy</option>
                  <option value="JM">Jamaica</option>
                  <option value="JO">Jordan</option>
                  <option value="JP">Japan</option>
                  <option value="KE">Kenya</option>
                  <option value="KH">Cambodia</option>
                  <option value="KI">Kiribati</option>
                  <option value="KM">Comoros</option>
                  <option value="KN">St Kitts &amp; Nevis</option>
                  <option value="KP">North Korea</option>
                  <option value="KR">South Korea</option>
                  <option selected="selected" value="KW">Kuwait</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="LA">Laos</option>
                  <option value="LB">Lebanon</option>
                  <option value="LC">St. Lucia</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="LR">Liberia</option>
                  <option value="LS">Lesotho</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="LV">Latvia</option>
                  <option value="LY">Libya</option>
                  <option value="MA">Morocco</option>
                  <option value="MC">Monaco</option>
                  <option value="MD">Moldavia</option>
                  <option value="MG">Madagascar</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MK">Republic of Macedoni</option>
                  <option value="ML">Mali</option>
                  <option value="MM">Myanmar</option>
                  <option value="MN">Mongolia</option>
                  <option value="MO">Macau</option>
                  <option value="MP">N.Mariana Island</option>
                  <option value="MQ">Martinique</option>
                  <option value="MR">Mauretania</option>
                  <option value="MS">Montserrat</option>
                  <option value="MT">Malta</option>
                  <option value="MU">Mauritius</option>
                  <option value="MV">Maldives</option>
                  <option value="MW">Malawi</option>
                  <option value="MX">Mexico</option>
                  <option value="MY">Malaysia</option>
                  <option value="MZ">Mozambique</option>
                  <option value="NA">Namibia</option>
                  <option value="NC">New Caledonia</option>
                  <option value="NE">Niger</option>
                  <option value="NF">Norfolk Island</option>
                  <option value="NG">Nigeria</option>
                  <option value="NI">Nicaragua</option>
                  <option value="NL">Netherlands</option>
                  <option value="NO">Norway</option>
                  <option value="NP">Nepal</option>
                  <option value="NR">Nauru</option>
                  <option value="NU">Niue Islands</option>
                  <option value="NZ">New Zealand</option>
                  <option value="OM">Oman</option>
                  <option value="PA">Panama</option>
                  <option value="PE">Peru</option>
                  <option value="PF">French Polynesia</option>
                  <option value="PG">Papua New Guinea</option>
                  <option value="PH">Philippines</option>
                  <option value="PK">Pakistan</option>
                  <option value="PL">Poland</option>
                  <option value="PM">St.Pier,Miquel.</option>
                  <option value="PN">Pitcairn Islands</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="PT">Portugal</option>
                  <option value="PW">Palau</option>
                  <option value="PY">Paraguay</option>
                  <option value="QA">Qatar</option>
                  <option value="RO">Romania</option>
                  <option value="RU">Russian Fed.</option>
                  <option value="RW">Ruanda</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="SB">Solomon Islands</option>
                  <option value="SC">Seychelles</option>
                  <option value="SD">Sudan</option>
                  <option value="SE">Sweden</option>
                  <option value="SG">Singapore</option>
                  <option value="SI">Slovenia</option>
                  <option value="SJ">Svalbard</option>
                  <option value="SK">Slovakia</option>
                  <option value="SL">Sierra Leone</option>
                  <option value="SM">San Marino</option>
                  <option value="SN">Senegal</option>
                  <option value="SO">Somalia</option>
                  <option value="SR">Suriname</option>
                  <option value="ST">S.Tome,Principe</option>
                  <option value="SV">El Salvador</option>
                  <option value="SX">Sint Maarten</option>
                  <option value="SY">Syria</option>
                  <option value="SZ">Swaziland</option>
                  <option value="TD">Chad</option>
                  <option value="TF">French S.Territ</option>
                  <option value="TG">Togo</option>
                  <option value="TH">Thailand</option>
                  <option value="TJ">Tajikstan</option>
                  <option value="TK">Tokelau Islands</option>
                  <option value="TM">Turkmenistan</option>
                  <option value="TN">Tunisia</option>
                  <option value="TO">Tonga</option>
                  <option value="TP"></option>
                  <option value="TR">Turkey</option>
                  <option value="TT">Trinidad,Tobago</option>
                  <option value="TV">Tuvalu</option>
                  <option value="TW">Taiwan</option>
                  <option value="TZ">Tanzania</option>
                  <option value="UA">Ukraine</option>
                  <option value="UG">Uganda</option>
                  <option value="US">USA</option>
                  <option value="UY">Uruguay</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="VA">Vatican City</option>
                  <option value="VC">St. Vincent</option>
                  <option value="VE">Venezuela</option>
                  <option value="VG">British Virg. Islnd</option>
                  <option value="VI">American Virg.Islnd</option>
                  <option value="VN">Vietnam</option>
                  <option value="VU">Vanuatu</option>
                  <option value="WS">Western Samoa</option>
                  <option value="XX"></option>
                  <option value="YE">Yemen</option>
                  <option value="YT">Mayotte</option>
                  <option value="YU">夫</option>
                  <option value="ZA">South Africa</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <!-- 出貨倉庫 -->
                <label class="" for="Warehouse">出貨倉庫</label>
                <select class="form-control" id="Warehouse" name="Warehouse">
                  <option value="CCAT">奥地利仓</option>
                  <option value="CCDE">德国仓</option>
                  <option value="CCHP">菲律宾仓</option>
                  <option value="CCUS">美国仓</option>
                  <option value="CCUS-RMA">美国仓-退回</option>
                  <option value="JPDB">日本大阪仓</option>
                  <option value="JPDJ">日本东京仓</option>
                  <option selected="selected" value="JPJD">日本京都仓</option>
                  <option value="JPMGW">日本名古屋仓</option>
                  <option value="SZCP">苏州成品仓</option>
                </select>

              </div>
              <div class="form-group col-sm-3">
                <!-- 運送天數 -->
                <label class="" for="TransportDay">運送天數</label>
                <input class="form-control" data-val="true" data-val-required="The 運送天數 field is required." id="TransportDay" name="TransportDay" type="text" value="180">
              </div>
              <div class="form-group col-sm-3">
                <!--到貨日期-->
                <label class="" for="ArrivalDate">到貨日期</label>
                <input class="form-control" data-val="true" data-val-required="The 到貨日期 field is required." id="ArrivalDate" name="ArrivalDate" type="text" value="2018/10/30 0:00:00">
              </div>
              <div class="form-group col-sm-3">
                <!-- 快遞類別 -->
                <label class="" for="ExpressDeliveryType">快遞類別</label>
                <select class="form-control" id="ExpressDeliveryType" name="ExpressDeliveryType">
                  <option selected="selected" value="DHL">DHL</option>
                  <option value="DHL(德邮小包)">DHL(德邮小包)</option>
                  <option value="本地单号">本地单号</option>
                  <option value="国际EUB">国际EUB</option>
                  <option value="国内快递">国内快递</option>
                  <option value="邮政">邮政</option>
                  <option value="专线">专线</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <!-- 快遞名稱 -->
                <label class="" for="ExpressDeliveryName">快遞名稱</label>
                <select class="form-control" id="ExpressDeliveryName" name="ExpressDeliveryName">
                  <option selected="selected" value="BBX">BBX</option>
                  <option value="DHL常規">DHL常規</option>
                  <option value="DHL正式報關出口">DHL正式報關出口</option>
                  <option value="DHL-加急">DHL-加急</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <!-- 快遞單號 -->
                <label class="" for="ExpressDeliveryNumber">快遞單號</label>
                <input class="form-control" id="ExpressDeliveryNumber" name="ExpressDeliveryNumber" type="text" value="">
              </div>

              <div class="form-group col-md-3 d-none d-sm-block"></div>

              <div class="form-group col-sm-3">
                <!-- 收貨人 -->
                <label class="" for="Receiver">收貨人</label>
                <input class="form-control" id="Receiver" name="Receiver" type="text" value="Kylie Jordan">
              </div>
              <div class="form-group col-sm-3">
                <!-- 收貨電話 -->
                <label class="" for="ReceivePhone">收貨電話</label>
                <input class="form-control" id="ReceivePhone" name="ReceivePhone" type="text" value="0414929770">
              </div>

              <div class="form-group col-sm-3">

              </div>

              <div class="form-group col-sm-3"></div>

              <div class="form-group col-sm-3">
                <!-- 收貨郵編 -->
                <label class="" for="ReceiveZip">收貨郵編</label>
                <input class="form-control" id="ReceiveZip" name="ReceiveZip" type="text" value="5114">
              </div>
              <div class="form-group col-sm-3">
                <!-- 收貨省 -->
                <label class="" for="ReceiveProvince">收貨省</label>
                <input class="form-control" id="ReceiveProvince" name="ReceiveProvince" type="text" value="South Australia">
              </div>
              <div class="form-group col-sm-3">
                <!-- 收貨市 -->
                <label class="" for="ReceiveCity">收貨市</label>
                <input class="form-control" id="ReceiveCity" name="ReceiveCity" type="text" value="Smithfield">
              </div>
              <div class="form-group col-sm-3">
                <!-- 收貨街道 -->
                <label class="" for="ReceiveStreet">收貨街道</label>
                <input class="form-control" id="ReceiveStreet" name="ReceiveStreet" type="text" value="32 Moir St">
              </div>
              <div class="form-group col-sm-12">
                <!-- 收貨地址 -->
                <label class="" for="ReceiveAddress">收貨地址</label>
                <input class="form-control" id="ReceiveAddress" name="ReceiveAddress" type="text" value="32 Moir St, Smithfield, South Australia, AU">
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- 銷售訂單明細 -->
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>銷售訂單明細
          </div>
          <div class="card-body">
            <div class="form-row">

              <div id="ShowDetail" class="col-12">

              </div>

              <div class="col-12" id="DetailTemplateDiv">

              </div>

              <div hidden="hidden" id="DateDetailTemplateDiv">

              </div>

              <div class="col-12">
                <button id="ShowDetailBtn" class="btn btn-default" type="button">建立</button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- 當前金額 -->
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>當前金額
          </div>
          <div class="card-body">

            <div class="form-row">
              <div class="form-group col-sm-3">
                <!-- 支付方式 -->
                <label class="" for="PayType">支付方式</label>
                <select class="form-control" id="PayType" name="PayType">
                  <option value="01">COCO信用卡</option>
                  <option value="02">COCO信用卡DE</option>
                  <option value="03">Paypal(pgs)</option>
                  <option value="04">Paypal(david)</option>
                  <option value="05">三菱东京UFJ银行(Aniia-0119722)</option>
                  <option value="06">三菱东京UFJ银行(Otsuka-0224099)</option>
                  <option value="07">三菱东京UFJ银行(Nihonhashi-225634)</option>
                  <option value="08">三菱东京UFJ银行(Fukuoka-0153079)</option>
                  <option value="09">三菱东京UFJ银行(Nagoya-0147588)</option>
                  <option value="10">中國银行(Landy个人-1427)</option>
                  <option value="11">工商银行(蓝海公司)</option>
                  <option value="12">工商银行(Landy个人-1242)</option>
                  <option value="20">店铺刷卡(东京大塚店)</option>
                  <option value="21">店铺刷卡(名古屋店)</option>
                  <option value="22">现金(USD)</option>
                  <option value="23">乐天便利店(LB)</option>
                  <option value="24">乐天便利店(COCO)</option>
                  <option selected="selected" value="25">乐天信用卡(LB)</option>
                  <option value="26">乐天信用卡(COCO)</option>
                  <option value="27">美國银行(8316)</option>
                  <option value="28">美國银行(0853)</option>
                  <option value="29">乐天积分(LB)</option>
                  <option value="30">乐天积分(COCO)</option>
                  <option value="31">一银收款(个人)</option>
                  <option value="35">店铺刷卡(福冈店)</option>
                  <option value="36">COCO.JP信用卡刷卡</option>
                  <option value="37">COCO.JP 便利店</option>
                  <option value="38">Paygent信用卡</option>
                  <option value="39">Paygent便利店</option>
                  <option value="40">Stripe信用卡</option>
                  <option value="41">StripeDE信用卡</option>
                  <option value="43">店铺刷卡(东京日本桥店)</option>
                  <option value="44">店铺刷卡(福冈店)</option>
                  <option value="45">PayU信用卡</option>
                  <option value="46">Paypal(LA)</option>
                  <option value="47">德國銀行</option>
                  <option value="48">上海商业银行(ANIIA HK-1633)</option>
                  <option value="49">LB信用卡JP</option>
                  <option value="50">现金(CNY)</option>
                  <option value="51">Sezzle信用卡</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <!-- 幣種 -->
                <label class="" for="Currency">幣種</label>
                <select class="form-control" id="Currency" name="Currency">
                  <option value="AUD">澳大利亚元</option>
                  <option value="CAD">加拿大元</option>
                  <option value="EUR">欧元</option>
                  <option value="GBP">英镑</option>
                  <option value="HKD">港币</option>
                  <option value="JPY">日元</option>
                  <option value="NTD">新台币</option>
                  <option value="NZD">新西兰元</option>
                  <option value="PHP">菲律宾比索</option>
                  <option selected="selected" value="RMB">人民币</option>
                  <option value="USD">美元</option>
                  <option value="ZAF">南非兰特</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <!-- 付款狀態 -->
                <label class="" for="PayStatus">付款狀態</label>
                <select class="form-control" data-val="true" data-val-required="The 付款狀態 field is required." id="PayStatus" name="PayStatus">
                  <option selected="selected" value="0">無</option>
                </select>
              </div>
              <div class="form-group col-md-3 d-none d-sm-block"></div>
              <div class="form-group col-sm-3">
                <!-- 小計金額 -->
                <label class="" for="SubTotal">小計金額</label>
                <input class="form-control" data-val="true" data-val-number="The field 小計金額 must be a number." data-val-required="The 小計金額 field is required." id="SubTotal" name="SubTotal" type="text" value="0.00">
              </div>
              <div class="form-group col-sm-3">
                <!-- 折扣金額 -->
                <label class="" for="Discount">折扣金額</label>
                <input class="form-control" data-val="true" data-val-number="The field 折扣金額 must be a number." data-val-required="The 折扣金額 field is required." id="Discount" name="Discount" type="text" value="0.00">
              </div>
              <div class="form-group col-sm-3">
                <!-- 總計金額 -->
                <label class="" for="Total">總計金額</label>
                <input class="form-control" data-val="true" data-val-number="The field 總計金額 must be a number." data-val-required="The 總計金額 field is required." id="Total" name="Total" type="text" value="0.00">
              </div>
              <div class="form-group col-md-3 d-none d-sm-block"></div>
              <div class="form-group col-sm-3">
                <!-- 應付金額 -->
                <label class="" for="Payable">應付金額</label>
                <input class="form-control" data-val="true" data-val-number="The field 應付金額 must be a number." data-val-required="The 應付金額 field is required." id="Payable" name="Payable" type="text" value="0.00">
              </div>
              <div class="form-group col-sm-3">
                <!-- 已支付額 -->
                <label class="" for="Pay">已支付額</label>
                <input class="form-control" data-val="true" data-val-number="The field 已支付額 must be a number." data-val-required="The 已支付額 field is required." id="Pay" name="Pay" type="text" value="0.00">
              </div>
              <div class="form-group col-sm-3">
                <!-- 已退款 -->
                <label class="" for="Refund">已退款</label>
                <input class="form-control" data-val="true" data-val-number="The field 已退款 must be a number." data-val-required="The 已退款 field is required." id="Refund" name="Refund" type="text" value="0.00">
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- 客戶留言 -->
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>留言
          </div>
          <div class="card-body">
            <div class="form-row">

              <!-- 客戶留言 -->
              <label class="col-sm-1 col-form-label" for="CustomerMessage">客戶留言</label>
              <div class="col-sm-10">
                <textarea class="form-control" cols="250" id="CustomerMessage" name="CustomerMessage" rows="3"></textarea>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- 版次紀錄 -->
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>版次紀錄
          </div>
          <div class="card-body">
            <div class="form-row">

              <table class="table table-hover table-striped">

                <thead>
                  <tr>
                    <th>時間</th>
                    <th>修改者</th>
                    <th>修改目標</th>
                    <th>修改原因</th>
                    <th>說明</th>
                  </tr>
                </thead>

              </table>

            </div>
          </div>
        </div>
      </div>

      <!-- 修改通知 -->
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>修改通知
          </div>
          <div class="card-body">
            <div>

              <div id="VersionDiv">

                <div class="form-row VersionDOM" data-versionindex="0">
                  <div class="form-group col-sm-4">
                    <!-- 修改目標 -->
                    <label>修改目標</label>
                    <select class="form-control" id="VersionList_0__Target" name="VersionList[0].Target" placeholder="修改目標">
                      <option value="1805030001">1805030001</option>
                      <option value="1805030001-01">1805030001-01</option>
                    </select>
                  </div>
                  <div class="form-group col-sm-8">
                    <!-- 修改原因 -->
                    <label>修改原因</label>
                    <select class="form-control" id="VersionList_0__Reason" name="VersionList[0].Reason" placeholder="修改原因">
                      <option value="客人要求修改款式，尺寸或其他">客人要求修改款式，尺寸或其他</option>
                      <option value="業務下單問題錯誤或缺失">業務下單問題錯誤或缺失</option>
                      <option value="系統原因導致訂單內容有缺失或者錯誤">系統原因導致訂單內容有缺失或者錯誤</option>
                      <option value="修改訂單金額或添加收款信息">修改訂單金額或添加收款信息</option>
                      <option value="修改快遞類型或收貨地址">修改快遞類型或收貨地址</option>
                    </select>
                  </div>
                  <div class="form-group col-sm-12">
                    <!-- 修改說明 -->
                    <label>修改說明</label>
                    <textarea rows="4" cols="50" class="form-control" placeholder="修改說明" id="VersionList[1].Explanation" name="VersionList[1].Explanation"></textarea>
                  </div>
                </div>

                <div class="form-row VersionDOM" data-versionindex="1">
                  <div class="form-group col-sm-4">
                    <label>修改目標</label>
                    <select class="form-control" placeholder="修改目標" id="VersionList[2].Target" name="VersionList[2].Target">
                      <option value="1805030001">1805030001</option>
                      <option value="1805030001-01">1805030001-01</option>
                    </select>
                  </div>
                  <div class="form-group col-sm-7">
                    <label>修改原因</label>
                    <select class="form-control" placeholder="修改原因" id="VersionList[2].Reason" name="VersionList[2].Reason">
                      <option value="客人要求修改款式，尺寸或其他">客人要求修改款式，尺寸或其他</option>
                      <option value="業務下單問題錯誤或缺失">業務下單問題錯誤或缺失</option>
                      <option value="系統原因導致訂單內容有缺失或者錯誤">系統原因導致訂單內容有缺失或者錯誤</option>
                      <option value="修改訂單金額或添加收款信息">修改訂單金額或添加收款信息</option>
                      <option value="修改快遞類型或收貨地址">修改快遞類型或收貨地址</option>
                    </select>
                  </div>
                  <div class="col-sm-1 text-center">
                    <button type="button" class="btn btn-danger RemoveVersion" data-versionindex="1">移除</button>
                  </div>
                  <div class="form-group col-sm-12">
                    <label>修改說明</label>
                    <textarea rows="4" cols="50" class="form-control" placeholder="修改說明" id="VersionList[1].Explanation" name="VersionList[1].Explanation"></textarea>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <button type="button" class="btn btn-primary" id="VersionBtn">新增一筆</button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="col-12 text-right mb-3">
        <button type="submit" class="btn btn-success col-3">
          保存
        </button>
      </div>

    </div>

    <div class="row" id="compareTemplate2">

      <!-- 基本訊息 -->
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>基本信息123
          </div>
          <div class="card-body">

            <!-- 主鍵 -->
            <input data-val="true" data-val-required="The Id field is required." id="Id" name="Id" type="hidden" value="2">

            <div class="form-row">
              <div class="form-group col-sm-3">
                <!-- 銷貨單號 -->
                <label class="" for="OrderNumber">銷售單號</label>
                                <label for="" class="form-control">1805030002</label>
                <!-- <input class="form-control" id="OrderNumber" name="OrderNumber" readonly="readonly" type="text" value="1805030001"> -->
              </div>
              <div class="form-group col-sm-3">
                <!-- 部門 -->
                <label class="" for="Department">部門</label>
                <select class="form-control" id="Department" name="Department">
                  <option selected="selected" value="PRODUCT">產品組</option>
                  <option value="EN">英語組</option>
                  <option value="DE">德語組</option>
                  <option value="JP">日語組</option>
                  <option value="PH">菲律賓組</option>
                </select>

              </div>
              <div class="form-group col-sm-3">
                <!-- 持有人 -->
                <label class="" for="Owner">持有人</label>
                <select class="form-control" id="Owner" name="Owner">
                  <option selected="selected" value="0e80f9c4-c939-4198-8eba-152d27785716">系統監控人員 - 產品組</option>
                  <option value="2f8a8438-85e8-40ea-bfb1-5f07b6d7609e"> - </option>
                  <option value="6f84c8c6-a4e9-4833-a7db-6c624d697bb3"> - </option>
                  <option value="a95087f1-5ea6-4b9e-9945-3bfc9fe9fbae"> - </option>
                  <option value="b185eab7-9007-4534-98e3-7f452712f5b3">業務陳主管 - 產品組</option>
                  <option value="b1a3deea-fd38-493c-82f7-c9bb87ff51c7"> - </option>
                  <option value="d755f09e-4c8f-454c-b22f-c6f8d2fa4431">業務李 - 產品組</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <!-- 市場 -->
                <label class="" for="Market">市場</label>
                <select class="form-control" id="Market" name="Market">
                  <option value="德语市场">德语市场</option>
                  <option value="菲律宾市場">菲律宾市場</option>
                  <option value="南非市场">南非市场</option>
                  <option selected="selected" value="欧美市场">欧美市场</option>
                  <option value="日本市場">日本市場</option>
                </select>
              </div>

              <div class="form-group col-sm-3">
                <!-- 訂單渠道 -->
                <label class="" for="OrderChannel">訂單渠道</label>
                <select class="form-control" id="OrderChannel" name="OrderChannel">
                  <option value="magento">magento</option>
                  <option selected="selected" value="rakuten">rakuten</option>
                  <option value="批發">批發</option>
                  <option value="線下">線下</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <!-- 店鋪名稱 -->
                <label class="" for="ShopName">店鋪名稱</label>
                <select class="form-control" id="ShopName" name="ShopName">
                  <option value="16">COCO EN批发组</option>
                  <option value="22">舊金山店</option>
                  <option value="23">舊金山海灣店</option>
                  <option value="7">CN批发组</option>
                  <option value="8">LB EN 批发组</option>
                  <option value="COCO DE 代理">COCO DE 代理</option>
                  <option value="CocoMelody Physical Store 01, JP">東京日本橋店</option>
                  <option value="CocoMelody Physical Store 02, JP">東京大塚店</option>
                  <option value="CocoMelody Physical Store 03, JP">新潟店</option>
                  <option value="CocoMelody Physical Store CA, US">美国店</option>
                  <option value="CocoMelody Physical Store Fukui, JP">福井店</option>
                  <option value="CocoMelody Physical Store Fukuoka, JP">福岡店</option>
                  <option value="CocoMelody Physical Store Ishikawa, JP">石川店</option>
                  <option selected="selected" value="CocoMelody Physical Store Kyoto, JP">京都店</option>
                  <option value="CocoMelody Physical Store Mie, JP">三重店</option>
                  <option value="CocoMelody Physical Store Nagoya, JP">名古屋店</option>
                  <option value="CocoMelody Physical Store Osaka, JP">大阪店</option>
                  <option value="CocoMelody Physical Store Tokyo, JP">东京店</option>
                  <option value="CocoMelody.AT">奥地利店</option>
                  <option value="CocoMelody.co.za Online Store">CocoMelody.co.za</option>
                  <option value="CocoMelody.co.za Store">南非店</option>
                  <option value="CocoMelody.com">CocoMelody.com</option>
                  <option value="CocoMelody.com SF Online Store">SF Online Store</option>
                  <option value="CocoMelody.com SF Store">SF Store</option>
                  <option value="CocoMelody.de">CocoMelody.de</option>
                  <option value="CocoMelody.de 線下">德国店</option>
                  <option value="CocoMelody.jp">CocoMelody.jp</option>
                  <option value="CocoMelody.ph">CocoMelody.ph2</option>
                  <option value="LA BPD store">LA BPD store</option>
                  <option value="LA WD Store">LA WD Store</option>
                  <option value="LandyBridal B2B, JP">日语批发</option>
                  <option value="LandyBridal.jp">LandyBridal.jp</option>
                  <option value="Lazada.com.ph">Lazada.com.ph</option>
                  <option value="Rakuten COCO">Rakuten COCO</option>
                  <option value="Rakuten LB">Rakuten LB</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <!-- 店鋪訂單號 -->
                <label class="" for="ShopOrderNumber">店鋪訂單編號</label>
                <input class="form-control" id="ShopOrderNumber" name="ShopOrderNumber" type="text" value="1805036596">
              </div>
              <div class="form-group col-sm-3">
                <!-- 電商訂單狀態 -->
                <label class="" for="OrderStatus">電商訂單狀態</label>
                <input class="form-control" id="OrderStatus" name="OrderStatus" type="text" value="processing">
              </div>

              <div class="form-group col-sm-3">
                <!-- 處裡日期 -->
                <label class="" for="ProcessingDate">處理日期</label>
                <input class="form-control" data-val="true" data-val-required="The 處理日期 field is required." id="ProcessingDate" name="ProcessingDate" type="text" value="2018/5/3 0:00:00">
              </div>
              <div class="form-group col-sm-3">
                <!-- 客戶性質 -->
                <label class="" for="CustomerNature">客戶性質</label>
                <select class="form-control" id="CustomerNature" name="CustomerNature">
                  <option value="DF">店铺高级定制客人</option>
                  <option value="GJPF">高级零售型批发客人</option>
                  <option value="GWDF">国外店铺客人</option>
                  <option value="PT">平台零售客人</option>
                  <option selected="selected" value="PTPF">普通批发客人</option>
                  <option value="PTPF1">普通零售型批发客人</option>
                  <option value="WGJ">网站高级定制客人</option>
                  <option value="WZ">网站零售客人</option>
                  <option value="YY">样衣客人</option>
                  <option value="DF">店铺高级定制客人</option>
                  <option value="GJPF">高级零售型批发客人</option>
                  <option value="GWDF">国外店铺客人</option>
                  <option value="PT">平台零售客人</option>
                  <option selected="selected" value="PTPF">普通批发客人</option>
                  <option value="PTPF1">普通零售型批发客人</option>
                  <option value="WGJ">网站高级定制客人</option>
                  <option value="WZ">网站零售客人</option>
                  <option value="YY">样衣客人</option>
                </select>
              </div>
              <div class="form-group col-sm-3">

                <!-- 客戶郵件 -->
                <label class="" for="CustomerEmail">客戶郵件</label>
                <input class="form-control" id="CustomerEmail" name="CustomerEmail" type="text" value="customer5487@gmail.com">

              </div>
              <div class="form-group col-sm-3">
                <!-- 客戶 -->
                <label class="" for="CustomerName">客戶姓名1</label>
                            <label class="" for="">King WuTen 12312312</label>
                <input class="form-control" id="CustomerName" name="CustomerName" type="text" value="King WuTen 12312312" >
              </div>

              <div class="form-group col-sm-3">
                <!-- 客戶代碼 -->
                <label class="" for="CustomerCode">客戶代碼</label>
                <input class="form-control" id="CustomerCode" name="CustomerCode" type="text" value="">
              </div>
              <div class="form-group col-sm-3">
                <!-- 客戶電話 -->
                <label class="" for="CustomerPhone">客戶電話</label>
                <input class="form-control" id="CustomerPhone" name="CustomerPhone" type="text" value="0414929770">
              </div>
              <div class="form-group col-sm-3">
                <!-- 傳真 -->
                <label class="" for="CustomerFax">客戶傳真</label>
                <input class="form-control" id="CustomerFax" name="CustomerFax" type="text" value="">
              </div>
              <div class="form-group col-sm-3">
                <!-- 訂單類型 -->
                <label class="" for="OrderType">訂單類型</label>
                <select class="form-control" id="OrderType" name="OrderType">
                  <option value="BZ">標準批量訂單</option>
                  <option value="CZ">重做訂單</option>
                  <option value="JS">寄售訂單</option>
                  <option value="KS">快速發貨訂單</option>
                  <option selected="selected" value="LS">零售訂單</option>
                  <option value="MF">免費訂單</option>
                  <option value="PF">批發訂單</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <!-- 包装方式 -->
                <label class="" for="PackageType">包裝方式</label>
                <select class="form-control" id="PackageType" name="PackageType">
                  <option value="01">塑料袋包装</option>
                  <option value="02">泡沫包装</option>
                  <option selected="selected" value="03">硬纸箱包装</option>
                  <option value="04">COCO包装盒</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <!-- 客戶下單日期 -->
                <label class="" for="OrderDate">下單日期</label>
                <input class="form-control" data-val="true" data-val-required="The 下單日期 field is required." id="OrderDate" name="OrderDate" type="text" value="2018/5/3 9:44:00">
              </div>
              <div class="form-group col-sm-3">
                <!-- 建立來源 -->
                <label class="" for="CreateSource">建立來源</label>
                <select class="form-control" id="CreateSource" name="CreateSource">
                  <option selected="selected" value="0">無</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <!-- 關聯訂單 -->
                <label class="" for="AssociatedOrderNumber">關聯訂單</label>
                <select id="AssociatedOrderNumber" name="AssociatedOrderNumber" class="js-data-example-ajax form-control select2-hidden-accessible" data-select2-id="AssociatedOrderNumber" tabindex="-1" aria-hidden="true">
                  <option value="" selected="selected" data-select2-id="1">請選擇</option>
                </select>
                <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="2" style="width: 317.25px;">
                  <span class="selection">
                    <span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-AssociatedOrderNumber-container">
                      <span class="select2-selection__rendered" id="select2-AssociatedOrderNumber-container" role="textbox" aria-readonly="true" title="請選擇">請選擇</span>
                      <span class="select2-selection__arrow" role="presentation">
                        <b role="presentation"></b>
                      </span>
                    </span>
                  </span>
                  <span class="dropdown-wrapper" aria-hidden="true"></span>
                </span>
              </div>
              <div class="form-group col-sm-12">
                <!-- 電商處理留言 -->
                <label class="" for="ProcessingMessage">電商處理留言</label>
                <textarea class="form-control" cols="250" id="ProcessingMessage" name="ProcessingMessage" rows="3"></textarea>

              </div>

              <div class="form-group col-sm-12">
                <!-- 備註 -->
                <label class="" for="Remarks">備註</label>
                <textarea class="form-control" cols="250" id="Remarks" name="Remarks" rows="3"></textarea>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- 帳單訊息 -->
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>帳單訊息
          </div>
          <div class="card-body">
            <div class="form-row">

              <div class="form-group col-sm-3">
                <!-- 賬單人 -->
                <label class="" for="Biller">帳單人</label>
                <input class="form-control" id="Biller" name="Biller" type="text" value="Kylie Jordan">
              </div>

              <div class="form-group col-sm-3">
                <!-- 賬單電話 -->
                <label class="" for="BillPhone">帳單電話</label>
                <input class="form-control" id="BillPhone" name="BillPhone" type="text" value="0414929770">
              </div>

              <div class="form-group col-sm-3"></div>

              <div class="form-group col-sm-3"></div>

              <div class="form-group col-sm-3">
                <!-- 賬單郵編 -->
                <label class="" for="BillZip">帳單郵編</label>
                <input class="form-control" id="BillZip" name="BillZip" type="text" value="5114">
              </div>
              <div class="form-group col-sm-3">
                <!-- 賬單省 -->
                <label class="" for="BillProvince">帳單省</label>
                <input class="form-control" id="BillProvince" name="BillProvince" type="text" value="South Australia">
              </div>
              <div class="form-group col-sm-3">
                <!-- 賬單市 -->
                <label class="" for="BillCity">帳單市</label>
                <input class="form-control" id="BillCity" name="BillCity" type="text" value="Smithfield">
              </div>

              <div class="form-group col-sm-3">
                <!-- 賬單街道 -->
                <label class="" for="BillStreet">帳單街道</label>
                <input class="form-control" id="BillStreet" name="BillStreet" type="text" value="32 Moir St">

              </div>

              <div class="form-group col-sm-12">
                <!-- 賬單地址 -->
                <label class="" for="BillAddress">賬單地址</label>
                <input class="form-control" id="BillAddress" name="BillAddress" type="text" value="32 Moir St, Smithfield, South Australia, AU">

              </div>

              <div class="col-12">
                <button type="button" id="CopyReceiveInfo" class="btn btn-primary">帳單同收貨資訊</button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- 物流訊息 -->
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>物流訊息
          </div>
          <div class="card-body">

            <div class="form-row">
              <div class="form-group col-sm-3">
                <!-- 國家代碼 -->
                <label class="" for="Country">國家代碼</label>
                <select class="form-control" id="Country" name="Country">
                  <option value="AD">Andorra</option>
                  <option value="AE">United Arab Emir.</option>
                  <option value="AF">Afghanistan</option>
                  <option value="AG">Antigua/Barbuda</option>
                  <option value="AI">Anguilla</option>
                  <option value="AL">Albania</option>
                  <option value="AM">Armenia</option>
                  <option value="AN">Dutch Antilles</option>
                  <option value="AO">Angola</option>
                  <option value="AQ">Antarctica</option>
                  <option value="AR">Argentina</option>
                  <option value="AS">Samoa, American</option>
                  <option value="AT">Austria</option>
                  <option value="AU">Australia</option>
                  <option value="AW">Aruba</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BA">Bosnia</option>
                  <option value="BB">Barbados</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BE">Belgium</option>
                  <option value="BF">Burkina</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BH">Bahrain</option>
                  <option value="BI">Burundi</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermuda</option>
                  <option value="BN">Brunei Dar</option>
                  <option value="BO">Bolivia</option>
                  <option value="BQ">Bonaire, Sint Eustat</option>
                  <option value="BR">Brazil</option>
                  <option value="BS">Bahamas</option>
                  <option value="BT">Bhutan</option>
                  <option value="BV">Bouvet Island</option>
                  <option value="BW">Botswana</option>
                  <option value="BY">Belarus</option>
                  <option value="BZ">Belize</option>
                  <option value="CA">Canada</option>
                  <option value="CC">Coconut Islands</option>
                  <option value="CD">Congo, The Democrati</option>
                  <option value="CF">Central African Rep</option>
                  <option value="CG">Congo</option>
                  <option value="CH">Schweiz</option>
                  <option value="CI">Ivory Coast</option>
                  <option value="CK">Cook Islands</option>
                  <option value="CL">Chile</option>
                  <option value="CM">Cameroon</option>
                  <option value="CN">China</option>
                  <option value="CO">Colombia</option>
                  <option value="CR">Costa Rica</option>
                  <option value="CU">Cuba</option>
                  <option value="CV">Cape Verde</option>
                  <option value="CW">Cura?ao</option>
                  <option value="CX">Christmas Island</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czech Republic</option>
                  <option value="DE">Germany</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DK">Denmark</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="DZ">Algeria</option>
                  <option value="EC">Ecuador</option>
                  <option value="EE">Estonia</option>
                  <option value="EG">Egypt</option>
                  <option value="EH">West Sahara</option>
                  <option value="EL">Greece</option>
                  <option value="ER">Eritrea</option>
                  <option value="ES">Spain</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FI">Finland</option>
                  <option value="FJ">Fiji</option>
                  <option value="FK">Falkland Islands</option>
                  <option value="FM">Micronesia</option>
                  <option value="FO">Faroe Islands</option>
                  <option value="FR">France</option>
                  <option value="GA">Gabon</option>
                  <option value="GB">United Kingdom</option>
                  <option value="GD">Grenada</option>
                  <option value="GE">Georgia</option>
                  <option value="GF">French Guayana</option>
                  <option value="GH">Ghana</option>
                  <option value="GI">Gibraltar</option>
                  <option value="GL">Greenland</option>
                  <option value="GM">Gambia</option>
                  <option value="GN">Guinea</option>
                  <option value="GP">Guadeloupe</option>
                  <option value="GQ">Equatorial Guinea</option>
                  <option value="GS">S. Sandwich Ins</option>
                  <option value="GT">Guatemala</option>
                  <option value="GU">Guam</option>
                  <option value="GW">Guinea</option>
                  <option value="GY">Guyana</option>
                  <option value="HK">Hong Kong</option>
                  <option value="HM">Heard/McDnld Islnds</option>
                  <option value="HN">Honduras</option>
                  <option value="HR">Croatia</option>
                  <option value="HT">Haiti</option>
                  <option value="HU">Hungary</option>
                  <option value="ID">Indonesia</option>
                  <option value="IE">Ireland</option>
                  <option value="IL">Israel</option>
                  <option value="IN">India</option>
                  <option value="IQ">Iraq</option>
                  <option value="IR">Iran</option>
                  <option value="IS">Iceland</option>
                  <option value="IT">Italy</option>
                  <option value="JM">Jamaica</option>
                  <option value="JO">Jordan</option>
                  <option value="JP">Japan</option>
                  <option value="KE">Kenya</option>
                  <option value="KH">Cambodia</option>
                  <option value="KI">Kiribati</option>
                  <option value="KM">Comoros</option>
                  <option value="KN">St Kitts &amp; Nevis</option>
                  <option value="KP">North Korea</option>
                  <option value="KR">South Korea</option>
                  <option selected="selected" value="KW">Kuwait</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="LA">Laos</option>
                  <option value="LB">Lebanon</option>
                  <option value="LC">St. Lucia</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="LR">Liberia</option>
                  <option value="LS">Lesotho</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="LV">Latvia</option>
                  <option value="LY">Libya</option>
                  <option value="MA">Morocco</option>
                  <option value="MC">Monaco</option>
                  <option value="MD">Moldavia</option>
                  <option value="MG">Madagascar</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MK">Republic of Macedoni</option>
                  <option value="ML">Mali</option>
                  <option value="MM">Myanmar</option>
                  <option value="MN">Mongolia</option>
                  <option value="MO">Macau</option>
                  <option value="MP">N.Mariana Island</option>
                  <option value="MQ">Martinique</option>
                  <option value="MR">Mauretania</option>
                  <option value="MS">Montserrat</option>
                  <option value="MT">Malta</option>
                  <option value="MU">Mauritius</option>
                  <option value="MV">Maldives</option>
                  <option value="MW">Malawi</option>
                  <option value="MX">Mexico</option>
                  <option value="MY">Malaysia</option>
                  <option value="MZ">Mozambique</option>
                  <option value="NA">Namibia</option>
                  <option value="NC">New Caledonia</option>
                  <option value="NE">Niger</option>
                  <option value="NF">Norfolk Island</option>
                  <option value="NG">Nigeria</option>
                  <option value="NI">Nicaragua</option>
                  <option value="NL">Netherlands</option>
                  <option value="NO">Norway</option>
                  <option value="NP">Nepal</option>
                  <option value="NR">Nauru</option>
                  <option value="NU">Niue Islands</option>
                  <option value="NZ">New Zealand</option>
                  <option value="OM">Oman</option>
                  <option value="PA">Panama</option>
                  <option value="PE">Peru</option>
                  <option value="PF">French Polynesia</option>
                  <option value="PG">Papua New Guinea</option>
                  <option value="PH">Philippines</option>
                  <option value="PK">Pakistan</option>
                  <option value="PL">Poland</option>
                  <option value="PM">St.Pier,Miquel.</option>
                  <option value="PN">Pitcairn Islands</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="PT">Portugal</option>
                  <option value="PW">Palau</option>
                  <option value="PY">Paraguay</option>
                  <option value="QA">Qatar</option>
                  <option value="RO">Romania</option>
                  <option value="RU">Russian Fed.</option>
                  <option value="RW">Ruanda</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="SB">Solomon Islands</option>
                  <option value="SC">Seychelles</option>
                  <option value="SD">Sudan</option>
                  <option value="SE">Sweden</option>
                  <option value="SG">Singapore</option>
                  <option value="SI">Slovenia</option>
                  <option value="SJ">Svalbard</option>
                  <option value="SK">Slovakia</option>
                  <option value="SL">Sierra Leone</option>
                  <option value="SM">San Marino</option>
                  <option value="SN">Senegal</option>
                  <option value="SO">Somalia</option>
                  <option value="SR">Suriname</option>
                  <option value="ST">S.Tome,Principe</option>
                  <option value="SV">El Salvador</option>
                  <option value="SX">Sint Maarten</option>
                  <option value="SY">Syria</option>
                  <option value="SZ">Swaziland</option>
                  <option value="TD">Chad</option>
                  <option value="TF">French S.Territ</option>
                  <option value="TG">Togo</option>
                  <option value="TH">Thailand</option>
                  <option value="TJ">Tajikstan</option>
                  <option value="TK">Tokelau Islands</option>
                  <option value="TM">Turkmenistan</option>
                  <option value="TN">Tunisia</option>
                  <option value="TO">Tonga</option>
                  <option value="TP"></option>
                  <option value="TR">Turkey</option>
                  <option value="TT">Trinidad,Tobago</option>
                  <option value="TV">Tuvalu</option>
                  <option value="TW">Taiwan</option>
                  <option value="TZ">Tanzania</option>
                  <option value="UA">Ukraine</option>
                  <option value="UG">Uganda</option>
                  <option value="US">USA</option>
                  <option value="UY">Uruguay</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="VA">Vatican City</option>
                  <option value="VC">St. Vincent</option>
                  <option value="VE">Venezuela</option>
                  <option value="VG">British Virg. Islnd</option>
                  <option value="VI">American Virg.Islnd</option>
                  <option value="VN">Vietnam</option>
                  <option value="VU">Vanuatu</option>
                  <option value="WS">Western Samoa</option>
                  <option value="XX"></option>
                  <option value="YE">Yemen</option>
                  <option value="YT">Mayotte</option>
                  <option value="YU">夫</option>
                  <option value="ZA">South Africa</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <!-- 出貨倉庫 -->
                <label class="" for="Warehouse">出貨倉庫</label>
                <select class="form-control" id="Warehouse" name="Warehouse">
                  <option value="CCAT">奥地利仓</option>
                  <option value="CCDE">德国仓</option>
                  <option value="CCHP">菲律宾仓</option>
                  <option value="CCUS">美国仓</option>
                  <option value="CCUS-RMA">美国仓-退回</option>
                  <option value="JPDB">日本大阪仓</option>
                  <option value="JPDJ">日本东京仓</option>
                  <option selected="selected" value="JPJD">日本京都仓</option>
                  <option value="JPMGW">日本名古屋仓</option>
                  <option value="SZCP">苏州成品仓</option>
                </select>

              </div>
              <div class="form-group col-sm-3">
                <!-- 運送天數 -->
                <label class="" for="TransportDay">運送天數</label>
                <input class="form-control" data-val="true" data-val-required="The 運送天數 field is required." id="TransportDay" name="TransportDay" type="text" value="180">
              </div>
              <div class="form-group col-sm-3">
                <!--到貨日期-->
                <label class="" for="ArrivalDate">到貨日期</label>
                <input class="form-control" data-val="true" data-val-required="The 到貨日期 field is required." id="ArrivalDate" name="ArrivalDate" type="text" value="2018/10/30 0:00:00">
              </div>
              <div class="form-group col-sm-3">
                <!-- 快遞類別 -->
                <label class="" for="ExpressDeliveryType">快遞類別</label>
                <select class="form-control" id="ExpressDeliveryType" name="ExpressDeliveryType">
                  <option selected="selected" value="DHL">DHL</option>
                  <option value="DHL(德邮小包)">DHL(德邮小包)</option>
                  <option value="本地单号">本地单号</option>
                  <option value="国际EUB">国际EUB</option>
                  <option value="国内快递">国内快递</option>
                  <option value="邮政">邮政</option>
                  <option value="专线">专线</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <!-- 快遞名稱 -->
                <label class="" for="ExpressDeliveryName">快遞名稱</label>
                <select class="form-control" id="ExpressDeliveryName" name="ExpressDeliveryName">
                  <option selected="selected" value="BBX">BBX</option>
                  <option value="DHL常規">DHL常規</option>
                  <option value="DHL正式報關出口">DHL正式報關出口</option>
                  <option value="DHL-加急">DHL-加急</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <!-- 快遞單號 -->
                <label class="" for="ExpressDeliveryNumber">快遞單號</label>
                <input class="form-control" id="ExpressDeliveryNumber" name="ExpressDeliveryNumber" type="text" value="">
              </div>

              <div class="form-group col-md-3 d-none d-sm-block"></div>

              <div class="form-group col-sm-3">
                <!-- 收貨人 -->
                <label class="" for="Receiver">收貨人</label>
                <input class="form-control" id="Receiver" name="Receiver" type="text" value="Kylie Jordan">
              </div>
              <div class="form-group col-sm-3">
                <!-- 收貨電話 -->
                <label class="" for="ReceivePhone">收貨電話</label>
                <input class="form-control" id="ReceivePhone" name="ReceivePhone" type="text" value="0414929770">
              </div>

              <div class="form-group col-sm-3">

              </div>

              <div class="form-group col-sm-3"></div>

              <div class="form-group col-sm-3">
                <!-- 收貨郵編 -->
                <label class="" for="ReceiveZip">收貨郵編</label>
                <input class="form-control" id="ReceiveZip" name="ReceiveZip" type="text" value="5114">
              </div>
              <div class="form-group col-sm-3">
                <!-- 收貨省 -->
                <label class="" for="ReceiveProvince">收貨省</label>
                <input class="form-control" id="ReceiveProvince" name="ReceiveProvince" type="text" value="South Australia">
              </div>
              <div class="form-group col-sm-3">
                <!-- 收貨市 -->
                <label class="" for="ReceiveCity">收貨市</label>
                <input class="form-control" id="ReceiveCity" name="ReceiveCity" type="text" value="Smithfield">
              </div>
              <div class="form-group col-sm-3">
                <!-- 收貨街道 -->
                <label class="" for="ReceiveStreet">收貨街道</label>
                <input class="form-control" id="ReceiveStreet" name="ReceiveStreet" type="text" value="32 Moir St">
              </div>
              <div class="form-group col-sm-12">
                <!-- 收貨地址 -->
                <label class="" for="ReceiveAddress">收貨地址</label>
                <input class="form-control" id="ReceiveAddress" name="ReceiveAddress" type="text" value="32 Moir St, Smithfield, South Australia, AU">
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- 銷售訂單明細 -->
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>銷售訂單明細
          </div>
          <div class="card-body">
            <div class="form-row">

              <div id="ShowDetail" class="col-12">

              </div>

              <div class="col-12" id="DetailTemplateDiv">

              </div>

              <div hidden="hidden" id="DateDetailTemplateDiv">

              </div>

              <div class="col-12">
                <button id="ShowDetailBtn" class="btn btn-default" type="button">建立123123</button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- 當前金額 -->
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>當前金額
          </div>
          <div class="card-body">

            <div class="form-row">
              <div class="form-group col-sm-3">
                <!-- 支付方式 -->
                <label class="" for="PayType">支付方式</label>
                <select class="form-control" id="PayType" name="PayType">
                  <option value="01">COCO信用卡</option>
                  <option value="02">COCO信用卡DE</option>
                  <option value="03">Paypal(pgs)</option>
                  <option value="04">Paypal(david)</option>
                  <option value="05">三菱东京UFJ银行(Aniia-0119722)</option>
                  <option value="06">三菱东京UFJ银行(Otsuka-0224099)</option>
                  <option value="07">三菱东京UFJ银行(Nihonhashi-225634)</option>
                  <option value="08">三菱东京UFJ银行(Fukuoka-0153079)</option>
                  <option value="09">三菱东京UFJ银行(Nagoya-0147588)</option>
                  <option value="10">中國银行(Landy个人-1427)</option>
                  <option value="11">工商银行(蓝海公司)</option>
                  <option value="12">工商银行(Landy个人-1242)</option>
                  <option value="20">店铺刷卡(东京大塚店)</option>
                  <option value="21">店铺刷卡(名古屋店)</option>
                  <option value="22">现金(USD)</option>
                  <option value="23">乐天便利店(LB)</option>
                  <option value="24">乐天便利店(COCO)</option>
                  <option selected="selected" value="25">乐天信用卡(LB)</option>
                  <option value="26">乐天信用卡(COCO)</option>
                  <option value="27">美國银行(8316)</option>
                  <option value="28">美國银行(0853)</option>
                  <option value="29">乐天积分(LB)</option>
                  <option value="30">乐天积分(COCO)</option>
                  <option value="31">一银收款(个人)</option>
                  <option value="35">店铺刷卡(福冈店)</option>
                  <option value="36">COCO.JP信用卡刷卡</option>
                  <option value="37">COCO.JP 便利店</option>
                  <option value="38">Paygent信用卡</option>
                  <option value="39">Paygent便利店</option>
                  <option value="40">Stripe信用卡</option>
                  <option value="41">StripeDE信用卡</option>
                  <option value="43">店铺刷卡(东京日本桥店)</option>
                  <option value="44">店铺刷卡(福冈店)</option>
                  <option value="45">PayU信用卡</option>
                  <option value="46">Paypal(LA)</option>
                  <option value="47">德國銀行</option>
                  <option value="48">上海商业银行(ANIIA HK-1633)</option>
                  <option value="49">LB信用卡JP</option>
                  <option value="50">现金(CNY)</option>
                  <option value="51">Sezzle信用卡</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <!-- 幣種 -->
                <label class="" for="Currency">幣種</label>
                <select class="form-control" id="Currency" name="Currency">
                  <option value="AUD">澳大利亚元</option>
                  <option value="CAD">加拿大元</option>
                  <option value="EUR">欧元</option>
                  <option value="GBP">英镑</option>
                  <option value="HKD">港币</option>
                  <option value="JPY">日元</option>
                  <option value="NTD">新台币</option>
                  <option value="NZD">新西兰元</option>
                  <option value="PHP">菲律宾比索</option>
                  <option selected="selected" value="RMB">人民币</option>
                  <option value="USD">美元</option>
                  <option value="ZAF">南非兰特</option>
                </select>
              </div>
              <div class="form-group col-sm-3">
                <!-- 付款狀態 -->
                <label class="" for="PayStatus">付款狀態</label>
                <select class="form-control" data-val="true" data-val-required="The 付款狀態 field is required." id="PayStatus" name="PayStatus">
                  <option selected="selected" value="0">無</option>
                </select>
              </div>
              <div class="form-group col-md-3 d-none d-sm-block"></div>
              <div class="form-group col-sm-3">
                <!-- 小計金額 -->
                <label class="" for="SubTotal">小計金額</label>
                <input class="form-control" data-val="true" data-val-number="The field 小計金額 must be a number." data-val-required="The 小計金額 field is required." id="SubTotal" name="SubTotal" type="text" value="0.00">
              </div>
              <div class="form-group col-sm-3">
                <!-- 折扣金額 -->
                <label class="" for="Discount">折扣金額</label>
                <input class="form-control" data-val="true" data-val-number="The field 折扣金額 must be a number." data-val-required="The 折扣金額 field is required." id="Discount" name="Discount" type="text" value="0.00">
              </div>
              <div class="form-group col-sm-3">
                <!-- 總計金額 -->
                <label class="" for="Total">總計金額</label>
                <input class="form-control" data-val="true" data-val-number="The field 總計金額 must be a number." data-val-required="The 總計金額 field is required." id="Total" name="Total" type="text" value="0.00">
              </div>
              <div class="form-group col-md-3 d-none d-sm-block"></div>
              <div class="form-group col-sm-3">
                <!-- 應付金額 -->
                <label class="" for="Payable">應付金額</label>
                <input class="form-control" data-val="true" data-val-number="The field 應付金額 must be a number." data-val-required="The 應付金額 field is required." id="Payable" name="Payable" type="text" value="0.00">
              </div>
              <div class="form-group col-sm-3">
                <!-- 已支付額 -->
                <label class="" for="Pay">已支付額</label>
                <input class="form-control" data-val="true" data-val-number="The field 已支付額 must be a number." data-val-required="The 已支付額 field is required." id="Pay" name="Pay" type="text" value="0.00">
              </div>
              <div class="form-group col-sm-3">
                <!-- 已退款 -->
                <label class="" for="Refund">已退款</label>
                <input class="form-control" data-val="true" data-val-number="The field 已退款 must be a number." data-val-required="The 已退款 field is required." id="Refund" name="Refund" type="text" value="0.00">
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- 客戶留言 -->
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>留言
          </div>
          <div class="card-body">
            <div class="form-row">

              <!-- 客戶留言 -->
              <label class="col-sm-1 col-form-label" for="CustomerMessage">客戶留言</label>
              <div class="col-sm-10">
                <textarea class="form-control" cols="250" id="CustomerMessage" name="CustomerMessage" rows="3"></textarea>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- 版次紀錄 -->
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>版次紀錄
          </div>
          <div class="card-body">
            <div class="form-row">

              <table class="table table-hover table-striped">

                <thead>
                  <tr>
                    <th>時間</th>
                    <th>修改者</th>
                    <th>修改目標</th>
                    <th>修改原因</th>
                    <th>說明</th>
                  </tr>
                </thead>

              </table>

            </div>
          </div>
        </div>
      </div>

      <!-- 修改通知 -->
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <i class="fa fa-wpforms" aria-hidden="true"></i>修改通知
          </div>
          <div class="card-body">
            <div>

              <div id="VersionDiv">

                <div class="form-row VersionDOM" data-versionindex="0">
                  <div class="form-group col-sm-4">
                    <!-- 修改目標 -->
                    <label>修改目標</label>
                    <select class="form-control" id="VersionList_0__Target" name="VersionList[0].Target" placeholder="修改目標">
                      <option value="1805030001">1805030001</option>
                      <option value="1805030001-01">1805030001-01</option>
                    </select>
                  </div>
                  <div class="form-group col-sm-8">
                    <!-- 修改原因 -->
                    <label>修改原因</label>
                    <select class="form-control" id="VersionList_0__Reason" name="VersionList[0].Reason" placeholder="修改原因">
                      <option value="客人要求修改款式，尺寸或其他">客人要求修改款式，尺寸或其他</option>
                      <option value="業務下單問題錯誤或缺失">業務下單問題錯誤或缺失</option>
                      <option value="系統原因導致訂單內容有缺失或者錯誤">系統原因導致訂單內容有缺失或者錯誤</option>
                      <option value="修改訂單金額或添加收款信息">修改訂單金額或添加收款信息</option>
                      <option value="修改快遞類型或收貨地址">修改快遞類型或收貨地址</option>
                    </select>
                  </div>
                  <div class="form-group col-sm-12">
                    <!-- 修改說明 -->
                    <label>修改說明</label>
                    <textarea rows="4" cols="50" class="form-control" placeholder="修改說明" id="VersionList[1].Explanation" name="VersionList[1].Explanation"></textarea>
                  </div>
                </div>

                <div class="form-row VersionDOM" data-versionindex="1">
                  <div class="form-group col-sm-4">
                    <label>修改目標</label>
                    <select class="form-control" placeholder="修改目標" id="VersionList[2].Target" name="VersionList[2].Target">
                      <option value="1805030001">1805030001</option>
                      <option value="1805030001-01">1805030001-01</option>
                    </select>
                  </div>
                  <div class="form-group col-sm-7">
                    <label>修改原因</label>
                    <select class="form-control" placeholder="修改原因" id="VersionList[2].Reason" name="VersionList[2].Reason">
                      <option value="客人要求修改款式，尺寸或其他">客人要求修改款式，尺寸或其他</option>
                      <option value="業務下單問題錯誤或缺失">業務下單問題錯誤或缺失</option>
                      <option value="系統原因導致訂單內容有缺失或者錯誤">系統原因導致訂單內容有缺失或者錯誤</option>
                      <option value="修改訂單金額或添加收款信息">修改訂單金額或添加收款信息</option>
                      <option value="修改快遞類型或收貨地址">修改快遞類型或收貨地址</option>
                    </select>
                  </div>
                  <div class="col-sm-1 text-center">
                    <button type="button" class="btn btn-danger RemoveVersion" data-versionindex="1">移除</button>
                  </div>
                  <div class="form-group col-sm-12">
                    <label>修改說明</label>
                    <textarea rows="4" cols="50" class="form-control" placeholder="修改說明" id="VersionList[1].Explanation" name="VersionList[1].Explanation"></textarea>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <button type="button" class="btn btn-primary" id="VersionBtn">新增一筆</button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="col-12 text-right mb-3">
        <button type="submit" class="btn btn-success col-3">
          保存
        </button>
      </div>

    </div>

     <div id="htmlDiff2"></div>
  </div>
</template>
<script>
import HtmlDiff from 'htmldiff-js'
export default {
  name: 'htmldiffjs',
  created () { },
  mounted () {
    (function () {
      var oldHtml = document.getElementById('oldHtml')
      var newHtml = document.getElementById('newHtml')
      var diffHtml = document.getElementById('htmlDiff')

      diffHtml.innerHTML = HtmlDiff.execute(oldHtml.innerHTML, newHtml.innerHTML)
    }());
    (function () {
      var oldHtml = document.getElementById('compareTemplate')
      var newHtml = document.getElementById('compareTemplate2')
      var diffHtml = document.getElementById('htmlDiff2')

      diffHtml.innerHTML = HtmlDiff.execute(oldHtml.innerHTML, newHtml.innerHTML)
    }())
  }
}
</script>
<style lang="css">
ins {
  text-decoration: none;
  background-color: #d4fcbc;
}

del {
  text-decoration: line-through;
  background-color: #fbb6c2;
  color: #555;
}


#compareTemplate, #compareTemplate2{
  display: none;
}
</style>