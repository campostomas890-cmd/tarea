import { useState, useEffect } from 'react';
function Contador() {
    const [numero, setNumero] = useState(0);
    useEffect(() =>{
        console.log(`El contador actual es: ${numero}`);
            }, [numero]);

            return (
            <div style={{textAlign:'center',marginTop:'20px'}}>
            <h2>contador:{numero}</h2>
            <button onClick={()=>setNumero(numero+1)}>Incrementar</button>
            <button onClick={() => setNumero(numero - 1)} style={{ marginLeft: '10px' }}>Restar</button>
            </div>
            );
            }
            export default Contador;