import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }
    
  return (
    <>
   <sectiion className="heading">
        <h4>
            <FaUser>Registrar</FaUser>
        </h4>
        <p>Por favor crea tus credenciales </p>
   </sectiion>
   <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input 
                type="text" 
                className="form-control"
                id="name"
                name="name"
                value={name}
                placeholder="Nombre"
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
                <div className="form-group">
                    <button type="submit" className='btn btn-block'>
                        Submit
                    </button>
                </div>
            </div>
        </form>
   </section>
   </>
  )
}

export default Register
