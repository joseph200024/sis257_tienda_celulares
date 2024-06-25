<script setup lang="ts">
import http from '@/plugins/axios'
import router from '@/router'
import { onMounted, ref } from 'vue'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const nombre = ref('')
const id = router.currentRoute.value.params['id']

async function editarColores() {
  await http
    .patch(`${ENDPOINT}/${id}`, { nombre: nombre.value })
    .then(() => router.push('/colores'))
}

async function getColores() {
  await http.get(`${ENDPOINT}/${id}`).then((response) => {
    nombre.value = response.data.nombre
  })
}

function goBack() {
  router.go(-1)
}

onMounted(() => {
  getColores()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/colores">Colores</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Editar</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Editar Colores</h2>
    </div>

    <div class="row">
      <form @submit.prevent="editarColores">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="nombre" placeholder="Nombre" required />
          <label for="nombre">Nombre</label>
        </div>

        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">
            <font-awesome-icon icon="fa-solid fa-save" /> Guardar
          </button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style></style>
