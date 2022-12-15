import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { getList } from './audioSlice'

type Props = {}

const Audiopage = (props: Props) => {
  const dispath =useDispatch<any>()
  const list = useSelector((state:RootState)=>{state.music.musics})
  useEffect(()=>{
    dispath(getList())
  },[list])
  return (
    <div className='bg-white h-[400px]'>Audio</div>
  )
}

export default Audiopage