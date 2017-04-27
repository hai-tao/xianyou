//封装nav和header组件
Vue.component('header-list',{
    template:`
      <el-col :span="24" class="header">
      <el-col :span="15" class="logo">
        <img src="images/Sunlight-Logo.png" alt="logo">
      </el-col>
      <el-col :span="9" class="userinfo">
        <el-dropdown trigger="click">
            <span class="el-dropdown-link userinfo-inner">
              sales1
              <img src="images/user.png"  alt="头像">
            </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    `
})
/*template:'<el-col :span="24" class="header"><el-col :span="15" class="logo"><img src="images/Sunlight-Logo.png" alt="logo"></el-col><el-col :span="9" class="userinfo"><el-dropdown trigger="click"><span class="el-dropdown-link userinfo-inner">sales1<img src="images/user.png"  alt="头像"></span><el-dropdown-menu slot="dropdown"><el-dropdown-item @click.native="">退出登录</el-dropdown-item></el-dropdown-menu></el-dropdown></el-col>'
*/