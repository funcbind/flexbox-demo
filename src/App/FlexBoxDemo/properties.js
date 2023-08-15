export const defaultProperties = {
  "flexDirection" : "row",
  "flexWrap" : "nowrap",
  "justifyContent" : "flex-start",
  "alignItems" : "normal",
  "alignContent" : "normal" 
}  

export const additionalDetails = {
  "alignItems:normal" : "Behaves as stretch"
}
  
export const flexParentPropertyMap = {
  "flexDirection" : [
    "row", "row-reverse", "column", "column-reverse"
  ],
  "flexWrap" : [
    "nowrap", "wrap", "wrap-reverse"
  ],
  "justifyContent" : [
    "flex-start","flex-end", "center", "space-between", "space-around", "space-evenly","start","end","left","right" , "normal"
  ],
  "alignItems" : [
    "flex-start", "flex-end", "center", "baseline","stretch", "normal"
  ],
  "alignContent" : [
    "flex-start","flex-end", "center", "space-between", "space-around", "space-evenly", "normal"
  ]
};

  
export const containerCSSExternal = {
  "min-height" : "200px"
};