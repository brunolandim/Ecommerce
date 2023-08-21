import lampada from '@/app/public/category/lampada.png'
import ferramenta from '@/app/public/category/ferramenta.png'
import fios from '@/app/public/category/fios.png'
import flor from '@/app/public/category/flor.png'
import luminaria from '@/app/public/category/luminaria.png'
import lustre from '@/app/public/category/lustres.png'
import panela from '@/app/public/category/panela.png'
import ChuveiroQuadrado from '@/app/public/category/chuveiro2.png'

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