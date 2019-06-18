<template>
  <div class="main">
<el-form  ref="formAll" :model="form" label-width="80px" :rules="rules" status-icon>
 <div class="head">
   <img src="../../static/img/head.jpg" alt="">
 </div>
  <el-form-item label="用户名" prop="userName">
    <el-input v-model="form.userName" ></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="passWord">
    <el-input v-model="form.passWord"></el-input>
  </el-form-item>
    <el-form-item >
      <el-button type="success" @click="login">登录</el-button>
      <el-button type="danger" @click="resetForm">重置</el-button>
        </el-form-item>
  </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        userName: '',
        passWord: ''
      },
      rules: {
        userName: [
          { required: true, message: '用户名不能为空', trigger: 'change' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
        ],
        passWord: [
          { required: true, message: '密码不能为空', trigger: 'change' },
          { min: 3, max: 6, message: '长度在 3 到 6个字符', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    resetForm() {
      this.$refs.formAll.resetFields()
    },
    login() {
      this.$refs.formAll.validate((valid, obj) => {
        if (valid) {
          this.$http({
            url: 'login',
            method: 'post',
            data: {
              username: this.form.userName,
              password: this.form.passWord
            }
          }).then(
            res => {
              if (res.data.meta.status != 200) {
                this.$message.error('账户名或密码错误')
              } else {
                console.log(res.data.data.token)
                localStorage.setItem('token', res.data.data.token)
                this.logSuc()
              }
            },
            err => {
              console.log(err)
            }
          )
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    logSuc() {
      this.$message({
        message: '登录成功!即将跳转',
        type: 'success'
      })
      setTimeout(() => {
        this.$router.push('/home/home')
      }, 2000)
    }
  }
}
</script>

<style scope lang=less>
@import '../assets/comnon.css';
.el-form {
  width: 30%;
  background-color: #fff;
  height: 230px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 30px;
  padding-top: 40px;
  border-radius: 10px;
}
.main {
  height: 100%;
  background-color: #2d434c;
}
.el-form-item {
  width: 90%;
}
.head {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: -30%;
  transform: translateX(-50%);
  border: 10px solid #fff;
}
</style>
