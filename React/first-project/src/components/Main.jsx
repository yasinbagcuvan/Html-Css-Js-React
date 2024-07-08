import React from 'react'

const Main = () => {
  return (
    <><h4>JSX Özellikleri</h4>
    <ol>
      <li>Componentin return'ü içerisindeki html benzeri yapı JSX mutlaka fragment (bir kapsayıcı) içerisinde yazılmalıdır</li>
      <li>JSX yapısı içerisinde süslü parantez içerisini JS kodları yazılmasına olanak tanır</li>
      <li style={{color:"red", fontSize:"20px"}}>JSX içerisinde inline css yazmak için çift süslü parantez kullanilir.{'style = {{JS css kodu}}'}</li>
    </ol></>
  )
}

export default Main