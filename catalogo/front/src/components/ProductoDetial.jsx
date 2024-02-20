import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getOneProducto, reset } from '../features/productos/productoSlice'
import Spinner from '../components/Spinner'


const ProductoDetial = () => {
    
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const { user } = useSelector((state) => state.auth)
    const { misproductos, isLoading, isError, message } = useSelector((state) => state.producto)

    useEffect(() => {

        if (isError) {
            console.log(message)
        }

        if (!user) {
            navigate('/login')
        } else {
            //dispatch(getProductos())
            dispatch(getOneProducto(params.sku))
        }

        return () => {
            dispatch(reset())
        }

    }, [user, navigate, isError, message, dispatch])

    if (isLoading) {
        return <Spinner />
    }
    
    return (
        <section className="form">

                <div className="form-group">
                    <label htmlFor="texto">SKU</label>
                    <h1>{misproductos.sku}</h1>
                    <label htmlFor="texto">Titulo</label>
                    <h1>{misproductos.titulo}</h1>
                    <label htmlFor="texto">Variante</label>
                    <h1>{misproductos.variante}</h1>
                    <label htmlFor="texto">Codigo de mercadolibre</label>
                    <h1>{misproductos.ML}</h1>
                    <label htmlFor="texto">Codigo de amazon</label>
                    <h1>{misproductos.A}</h1>
                    <label htmlFor="texto">Descripcion</label>
                    <h1>{misproductos.descripcion}</h1>
                    <label htmlFor="texto">Imagen</label>
                    <h1>{misproductos.imagenes}</h1>
                </div>
                <div className="form-group">
                <Link to='modificar'>
                    <button className='btn btn-block' type="submit">
                       Modificar
                    </button>  
                </Link> 
                </div>
        </section>
    )
}

export default ProductoDetial