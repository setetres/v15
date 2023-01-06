<template>
  <Bar
    id="back"
    title="A.C.O.T.D.L"
    color="hover:text-amber-500"
  />
  <CardImage class="col-span-2">
    <img src="~assets/images/acommentonthedevilslove.png" width="2560" height="1440" alt="A comment on the Devil's Love Screenshot" />
  </CardImage>
  <CardDetail class="col-span-2">
    <Detail name="Project">
      A comment on the Devil's Love
    </Detail>
    <Detail name="Description">
      🐱 These poems are respectfully dedicated to The Cheshire-Cat.
    </Detail>
    <Detail name="Framework">
      Vue / NuxtJS
    </Detail>
    <Detail name="Year">
      <Tag color="bg-amber-500">
        2021
      </Tag>
    </Detail>
  </CardDetail>
  <CardMain
    class="rounded-b-none sm:rounded-bl-lg sm:rounded-br-none"
    color="group-hover:text-amber-500"
    description="github.com/setetres/acommentonthedevilslove"
    id="github-acommentonthedevilslove"
    external="true"
    label="Source Code"
    title="View on GitHub"
    url="https://github.com/setetres/acommentonthedevilslove"
  />
  <CardMain
    class="rounded-b-lg sm:rounded-bl-none sm:rounded-br-lg pattern"
    color="group-hover:text-amber-500"
    description="acommentonthedevilslove.setetres.st"
    id="live-acommentonthedevilslove"
    external="true"
    label="Live"
    title="View Project"
    url="https://acommentonthedevilslove.setetres.st"
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
