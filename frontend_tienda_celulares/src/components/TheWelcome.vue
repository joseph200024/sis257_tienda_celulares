<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>HISTORIA</template>

    La fabrica de ladrillos fue fundada el año 2017, por Juan Montreal Quinteras hasta el dia de hoy
    sigue sigue en funcionamiento y fabricando ladrillos para todo el cliente interesado.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>FABRICACIÓN</template>

    La fabrica tiene diferentes modelos de ladrillos, sobre todo un ladrillo ecológico que de igual
    manera tiene su demanda, todos los tipos de ladrillos ayudan a diferentes tipos de
    construcciones.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>COMUNICARSE</template>

    Puede contactarse a los siguintes números: ............................ Para mayor información:
    76857341.......................................... Para servicio tecnico:
    65923473................................................. Para servicio de compras:
    86569344.............................................
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>SIGUENOS</template>

    Siguenos en nuestras redes sociales:....................................... Instagram: Fabrica
    ELVIA........................................................... Facebook: Fabrica de ladrillos
    'ELVIA'.....................................
  </WelcomeItem>
</template>
