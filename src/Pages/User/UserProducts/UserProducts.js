import React from 'react'
import './UserProducts.css'
import CategoryArray from './CategoryArray'
import Dropdown from '../../../Components/Dropdown'
import Checkbox from '../../../Components/Checkbox'
import TextField from '../../../Components/TextField'

export default function UserProducts(props) {

    return (
        <div className="">
            <div className="editProducts">
                <TextField
                    label='Nome'
                    // width='10ch'
                    value={props.valueName}
                    onChange={(e) => props.onChange(e, 'newProduct', 'name')}
                />
                <Dropdown
                    label='Categoria'
                    value={props.productCategory}
                    options={CategoryArray.map((category, index) => {
                        return (
                            <option value={index} key={index}>
                                {category}
                            </option>
                        )
                    })}
                    onChange={(e) => props.onChange(e.target.value, 'newProduct', 'category')}

                />

                <TextField
                    label='Preço'
                    width='10ch'
                    value={props.valuePrice}
                    onChange={(e) => props.onChangePofit(e, 'newProduct', 'price')}
                />
                <TextField
                    label='Lucro'
                    width='10ch'
                    value={props.valueProfit}
                    disabled={true}
                    onChange={(e) => props.onChangePofit(e, 'newProduct', 'profit')}
                />
                <div className="genderCheckbox">

                    <Checkbox
                        label='Masculino'
                        name='masc'
                        checked={props.checkedMale}
                        // onChange={(e) => console.log(e.target.checked)}
                        onChange={(e) => props.onChange(e.target.checked, 'newProduct', 'typeMan')}
                    />
                    <Checkbox
                        label='Feminino'
                        name='fem'
                        checked={props.checkedFemale}
                        onChange={(e) => props.onChange(e.target.checked, 'newProduct', 'typeWomen')}
                    />
                    <Checkbox
                        label='Infantil'
                        name='inf'
                        checked={props.checkedChildren}
                        onChange={(e) => props.onChange(e.target.checked, 'newProduct', 'typeChildren')}
                    />
                </div>
            </div>
            <div className="storeProducts">

            </div>
        </div>
    )
}