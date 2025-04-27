function Actividad2() {
    const persona = {
      nombre: "Ian Marini",
      edad: 30,
      profesion: "Analista de Datos",
    };
  
    const { nombre, edad, profesion } = persona;
    persona.ciudad = "Córdoba";
  
    return (
      <div>
        <h2>Actividad 2 - Desestructuración</h2>
        <p>{`${nombre} tiene ${edad} años y trabaja como ${profesion}.`}</p>
        <p>Vive en {persona.ciudad}.</p>
      </div>
    );
  }
  
  export default Actividad2;