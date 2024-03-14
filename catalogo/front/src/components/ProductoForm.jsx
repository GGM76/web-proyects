import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { crearProducto } from '../features/productos/productoSlice'
import { ToastContainer, toast } from 'react-toastify'
import { ref, uploadBytes, getDownloadURL  } from "firebase/storage"
import { storage } from "../../firebase"
import { v4 } from "uuid"
import 'react-toastify/dist/ReactToastify.css'

const ProductoForm = () => {

    const [sku, setSKU] = useState('')
    const [ml, setML] = useState('')
    const [a, setA] = useState('')
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [variante, setVariante] = useState('')
    const [iportada, setiPortada] = useState([])
    const [iembalar, setiEmbalar] = useState([])
    const [iembalado, setiEmbalado] = useState([])
    const [portada, setPortada] = useState('')
    const [embalar, setEmbalar] = useState('')
    const [embalado, setEmbalado] = useState('')

    const saveurl = (url) => {
    dispatch(crearProducto({ sku,ml,a,titulo,descripcion,variante, portada,embalar,embalado}))
    setSKU('')
    setML('')
    setA('')
    setTitulo('')
    setDescripcion('')
    setVariante('')
    toast.success("Guardado correctamente", {
        autoClose: 500,
        })
    }

    const uploadFile = () => {
    if (iportada == null) 
    return
    //ruta de la imagen donde se guarda
    const port = ref(storage, `${sku}/${iportada.name + v4()}`)
    const emb = ref(storage, `${sku}/${iembalar.name + v4()}`)
    const embal = ref(storage, `${sku}/${iembalado.name + v4()}`)
    // uploadBytes(imgref, portada).then((snapshot) => {
    //     getDownloadURL(imgref).then((downloadURL) => {
    //         setPortada(downloadURL)
    //         toast.success("Imágen subida correctamente", {
    //             autoClose: 500,
    //             })
    //         // dispatch(crearProducto({ sku,ml,a,titulo,descripcion,variante, imageUrls}))
    //     }).catch((error) => {
    //         console.error('Error obteniendo la URL de descarga:', error);
    //     })
    //     }).catch((error) => {
    //     console.error('Error al subir el archivo:', error);
    // });
        uploadBytes(port, iportada).then((snapshot) => {
        getDownloadURL(port).then((downPortada) => {
        setPortada(downPortada)
        // setImagenes(imagenes => [...imagenes, downPortada])
            uploadBytes(emb, iembalar).then((snapshot) => {
            getDownloadURL(emb).then((downEmbalar) => {
                setEmbalar(downEmbalar)
                //setImagenes(imagenes => [...imagenes, downEmbalar])
                    uploadBytes(embal, iembalado).then((snapshot) => {
                    getDownloadURL(embal).then((downEmbalado) => {
                        setEmbalado(downEmbalado)
                        //setImagenes(imagenes => [...imagenes, downEmbalado])
                        toast.success("Imágenes subidas correctamente", {
                            autoClose: 500,
                            })
                    }).catch((error) => {console.error('Error obteniendo la URL de descarga:', error)})
                    }).catch((error) => {console.error('Error al subir el archivo:', error)})
                }).catch((error) => {console.error('Error obteniendo la URL de descarga:', error)})
                }).catch((error) => {console.error('Error al subir el archivo:', error)})
        }).catch((error) => {console.error('Error obteniendo la URL de descarga:', error)})
        }).catch((error) => {console.error('Error al subir el archivo:', error)})
  }
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)
   
    const notify = () => toast.success('Subiendo Imagenes', {
        autoClose: 1000,
        });

    useEffect(() => {

        if (isError) {
            toast.error(message)
        }

        if (!user) {
            navigate('/login')
        }
        if(!user.admin){
            navigate("/")
        }
    }, [user, navigate])

    const onSubmit = (e) => {
        e.preventDefault()
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
                    <label htmlFor="texto">Imagen de portada</label>
                    <input type="file" 
                        onChange={(e) => { setiPortada(e.target.files[0]) }} 
                    />
                    <label htmlFor="texto">Imagen con que se embala</label>
                    <input type="file" 
                        onChange={(e) => { setiEmbalar(e.target.files[0]) }} 
                    />
                    <label htmlFor="texto">Imagen del producto embalado</label>
                    <input type="file" 
                        onChange={(e) => { setiEmbalado(e.target.files[0]) }} 
                    />
                    {/* <input accept="image/*" multiple onChange={(e) => { setImageUpload(e.target.files[0]) }}  type="file" /> */}
                </div>
                <div className="form-group">
                {/* <Link to='/'>
                    <button className='btn btn-block' type="submit">
                        Agregar Producto
                    </button>
                </Link> */}
                <button className='btn btn-block' type="submit" onClick={handleClick}>
                        Subir imagenes
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