export const GET_FOODITEMS = "GET_FOODITEMS";
export const GET_FOODITEMS_LOADING = "GET_FOODITEMS_LOADING";
export const GET_FOODITEMS_ERROR = "GET_FOODITEMS_ERROR";

export const getFoodItems = (payload) => (
    {
        type: GET_FOODITEMS,
        payload
    }
)

export const getFoodItemsLoading = () => (
    {
        type: GET_FOODITEMS_LOADING,
    }
)

export const getFoodItemsError = () => (
    {
        type: GET_FOODITEMS_ERROR,
    }
)

export const getFoodData = () => (dispatch) => {
    dispatch(getFoodItemsLoading());
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
    .then((res) => res.json())
    .then((res) => dispatch(getFoodItems(res.meals)))
    .catch((err) => dispatch(getFoodItemsError()))
}