<template>
  <Bar title="Archive Two" />
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
      <Tag>
        2023
      </Tag>
    </Detail>
  </CardDetail>
  <CardExternal
    label="Source Code"
    title="View on GitHub"
    description="github.com/setetres/archive-two"
    url="github.com/setetres/archive-two"
    class="rounded-b-none sm:rounded-bl-lg sm:rounded-br-none"
  />
  <CardExternal
    label="Live"
    title="View Project"
    description="archive.setetres.st"
    url="archive.setetres.st"
    class="rounded-b-lg sm:rounded-bl-none sm:rounded-br-lg pattern"
  />
</template>
