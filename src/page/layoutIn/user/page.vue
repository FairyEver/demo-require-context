<template>
  <div class="container">
    <h1>用户测试</h1>
    <p>尝试改变 url 的最后一个数字体验变化</p>
    <routerDispaly />
    <hr>
    <pre><code>this.id : {{id}}</code></pre>
  </div>
</template>

<script>
export const router = {
  props: true,
  pathSuffix: '/:id'
}
export default {
  name: 'page-user',
  props: {
    id: {
      default: 'default-id'
    }
  }
}
</script>
