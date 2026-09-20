<template>
  <v-app>
    <!-- Contenedor del Grid real -->
    <div class="app-layout-grid">
      <AppTopbar/>
      <AppSidebar/>

      <!-- 3. CONTENIDO PRINCIPAL (Columna 2, Fila 2) -->
      <v-main class="grid-main-content">
        <NuxtPage />
      </v-main>

      <!-- 4. PIE DE PÁGINA (Columna 2, Fila 3) -->
      <AppFooter/>
    </div>

  </v-app>
</template>

<style>
/* Reset global de pantalla */
:root {
        /*---Colores---*/
        --white-color: white;
        --bg-dark-deep: #0a0d16;
        --dark-color: #1e2531;
        --text-muted: #9ca3af;
        --accent-green: #10b981;
        --border-color: #30363d;
        --accent-color: #3498db;
        --blue-color: #0056b3;
        --green-color: #116924;
        --gray-color: #4b4b4b;
        --red: #8b0000;
        /*---Medidas Base---*/
        --topbar-height: 55px;
        --footer-height: 50px;
        --sidebar-width: 60px;
        --padding-main: 20px;
    }


html,
body,
#__nuxt,
.v-application {
  margin: 0;
  padding: 0;
  height: 100vh !important;
  width: 100vw !important;
  overflow: hidden;
}

/* 🛠️ Contenedor del Grid definitivo */
.app-layout-grid {
  display: grid;
  /* Columnas: 80px fijos para Sidebar, 1fr (todo el resto) para contenido */
  grid-template-columns: var(--sidebar-width) 1fr;
  /* Filas: 55px Topbar, 1fr Contenido intermedio, 50px Footer */
  grid-template-rows: var(--topbar-height) 1fr var(--footer-height);
  height: 100vh;
  width: 100vw;
}
.grid-main-content {
  grid-column: 2;
  grid-row: 2;
  overflow-y: auto;
  /* Scroll vertical independiente */
  padding: 0 !important;
  /* Limpia el espaciado predeterminado de Vuetify */
  height: 100%;
}

.btn {
        display: inline-block;
        font-weight: 500;
        line-height: 1.5;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        cursor: pointer;
        user-select: none;
        padding: 7px 16px;
        font-size: 0.95rem;
        border-radius: 4px;
        border: 1px solid transparent;
        transition: background-color 0.15s, transform 0.05s;
        opacity: .93;
    }

    .btn:hover {
        opacity: 1;
        color: rgb(255, 255, 255);
    }

    .btn-open-new {
        background-color: var(--blue-color);
        border-color: #022669;
        color: #e1dfff;
    }
    .btn-excel span,
    .btn-open-new span {
        font-size: 0.7rem;
        margin-left: 5px;
    }

    .btn-excel {
        background: #15803d;
        border-color: #166534;
        color: white;
    }

</style>
