import React, { useState } from 'react'
import '../css/reset.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import '../css/style.css'
import QRCode from 'qrcode.react';
import { CAccordion, CAccordionItem, CAccordionBody, CAccordionHeader, CButton } from '@coreui/react';
import qrcode1 from '../../src/assets/icons/qr-code.png'

export const Main = () => {
    //DOCS
    //https://www.npmjs.com/package/qrcode.react
    const [campoQR, setCampoQR] = useState('');

    const [tipoFrame, setTipoFrame] = useState('');
    const [corFundoFrame, setCorFundoFrame] = useState('#FFFFFF');
    const [corFormaFrame, setCorFormaFrame] = useState('#000000');
    const [renderizacao, setRenderizacao] = useState('canvas');

    // download QR code
    const downloadQRCode = () => {
        const qrCodeURL = document.getElementById('qrCodeEl')
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let aEl = document.createElement("a");
        aEl.href = qrCodeURL;
        aEl.download = "QR_Code.png";
        document.body.appendChild(aEl);
        aEl.click();
        document.body.removeChild(aEl);
    }
    
    return (
        <main className="main">
            <section className="main__container">
                <article className="main__texto-qr">
                    <div>
                        <h1 className="main__logo">JP</h1>
                    </div>

                    <div className="main__informacoes">
                        <input
                            className="main__campo"
                            type="text"
                            placeholder="Digite o conteúdo"
                            onChange={(e) => setCampoQR(e.target.value)}
                        />
                        <span className="span">O QR Code será gerado automaticamente!</span>
                    </div>
                </article>
                <article className="main__qr-conteudo .qr-code">
                    <div className="qr-code__forma">
                        <QRCode
                            id="qrCodeEl"
                            size={150}
                            value={campoQR}
                            bgColor={corFundoFrame}
                            fgColor={corFormaFrame}
                            level={tipoFrame ? tipoFrame : 'L'}
                            renderAs={renderizacao}
                        />
                    </div>
                    <div className="qr-code__frame .frame">
                        <CAccordion activeItemKey={1}>
                            <CAccordionItem itemKey={1}>
                                <CAccordionHeader>
                                    FORMA
                                </CAccordionHeader>
                                <CAccordionBody>
                                    <article className="frame__icons-qr-type">
                                        <img src={qrcode1} alt="H" onClick={(e) => setTipoFrame(e.target.alt)} />
                                        <img src={qrcode1} alt="M" onClick={(e) => setTipoFrame(e.target.alt)} />
                                        <img src={qrcode1} alt="Q" onClick={(e) => setTipoFrame(e.target.alt)} />
                                        <img src={qrcode1} alt="L" onClick={(e) => setTipoFrame(e.target.alt)} />
                                    </article>
                                </CAccordionBody>
                            </CAccordionItem>
                        </CAccordion>
                        <br />
                        <CAccordion>
                            <CAccordionItem itemKey={1}>
                                <CAccordionHeader>
                                    CORES
                                </CAccordionHeader>
                                <CAccordionBody>
                                    <div className="frame__cores">
                                        <article className="frame__cores-tipo">
                                            <label for="bg-c">Cor Fundo</label>
                                            <input type="color" name="bg-c" value={corFundoFrame} onChange={(e) => setCorFundoFrame(e.target.value)} />
                                        </article>
                                        <article className="frame__cores-tipo">
                                            <label for="fg-c">Cor Forma</label>
                                            <input type="color" name="fg-c" value={corFormaFrame} onChange={(e) => setCorFormaFrame(e.target.value)} />
                                        </article>
                                    </div>
                                </CAccordionBody>
                            </CAccordionItem>
                        </CAccordion>
                        <br />
                        <CAccordion>
                            <CAccordionItem itemKey={1}>
                                <CAccordionHeader>
                                    RENDERIZACAO
                                </CAccordionHeader>
                                <CAccordionBody>
                                    <article className="frame__buttons_renderizacao">
                                        <CButton color="primary" shape="rounded-pill" value={"svg"} onClick={(e) => setRenderizacao(e.target.value)}>SVG</CButton>
                                        <CButton color="primary" shape="rounded-pill" value={"canvas"} onClick={(e) => setRenderizacao(e.target.value)}>CANVAS</CButton>
                                    </article>
                                </CAccordionBody>
                            </CAccordionItem>
                        </CAccordion>
                    </div>
                    <div className="main__button_download">
                        <CButton color="info" shape="rounded-pill" onClick={downloadQRCode}>DOWNLOAD</CButton>
                    </div>
                </article>
            </section>
        </main>
    )
}