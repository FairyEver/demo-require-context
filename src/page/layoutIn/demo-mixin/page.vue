<template>
  <div class="container">
    <h1>使用 <code>require.context</code> 批量注册 <code>mixin</code></h1>
    <p>有时候复杂的业务页面即使有了组件封装还会有上千行代码，这时候最好把业务代码按功能划分为 <code>mixin</code>，下面模拟了注册五个 <code>mixin</code></p>
    <!-- <routerDispaly /> -->
    <div class="row">
      <div class="col-sm">
        <div class="card">
          <h5 class="card-header">一般写法</h5>
          <div class="card-body">
            <pre><code>&lt;script&gt;
import m1 from './mixins/m1'
import m2 from './mixins/m2'
import m3 from './mixins/m3'
import m4 from './mixins/m4'
import m5 from './mixins/m5'
export default {
  mixins: [
    m1,
    m2,
    m3,
    m4,
    m5
  ]
}
&lt;/script&gt;</code></pre>
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="card">
          <h5 class="card-header">优化</h5>
          <div class="card-body">
            <pre><code>&lt;script&gt;
const req = require.context('./mixins', true, /\.js$/)
export default {
  mixins: req.keys().map(key => req(key).default)
}
&lt;/script&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const req = require.context('./mixins', true, /\.js$/)
export default {
  name: 'page-demo-mixin',
  mixins: req.keys().map(key => req(key).default)
}
</script>
