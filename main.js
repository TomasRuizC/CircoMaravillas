const toggleMap = (event) => {
  const googleMapsTd = event.currentTarget
    .closest("tr") // Encuentra la fila (<tr>) más cercana al botón.
    .querySelector(".googleMaps"); // Selecciona el elemento <td> con la clase 'googleMaps'.

  googleMapsTd.style.display =
    googleMapsTd.style.display === "none" ? "" : "none";
};


const getTicketsValues = () => {
    const ids = ['cantidadA', 'cantidadB', 'cantidadC', 'provincia'];
    const precios = [3000, 7000, 10000];
    const valores = {};
    let total = 0;

    ids.forEach((id, i) => {
        const cantidad = document.querySelector(`#${id}`).value || 0;

        valores[id] = id === "provincia"
            ? cantidad
            : { cantidad, precioTotal: cantidad * precios[i] };
        
        total += valores[id].precioTotal || 0;
    });

    return total;
}

const setTicketValues = () => {
    console.log("hola")

    const totalText = document.querySelector(".total__comprar .total");

    if (!totalText) return;

    totalText.textContent = `Total: $${getTicketsValues()}`;
}


const clearSelects = () => {
    const ids = ['cantidadA', 'cantidadB', 'cantidadC', 'provincia'];

    ids.forEach(id => {
        document.querySelector(`#${id}`).value = id === "provincia" ? "null" : "0";
    });

    const totalText = document.querySelector(".total__comprar .total");

    if (!totalText) return;
    totalText.textContent = "Total: $0";
};

document.querySelectorAll('.cantidad__dropdown').forEach(select => {
    select.addEventListener('change', setTicketValues);
});
document.querySelector('.provincia__dropdown').addEventListener('change', setTicketValues);