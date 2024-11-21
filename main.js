const toggleMap = (event) => {
    const googleMapsTd = event.currentTarget
        .closest("tr") // Encuentra la fila (<tr>) más cercana al botón.
        .querySelector(".googleMaps"); // Selecciona el elemento <td> con la clase 'googleMaps'.

    googleMapsTd.style.display = googleMapsTd.style.display === "none" ? '' : "none";
}