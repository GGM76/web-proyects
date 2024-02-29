import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProducto } from '../features/productos/productoSlice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ProductoItem = ({ producto }) => {

    const dispatch = useDispatch()

    const handleClick = event => {
        dispatch(deleteProducto(producto.sku)),
        toast.success('Eliminado correctamente :c', {
            autoClose: 300,
            });
    }

    return (
        <div className="tarea">
            <ul>
                <Link to={`productos/${producto.sku}`}>
                <li>{producto.sku}</li>
                <img
                    className="imgposition"
                    src={producto.imagenes}
                    alt={producto.sku} />
                </Link>
            </ul>
            <button className='close' onClick={handleClick}>X</button>
        </div>
    )
}

export default ProductoItem