export const fileUpload = async(file) => {

    const cloudUrl = "https://api.cloudinary.com/v1_1/dcpf2yyhe/image/upload";

    const formData = new FormData();
    formData.append("upload_preset", "react-journal");
    formData.append("file", file);

    try {
        const resp = await fetch(cloudUrl,{
            method: "POST",
            body: formData
        })
        if (!resp.ok) {
            throw new Error("Error al subir la imagen")
        }
        const cloudResp = await resp.json();
        return cloudResp.secure_url;
    } catch (error) {
        throw new Error(error); 
    }
}