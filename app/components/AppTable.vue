<script setup>
import { ref } from 'vue'

const headers = ref(["NºTICKET", "FECHA","PRIORIDAD","ESTADO","TAREA","SOLICITANTE","USUARIO","CIERRE","PLATAFORMA","ACCIONES"])

const desserts = ref([
    {
        id: 1,
        fecha: "25-09-2026",
        prioridad:"media",
        estado:"abierta",
        tarea:"Revisión",
        solicitante:"Jorge Urrutia",
        usuario:"Jorge Urrutia",
        cierre:"26-09-2026",
        plataforma:"No aplica",
        acciones:"",
    },
    {
        id: 2,
        fecha: "25-09-2026",
        prioridad:"media",
        estado:"abierta",
        tarea:"Revisión",
        solicitante:"Jorge Urrutia",
        usuario:"Jorge Urrutia",
        cierre:"26-09-2026",
        plataforma:"No aplica",
        acciones:"",
    },
    {
        id: 3,
        fecha: "25-09-2026",
        prioridad:"media",
        estado:"abierta",
        tarea:"Revisión",
        solicitante:"Jorge Urrutia",
        usuario:"Jorge Urrutia",
        cierre:"26-09-2026",
        plataforma:"No aplica",
        acciones:"",
    },
    {
        id: 4,
        fecha: "25-09-2026",
        prioridad:"media",
        estado:"abierta",
        tarea:"Revisión",
        solicitante:"Jorge Urrutia",
        usuario:"Jorge Urrutia",
        cierre:"26-09-2026",
        plataforma:"No aplica",
        acciones:"",
    },
    {
        id: 5,
        fecha: "25-09-2026",
        prioridad:"media",
        estado:"abierta",
        tarea:"Revisión",
        solicitante:"Jorge Urrutia",
        usuario:"Jorge Urrutia",
        cierre:"26-09-2026",
        plataforma:"No aplica",
        acciones:"",
    },
    
])
</script>


<template>
    <div class="table-container">
        <div class="table-header-bar">
            <div class="btns-bar">
                <!-- Botón Excel: Sin atributos onclick -->
                 <v-btn text="Excel" class="btn-excel" title="Exportar a Excel">
                    <v-icon icon="mdi-download"></v-icon>
                    <span>EXCEL</span>
                 </v-btn>
                 <v-btn class="btn-open-new" title="Crear Tarea">
                    <i class="mdi mdi-plus"></i> <span>NUEVA TAREA</span>
                 </v-btn>
            </div>
            <div class="search-container">
                <input type="text" id="buscador" placeholder="Buscar tareas...">
            </div>
        </div>
        <table class="table">
            <thead class="table-head">
                <tr>
                    <th 
                    v-for="head in headers" :key="head"
                    class="text-left">
                    {{ head }}
                    </th>
                </tr>
            </thead>
            <tbody class="table-body">
                <tr v-for="item in desserts" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.fecha }}</td>
                    <td>{{ item.prioridad }}</td>
                    <td>{{ item.estado }}</td>
                    <td>{{ item.tarea }}</td>
                    <td>{{ item.solicitante }}</td>
                    <td>{{ item.usuario }}</td>
                    <td>{{ item.cierre }}</td>
                    <td>{{ item.plataforma }}</td>
                    <td>{{ item.acciones }}</td>
                </tr>
            </tbody>
        </table>
        <div id="paginador" class="paginador"></div>
    </div>
</template>

<style scoped>
.table-container {
    background-color: #eeeeee;
    width: 90%;
    height: 100%;
    margin: 10px auto 20px auto;
    padding: 0 10px;
    overflow: auto;
    border: 1px solid #5d5d5e;
    border-radius: 8px;
}

.table-container .table {
    color: #000000;
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    font-size: 0.9em;
}

.table-container .table th,
.table-container .table td {
    padding: 4px 8px;
    border-bottom: 1px solid #bebebe;
}

.table-head {
    position: sticky;
    top: 0;
    background-color: #000000;
    color: rgb(228, 217, 217);
    z-index: 10;
}

.table-head th {
    font-weight: 500;
    text-transform: uppercase;
}

.table-container .table thead tr {
    text-align: left;
    transition: background-color 0.3s, color 0.3s;
}

.table-container .table tbody tr {
    transition: background-color 0.2s;
    font-weight: 600;
    cursor: pointer;
    font-size: 0.85em;
}

.table-body td {
    white-space: nowrap;
    /* Evita que las celdas se rompan en mil líneas */
}

/* Animación de carga suave */
.table-body {
    animation: fadeIn 0.3s ease-in;
    overflow-y: auto;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.table-container .table tbody tr:nth-child(even) {
    background-color: #dadada;
}

.table-container .table tbody tr:hover {
    background-color: #9c9faa;
    color: #e2f1e5;
}

/*----------- Badges de Prioridad (Opcional) ----------*/
.badge {
    padding: 4px 8px;
    border-radius: 15px;
    font-weight: bold;
    font-size: 0.65rem;
    background: #494949;
}

.prioridad-urgente {
    color: rgb(250, 66, 66);
}

.prioridad-alta {
    color: #fd8773;
}

.prioridad-media {
    color: #e2a35a;
}

.prioridad-baja {
    color: #5fcc87;
}

.tarea-cerrada,
.btn-mini {
    border: none;
    padding: 5px 8px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: transform 0.2s;
}

.btn-mini:hover {
    transform: scale(1.1);
}

.tarea-cerrada {
    padding: 3px 8px;
}

.tarea-cerrada:hover {
    cursor: no-drop;
}

.btn-edit {
    background: #e0f2fe;
    color: #0369a1;
}


.btn-close {
    background: #996c6f;
    color: #f7f3f2;
}

.estado-abierta {
    background: #771d25;
    color: white;
}

.estado-resuelta {
    background-color: #105a2b;
    color: rgb(211, 226, 214);
}

.btn-delete {
    background: #771d25;
    color: #ffdfdf;
}


.btn-lock {
    background-color: #809b8a;
    color: #ddf1dd;
}

.tarea-cerrada,
.btn-close {
    margin-right: 2px;
}


/*-------- Paginador----------*/

/* Estilo base para todos los botones numéricos */
.btn-pagina {
    background-color: #ffffff;
    color: #333333;
    border: 1px solid #dcdcdc;
    padding: 8px 14px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    /* Suaviza el cambio de color */
}

/* Efecto al pasar el cursor por encima */
.btn-pagina:hover {
    background-color: #f5f5f5;
    border-color: #a0a0a0;
}

/* Estilo exclusivo para el botón de la página actual */
.btn-pagina.activo {
    background-color: #007bff;
    /* Azul moderno */
    color: #ffffff;
    border-color: #007bff;
    font-weight: 600;
    box-shadow: 0 2px 4px rgba(0, 123, 255, 0.2);
}

.paginador {
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}


/* Contenedor superior alineado */
.table-header-bar {
    width: 100%;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    /* Empuja el buscador a la derecha */
    align-items: center;
}

.btns-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    /* Crea un espacio de separación de 10px entre ambos botones */
}

/* Buscador Moderno */
.search-container {
    /* position: relative; */
    display: flex;
    align-items: center;
}

.search-container input {
    /* background-color: #e2e2e2; */
    padding: 8px 12px 8px 35px;
    /* Espacio para el icono de la lupa */
    font-size: 0.85rem;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    width: 220px;
    transition: all 0.2s ease;
    outline: none;
}

.search-container input:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.15);
    width: 260px;
    /* Se expande suavemente al hacer foco */
}
</style>