// defining how different aspects of state will me maintained/updated so that we can eventually store states globally
// used by the ProductList
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
// used by CategoryMenu
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
// would combine the functionality of UPDATE_PRODUCTS and UPDATE_CATEGORIES on Home
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";