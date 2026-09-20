<template>
    <v-footer class="app-footer elevation-4" color="grey-darken-4">
        <p class="text-caption">&copy; 2026 Jorge Urrutia. Todos los derechos reservados.</p>
        <div class="footer-status">
            <span class="status-dot online"></span>
            <span class="text-caption">Servidores Activos</span>
        </div>
    </v-footer>
</template>

<style scoped>
/* Pie de Página */
.app-footer {
    grid-column: 1 / span 2;
    grid-row: 3;
    min-height: 50px !important;
    max-height: 50px !important;
    box-shadow: 0 2px 5px #125185;
    font-size: 0.8rem;
    color: rgb(196, 195, 195);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-status {
    display: flex;
    align-items: center;
    gap: 8px;
}

.footer-status .status-dot.online {
    background-color: #4CAF50;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    box-shadow: 0 0 6px #4CAF50;
    display: inline-block;
}
</style>