<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const nombre = ref('')
const direccion = ref('')
const gmail = ref('')
const telefono = ref<number | null>(null)
const id = router.currentRoute.value.params['id']

async function editarProveedore() {
  await http
    .patch(`${ENDPOINT}/${id}`, {
      nombre: nombre.value,
      direccion: direccion.value,
      gmail: gmail.value,
      telefono: telefono.value
    })
    .then(() => router.push('/proveedores'))
}

async function getProveedore() {
  await http.get(`${ENDPOINT}/${id}`).then((response) => {
    ;(nombre.value = response.data.nombre),
      (direccion.value = response.data.direccion),
      (gmail.value = response.data.gmail),
      (telefono.value = parseInt(response.data.telefono))
  })
}

function goBack() {
  router.go(-1)
}

onMounted(() => {
  getProveedore()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/proveedores">Proveedores</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Editar</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Editar Proveedore</h2>
    </div>

    <div class="row">
      <form @submit.prevent="editarProveedore">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="nombre" placeholder="Nombre" required />
          <label for="nombre">Nombre</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="direccion"
            placeholder="Direccion"
            required
          />
          <label for="direccion">Direccion</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="gmail" placeholder="Gmail" required />
          <label for="gmail">Gmail</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="telefono"
            placeholder="Telefono"
            required
          />
          <label for="telefono">Telefono</label>
        </div>
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">Guardar</button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style></style>
