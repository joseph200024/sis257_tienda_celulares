<script setup lang="ts">
import { ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const usuario = ref('')
const clave = ref('')

async function crearUsuario() {
  await http
    .post(ENDPOINT, {
      usuario: usuario.value,
      clave: clave.value
    })
    .then(() => router.push('/usuarios'))
}

function goBack() {
  router.go(-1)
}
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/usuarios">Usuarios</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nuevo Usuario</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearUsuario">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="usuario"
            placeholder="Usuario"
            required
          />
          <label for="usuario">Usuario</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="clave" placeholder="Clave" required />
          <label for="clave">Clave</label>
        </div>
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">Crear</button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style></style>
