<template>
  <div class="container" style="margin-top: 20px;">
    <h1>错误页面</h1>
    <p>此页面没有在 <code>&lt;mainLayout&gt;</code> 的子路由中</p>
    <p>
      <router-link class="btn btn-primary" :to="{ name: 'index' }">返回首页</router-link>
    </p>
    <routerDispaly />
  </div>
</template>

<script>
export default {
  name: 'page-error'
}
</script>
