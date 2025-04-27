function procesar(array, callback) {
    return array.map(callback);
  }
  
  function Actividad3() {
    const resultado = procesar([1, 2, 3], x => x * 2);
  
    return (
      <div>
        <h2>Actividad 3 - Callback</h2>
        <p>Resultado: {JSON.stringify(resultado)}</p>
      </div>
    );
  }
  
  export default Actividad3;