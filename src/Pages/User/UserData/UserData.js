import React from 'react';
import TextField from '../../../Components/TextField'
import Dropdown from '../../../Components/Dropdown'
import BankArray from './BankArray'
import './UserData.css'
// import Axios from 'axios'

export default function UserData(props) {

    // const [cep, setCep] = useState('')
    // const [cityStore, serCityStore] = useState('')

    let stateArray = ['', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']
    // let apiCEP = 'https://ws.apicep.com/cep/' + cep + '.json'

    // Axios.get(apiCEP)
    //     .then((res) => {
    //         serCityStore(res.data.city)
    //         console.log(res.data.city)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })

    return (
        <div className="">
            <TextField
                label='Nome Completo'
                width='300px'
                maxLength={30}
                value={props.valueFullName}
                onChange={(e) => props.onChange(e, 'userPersonalData', 'userFullName')}
            />
            Endereço
            <div className="userAddress">

                <Dropdown
                    onChange={(e) => props.onChange(e.target.value, 'userPersonalData', 'userState')}
                    value={props.valueState}
                    label='Estado'
                    options={stateArray.map((state, index) => {
                        return (
                            <option value={state} key={index}>
                                {state}
                            </option>
                        )
                    })}
                    width='80px'  
                />

                <TextField
                    label='Cidade'
                    value={props.valueCity}
                    onChange={(e) => props.onChange(e, 'userPersonalData', 'userCity')}
                />
                <TextField
                    label='CEP'
                    width='90px'
                    value={props.valueCep}
                    maxLength={9}
                    // onChange={(e) => setCep(e)}
                    onChange={(e) => props.onChange(e, 'userPersonalData', 'CEP')}
                />
                <TextField
                    label='Rua/Av'
                    width='300px'
                    value={props.valueStreet}
                    onChange={(e) => props.onChange(e, 'userPersonalData', 'userStreet')}
                />
                <TextField
                    label='Número'
                    width='80px'
                    value={props.valueNumber}
                    onChange={(e) => props.onChange(e, 'userPersonalData', 'userHouseNumber')}
                />
                <TextField
                    label='Complemento (opicional)'
                    value={props.valueNotes}
                    onChange={(e) => props.onChange(e, 'userPersonalData', 'userNotes')}
                />
            </div>
            <div className="designerFil">
                <Dropdown
                    onChange={(e) => props.onChange(e.target.value, 'userPersonalData', 'userState')}
                    value={props.valueBank}
                    label='Banco'
                    options={BankArray.map((bank, index) => {
                        return (
                            <option value={bank.name} key={index}>
                                {bank.code + ' ' + bank.name}
                            </option>
                        )
                    })}
                    width='300px'
                />
            </div>
            Complete a sua inscrição
            <br /><br />
            Table 1 - necessário apenas para compra
            <br />
            Nome Completo, Endereço de envio, CPF nota fiscal,
            <br /><br />

            Table 2 - necessário para venda
            <br />
            conta bancária para depositarmos,
            documento foto,
            número de telefone
            <br /><br />

            Endereço - Estado, Cidade, Rua, Numero, CEP

        </div>
    )
}