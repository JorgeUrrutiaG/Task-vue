export const useTopbar = () => {
  // Definimos la variable global con un valor inicial
  const usuario = useState<string>('user-name', () => 'Cargando...')

  // Función para modificar la variable
  const setTopbarUser = (newUser: string) => {
    usuario.value = newUser
  }

  return {
    usuario,
    setTopbarUser
  }
}


