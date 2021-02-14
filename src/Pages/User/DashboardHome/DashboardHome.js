import React, { useEffect, useState } from 'react';
import './DashboardHome.css';
import VerticalTab from '../VerticalTab';
import ButtonStandard from '../../../Components/ButtonStandard';
import { trimString, removeAccents } from '../../../Components/CreateLink';
import Snackbar from '../../../Components/Snackbar/Success';
import Axios from 'axios';

import UserData from '../UserData/UserData';
import Instructions from '../Instructions/Instructions';
import UserProducts from '../UserProducts/UserProducts';
import UserStoreDataTab from '../UserStoreData/UserStoreData';
import UserFinance from '../UserFinance/UserFinance';

export default function Dashboard() {
    // valores iniciais -> vêm da BD
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [snackbar, setSnackbar] = useState(false)
    const [dashboardData, setDashboardData] = useState({
        userName: 'get the user name',
        userStoreData: {
            storeName: '',
            trimStoreName: '',
            storeImage: null,
            storeInstagram: '',
            storeFacebook: '',
            storeYoutube: ''
        },
        userPersonalData: {
            userFullName: '',
            userCEP: '',
            userState: '',
            userCity: '',
            userStreet: '',
            userHouseNumber: '',
            userNotes: '',
            userCPF: '',
            userBankAccount: '',
            userPhone: '',
        },
        newProduct: {
            name: '',
            category: '',
            price: '',
            profit: '',
            typeMan: false,
            typeWomen: false,
            typeChildren: false
        }
    })
    let userEmail = localStorage.getItem('email')

    useEffect(() => {
        //load all data from db
        //use Components/GetData/GetUserData
        Axios
            .get('http://localhost:4000' + '/requestuserdata?email=' + userEmail)
            .then((res) => {
                console.log(res.data)
                let dbData = res.data[0]
                setDashboardData(prevState => ({
                    ...prevState,
                    userStoreData: {
                        storeName: dbData.storeName,
                        trimStoreName: dbData.storeLink,
                        storeImage: null,
                        storeInstagram: dbData.storeInstagram,
                        storeFacebook: dbData.storeFacebook,
                        storeYoutube: dbData.Youtube
                    },
                    userPersonalData: {
                        userFullName: dbData.fullName
                    }
                }))
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    function onChange(value, group, variable) {
        setDashboardData(prevState => ({
            ...prevState,
            [`${group}`]: {
                ...prevState[`${group}`], //for some reason it says wrong but works
                [`${variable}`]: value
            }
        }))
        setButtonDisabled(false)
    }

    function handleSave() {
        //axios to DB
        Axios.post("http://localhost:4000/userdata", {
            email: userEmail,
            dashboardData: dashboardData,
        })
        setSnackbar(true)
        setButtonDisabled(true)
    }

    //Functions to handle component four (LOJA)
    function handleUpload(event) {
        if (event.target.files[0].size > 4000000) {
            //too big to upload. inform user
        } else {
            onChange(event.target.files[0], 'userStoreData', 'storeImage')
        }
    }
    function onChangeStoreName(value, group, variable) {
        onChange(value, group, variable) //Store Name
        let cleanValue = removeAccents(value)
        let linkValue = trimString(cleanValue)
        onChange(linkValue, group, 'trimStoreName') //Link
    }
    function calculateProfit(value, group, variable) {
        onChange(value, group, variable)
        let currentProfit = (value / 2).toFixed(2)
        onChange(currentProfit, group, 'profit')
    }

    return (
        <div className="">
            <div className="dashboardHeader">
                <div className="dashboardSaveButton">
                    <ButtonStandard
                        variant="contained"
                        label='Salvar'
                        onClick={handleSave}
                        disabled={buttonDisabled}
                    />
                    <Snackbar
                        open={snackbar}
                        severity={'success'}
                        handleClose={(e, reason) => setSnackbar(false)}
                    />
                </div>
                <div className="dashboardTitle">
                    Dashboard
                </div>
            </div>
            <VerticalTab
                labelOne='Instruções'
                componentOne={
                    <Instructions />
                }
                labelTwo='Dados Pessoais'
                componentTwo={
                    <UserData
                        valueFullName={dashboardData.userPersonalData.userFullName}
                        valueState={dashboardData.userPersonalData.userState}
                        valueCity={dashboardData.userPersonalData.userCity}
                        valueStreet={dashboardData.userPersonalData.userStreet}
                        valueCep={dashboardData.userPersonalData.userCEP}
                        valueNumber={dashboardData.userPersonalData.userHouseNumber}
                        valueNotes={dashboardData.userPersonalData.userNotes}
                        onChange={(value, group, variable) => onChange(value, group, variable)}
                    
                    />
                }
                labelThree='Loja'
                componentThree={
                    <UserStoreDataTab
                        onChange={(value, group, variable) => onChange(value, group, variable)}
                        onChangeStoreName={(value, group, variable) => onChangeStoreName(value, group, variable)}
                        handleUpload={(event) => handleUpload(event)}
                        copyLink={'www.prin.com/lojas/' + dashboardData.userStoreData.trimStoreName}
                        storeLink={dashboardData.userStoreData.trimStoreName}
                        valueStoreName={dashboardData.userStoreData.storeName}
                        valueStoreInstagram={dashboardData.userStoreData.storeInstagram}
                        valueStoreFacebook={dashboardData.userStoreData.storeFacebook}
                        valueStoreYoutube={dashboardData.userStoreData.storeYoutube}
                    />
                }
                labelFour='Produtos'
                componentFour={
                    <UserProducts />
                }
                labelFive='Novo Produto'
                componentFive={
                    <UserProducts
                        productCategory={dashboardData.newProduct.category}
                        valuePrice={dashboardData.newProduct.price}
                        valueName={dashboardData.newProduct.name}
                        valueProfit={dashboardData.newProduct.profit}
                        checkedMale={dashboardData.newProduct.typeMan}
                        checkedFemale={dashboardData.newProduct.typeWomen}
                        checkedChildren={dashboardData.newProduct.typeChildren}
                        onChange={(value, group, variable) => console.log(value, group, variable)}
                        onChangePofit={(value, group, variable) => calculateProfit(value, group, variable)}
                    />
                }
                labelSix='Financeiro'
                componentSix={
                    <UserFinance

                    />
                }
            />
        </div>
    )
}