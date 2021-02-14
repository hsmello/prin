import React from 'react';
import './UserStoreData.css'
import '../DashboardHome/DashboardHome.css'
import TextField from '../../../Components/TextField'
import Upload from '../../../Components/Upload'
import ButtonStandard from '../../../Components/ButtonStandard';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function UserStoreData(props) {

    return (
        <div className="">
            <div className="dashboardSubtitle">
                Detalhes da Loja
            </div>
            <div className="dashboardStoreNameBlock">
                <div className="dashboardSotreName">
                    <TextField
                        label='Nome da Loja'
                        maxLength={20}
                        value={props.valueStoreName}
                        onChange={(value) => props.onChangeStoreName(value, 'userStoreData', 'storeName')}
                    />
                    <br />O link da sua loja:
                    <div className="storeLink">
                        <div className="storeLinkButton">
                            <CopyToClipboard text={props.copyLink}>
                                <ButtonStandard
                                    label='COPIAR'
                                />
                            </CopyToClipboard>
                        </div>
                        <div className="storeLinkShow">
                            www.prin.com/lojas/{props.storeLink}
                        </div>
                    </div>
                </div>

            </div>
            <br />
            <div className="dashboardBottomBlock">
                <div className="dashboardSocial">

                    <div className="dashboardSubtitle">
                        Redes Sociais
                    </div>
                    <div className="dashboardStoreInput">
                        <div className="dashboardStoreText">
                            <TextField
                                label='Instagram'
                                value={props.valueStoreInstagram}
                                onChange={(value) => props.onChange(value, 'userStoreData', 'storeInstagram')}
                            />
                            <TextField
                                label='Facebook'
                                value={props.valueStoreFacebook}
                                onChange={(value) => props.onChange(value, 'userStoreData', 'storeFacebook')}
                            />
                            <TextField
                                label='YouTube'
                                value={props.valueStoreYoutube}
                                onChange={(value) => props.onChange(value, 'userStoreData', 'storeYoutube')}
                            />
                        </div>
                    </div>
                </div>
                <div className="dashboardImages">
                    Faça Upoad das Imagens da sua loja
                    <div className="coverUploadBlock">
                        <Upload
                            onChange={((event) => props.handleUpload(event))}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}