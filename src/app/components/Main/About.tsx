import Image from 'next/image'
import React from 'react'
import JsStore from '@/app/assets/JSantosStore.png'

function About() {
  return (
    <div>
        <h1 id='location' className='w-full text-center pt-16 font-bold text-lg text-nwBlue-500'>SUA MELHOR OPÇÃO</h1>
        <div  className='flex flex-col xl:flex-row'>
            <Image src={JsStore} alt='Loja JS' />
            <div className='flex flex-col mx-4 xl:max-w-xs my-auto md:ml-6 gap-8'>
                <p>Desde 1970 somos especializados em materiais elétricos, 
                    sendo uma das principais distribuidoras do setor.
                    Oferecemos os melhores produtos,
                    com o preço que cabe no seu bolso e atende todas as necessidades do seu dia a dia.
                    Venha conhecer a nossa loja, estamos na Avenida Rio das Pedras, 85/89, em Vila Carrão-SP.
                    Aqui você irá encontrar lustres, luminárias, 
                    utilidades domésticas, ferramentas, acessórios, lâmpadas, fios e cabos,
                    quadros de distribuição, caixas de entrada padrão Eletropaulo,
                    materiais elétricos em geral, equipamentos de segurança e comunicação.
                </p>
                <button className='bg-nwBlue-500 p-2 rounded-md md:max-w-sm text-white'>Saiba mais sobre nós</button>
            </div>
        </div>
    </div>
  )
}

export default About