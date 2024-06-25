<script setup lang="ts"></script>
<template>
  <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
    <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
      <h2 class="m-0 text-primary"><i class="fa fa-book me-3"></i>FABRICA</h2>
    </a>
    <button
      type="button"
      class="navbar-toggler me-4"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav ms-auto p-4 p-lg-0">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link click-scroll">Sobre Nosotros</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/about" class="nav-link click-scroll">Ambiente Laboral</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/usuarios" class="nav-link click-scroll">Usuarios</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/proveedores" class="nav-link click-scroll">Prooveedores</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/categorias" class="nav-link click-scroll">Categoria</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/colores" class="nav-link click-scroll">Colores</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/celulares" class="nav-link click-scroll">Celulares</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/proveedores" class="nav-link click-scroll">Compras</RouterLink>
        </li>
      </div>
      <a href="" class="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
        >Join Now<i class="fa fa-arrow-right ms-3"></i
      ></a>
    </div>
  </nav>
</template>
