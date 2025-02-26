import { useSelector } from 'react-redux'

import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

import { RootReducer } from '../../store'

const Header = () => {
  const itensCart = useSelector((state: RootReducer) => state.cart.itens)
  const itensFavorite = useSelector(
    (state: RootReducer) => state.favorite.itens
  )

  const valorTotal = itensCart.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{itensFavorite.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itensCart.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
