<template>
  <nav class="grid grid-cols-2 md:grid-cols-4 gap-y-12 uppercase">
    <div class="space-y-12">
      <div>
        <HeadingSans>
          Projects
        </HeadingSans>
        <ul role="list" class="mt-6 space-y-3">
          <li>
            <NavigationLink
              color="hover:text-amber-500"
              id="acommentonthedevilslove"
              to="/acommentonthedevilslove"
            >
              A.C.O.T.D.L
            </NavigationLink>
          </li>
          <li>
            <NavigationLink
              color="hover:text-amber-500"
              id="evenbettermotherfuckingwebsite"
              to="/evenbettermotherfuckingwebsite"
            >
              E.B.M.F.W
            </NavigationLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="space-y-12">
      <div>
        <HeadingSans>
          —
        </HeadingSans>
        <ul role="list" class="mt-6 space-y-3">
          <li>
            <NavigationLink
              color="hover:text-amber-500"
              id="archive-two"
              to="/archive-two"
            >
              Archive Two
              <Tag
                class="ml-2"
                color="bg-amber-500"
              >
                New
              </Tag>
            </NavigationLink>
          </li>
          <li>
            <NavigationLink
              color="hover:text-amber-500"
              id="inkstarter"
              to="/inkstarter"
            >
              InkStarter
            </NavigationLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="space-y-12">
      <div>
        <HeadingSans>
          —
        </HeadingSans>
        <ul role="list" class="mt-6 space-y-3">
          <li>
            <NavigationLink
              color="hover:text-amber-500"
              id="milico"
              to="/milico"
            >
              Milico
            </NavigationLink>
          </li>
          <li>
            <NavigationLink
              color="hover:text-amber-500"
              to="/moqueca"
              id="moqueca"
            >
              Moqueca
            </NavigationLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="space-y-12">
      <div>
        <HeadingSans>
          Extras
        </HeadingSans>
        <ul role="list" class="mt-6 space-y-3">
          <li>
            <NavigationLink
              color="hover:text-amber-500"
              external="true"
              to="https://trello.com/b/tJy9iAeH"
            >
              OXO Newsletter
            </NavigationLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
