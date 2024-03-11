import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProducto } from '../features/productos/productoSlice'
import { ToastContainer, toast } from 'react-toastify'
import {storage} from '../../firebase';
import { ref, deleteObject, getStorage  } from "firebase/storage";
import 'react-toastify/dist/ReactToastify.css'

const ProductoItem = ({ producto }) => {

    const dispatch = useDispatch()
    function nombre(url) {
        const nom = url.split( '/' )
        let image = nom[7]
        const aux = image.split('%2F')
        image=aux[1]
        const auxi= image.split('?')
        image = auxi[0]
        return image
    }

    const handleClick = event => {
        const npor = nombre(producto.portada)
        const nemb = nombre(producto.embalar)
        const nemd = nombre(producto.embalado)
            
        const storage = getStorage()
        const portRef = ref(storage, producto.sku+'/'+npor)
        const embRef = ref(storage, producto.sku+'/'+nemb)
        const emdRef = ref(storage, producto.sku+'/'+nemd)
        
        
        deleteObject(portRef).then(() => {

			// File deleted successfully
			console.log('file eliminated!');
		}).catch(() => {
			// Uh-oh, an error occurred!
			console.log('Error erasing the image');
		})
        deleteObject(embRef).then(() => {
			// File deleted successfully
			console.log('file eliminated!');
		}).catch(() => {
			// Uh-oh, an error occurred!
			console.log('Error erasing the image');
		})
        deleteObject(emdRef).then(() => {
			// File deleted successfully
			console.log('file eliminated!');
		}).catch(() => {
			// Uh-oh, an error occurred!
			console.log('Error erasing the image');
		})
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
                    src={producto.portada}
                    alt={producto.sku} />
                </Link>
            </ul>
            <button className='close' onClick={handleClick}>X</button>
        </div>
    )
}

export default ProductoItem