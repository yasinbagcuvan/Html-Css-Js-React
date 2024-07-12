import React from 'react'
import '../assets/style/index.scss'

const Card = ({not,notSil,cardDuzenle}) => {
  return (
    <div>
        <h2>Notlarım</h2>
        <div style={{border:"solid 1px black"}}>
        <h4>{not.notAdi}</h4>
        <button onClick={()=>notSil(not.id)} >SİL</button>
        <button onClick={() => cardDuzenle(not.id)} >DÜZENLE</button>
      </div>

    </div>
    
  )
}

export default Card