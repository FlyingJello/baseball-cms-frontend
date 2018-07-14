<template>
  <div>
    <h1>hello welcome to my website</h1>
        <p>here is the menu</p>
        <ul>
            <li><router-link to="/cms/home">CMS HOME</router-link></li>
        </ul>
        <p>and here will be the content :</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>