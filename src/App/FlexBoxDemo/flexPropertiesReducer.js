import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  flex: {
    'flexDirection': 'row',
    'flexWrap': 'nowrap',
    'justifyContent': 'flex-start',
    'alignItems': 'normal',   
    'alignContent': 'initial',
  },
  css: {
    parentHeight: "",
    itemsWidth: "15%",
    rowGap : "0",  
    columnGap : "20px",
    overflow: "hidden"
  }
};

const flexPropertiesSlice = createSlice({
  name: 'flexProperties',
  initialState,
  reducers: {
    updateCSSFlexProperties(state, action) {
      let {name, value} = action.payload;
      if (name === 'itemsWidth') {
        value = value ? value + '%' : '';
      } else if (name ==='rowGap' || name === 'columnGap') {
        value = value ? value + 'px' : '0';     
      } else {
        value = value ? value + 'px' : '';  
      }
      state.css[name] = value;
    },
    updateFlexOptions(state, action) {
      const {name, value} = action.payload;
      state.flex[name] = value;
    }
  },
});

export default flexPropertiesSlice.reducer;
export const {
  updateCSSFlexProperties,
  updateFlexOptions
} = flexPropertiesSlice.actions;

export const selectFlexProperties = state => state.flexProperties.flex;
export const selectFlexCSSProperties = state => state.flexProperties.css;