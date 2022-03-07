import React, { useState } from 'react'
import QRCode from 'qrcode.react';

export const GeradorQR = () => {

    const [qrCodeText, setQRCodeText] = useState('');

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
        <div style={{background: "#FFF", padding: '30px', marginTop: '50px'}}>
            <h1 style={{color: '#000'}}>GeradorQR</h1>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <QRCode
                    id="qrCodeEl"
                    size={150}
                    value={qrCodeText}
                />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '22px 0'}}>
                <input
                    style={{margin: '10px 0'}}
                    type="text"
                    placeholder="Digite aqui..."
                    value={qrCodeText}
                    onChange={e => setQRCodeText(e.target.value)}
                />
                <input
                    type="button"
                    className="download-btn"
                    value="Download"
                    onClick={downloadQRCode}
                />
            </div>
        </div>
    )
}