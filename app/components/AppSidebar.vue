<template>
    <aside class="sidebar">
        <!-- <div class="sidebar-header"> -->
        <div class="sidebar-logo">
            <!-- <img src="https://drive.google.com/thumbnail?id=1TA-SwDW0F8xlJiZ7x8LuVdNbWYDDMtUj" width="40" height="40" /> -->
        </div>
        <!-- </div> -->
        <nav class="sidebar-menu">
            <ul id="sidebar-list">
                <li class="sidebar-item">
                    <NuxtLink to="/abiertas" class="sidebar-link" active-class="sidebar-link--active">
                        <v-icon icon="mdi-account" class="sidebar-icon"></v-icon>
                        <span class="tooltip">Abiertas</span>
                    </NuxtLink>
                </li>
                <li class="sidebar-item">
                    <NuxtLink to="/resueltas" class="sidebar-link" active-class="sidebar-link--active">
                        <v-icon icon="mdi-trending-up" class="sidebar-icon"></v-icon>
                        <span class="tooltip">Resueltas</span>
                    </NuxtLink>
                </li>
                <li class="sidebar-item">
                    <NuxtLink to="/tareas" class="sidebar-link" active-class="sidebar-link--active">
                        <v-icon icon="mdi-account-group" class="sidebar-icon"></v-icon>
                        <span class="tooltip">Tareas</span>
                    </NuxtLink>
                </li>
                <li class="sidebar-item">
                    <NuxtLink to="/control" class="sidebar-link" active-class="sidebar-link--active">
                        <v-icon icon="mdi-chart-bar" class="sidebar-icon"></v-icon>
                        <span class="tooltip">Control Tareas</span>
                    </NuxtLink>
                </li>
                <li class="sidebar-item">
                    <NuxtLink to="/reportes" class="sidebar-link" active-class="sidebar-link--active">
                        <v-icon icon="mdi-clipboard-account" class="sidebar-icon"></v-icon>
                        <span class="tooltip">Reportes</span>
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<style scoped>
/* ----------------------- Barra Lateral ----------------------- */

.sidebar {
    grid-column: 1;
    grid-row: 2 / span 2;
    width: 60px;
    background-color: #3250fa;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.sidebar-logo {
    text-align: center;
    padding: 15px 0;
    font-size: 1.2rem;
}

.sidebar-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.sidebar-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100%;
    padding: 5px 0;
    white-space: nowrap;
}

.sidebar-item:hover {
    background-color: #0f0000;
    color: tomato;

}

.sidebar-link {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: bold;
    height: 50px;
    width: 100%;
    padding: 0 20px;
    /* Centra el icono en el espacio de 60px */
    white-space: nowrap;
    /* Evita que el texto salte de línea al achicarse */
    transition: background 0.2s, color 0.25s;
    /* position:relative; */
}

.sidebar-link--menu {
    pointer-events: none;
    color: tomato;
    font-size: 0.8rem;
}

.sidebar-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: tomato;
    font-size: 0.8rem;
    border-left: 3px solid tomato;
}

.sidebar-link--active {
    background-color: white;
    color: tomato;
    border-left: 3px solid tomato;
    font-size: 0.8rem;
}

.sidebar-link i,
.sidebar-icon,
.sidebar .menu-title i {
    font-size: 1.2rem;
    min-width: 20px;
    text-align: center;
}

.sidebar .menu-title .link-text {
    margin-left: 20px;
    opacity: 0;
    transition: opacity 0.2s ease;
}

.tooltip {
    position: absolute;
    left: 55px;
    margin-top: 15px;
    transform: translateY(-30%) translateX(-10px);
    background-color: #272727;
    color: tomato;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    white-space: nowrap;
    pointer-events: none;
    z-index: 105;
    line-height: 1.8rem;
    box-shadow: 0 0.5rem 0.8rem rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
}

.sidebar-item:hover .tooltip {
    opacity: 1;
    visibility: visible;
    transform: translateY(-30%) translateX(6px);
}
</style>