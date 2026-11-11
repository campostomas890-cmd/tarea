function Tarjeta({titulo, descripcion}){
    return(
        <div style={{border: '1px solid #ccc',padding:'16px',borderRadius: '8px'}}>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
        </div>
    );
}
export default Tarjeta;