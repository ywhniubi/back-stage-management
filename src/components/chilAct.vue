<template>
  <div class="body">
    <div class="start">
<img src="../../static/img/chose.png" alt="">
    </div>
    <div class="mask" v-if="isRight">
      <div class="tip">
          <div style="margin-bottom:0.3rem;color:#000 !important;font-weight:600">提示</div>
          <div style="width:70%;margin:0 auto;text-align:left">哈哈炫动卫视提供的节目限定儿童</div>
          <p style="width:70%;margin:0 auto;text-align:left;margin-top:0.2rem">年龄为0-14岁</p>
          <div class="confirm" @click="isRight=false">确定</div>
      </div>
    </div>
    <div class="head">
        <ul>
          <li>
            <div class="left">姓名</div>
            <div class="right">
              <input type="text" placeholder="请输入姓名">
            </div>
          </li>
          <li>
            <div class="left">身份证</div>
            <div class="right">
                 <input type="text" placeholder="请输入身份证">
            </div>
          </li>
             <li>
            <div class="left">录像儿童年龄</div>
            <div class="right">
                 <input type="number" placeholder="整数，范围在0-14" @blur="checkRight" v-model="yearOld">
            </div>
            <div class="rights">
               岁
            </div>
          </li>
          <li>
            <div class="left">银行卡号</div>
            <div class="right">
                 <input type="text" placeholder="请输入银行卡号">
            </div>
          </li>
          <li>
            <div class="left">联系方式</div>
            <div class="right">
                 <input type="text" placeholder="请输入联系方式">
            </div>
          </li>
        </ul>
    </div>
    <div class="btnGroup">
      <button>提交</button>
      <button>取消</button>
      <div></div>
    </div>
    <div class="end">
      <p>温馨提示:</p>
      <p style="text-indent:2em;">哈炫动卫视将在持卡人报名后T+10个工作日内与持卡人取得
联系,确认录像节目、参与人员、录制时间、录制地点等,最终
节目内容以哈哈炫动卫视安排为准。</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRight: true,
      yearOld: ''
    }
  },
  methods: {
    checkRight() {
      let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
      let arrs = arr.filter(item => {
        return item == this.yearOld
      })
      if (arrs.length == 0) {
        this.isRight = true
        console.log(this.isRight)
        this.yearOld = ''
      }
    }
  }
}
var deviceWidth = document.documentElement.clientWidth
if (deviceWidth > 750) deviceWidth = 750
document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px'
window.onresize = function() {
  var deviceWidth = document.documentElement.clientWidth
  if (deviceWidth > 750) deviceWidth = 750
  document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px'
}
</script>

<style scope>
body,
html,
* {
  margin: 0;
  padding: 0;
}
.body {
  width: 100%;
  height: 100%;
  background-color: #f9faf9;
  font-size: 0.28rem;
}
.body ul {
  width: 100%;
}
.head {
  margin-bottom: 1rem;
}
.body ul li {
  height: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  margin-bottom: 0.04rem;
}
.left {
  width: 2rem;
  height: 100%;
  line-height: 0.8rem;
  text-align: left;
  padding-left: 0.3rem;
  color: black;
}
.right {
  height: 100%;
}
.body ul li input {
  display: block;
  height: 90%;
  border: none;
  outline: none;
}

::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #ddd;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: #ddd;
}
:-ms-input-placeholder {
  /* IE 10+ */
  color: #ddd;
}
:-moz-placeholder {
  /* Firefox 18- */
  color: #ddd;
}
.rights {
  width: 28%;
  text-align: right;
  padding-right: 0.1rem;
  box-sizing: border-box;
}
button {
  display: block;
  width: 90%;
  /* margin: 0 auto; */
  background: linear-gradient(to bottom, #3b77cd 0%, #2555a1 100%);
  height: 0.8rem;
  border: none;
  color: #fff;
  border-radius: 0.1rem;
  outline: none;
  margin: 0 auto;
  margin-bottom: 0.5rem;
}
.btnGroup {
  padding: 0 0.3rem;
}
.end {
  padding: 0 0.3rem;
  margin-top: 0.8rem;
  font-size: 0.22rem;
  letter-spacing: 0.03rem;
  color: #000;
}
.end p {
  text-align: left;
}
.mask {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
}
.tip {
  width: 80%;
  height: 3rem;
  background-color: #fff;
  border-radius: 0.2rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-80%);
  padding-top: 0.7rem;
  color: #686869;
}
.confirm {
  width: 100%;
  height: 0.8rem;
  position: absolute;
  bottom: 0;
  text-align: center;
  color: #2555a1;
  line-height: 0.8rem;
  border-top: 0.02rem solid #ccc;
}
.start {
  width: 100%;
  height: 100%;
  overflow: scroll;
  position: absolute;
}
.start img {
  width: 100%;
}
</style>
