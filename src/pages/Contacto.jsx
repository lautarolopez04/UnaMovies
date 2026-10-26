import React from 'react'
import {useState} from "react"

function Contacto({carrito}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    tel: "",
    localidad: "",
    entrega: "retiro",
    mensaje: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    const {name, value} = e.target;
    console.log("name: ", name);
    console.log("value: ", value);
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function validateForm() {
    const newErrors = {};

    if(formData.name.trim() === "") {
      newErrors.name = "El campo nombre está vacío";
    }
    if(formData.email.trim() === "") {
      newErrors.email = "El campo email está vacío";
    } else {
        if (!formData.email.includes("@")) {
          newErrors.email = "Ingrese un email válido";
      }
    }
    if(formData.password.trim() === "") {
      newErrors.password = "El campo contraseña está vacío";
    }
    if(formData.tel.trim() === "") {
      newErrors.tel = "El campo teléfono está vacío";
    } else {
        if (!/^[0-9]+$/.test(formData.tel)) {
          newErrors.tel = "Ingrese un teléfono válido";
      }
    }
    if(formData.localidad.trim() === "") {
      newErrors.localidad = "El campo localidad está vacío";
    }
    if (carrito.length === 0) {
      newErrors.carrito = "El carrito está vacío";
    }
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    if(Object.keys(newErrors).length === 0) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }

  return (
    <div className='container mt-5 mb-5 text-light'>
      <div className='row justify-content-center'>
        <div className='col-md-7'>
          <div className='card bg-dark text-light border-secondary shadow-lg'>
            <div className='card-body p-4'>
              <h2 className='text-center mb-4 fw-bold'>Crear cuenta</h2>
              <form onSubmit={handleSubmit} noValidate>
                <div className='mb-3'>
                  <label htmlFor='name' className='form-label'>Nombre:</label>
                  <input 
                    id='name'
                    name='name'
                    type="text" 
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className='invalid-feedback'>{errors.name}</div>
                  )}
                </div>
                <div className='mb-3'>
                  <label htmlFor='email' className='form-label'>Email:</label>
                  <input 
                    id='email'
                    name='email'
                    type="email" 
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className='invalid-feedback'>{errors.email}</div>
                  )}
                </div>     
                <div className='mb-3'>
                  <label htmlFor='password' className='form-label'>Contraseña:</label>
                  <input 
                    id='password'
                    name='password'
                    type="password" 
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <div className='invalid-feedback'>{errors.password}</div>
                  )}
                </div>  
                <div className='mb-3'>
                  <label htmlFor='tel' className='form-label'>Teléfono:</label>
                  <input 
                    id='tel'
                    name='tel'
                    type="tel" 
                    className={`form-control ${
                      errors.tel ? "is-invalid" : ""
                    }`}
                    value={formData.tel}
                    onChange={handleChange}
                  />
                  {errors.tel && (
                    <div className='invalid-feedback'>{errors.tel}</div>
                  )}
                </div>  
                <div className='mb-3'>
                  <label htmlFor='localidad' className='form-label'>Localidad:</label>
                  <input 
                    id='localidad'
                    name='localidad'
                    type="text" 
                    className={`form-control ${
                      errors.localidad ? "is-invalid" : ""
                    }`}
                    value={formData.localidad}
                    onChange={handleChange}
                  />
                  {errors.localidad && (
                    <div className='invalid-feedback'>{errors.localidad}</div>
                  )}
                </div>  
                <div className='mb-3'>
                  <label htmlFor='entrega' className='form-label'>Entrega:</label>
                  <select 
                    id='entrega'
                    name='entrega'
                    className='form-select'
                    value={formData.entrega}
                    onChange={handleChange}
                  >
                    <option value="envio">Enviar a domicilio</option>
                    <option value="retiro">Retirar por sucursal</option>
                  </select>
                </div>  
                <div className='mb-3'>
                  <label htmlFor='mensaje' className='form-label'>Aclaraciones (opcional):</label>
                  <textarea 
                    id='mensaje'
                    name='mensaje'
                    maxLength={300}
                    style={{resize:'none'}}
                    className='form-control'
                    value={formData.mensaje}
                    onChange={handleChange}
                  >
                  </textarea>
                </div>  
                <div className='d-grid'>
                  <button type="submit" className='btn btn-danger btn-lg fw-bold'>
                    Registrarse
                  </button>
                </div>       
              </form>
              {errors.carrito && (
                    <div className='alert alert-danger mt-3'>{errors.carrito}</div>
              )}
              {success && (
                <div className='alert alert-success mt-3'>
                  Te registraste con éxito
                </div>
              )}
            </div>
          </div>
        </div>      
      </div>
    </div>
  );
};

export default Contacto;
      