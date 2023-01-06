<script setup lang="ts">
  const route = useRoute()
</script>
<template>
  <App>
    <NuxtLoadingIndicator color="#f59e0b" />
    <Content>
      <NuxtPage />
    </Content>
    <Header />
  </App>
</template>
