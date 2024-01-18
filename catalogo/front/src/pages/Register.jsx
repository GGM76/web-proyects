import { useState,useEffect } from "react"
import { FaUser } from "react-icons/fa"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'

const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (password !== password2) {
            toast.error('Los passwords no coinciden')
        } else {
            const userData = {
                name,
                email,
                password
            }
            dispatch(register(userData))
        }

    }

  return (
    <>
    <section className="heading">
        <h2><FaUser/> Registrar</h2>
        <p>Por favor crea tus credenciales</p>
    </section>
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input 
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                placeholder="Escribe tu nombre"
                onChange={onChange}
                />
                <input
                    type="email"
                    className='form-control'
                    id='email'
                    name='email'
                    value={email}
                    placeholder='Teclea tu email'
                    onChange={onChange}
                />
                <input
                    type="password"
                    className='form-control'
                    id='password'
                    name='password'
                    value={password}
                    placeholder='Teclea tu password'
                    onChange={onChange}
                />
                <input
                    type="password"
                    className='form-control'
                    id='password2'
                    name='password2'
                    value={password2}
                    placeholder='Confirma tu password'
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <button type="submit" className='btn btn-block'>
                    Submit
                </button>
            </div>
        </form>
    </section>
    </>
  )
}

export default Register
