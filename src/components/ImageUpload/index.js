import { useState } from "react"

export default function ImageUpload() {
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [message, setMessage] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);

            const preview = URL.createObjectURL(file);
            setImagePreview(preview)
        }
    }

    const handleImageUpload = () => {
        if (!image) {
            setMessage('select an image first');
            return;
        }

        setTimeout(() => { setMessage('image uploaded successfully')}, 1000);
    }

    return (
        <div>
            <h1>task 2 image upload</h1>
            <input type='file'
            accept="image/*"
            onChange={handleImageChange} />

            {imagePreview && (
                <div >
                    <img src={imagePreview} alt="preview" style={{width: '200px', height: '200px'}} />
                </div>
            )}

            <button onClick={handleImageUpload}>Upload</button>
            {message && <p>{message}</p>}
        </div>
    )
}