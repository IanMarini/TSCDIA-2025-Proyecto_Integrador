function Actividad6() {
    const productos = [
      { nombre: "Notebook", precio: 1200 },
      { nombre: "Mouse", precio: 20 },
      { nombre: "Teclado", precio: 50 },
      { nombre: "Monitor", precio: 300 },
      { nombre: "Auriculares", precio: 80 },
    ];
  
    const caros = productos.filter(p => p.precio > 100);
    const nombresFormateados = productos.map(p => `${p.nombre}: $${p.precio}`);
    const total = productos.reduce((acc, p) => acc + p.precio, 0);
    const baratos = productos
      .filter(p => p.precio < 100)
      .map(p => p.nombre.toLowerCase());
  
    return (
      <div>
        <h2>Actividad 6 - Arrays</h2>
        <p><strong>Caros:</strong> {JSON.stringify(caros)}</p>
        <p><strong>Formateados:</strong> {JSON.stringify(nombresFormateados)}</p>
        <p><strong>Total:</strong> ${total}</p>
        <p><strong>Baratos:</strong> {JSON.stringify(baratos)}</p>
      </div>
    );
  }
  
  export default Actividad6;