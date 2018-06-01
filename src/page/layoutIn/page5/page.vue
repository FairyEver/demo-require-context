<template>
  <div class="container">
    <h1>page5</h1>
    <p>
      <button type="button" class="btn btn-primary" @click="$router.back()">back</button>
    </p>
    <routerDispaly />
  </div>
</template>

<script>
export default {
  name: 'page-5'
}
</script>
