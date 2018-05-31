<template>
  <div class="container">
    <h1>page7</h1>
    <p>
      <button type="button" class="btn btn-primary" @click="$router.back()">back</button>
    </p>
    <routerDispaly />
  </div>
</template>

<script>
export const router = {
  //
}
export default {
  name: 'page-7'
}
</script>
