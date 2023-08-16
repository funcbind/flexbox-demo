/* eslint-disable react/prop-types */
import react from "react";
import { useDispatch, useSelector } from "react-redux";
import "./flexboxDemo.scss";
import {
  additionalDetails,
  defaultProperties,
  flexParentPropertyMap  
} from "./properties";
import { FlexParent } from "./FlexParent";
import { selectFlexProperties, updateFlexOptions } from './flexPropertiesReducer';
import { FlexboxParentCSSProperties } from "./FlexParentCSSProperties";
import { paramCase } from "change-case";

export const FlexboxDemoOptions = () => {
  return (
		<>
      <aside className="fixed left-0 inset-y-0 w-1/6 overflow-y-auto">
        <FlexboxParentOptions />	
      </aside>
      <header className="flex-parent-css-properties fixed top-0 right-0 flex text-center bg-white">
        <FlexboxParentCSSProperties/> 
      </header>
      <main className="flex-parent-css-wrapper mt-24 mb-24">
        <FlexParent/>	
      </main>
		</>
  );
};


const FlexboxParentOptions = () => {
    const dispatch = useDispatch();
    const selectedFlexProperties = useSelector(selectFlexProperties);


    const flexOptionsChangeHandler = (propertyName, propertyValue) => {
      dispatch(updateFlexOptions({
        name : propertyName,
        value : propertyValue
      }));
    };
    
    const flexPropertiesSelectionWrapper = Object.keys(flexParentPropertyMap).map(flexPropertyName => (
      <section 
        key={flexPropertyName}
        className="flex-option">
        <h4>{paramCase(flexPropertyName) + ": " + selectedFlexProperties[flexPropertyName]}</h4>
        <FlexPropertyOptions 
          onChangeHandler={flexOptionsChangeHandler}
          selectedFlexProperties={selectedFlexProperties}
          propertyName={flexPropertyName}
        />
      </section>
    ));
    return (
      <section className="flex-options-wrapper">
        {flexPropertiesSelectionWrapper}
      </section>
    ); 
}

// eslint-disable-next-line react/prop-types
const FlexPropertyOptions = ({
  propertyName, 
  selectedFlexProperties,
  onChangeHandler
}) => {
  const selectedValue = selectedFlexProperties[propertyName];

  return (
    <div className="options-wrapper">
      {flexParentPropertyMap[propertyName].map((propertyValue) => (
      <label className="flex-option-label" key={propertyValue}>
        <input
          onChange={() => onChangeHandler(propertyName, propertyValue)}
          value={propertyValue}
          name={propertyName}
          defaultChecked={propertyValue === selectedValue}
          type="radio"
        />
        <span title={additionalDetails[`${propertyName}:${propertyValue}`]}>
          {propertyValue}
          {propertyValue === defaultProperties[propertyName] ? <span className="text-small">(default)</span> : null}
        </span>
      </label>))}
    </div>
  );
}

