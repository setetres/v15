<template>
  <Bar title="InkStarter" />
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
      <Tag>
        2014
      </Tag>
    </Detail>
  </CardDetail>
  <CardExternal
    label="Source Code"
    title="View on GitHub"
    description="github.com/setetres/inkstarter"
    url="github.com/setetres/inkstarter"
    class="rounded-b-none sm:rounded-bl-lg sm:rounded-br-none"
  />
  <CardExternal
    label="Live"
    title="View Project"
    description="inkstarter.setetres.st"
    url="inkstarter.setetres.st"
    class="rounded-b-lg sm:rounded-bl-none sm:rounded-br-lg pattern"
  />
</template>
