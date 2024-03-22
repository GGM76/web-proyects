import { useEffect,useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
//import Buscador from '../components/Buscador'
import Spinner from '../components/Spinner'
import { getProductos, reset } from '../features/productos/productoSlice'
import ProductoItem from '../components/ProductoItem'


const Dashboard = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')

    const { user } = useSelector((state) => state.auth)
    const { misproductos, isLoading, isError, message } = useSelector((state) => state.producto)

    const filteredProductos = misproductos.filter(producto => { // Lista de pokemones filtrados
        //return producto.sku.toLowerCase().includes(search.toLocaleLowerCase())
        return JSON.stringify(producto).toLowerCase().includes(search.toLocaleLowerCase())
      })


    useEffect(() => {
       fetch('http://localhost:5173/')
        .then(res => res.json())
        .then(data => setSearch(data.results)) // arreglo de productos
        .catch(error => console.error(error))

        if (isError) {
            console.log(message)
        }

        if (!user) {
            navigate('/login')
        } else {
            dispatch(getProductos())
        }

        return () => {
            dispatch(reset())
        }

    }, [user, navigate, isError, message, dispatch])

    const handleSearch = (event) => {
        setSearch(event.target.value)
      }
      
    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className="heading">
                <h1>Bienvenido {user && user.name}</h1>
                <p>Dashboard de Productos</p>
            </section>

            <div className="form-group">
            
                <Link to='productos/crear'>
                    <button className='btn btn-block' type="submit">
                        Agregar una Producto
                    </button>
                </Link>
            </div>
            
            {/* <Buscador text={misproductos} /> */}
            <input
            type='text'
            className='buscar'
            placeholder='Buscar producto'
            value={search}
            onChange={handleSearch}
          />
            
            <section className="content">
                {misproductos.length  > 0 ?
                    (
                        <div className='tareas'>
                            {filteredProductos.map((producto) => (//misproductos.map((producto) => (
                                <ProductoItem key={producto.sku} producto={producto} user= {user.admin}/>
                            ))}
                        </div>
                    ) : (
                        <h3>No hay productos que mostrar</h3>
                    )
                }
            </section>

        </>
    )
}

export default Dashboard
