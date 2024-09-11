import React from 'react'
import { Header} from '../../Layouts/Header/Header'
import { CountentValues } from '../../components/CountentValues/CountentValues'
import './OurValues.css'

export const OurValues = ({children}) => {
  return (
  <>
  <Header/>
  <div className='box-tittle-1'>
    <h2>Ley 2069 de 2020 de Emprendimiento</h2>
    <p className='container-p-1'>La Ley 2069 de 2020 de Emprendimiento en Colombia es una normativa que busca fomentar el desarrollo de emprendimientos y microempresas en el país. Esta ley establece una serie de incentivos y facilidades para emprendedores, incluyendo simplificación de trámites, acceso a financiamiento, y apoyo en la formalización de negocios. Su objetivo principal es fortalecer el ecosistema emprendedor, promoviendo la innovación y el crecimiento económico mediante el respaldo a nuevas ideas y proyectos empresariales.</p>
  </div>

  <div className='OurValues'>
  <CountentValues
  tittle= "Tarifas diferenciadas y simplificación"
  content="Este eje busca facilitar la creación y formalización de empresas mediante la reducción de tarifas y procedimientos. Se implementarán tarifas diferenciadas para micro y pequeñas empresas, así como un sistema contable simplificado para microempresas. Además, se introducirá un mecanismo de 'sandbox' que permitirá la flexibilidad de normas para el desarrollo de modelos de negocio innovadores."/>
  <CountentValues
  tittle= "Acceso a las compras públicas"
  content=" Este eje se enfoca en mejorar el acceso de los emprendedores a las compras públicas, facilitando su participación en licitaciones y contratos del Estado. Se busca promover la inclusión de micro y pequeñas empresas en este sector."/>
  <CountentValues
  tittle= "Financiamiento"
  content="Este eje tiene como objetivo facilitar el acceso a instrumentos financieros, tanto tradicionales como alternativos, para que los emprendedores puedan obtener recursos para iniciar o expandir sus negocios. Se reconoce el crowdfunding como una opción viable y se fortalecerá el microcrédito."/>
  <CountentValues
  tittle= "Institucionalidad"
  content="Este eje busca establecer un marco institucional que apoye el emprendimiento, promoviendo la colaboración entre diferentes entidades gubernamentales y el sector privado para crear un ecosistema favorable para los emprendedores."/>
  <CountentValues
  tittle= " Educación y desarrollo de habilidades para el emprendimiento"
  content="Este eje enfatiza la importancia de la educación y la capacitación en habilidades empresariales para fomentar un entorno propicio para el emprendimiento. Se buscará implementar programas educativos que fortalezcan las capacidades de los emprendedores."/>
  </div>
  </>
   
  )
}


