<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import type { Colores } from '@/models/Colores.ts'
import type { Categorias } from '@/models/Categorias'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const nombre = ref('')
const descripcion = ref('')
const marca = ref('')
const modelo = ref('')
const precio = ref('')
const stock = ref('')
const categoria = ref('')
const colore = ref('')

var colores = ref<Colores[]>([])

async function getColores() {
  colores.value = await http.get(`/colores`).then((response) => response.data)
}

var categorias = ref<Categorias[]>([])

async function getCategorias() {
  categorias.value = await http.get(`/categorias`).then((response) => response.data)
}

async function crearCelular() {
  try {
    const response = await http
      .post(ENDPOINT, {
        nombre: nombre.value,
        descripcion: descripcion.value,
        marca: marca.value,
        modelo: modelo.value,
        precio: parseFloat(precio.value),
        stock: parseInt(stock.value),
        categoria: parseInt(categoria.value),
        colore: parseInt(colore.value)
      })
      .then(() => router.push('/celulares'))
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      const validationErrors = error.response.data.message
      alert(validationErrors.join('\n'))
    }
  }
}

function goBack() {
  router.go(-1)
}

onMounted(() => {
  getColores()
  getCategorias()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/celulares">Celulares</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nuevo Celular</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearCelular">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="nombre" placeholder="Nombre" required />
          <label for="nombre">Nombre</label>
        </div>
        <div class="form-floating mb-3">
          <textarea
            type="text"
            class="form-control"
            v-model="descripcion"
            placeholder="descripcion"
            required
          ></textarea>
          <label for="descripcion">descripcion</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="marca" placeholder="marca" required />
          <label for="marca">marca</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="modelo" placeholder="modelo" required />
          <label for="modelo">modelo</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="number"
            class="form-control"
            v-model="precio"
            placeholder="precio"
            required
          />
          <label for="precio">precio</label>
        </div>
        <div class="form-floating mb-3">
          <input type="number" class="form-control" v-model="stock" placeholder="stock" required />
          <label for="stock">stock</label>
        </div>
        <div class="form-floating mb-3">
          <select v-model="categoria" required>
            <option value="" selected>Selecciona una categoria</option>
            <option
              v-for="(categoria, index) in categorias.values()"
              :value="categoria.id"
              :key="index"
            >
              {{ categoria.nombre }}
            </option>
          </select>
        </div>
        <div class="form-floating mb-3">
          <select v-model="colore" required>
            <option value="" selected>Selecciona un color</option>
            <option v-for="(colore, index) in colores.values()" :value="colore.id" :key="index">
              {{ colore.nombre }}
            </option>
          </select>
        </div>

        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">
            <font-awesome-icon icon="fa-solid fa-save" /> Crear
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
