import React from 'react'
import CartItemList from '../../components/CardItemList/CardItemList';
import Topbar from '../../global/Topbar'
import { useGlobalAppContext } from './../../context/AppGlobalContent';
import Keywords from './keywords/Keywords';
import './style.scss'
const SearchContent = () => {

  const {searchMovieSerials,searchData,keywordData}= useGlobalAppContext()


  return (
    <div className='SearchContent'>
      <Keywords/>
      <CartItemList></CartItemList>
    </div>
  )
}

export default SearchContent