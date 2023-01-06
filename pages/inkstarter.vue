<template>
  <Bar
    id="back"
    title="InkStarter"
    color="hover:text-amber-500"
  />
  <CardImage class="col-span-2">
    <img src="~assets/images/inkstarter.png" width="2560" height="1440" alt="InkStarter Screenshot" />
  </CardImage>
  <CardDetail class="col-span-2">
    <Detail name="Project">
      InkStarter
    </Detail>
    <Detail name="Description">
      💉 Crowdsourcing tattoo project.
    </Detail>
    <Detail name="Framework">
      Vue / NuxtJS
    </Detail>
    <Detail name="Year">
      <Tag color="bg-amber-500">
        2014
      </Tag>
    </Detail>
  </CardDetail>
  <CardMain
    class="rounded-b-none sm:rounded-bl-lg sm:rounded-br-none"
    color="group-hover:text-amber-500"
    description="github.com/setetres/inkstarter"
    external="true"
    id="github-inkstarter"
    label="Source Code"
    title="View on GitHub"
    url="https://github.com/setetres/inkstarter"
  />
  <CardMain
    class="rounded-b-lg sm:rounded-bl-none sm:rounded-br-lg pattern"
    color="group-hover:text-amber-500"
    description="inkstarter.setetres.st"
    external="true"
    id="live-inkstarter"
    label="Live"
    title="View Project"
    url="https://inkstarter.setetres.st"
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
