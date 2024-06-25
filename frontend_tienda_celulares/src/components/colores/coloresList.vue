<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import type { Colores } from '@/models/Colores.ts'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var colore = ref<Colores[]>([])

async function getColore() {
  colore.value = await http.get(`/colores`).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/colores/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar el color?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getColore())
  }
}

onMounted(() => {
  getColore()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Colores</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de Colores</h2>
      <div class="col-12">
        <RouterLink to="/colores/crear" class="btn btn-primary">
          <i class="fas fa-plus"></i> Crear Nuevo
        </RouterLink>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-hover">
        <caption>
          Lista de Colores
        </caption>
        <thead class="thead-light">
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Nombre</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(colore, index) in colore.values()" :key="colore.id">
            <td>{{ index + 1 }}</td>
            <td>{{ colore.nombre }}</td>
            <td>
              <button class="btn btn-primary me-2" @click="toEdit(colore.id)">
                Editar
                <font-awesome-icon icon="fa-solid fa-edit" />
              </button>
              <button class="btn btn-danger" @click="toDelete(colore.id)">
                Eliminar
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
