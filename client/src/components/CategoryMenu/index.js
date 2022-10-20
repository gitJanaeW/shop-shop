import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GloblalState';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';

function CategoryMenu() {
  // getting access to the state of our variable and the dispatch function to change the state
  const [state, dispatch] = useStoreContext();
  // getting access to the categories attribute from our state
  const { categories } = state;
  // getting access to our the query data from Apollo
  const { data: categoryData } = useQuery(QUERY_CATEGORIES);
  useEffect(() => {
    // if the query returns categoryData, run dispatch() to insert the new data
    if (categoryData) {
      // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
    }
  }, [categoryData, dispatch]);
  // change the current category based on its key/id
  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button key={item._id} onClick={() => { handleClick(item._id);}}>
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;