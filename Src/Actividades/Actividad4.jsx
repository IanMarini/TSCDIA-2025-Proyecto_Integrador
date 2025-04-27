function Saludo({ nombre }) {
    return <h3>Hola {nombre}</h3>;
  }
  
  function Presentacion({ nombre, edad, profesion }) {
    return (
      <p>
        Soy {nombre}, tengo {edad} años y soy {profesion}.
      </p>
    );
  }
  
  function Actividad4() {
    return (
      <div>
        <h2>Actividad 4 - Componentes y Props</h2>
        <Saludo nombre="Ian" />
        <Presentacion nombre="Lucía" edad={28} profesion="Diseñadora" />
      </div>
    );
  }
  
  export default Actividad4;