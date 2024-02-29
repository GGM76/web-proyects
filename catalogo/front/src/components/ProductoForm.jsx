import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { crearProducto } from '../features/productos/productoSlice'
import { ToastContainer, toast } from 'react-toastify';
import { ref, uploadBytes, getDownloadURL  } from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";
import 'react-toastify/dist/ReactToastify.css';

const ProductoForm = () => {

    const [sku, setSKU] = useState('')
    const [ml, setML] = useState('')
    const [a, setA] = useState('')
    const [titulo, setTitulo] = useState('')
     const [descripcion, setDescripcion] = useState('')
    const [variante, setVariante] = useState('')
    const [imageUpload, setImageUpload] = useState([])
    const [imagenes, setImagenes] = useState('');

    //let url

    const saveurl = (url) => {
    //     setImageUrls(imageUrls => {
    //             const modifiedValue = url
    //             console.log("el valor modificado " + modifiedValue);
    //             return modifiedValue;
    //         });
    //     };
        //ruta de la imagen donde se guarda
        //setImageUrls(url)
    //     setImageUrls({
    //         ...imageUrls,
    //         url
    //       });
    console.log("Subiendo  " + imagenes)
    dispatch(crearProducto({ sku,ml,a,titulo,descripcion,variante, imagenes}))
    setSKU('')
    setML('')
    setA('')
    setTitulo('')
    setDescripcion('')
    setVariante('')
    setImageUpload([])
    toast.success("Guardado correctamente", {
        autoClose: 500,
        })
    }

    const uploadFile = () => {
    if (imageUpload == null) 
    return
    //ruta de la imagen donde se guarda
    const imgref = ref(storage, `${sku}/${imageUpload.name + v4()}`)
    //setImageUrls(imgref.name)
    //setImageUrls(String(imgref.name))
    //setImageUrls(imgurl => imgurl.concat(imgref.fullPath))
    //setImageUrls(imageUrls.concat(imgref.fullPath))
    //setImageUrls([...imageUrls, String(imgref.name)])
    //setImageUrls({...imageUrls, url1: imgref.fullPath})
    uploadBytes(imgref, imageUpload).then((snapshot) => {
        getDownloadURL(imgref).then((downloadURL) => {
            console.log("URL  " + downloadURL)
            //  saveurl(downloadURL)
            // url = downloadURL
            setImagenes(downloadURL)
            toast.success("Imágen subida correctamente", {
                autoClose: 500,
                })
            console.log("Subiendo  " + sku)
            console.log("Subiendo  " + ml)
            console.log("Subiendo  " + a)
            console.log("Subiendo  " + titulo)
            console.log("Subiendo  " + descripcion)
            console.log("Subiendo  " + variante)
            console.log("Subiendo  " + imagenes)
            // dispatch(crearProducto({ sku,ml,a,titulo,descripcion,variante, imageUrls}))
        }).catch((error) => {
            console.error('Error obteniendo la URL de descarga:', error);
        });
        }).catch((error) => {
        console.error('Error al subir el archivo:', error);
    });
  };
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)
   
    const notify = () => toast.success('Producto agregado!', {
        autoClose: 1000,
        });

    useEffect(() => {

        if (isError) {
            toast.error(message)
        }

        if (!user) {
            navigate('/login')
        }
    }, [user, navigate])

    const onSubmit = (e) => {
        e.preventDefault()
        // setSKU('')
        // setML('')
        // setA('')
        // setTitulo('')
        // setDescripcion('')
        // setVariante('')
        // setImageUpload([])
        // setImageUrls()
    }

    const handleClick = event => {
        notify(),
        uploadFile()
    }

    if (isLoading) {
        return <Spinner />
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
                        type="file" 
                        //name="imageUpload"
                        //id="imageUpload"
                        //value={ImageUpload}
                        onChange={(e) => { setImageUpload(e.target.files[0]); }} 
                    />
                </div>
                <div className="form-group">
                {/* <Link to='/'>
                    <button className='btn btn-block' type="submit">
                        Agregar Producto
                    </button>
                </Link> */}
                <button className='btn btn-block' type="submit" onClick={handleClick}>
                        Agregar Producto
                    </button>
                <button className='btn btn-block' type="submit" onClick={saveurl}>
                        Guardar producto
                    </button>
                </div>
            </form>
        </section>
    )
}

export default ProductoForm