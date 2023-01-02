<template>
  <nav class="grid grid-cols-2 md:grid-cols-4 gap-y-12 uppercase">
    <div class="space-y-12">
      <div>
        <HeadingSans>Projects</HeadingSans>
        <ul role="list" class="mt-6 space-y-3">
          <li>
            <NavigationLink to="/acommentonthedevilslove">
              A.C.O.T.D.L
            </NavigationLink>
          </li>
          <li>
            <NavigationLink to="/evenbettermotherfuckingwebsite">
              E.B.M.F.W
            </NavigationLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="space-y-12">
      <div>
        <HeadingSans>—</HeadingSans>
        <ul role="list" class="mt-6 space-y-3">
          <li>
            <NavigationLink to="/archive-two">
              Archive Two
              <Tag class="ml-2">
                New
              </Tag>
            </NavigationLink>
          </li>
          <li>
            <NavigationLink to="/inkstarter">
              InkStarter
            </NavigationLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="space-y-12">
      <div>
        <HeadingSans>—</HeadingSans>
        <ul role="list" class="mt-6 space-y-3">
          <li>
            <NavigationLink to="/milico">
              Milico
            </NavigationLink>
          </li>
          <li>
            <NavigationLink to="/moqueca">
              Moqueca
            </NavigationLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="space-y-12">
      <div>
        <HeadingSans>Extras</HeadingSans>
        <ul role="list" class="mt-6 space-y-3">
          <li>
            <NavigationLink to="https://trello.com/b/tJy9iAeH" target="_blank">
              OXO Newsletter
              <IconArrow class="h-3 w-3 ml-2"/>
            </NavigationLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
