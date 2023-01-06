<template>
  <CardMain
    class="rounded-t-lg sm:rounded-tr-none sm:rounded-tl-lg pattern-hover"
    color="group-hover:text-amber-500"
    description="🐱 These poems are respectfully dedicated to The Cheshire-Cat."
    id="index-acommentonthedevilslove"
    label="2021"
    title="A comment on the Devil's Love"
    url="/acommentonthedevilslove"
  >
    <img src="~assets/images/acommentonthedevilslove.png" width="2560" height="1440" alt="A comment on the Devil's Love Screenshot" />
  </CardMain>
  <CardMain
    class="rounded-t-none sm:rounded-tr-lg pattern-hover"
    color="group-hover:text-amber-500"
    description="💋 This is an even better motherfucking website."
    id="index-evenbettermotherfuckingwebsite"
    label="2015"
    title="Even Better Motherfucking Website"
    url="/evenbettermotherfuckingwebsite"
  >
    <img src="~assets/images/ebmfw.png" width="2560" height="1440" alt="Even Better Motherfucking Website Screenshot" />
  </CardMain>
  <CardMain
    class="pattern-hover"
    color="group-hover:text-amber-500"
    description="🗄️ v2.0 of the archive."
    id="index-archive-two"
    label="2023"
    title="Archive Two"
    url="/archive-two"
  >
    <img src="~assets/images/archive-two.png" width="2560" height="1440" alt="Archive Two Screenshot" />
  </CardMain>
  <CardMain
    class="pattern-hover"
    color="group-hover:text-amber-500"
    description="💉 Crowdsourcing tattoo project."
    id="index-inkstarter"
    label="2014"
    title="InkStarter"
    url="/inkstarter"
  >
    <img src="~assets/images/inkstarter.png" width="2560" height="1440" alt="InkStarter Screenshot" />
  </CardMain>
  <CardMain
    class="rounded-b-none sm:rounded-bl-lg sm:rounded-br-none pattern-hover"
    color="group-hover:text-amber-500"
    description="🔫 Você pode substituir Intervenção Militar por 🌸🌷🌼🌺🌻, por exemplo."
    id="index-milico"
    label="2018"
    title="Milico for Google Chrome"
    url="/milico"
  >
    <img src="~assets/images/milico.png" width="2560" height="1440" alt="Milico for Google Chrome Screenshot" />
  </CardMain>
  <CardMain
    class="rounded-b-lg sm:rounded-bl-none sm:rounded-br-lg pattern-hover"
    color="group-hover:text-amber-500"
    description="👊 A melhor receita de moqueca do Brasil!"
    id="index-moqueca"
    label="2020"
    title="MOQUECA DELIVERY"
    url="/moqueca"
  >
    <img src="~assets/images/moqueca.png" width="2560" height="1440" alt="MOQUECA DELIVERY Screenshot" />
  </CardMain>
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
