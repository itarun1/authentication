import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router'
import {getFoodData} from '../Redux/FoodItems/action'

export const Home = () => {
  const {token, isAuthenticated} = useSelector((state) => state.login)
  const {foodItems} = useSelector((state) => state.foodItems)
  const dispatch = useDispatch()

  const fetchAndUpdate = () => {
    dispatch(getFoodData());
  }

  React.useEffect(() => {
    fetchAndUpdate()
  }, [])

  if(!isAuthenticated){
    return <Navigate to ="/login" />
  }
  return (
    <div>
      {foodItems.map((el) => {
        return (
          <>
          <h1 key={el.idMeal}>{el.strMeal}</h1>
          <img key={el.idMeal} src={el.strMealThumb} alt="" height="100px" width="100px"/>
          </>
        )
      })}
    </div>
  )
}
