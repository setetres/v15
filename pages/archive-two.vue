<template>
  <Bar
    id="back"
    title="Archive Two"
    color="hover:text-amber-500"
  />
  <CardImage class="col-span-2">
    <img src="~assets/images/archive-two.png" width="2560" height="1440" alt="Archive Two Screenshot" />
  </CardImage>
  <CardDetail class="col-span-2">
    <Detail name="Project">
      Archive Two
    </Detail>
    <Detail name="Description">
      🗄️ v2.0 of the archive.
    </Detail>
    <Detail name="Framework">
      Vue / NuxtJS
    </Detail>
    <Detail name="Year">
      <Tag color="bg-amber-500">
        2023
      </Tag>
    </Detail>
  </CardDetail>
  <CardMain
    class="rounded-b-none sm:rounded-bl-lg sm:rounded-br-none"
    color="group-hover:text-amber-500"
    description="github.com/setetres/archive-two"
    external="true"
    id="github-archive-two"
    label="Source Code"
    title="View on GitHub"
    url="https://github.com/setetres/archive-two"
  />
  <CardMain
    class="rounded-b-lg sm:rounded-bl-none sm:rounded-br-lg pattern"
    color="group-hover:text-amber-500"
    description="archive.setetres.st"
    external="true"
    id="live-archive-two"
    label="Live"
    title="View Project"
    url="https://archive.setetres.st"
  />
</template>
<script>
  export default {
    mounted() {
      this.$nextTick(() => {
      })
    },
    beforeRouteLeave(to, from, next) {
      setTimeout(function() {
        next()
      }, 173)
    }
  }
</script>
