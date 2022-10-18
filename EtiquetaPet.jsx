import { useState } from 'react'


export default function EtiquetaPet(){

    const [loginPet, setLoginPet] = useState({'nome':'', 'idade':'', 'raca':'', 'tamanho':''})
    const [infosDono, setInfosDono] = useState({'nomeDono': '', 'telefone': ''})

    const[register, setRegister] = useState([])

    function login(e){
        setLoginPet({...loginPet, [e.target.name]:e.target.value})
        setInfosDono({...infosDono, [e.target.name]: e.target.value})
    }

    function registrar(e){
        e.preventDefault()

        setRegister([...register, loginPet])
        setRegister([...register, infosDono])
        console.log(loginPet)

    }

    return(
       <div>
        <form onSubmit={registrar}>
            <fieldset>
                <h4>Infos do animal:</h4>
                <label htmlFor="">Nome do animal:
                  <input type="text" name='nomeAnimal' onChange={login} value={loginPet.nomeAnimal} />
                </label>
                <label htmlFor="">idade: 
                  <input type="text" name='idade' onChange={login}  value={loginPet.idade} />
                </label>
                <label htmlFor="">Raça:
                  <input type="text" name='raca' onChange={login}   value={loginPet.raca} />
                </label>
                <label htmlFor="">Tamanho: 
                  <input type="text" name='tamanho' onChange={login}  value={loginPet.tamanho} />
                </label>
                <label htmlFor="">nome do dono: 
                  <input type="text" name='nomeDono' onChange={login}  value={infosDono.nomeDono} />
                </label>
                <label htmlFor="">telefone do dono: 
                  <input type="text" name='telefone' onChange={login}  value={infosDono.telefone} />
                </label>
                <button type='submit'> Registrar</button>
            </fieldset>
        </form>
        <div className="base_etiqueta">
            {register.map((loginPet, index)=>
            <div className="etiqueta">
                <h4>Carterinha numero: {index}</h4>
                <p>animal: {loginPet.nomeAnimal}</p>
                <p>idade: {loginPet.idade}</p>
                <p>Raça: {loginPet.raca}</p>
                <p>Tamanho: {loginPet.tamanho}</p>
                <p>dono: {infosDono.nomeDono}</p>
                <p>telefone: {infosDono.telefone}</p>
            </div> 
            )}
        </div>
       </div>
    )
}