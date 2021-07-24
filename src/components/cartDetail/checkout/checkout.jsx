import React, { useState, useRef } from 'react';
import './checkout.css';

export const Checkout = ({setVisibility, setUserInfo, orderId, error, clear}) =>{
    const [isCompleted, setIsCompleted] = useState();
    const name = useRef();
    const phone = useRef();
    const email = useRef();

    const HandleClick = () => setVisibility(false);

    const HandleShop = () =>{
        let nameNode = name.current;
        let phoneNode = phone.current;
        let emailNode = email.current;

        if(nameNode.value && phoneNode.value && emailNode.value){
            setUserInfo({'buyer':nameNode.value, 'phone':phoneNode.value, 'email':emailNode.value});
            setIsCompleted(true);
        }
        verifRequired(nameNode, phoneNode, emailNode);
    }

    const onReset = () =>{
        name.current.value = '';
        phone.current.value = '';
        email.current.value = '';
        clear()
    }
    const verifRequired = (nameNode, phoneNode, emailNode) =>{
        const classFalse = "check-input required-false"
        !nameNode.value ? nameNode.className = classFalse : nameNode.className = 'check-input';
        !phoneNode.value ? phoneNode.className = classFalse : phoneNode.className = 'check-input';
        !emailNode.value ? emailNode.className = classFalse : emailNode.className = 'check-input';
    }

    return (
        <div className="check">
            <h3 className="check-title">Checkout carrito</h3>
            <button className="btn btn-close check-exit" onClick={HandleClick}>
                <i className="fas fa-times"></i>
            </button>
            <form className="check-form">
                <label className="check-label" for="name">Nombre</label>
                <input ref={name} required className="check-input" type="text" name="name"></input>

                <label className="check-label" for="phone">Teléfono</label>
                <input ref={phone} required className="check-input" type="number" name="phone"></input>

                <label className="check-label" for="email">e-mail</label>
                <input ref={email} required className="check-input" type="email" name="email"></input>
            </form>
            <div>
                {!isCompleted
                    ? <button className="btn btn-submit mt-2" onClick={HandleShop}>Comprar</button>
                    : <button className="btn btn-close mt-2" onClick={onReset}>Limpiar</button>
                }
                {! error
                    ?(isCompleted && <p className="inline-block ml-4">Compra realizada con exito. Compra: {orderId}</p>)
                    : <p className="inline-block ml-4">Ha ocurrido un error, por favor, vuelva a intentar mas tarde.</p>
                }
            </div>
        </div>
    )
}