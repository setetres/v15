<template>
  <Bar
    id="back"
    title="Moqueca"
    color="hover:text-amber-500"
  />
  <CardImage class="col-span-2">
    <img src="~assets/images/moqueca.png" width="2560" height="1440" alt="MOQUECA Screenshot" />
  </CardImage>
  <CardDetail class="col-span-2">
    <Detail name="Project">
      MOQUECA DELIVERY
    </Detail>
    <Detail name="Description">
      👊 A melhor receita de moqueca do Brasil!
    </Detail>
    <Detail name="Framework">
      HTML
    </Detail>
    <Detail name="Year">
      <Tag color="bg-amber-500">
        2020
      </Tag>
    </Detail>
  </CardDetail>
  <CardMain
    class="rounded-b-none sm:rounded-bl-lg sm:rounded-br-none"
    color="group-hover:text-amber-500"
    description="github.com/setetres/moqueca"
    external="true"
    id="github-moqueca"
    label="Source Code"
    title="View on GitHub"
    url="https://github.com/setetres/moqueca"
  />
  <CardMain
    class="rounded-b-lg sm:rounded-bl-none sm:rounded-br-lg pattern"
    color="group-hover:text-amber-500"
    description="moqueca.setetres.st"
    external="true"
    id="live-moqueca"
    label="Live"
    title="View Project"
    url="https://moqueca.setetres.st"
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
