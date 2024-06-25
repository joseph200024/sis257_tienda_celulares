<script setup lang="ts">
import type { Proveedore } from '@/models/proveedore'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var proveedores = ref<Proveedore[]>([])

async function getProveedores() {
  proveedores.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/proveedores/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar el Proveedor?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getProveedores())
  }
}

onMounted(() => {
  getProveedores()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Proveedores</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de Proveedores</h2>
      <div class="col-12">
        <RouterLink to="/proveedores/crear" class="btn btn-primary">
          <i class="fas fa-plus"></i> Crear Nuevo
        </RouterLink>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <caption>
          Lista de Proveedores
        </caption>
        <thead class="thead-light">
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Nombre</th>
            <th scope="col">Direccion</th>
            <th scope="col">Gmail</th>
            <th scope="col">Telefono</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(proveedore, index) in proveedores.values()" :key="proveedore.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ proveedore.nombre }}</td>
            <td>{{ proveedore.direccion }}</td>
            <td>{{ proveedore.gmail }}</td>
            <td>{{ proveedore.telefono }}</td>
            <td>
              <button class="btn btn-primary me-2" @click="toEdit(proveedore.id)">
                Editar
                <font-awesome-icon icon="fa-solid fa-edit" />
              </button>
              <button class="btn btn-danger" @click="toDelete(proveedore.id)">
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
