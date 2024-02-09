import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProducto } from '../features/productos/productoSlice'

const ProductoItem = ({ producto }) => {

    const dispatch = useDispatch()

    return (
        <div className="tarea">
            <ul>
                <Link to={`productos/${producto.sku}`}>
                <li>{producto.sku}</li>
                <li>{producto.imagenes}</li>
                </Link>
            </ul>
            <button className='close' onClick={() => dispatch(deleteProducto(producto.sku))} >X</button>
        </div>
    )
}

export default ProductoItem