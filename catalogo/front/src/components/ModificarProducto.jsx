import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getOneProducto, reset, putProducto } from '../features/productos/productoSlice'
import Spinner from '../components/Spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ModificarProducto = () => {

    const params = useParams()
    const { user } = useSelector((state) => state.auth)
    const { misproductos, isLoading, isError, message } = useSelector((state) => state.producto)
    const [sku, setSKU] = useState(misproductos.sku)
    const [ML, setML] = useState(misproductos.ML)
    const [A, setA] = useState(misproductos.A)
    const [titulo, setTitulo] = useState(misproductos.titulo)
    const [descripcion, setDescripcion] = useState(misproductos.descripcion)
    const [variante, setVariante] = useState(misproductos.variante)
    const [imagenes, setImagen] = useState(misproductos.imagenes)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const notify = () => toast.success('Cambios guardados correctamente', {
        autoClose: 1000,
        });

    useEffect(() => {

        if (isError) {
            toast.error(message)
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

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(putProducto({sku, ML, A, titulo, descripcion, variante, imagenes }))
        //dispatch(putProducto({sku,titulo}))
        setSKU(sku)
        setML(ML)
        setA(A)
        setTitulo(titulo)
        setDescripcion(descripcion)
        setVariante(variante)
        //setImagen(imagenes)
        
    }

    return (
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="texto">SKU</label>
                    <input
                        type="text"
                        name="sku"
                        id="sku"
                        value={sku}
                        onChange={(e) => setSKU(e.target.value)}
                    />
                     <label htmlFor="texto">Titulo</label>
                    <input
                        type="text"
                        name="titulo"
                        id="titulo"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                     <label htmlFor="texto">Variante</label>
                    <input
                        type="text"
                        name="variante"
                        id="variante"
                        value={variante}
                        onChange={(e) => setVariante(e.target.value)}
                    />
                    <label htmlFor="texto">Codigo de mercadolibre</label>
                    <input
                        type="text"
                        name="ml"
                        id="ml"
                        value={ML}
                        onChange={(e) => setML(e.target.value)}
                    />
                    <label htmlFor="texto">Codigo de amazon</label>
                    <input
                        type="text"
                        name="a"
                        id="a"
                        value={A}
                        onChange={(e) => setA(e.target.value)}
                    />
                    <label htmlFor="texto">Descripcion</label>
                    <input
                        type="text"
                        name="descripcion"
                        id="descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                    {/* <label htmlFor="texto">Imagen</label>
                    <input
                        type="text"
                        name="imagen"
                        id="imagen"
                        value={imagenes}
                        onChange={(e) => setImagen(e.target.value)}
                    /> */}
                </div>
                <div className="form-group">
                {/* <Link to='/'>
                    <button className='btn btn-block' type="submit">
                        Agregar Producto
                    </button>
                </Link> */}
                    <button className='btn btn-block' type="submit" onClick={notify}>
                        Guardar cambios
                    </button>
                </div>
            </form>
        </section>
    )
}

export default ModificarProducto
