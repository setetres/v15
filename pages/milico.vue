<template>
  <Bar
    id="back"
    title="Milico"
    color="hover:text-amber-500"
  />
  <CardImage class="col-span-2">
    <img src="~assets/images/milico.png" width="2560" height="1440" alt="Milico Screenshot" />
  </CardImage>
  <CardDetail class="col-span-2">
    <Detail name="Project">
      Milico for Google Chrome
    </Detail>
    <Detail name="Description">
      🔫 Você pode substituir Intervenção Militar por 🌸🌷🌼🌺🌻, por exemplo.
    </Detail>
    <Detail name="Framework">
      HTML
    </Detail>
    <Detail name="Year">
      <Tag color="bg-amber-500">
        2018
      </Tag>
    </Detail>
  </CardDetail>
  <CardMain
    class="rounded-b-none sm:rounded-bl-lg sm:rounded-br-none"
    color="group-hover:text-amber-500"
    description="github.com/setetres/milico"
    external="true"
    id="github-milico"
    label="Source Code"
    title="View on GitHub"
    url="https://github.com/setetres/milico"
  />
  <CardMain
    class="rounded-b-lg sm:rounded-bl-none sm:rounded-br-lg pattern"
    color="group-hover:text-amber-500"
    description="milico.setetres.st"
    external="true"
    id="live-milico"
    label="Live"
    title="View Project"
    url="https://milico.setetres.st"
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
