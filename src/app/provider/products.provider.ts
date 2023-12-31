import Lampada from '@/app/assets/products/lampada.png'
import Chuveiro from '@/app/assets/products/chuveiro.png'
import Ferramenta from '@/app/assets/products/ferramenta.png'
import Garfo from '@/app/assets/products/garfo.png'
import lustre from '@/app/assets/products/lustre.png'
import Regua from '@/app/assets/products/regua.png'
import Ventilador from '@/app/assets/products/ventilador.png'
import Interruptor from '@/app/assets/products/interruptor.png'
import { IProduct } from '../types/IProduct'


export const getProducts = (): IProduct[] => {
    return [
        {
            id: 1,
            name: 'Lâmpada',
            price: 50.00,
            promotion_value: 45.00,
            image: Lampada
        },
        {
            id: 2,
            name: 'Chuveiro',
            price: 120.00,
            promotion_value: 100.00,
            image: Chuveiro
        },
        {
            id: 3,
            name: 'Kit de ferramentas',
            price: 100.00,
            promotion_value: 90.00,
            image: Ferramenta
        },
        {
            id: 4,
            name: 'Garfo',
            price: 15.00,
            promotion_value: 8.00,
            image: Garfo
        },
        {
            id: 5,
            name: 'Lustre',
            price: 1500.00,
            promotion_value: 1000.00,
            image: lustre
        },
        {
            id: 6,
            name: 'Régua',
            price: 25.00,
            promotion_value: 17.00,
            image: Regua
        },
        {
            id: 7,
            name: 'Ventilador',
            price: 50.00,
            promotion_value: 30.00,
            image: Ventilador
        },
        {
            id: 8,
            name: 'Interruptor',
            price: 20.00,
            promotion_value: 10.00,
            image: Interruptor
        }
    ]
}