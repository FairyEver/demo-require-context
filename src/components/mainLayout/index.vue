<template>
  <div>
    <ul class="nav justify-content-center" style="margin: 20px 0px;">
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'index' }">首页</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'user', params: { id: '1' } }">用户测试</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: '-error' }">错误页面</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'pages' }">测试页面</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>
