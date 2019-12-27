<template>
    <div class="col m-0 p-0">
      <nav class="navbar navbar-expand-sm bg-dark iceborder-bottom">
        <ul class="navbar-nav w-100 d-flex">
            <router-link class="navbar-brand text-light" to="/">
              <div class="row">
                <div class="col m-0">
                  <img class="mr-2 rounded" width="30" height="30" :src="$auth.user.picture" />
                </div>
                <div class="col m-0">
                  <p class="text-light m-0">{{ $auth.user.name }}</p>
                </div>
              </div>
            </router-link>
            <router-link class="nav-link text-light" to="/lobbies">Lobbies</router-link>
        </ul>
      </nav>
    </div>
</template>

<script>
export default {
name: "navbar",
}
</script>

<style>

</style>