export const traerProductos = async () => {
       const response = fetch('../../../JSONs/productos.json').then(response => response.json());   
       return response; 
};