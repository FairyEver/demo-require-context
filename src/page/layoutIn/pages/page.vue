<template>
  <div class="container">
    <h1>pages</h1>
    <div class="row">
      <div class="col-sm">
        <routerDispaly />
      </div>
      <div class="col-sm">
        <div class="list-group">
          <router-link
            v-for="n in 9"
            :key="n"
            class="list-group-item list-group-item-action"
            :to="{ name: `page${n}` }">
            go to page{{n}}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export const router = {
  //
}
export default {
  name: 'pages'
}
</script>
