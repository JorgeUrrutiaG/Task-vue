<script setup>
const {usuario} = useTopbar()
const route = useRoute()

const currentTitle = computed(() => {
    if (route.name === 'index') {
        return 'Home'
    } else {
        return route.name;
    }
})

</script>

<template>
    <header class="topbar">
        <div class="topbar-buttons">
            <button class="btn go-home-btn" id="go-home-btn" title="Actualizar">
                <i class="mdi mdi-rotate-right"></i>
            </button>
            <div class="topbar-divider"></div>
        </div>

        <div class="topbar-right">
            <div class="topbar-tittle" id="titulo">{{ currentTitle }}</div>
            <div class="topbar-divider"></div>
            <div class="profile-photo">
                <!-- <img src="https://drive.google.com/thumbnail?id=1bcda21Jg7n4ScU7_Uxow0smQkA30gs9v" alt="logo"
                    class="logo" width="40" height="40"> -->
            </div>
            <div class="topbar-userData">
                <span class="user-name">{{ usuario }}</span>
                <span class="user-correo" id="user-correo" hidden></span>
            </div>
        </div>
    </header>
</template>

<style scoped>
/* Distribución exacta de áreas */
.topbar {
    grid-column: 1 / span 2;
    grid-row: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    background-color: #363636;
    padding: 0px 15px;
    box-shadow: 0 2px 5px #125185;
    transition: background-color 0.3s, box-shadow 0.3s;
    /* height: 55px; */
    box-shadow: 0 2px 5px #125185;
    /* z-index: 10; */
}

.topbar-buttons,
.topbar-right {
    display: flex;
    align-items: center;
    gap: 10px;
}

.user-name {
    font-weight: bold;
    font-size: 0.80em;
    font-style: italic;
    cursor: default;
    color: #ffffff;
}

/* Estilos para todos los botones de la barra superior */
.topbar .btn {
    /* Mejoramos el estilo para que sean más visibles */
    background: #28282b;
    color: #ffffff;
    border: 1px solid #5d5e5b;
    border-radius: 8px;
    box-shadow: 2px 2px 3px #ffffff;
    padding: 4px 10px;
    cursor: pointer;
    font-size: 1.2em;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
}

.topbar .btn:hover {
    background-color: var(--dark-color);
    color: tomato;
    /* box-shadow: 0 4px 10px var(--dark-color); */
    box-shadow: 2px 2px 3px #ffffff;
}

.topbar .btn:active {
    box-shadow: 0 4px 10px var(--dark-color);
}

.topbar-tittle {
    font-weight: bold;
    cursor: default;
    font-size: 120%;
    text-transform: uppercase;
}

.topbar .topbar-divider {
    width: 0;
    border-right: 1px solid #f77133;
    height: calc(4.375rem - 2rem);
    margin: auto 1rem;
}

.profile-photo .logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
}

.topbar .topbar-userData {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
