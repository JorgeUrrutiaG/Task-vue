<template>
    <v-app-bar title="Logo" class="grid-topbar">
        <v-app-bar-title>Application Bar</v-app-bar-title>
        <v-btn>Salir</v-btn>
    </v-app-bar>
</template>

<style scoped>
/* Distribución exacta de áreas */
.grid-topbar {
  grid-column: 1 / span 2;
  grid-row: 1;
  color: white;
  background-color: #363636;
  height: 55px;
  display: flex;
  align-items: center;
  z-index: 10;
}
</style>
