<template>
  <Bar
    id="back"
    title="E.B.M.F.W"
    color="hover:text-amber-500"
  />
  <CardImage class="col-span-2">
    <img src="~assets/images/ebmfw.png" width="2560" height="1440" alt="Even Better Motherfucking Website Screenshot" />
  </CardImage>
  <CardDetail class="col-span-2">
    <Detail name="Project">
      Even Better Motherfucking Website
    </Detail>
    <Detail name="Description">
      💋 This is an even better motherfucking website.
    </Detail>
    <Detail name="Framework">
      HTML
    </Detail>
    <Detail name="Year">
      <Tag color="bg-amber-500">
        2015
      </Tag>
    </Detail>
  </CardDetail>
  <CardMain
    class="rounded-b-none sm:rounded-bl-lg sm:rounded-br-none"
    color="group-hover:text-amber-500"
    description="github.com/setetres/evenbettermotherfuckingwebsite"
    external="true"
    id="github-evenbettermotherfuckingwebsite"
    label="Source Code"
    title="View on GitHub"
    url="https://github.com/setetres/evenbettermotherfuckingwebsite"
  />
  <CardMain
    class="rounded-b-lg sm:rounded-bl-none sm:rounded-br-lg pattern"
    color="group-hover:text-amber-500"
    description="evenbettermotherfucking.website"
    id="live-evenbettermotherfuckingwebsite"
    external="true"
    label="Live"
    title="View Project"
    url="https://evenbettermotherfucking.website"
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
