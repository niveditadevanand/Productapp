import React from 'react'
import RecipeReviewCard from './components/RecipeReviewCard'
import ResponsiveAppBar from './components/ResponsiveAppBar'
const App = () => {
  return (
    <div>
      <ResponsiveAppBar /> &nbsp;
      <RecipeReviewCard />
    </div>
  )
}

export default App