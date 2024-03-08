import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProducto } from '../features/productos/productoSlice'
import { ToastContainer, toast } from 'react-toastify'
import {storage} from '../../firebase';
import { ref, deleteObject, getStorage  } from "firebase/storage";
import 'react-toastify/dist/ReactToastify.css'

const ProductoItem = ({ producto }) => {

    const dispatch = useDispatch()
    //https://firebasestorage.googleapis.com/v0/b/catalogo-d13a6.appspot.com/o/U480307EscBol%2Fundefined53e3f4c5-dd8d-4c19-a8ae-56eda04a2e1b?alt=media&token=daed9538-ec24-4e29-9834-5050d0ca5348
    //https://firebasestorage.googleapis.com/v0/b/catalogo-d13a6.appspot.com/o/U480307EscBol%2Fundefined53e3f4c5-dd8d-4c19-a8ae-56eda04a2e1b?alt=media&token=daed9538-ec24-4e29-9834-5050d0ca5348
    function nombre(url) {
        const nom = url.split( '/' )
        let image = nom[7]
        return image
    }

    const handleClick = event => {
        const npor = nombre(producto.portada)
        const nemb = nombre(producto.embalar)
        const nemd = nombre(producto.embalado)
        const storage = getStorage()
        const portRef = ref(storage, npor)
        const embRef = ref(storage, nemb)
        const emdRef = ref(storage, nemd)
        
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