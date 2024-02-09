import { useState } from 'react'
import { useDispatch } from 'react-redux'

const Buscador = () => {

    const [texto, setTexto] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                   {//} <label htmlFor="texto">Buscar producto</label>
                   }<input
                        type="text"
                        name="texto"
                        id="texto"
                        placeholder='Buscar Producto'
                        value={texto}
                        onChange={(e) => setTexto(e.target.value)}
                    />
                </div>
            </form>
        </section>
    )
}

export default Buscador