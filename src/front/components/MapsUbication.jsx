import { useEffect } from "react";

export const MapsUbication = () => {

    /*useEffect(() => {

        const address = "Avenida Apoquindo 3000, Las Condes, Santiago, Chile";
        const apiKey = import.meta.env.VITE_GOOGLE_MAPS_KEY;

        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                if (data.status === "OK") {
                    const location = data.results[0].geometry.location;

                    const map = new window.google.maps.Map(document.getElementById("mapa"), {
                        center: location,
                        zoom: 14,
                    });

                    new window.google.maps.Marker({
                        position: location,
                        map: map,
                        title: "Antoja Pizzería",
                    });
                } else {
                    console.error("No se pudo geocodificar la dirección:", data.status);
                }
            })
            .catch(err => {
                console.error("Error al obtener coordenadas:", err);
            });

    }, []);
    */

    return (
        <div className="container-fluid container-ubication ">
            <div className="row justify-content-center">
                <div className="col-12 text-center mb-4">
                    <h2>Ubicación</h2>
                </div>
                <div className="col-12 px-4">
                    <div className="map-container" style={{ display: "flex", justifyContent: "center" }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.237583407028!2d-70.60137232355386!3d-33.417049773402795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf6ab9a6ea55%3A0x8cf4357fb9c6c067!2sAv.%20Apoquindo%203000%2C%207550202%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses-419!2sar!4v1757441931267!5m2!1ses-419!2sar"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa de Google"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
};