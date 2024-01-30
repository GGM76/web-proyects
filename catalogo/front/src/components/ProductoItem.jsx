import { useDispatch } from 'react-redux'
import { deleteProducto } from '../features/productos/productoSlice'

const ProductoItem = ({ producto }) => {

    const dispatch = useDispatch()

    return (
        <div className="tarea">
           {/* <div>
                {new Date(producto.createdAt).toLocaleString('es-MX')}
            </div>
            */}
            <ul>
            <li>{producto.sku}</li>
            <li>{producto.imagenes}</li>
            </ul>
            <button className='close' onClick={() => dispatch(deleteProducto(producto._sku))} >X</button>
        </div>
    )
}

export default ProductoItem