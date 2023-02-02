import React from 'react'
import "../../styles/greetingMessageComponent.css"
import logo from "../../img/openbootcamp-logo.png"

const GreetingMessageComponent = ({removeComponent}:{removeComponent: Function}) => {
  return (
    <div className='box' onClick={()=>{removeComponent()}}>
        <div className='greetingMessageContainer'>
            <div className='greetingMessageTitle'>
                <h2>Hey, hey, hey, no tan rápido velocista ! 🛑</h2>
            </div>
            <div className='greetingMessageBody'>
                <p>Tener muchos propósitos y planes es sin duda fantástico y admirable.</p>
                <p>Pero, sabes que más es igual de admirable ?</p>
                <p>
                    Lograr que muchas personas cumplan sus propósitos. Es por eso que te invito a apoyar la iniciativa de OpenBootcamp.
                </p>
                <p>
                    OpenBootcamp ofrece cursos gratuitos en diversos áreas de estudio para que puedas formarte como un gran programador back-end, hacker, desarrollador de videojuegos, hacker, programador front-end, hacker y programador full-stack. En fin, todo menos hacker XD.
                </p>
                <hr />
                <p>
                    No se cobra nada a los estudiantes para aprender todo este poder oscuro, y además puedes obtener un certificado guay por el cual tampoco se cobra ni un centavo.
                </p>
                <p>
                    Sin embargo, mantener este modelo de negocios, que alegra a las billeteras de los estudiantes y que produce depresión (harakiri) en la de las personas detrás de este gran proyecto, no es nada rentable obviamente.
                </p>
                <p>
                    Por ello OpenBootcamp a empezado a aceptar donaciones para que todas las personas puedan apoyar a la sustentabilidad del proyecto y que así nuevos alumnos puedan seguir aprendiendo a dominar el poder de la fuerza.
                </p>
                
                <p>
                    Pero la mejor parte es que, dicen por ahí que solo si donas te dejaré crear más de 6 propósitos para este nuevo año. 😈 Me pregunto si será verdad... 🤨
                </p>
                <p>
                    Te dejo el enlace a su portal en github: <a rel="noreferrer" href='https://github.com/sponsors/Open-Bootcamp' target="_blank">Echaré un ojito 👀</a> 
                </p>
                <p style={{"textAlign": "center"}}>
                    <a href='https://open-bootcamp.com' rel='noreferrer' target="_blank">
                        <img className='contributionLogo' src={logo} alt="openbootcamp-logo" />
                    </a> 
                </p>
            </div>
        </div>
    </div>
  )
}

export default GreetingMessageComponent