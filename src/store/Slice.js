import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  alldata: [],
  alldatasearch: [],
  category: [],
  cartdata: [],
  incre: Array(100).fill(1),
  cartincre: [],
  price: [],
  allprice: [],
  totalprice: 0,
  pricedisc: [],
  netprice: [],
  nettotal: 0,
  searchitem:[],
  status: "Add to Cart"

}

export const ecomSlice = createSlice({
  name: 'ecom',
  initialState,
  reducers: {
  
    datahandler: (state, action) => {
      // Access 'alldata' from the state object
      const updatedAlldata = action.payload.map(item => ({
        ...item,
        status: 1
      }));

      state.alldata = updatedAlldata;
      state.alldatasearch = updatedAlldata;

      console.log('Updated alldata:', updatedAlldata);

    },

    datacategory: (state, action) => {
      state.category = [...action.payload]
      console.log(state.category);
    },
    searchdata: (state, action) => {
      state.searchitem = state.alldata.filter((ele) => {
        const searchTerm = action.payload.toLowerCase();
        return (
          ele.title.toLowerCase().includes(searchTerm) ||
          ele.description.toLowerCase().includes(searchTerm) ||
          ele.category.toLowerCase().includes(searchTerm) ||
          ele.brand.toLowerCase().includes(searchTerm)
        );
      });
     
    },
   
    carthandler: (state, action) => {

      let check = false;
      for (let i = 0; i < state.cartdata.length; i++) {
        if (state.cartdata[i].id === action.payload.ele.id) {
          check = true;
        } else {
          check = false;
        }
        if (check == true) {
          break;
        }
      }
      if (check == true) {
        // state.status = "go to cart"
        alert('already in cart')
      } else {
        const existingItem = state.cartdata.find(item => item.id === action.payload.ele.id);

        if (existingItem) {
          console.log(existingItem);
          return { ...state, dispatchincrement: true };
        } else {
          return {
            ...state,
            cartdata: [...state.cartdata, action.payload.ele],
            price: [...state.price, action.payload.ele.price],
            allprice: [...state.allprice, action.payload.ele.price],
            totalprice: state.totalprice + action.payload.ele.price,
            pricedisc: [
              ...state.pricedisc,
              action.payload.ele.price - (action.payload.ele.discountPercentage * action.payload.ele.price) / 100
            ],
            netprice: [
              ...state.netprice,
              action.payload.ele.price - (action.payload.ele.discountPercentage * action.payload.ele.price) / 100
            ],
            nettotal: state.nettotal + (action.payload.ele.price - (action.payload.ele.discountPercentage * action.payload.ele.price) / 100)
          };
        }
      }

    },
    increment: (state, action) => {
      return {
        ...state,
        allprice: state.allprice.map((price, index) => {
          if (index === action.payload.ind) {
            return price + state.price[index];
          }
          return price;
        }),
        netprice: state.netprice.map((netPrice, index) => {
          if (index === action.payload.ind) {
            return netPrice + state.pricedisc[index]; // Update netprice based on pricedisc
          }
          return netPrice;
        }),
        incre: state.incre.map((increment, index) => {
          if (index === action.payload.ind) {
            return increment + 1;
          }
          return increment;
        }),
        totalprice: state.totalprice + state.price[action.payload.ind],
        nettotal: state.nettotal + state.pricedisc[action.payload.ind]
      };
    },

    decrement: (state, action) => {
      if (state.incre[action.payload.ind] === 0) {
       
        return { ...state, dispatchRemoveCart: true };
      } else {
        state.incre[action.payload.ind] -= 1;
        state.allprice[action.payload.ind] -= state.price[action.payload.ind];
        state.netprice[action.payload.ind] -= state.pricedisc[action.payload.ind];
        state.totalprice -= state.price[action.payload.ind];
        state.nettotal -= state.pricedisc[action.payload.ind];
      }
    },
    removecart: (state, action) => {
      console.log(state.data);
      state.totalprice = state.totalprice - state.allprice[action.payload.ind];
      state.nettotal = state.nettotal - state.netprice[action.payload.ind];

      state.cartdata = state.cartdata.filter((ele, ind) => {
        return ind !== action.payload.ind;
      })
      console.log(state.cartdata);
      state.price = state.price.filter((ele, ind) => {
        return ind !== action.payload.ind;
      })
      state.incre = state.incre.filter((ele, ind) => {
        return ind !== action.payload.ind;
      })
      state.allprice = state.allprice.filter((ele, ind) => {
        return ind !== action.payload.ind;
      })
      state.pricedisc = state.pricedisc.filter((ele, ind) => {
        return ind !== action.payload.ind;
      })
      state.netprice = state.netprice.filter((ele, ind) => {
        return ind !== action.payload.ind;
      })
      console.log(state.data);
      console.log(action.payload.price);

    },
  },
})

export const { increment, datahandler, datacategory, searchdata, allitems, carthandler, decrement, removecart } = ecomSlice.actions

export default ecomSlice.reducer