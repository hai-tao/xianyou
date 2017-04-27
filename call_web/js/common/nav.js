//封装nav和header组件
Vue.component('nav-list',{
    template:`
      <aside>
        <el-menu default-active="1-1" class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-menu"></i>外呼管理</template>
            <el-menu-item index="1-1"><a href="call_index.html">外呼执行</a></el-menu-item>
            <el-menu-item index="1-2"><a href="record.html">外呼记录</a></el-menu-item>
            <el-menu-item index="1-3"><a href="record.html">外呼选项配置</a></el-menu-item>
            <el-menu-item index="1-4"><a href="record.html">外呼清单管理</a></el-menu-item>
          </el-submenu>
        </el-menu>
      </aside>
    `
})


/*
template:'<aside><el-menu default-active="1-1" class="el-menu-vertical-demo"><el-submenu index="1"><template slot="title"><i class="el-icon-menu"></i>外呼管理</template><el-menu-item index="1-1"><a href="call_index.html">外呼执行</a></el-menu-item><el-menu-item index="1-2"><a href="record.html">外呼记录</a></el-menu-item><el-menu-item index="1-3"><a href="record.html">外呼选项配置</a></el-menu-item><el-menu-item index="1-4"><a href="record.html">外呼清单管理</a></el-menu-item></el-submenu></el-menu></aside>'
*/