<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import type { Celulares } from '@/models/Celulares'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var celulare = ref<Celulares[]>([])
//
async function getCelulares() {
  celulare.value = await http.get('/celulares').then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/celulares/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar el celulares?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getCelulares())
  }
}

function toComprar(idCelu: number) {
  router.push(`/compras/crear/${idCelu}`)
}

onMounted(() => {
  getCelulares()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Celulares</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de celulares</h2>
      <div class="col-12">
        <RouterLink to="/celulares/crear" class="btn btn-primary">
          <i class="fas fa-plus"></i> Crear Nuevo
        </RouterLink>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <caption>
          Lista de Celulares
        </caption>
        <thead class="thead-light">
          <tr>
            <th scope="col">N°</th>
            <th scope="col">nombre</th>
            <th scope="col">descripcion</th>
            <th scope="col">marca</th>
            <th scope="col">modelo</th>
            <th scope="col">stock</th>
            <th scope="col">precio</th>
            <th scope="col">color</th>
            <th scope="col">categoria</th>
            <th scope="col">accion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(celulare, index) in celulare.values()" :key="celulare.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ celulare.nombre }}</td>
            <td>{{ celulare.descripcion }}</td>
            <td>{{ celulare.marca }}</td>
            <td>{{ celulare.modelo }}</td>
            <td>{{ celulare.stock }}</td>
            <td>{{ celulare.precio }}</td>
            <td>{{ celulare.colore }}</td>
            <td>{{ celulare.categoria }}</td>
            <td>
              <button class="btn btn-primary me-2" @click="toEdit(celulare.id)">
                Editar
                <font-awesome-icon icon="fa-solid fa-edit" />
              </button>
              <button class="btn btn-danger" @click="toDelete(celulare.id)">
                Eliminar
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
              <button class="btn btn-link" @click="toComprar(celulare.id)">
                Comprar
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
