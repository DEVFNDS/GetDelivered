import axios from 'axios';

// Action types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

// Login action
export const loginReq = (payload) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    axios.post('/auth/sign_in', payload)
      .then((response) => {
        dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: LOGIN_FAILURE, payload: 'Login failed. Check your email and password.' });
      });
  };
};

// Registration actions
export const registerReq = (payload) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });

    axios.post('/auth/register', payload)
      .then((response) => {
        dispatch({ type: REGISTER_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: REGISTER_FAILURE, payload: error.message || 'Registration failed.' });
      });
  };
};


export const fetchProducts = () => {
  console.log("Hello");
  return (dispatch) => {
      
    axios.get('https://api.example.com/data')
      .then((response) => {
        
      })
      .catch((error) => {
          console.log("dfdsf")
        const products={
          "data": [
            {
              "name": "Sugar Cane",
              "product_description": "Sugarcane is a tall perennial grass that belongs to the genus Saccharum in the Poaceae family. It is one of the world's most important crops, mainly cultivated for the production of sugar and sugarcane-based products such as molasses, rum, and ethanol.",
              "image": "/assets/sugarcane.png",
              "price": "$3.99/lb"
            },
            {
              "name": "Banana",
              "product_description": "Bananas are one of the most popular fruits in the world. They are grown in tropical regions and are available all year round. The banana plant belongs to the Musaceae family, which also includes plantains. Bananas are a rich source of carbohydrates, fiber, and vitamins, and are an important staple food in many countries.",
              "image": "/assets/banana.jpeg",
              "price": "$2.19/lb"
            },
            {
              "name": "Watermelon",
              "product_description": "Watermelon is a delicious fruit that is known for its juicy, sweet flesh and refreshing taste. It is a member of the Cucurbitaceae family and is believed to have originated in Africa. Today, watermelon is grown in many countries around the world, and is a popular summer fruit due to its high water content and cooling properties.",
              "image": "/assets/watermilon.jpeg",
              "price": "$8.09/lb"
            }]}
            
        dispatch(fetchProductSuccess(products));
      });
  };
};




export const fetchProductSuccess = (data) => ({
  type: 'FETCH_PRODUCT_SUCCESS',
  payload: data,
});