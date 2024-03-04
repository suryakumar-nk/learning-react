import { useEffect, useState } from 'react'
import './style.css'

export const QrCode = () => {

    const [img, setImg] = useState("");
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState("");
    const [size, setSize] = useState('');


    useEffect(() => {
        if(loading) {
            setTimeout(() => {
                generateQrCode()
            },[1000])
        }
    },[loading]);

    const downloadQrCode = () => {
        fetch(img)
            .then((response) => response.blob())
            .then((blob) => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob)
                link.download = 'QrCode.jpg';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

            });
    }

    const generateQrCode =  () => {
        try {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}`
            setImg(url)
        } catch (error) {
            console.log("Error occured while generating QR Code " + error)
        } finally {
            setLoading(false)
        }
    }

  return (
    <div className='container'>
        <h1 style={{borderBottom: '1px solid', paddingBottom: '4px', fontSize: '28px'}}>QR Code Generator</h1>
        {loading && <p>please weit...</p>}
        {(img && !loading) ? <img src={img} alt='logo192' className='qr-code'></img> : <></>}
        <div>
            <label htmlFor='dataInput' className='label'>Enter the text: </label>
            <input type='text' value={text} 
                   onChange={(e) => setText(e.target.value)} 
                   id='dataInput' placeholder='Enter the text' />
            <label htmlFor='sizeInput' className='label'>Enter the size(eg 150): </label>
            <input type='text' value={size} 
                   onChange={(e) => setSize(e.target.value)} 
                   id='sizeInput' placeholder='Enter the text' />
            <button className='generate-button' disabled={loading} onClick={() => setLoading(true)}>Generate QR code</button>
            <button className='download-button' onClick={downloadQrCode}>Download QR code</button>
        </div>
        <p>Designed by Surya Kumar</p>
    </div>
  )
}
