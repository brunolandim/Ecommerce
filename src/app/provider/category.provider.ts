import lampada from '@/app/assets/category/lampada.png'
import ferramenta from '@/app/assets/category/ferramenta.png'
import fios from '@/app/assets/category/fios.png'
import flor from '@/app/assets/category/flor.png'
import luminaria from '@/app/assets/category/luminaria.png'
import lustre from '@/app/assets/category/lustres.png'
import panela from '@/app/assets/category/panela.png'
import ChuveiroQuadrado from '@/app/assets/category/chuveiro2.png'

export const getAllCategories = () => {
    return [
        {
            id: 1,
            name: 'Lâmpadas',
            image: lampada,
            width: 120,
        },
        {
            id: 2,
            name: 'Ferramentas',
            image: ferramenta,
            width: 80,
        },
        {
            id: 3,
            name: 'Cabos',
            image: fios,
            width: 170,
        },
        {
            id: 4,
            name: 'Decorações',
            image: flor,
            width: 200,
        },
        {
            id: 5,
            name: 'Luminárias',
            image: luminaria,
            width: 170,
        },
        {
            id: 6,
            name: 'Lustres',
            image: lustre,
            width: 170,
        },
        {
            id: 7,
            name: 'Itens Domésticos',
            image: panela,
            width: 170,
        },
        {
            id: 8,
            name: 'Acessórios',
            image: ChuveiroQuadrado,
            width: 170,
        }
    ]
}