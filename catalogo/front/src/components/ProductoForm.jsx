import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { crearProducto } from '../features/productos/productoSlice'

const ProductoForm = () => {

    const [sku, setSKU] = useState('')
    const [ml, setML] = useState('')
    const [a, setA] = useState('')
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [variante, setVariante] = useState('')
    const [imagen, setImagen] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    useEffect(() => {

        if (!user) {
            navigate('/login')
        }

    }, [user, navigate])

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(crearProducto({ sku,ml,a,titulo,descripcion,variante,imagen }))

        setSKU('')
        setML('')
        setA('')
        setTitulo('')
        setDescripcion('')
        setVariante('')
        setImagen('')
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
                        value={ml}
                        onChange={(e) => setML(e.target.value)}
                    />
                    <label htmlFor="texto">Codigo de amazon</label>
                    <input
                        type="text"
                        name="a"
                        id="a"
                        value={a}
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
                    <label htmlFor="texto">Imagen</label>
                    <input
                        type="text"
                        name="imagen"
                        id="imagen"
                        value={imagen}
                        onChange={(e) => setImagen(e.target.value)}
                    />
                </div>
                <div className="form-group">
                {/* <Link to='/'>
                    <button className='btn btn-block' type="submit">
                        Agregar Producto
                    </button>
                </Link> */}
                <button className='btn btn-block' type="submit">
                        Agregar Producto
                    </button>
                </div>
            </form>
        </section>
    )
}

export default ProductoForm