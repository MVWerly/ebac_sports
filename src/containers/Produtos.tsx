import { useSelector } from 'react-redux'

import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

import { RootReducer } from '../store'

type Props = {
  produtos: ProdutoType[]
}

const ProdutosComponent = ({ produtos }: Props) => {
  const itensFavorite = useSelector(
    (state: RootReducer) => state.favorite.itens
  )

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = itensFavorite.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
