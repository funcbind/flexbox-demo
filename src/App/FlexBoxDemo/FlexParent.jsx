import React from "react";
import { FlexItem } from "./FlexItem";
import { useImmer } from "use-immer";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectFlexCSSProperties, selectFlexProperties } from "./flexPropertiesReducer";

const initialFlexItems = [...Array(5)].map(() => nanoid());

export const FlexParent = () => {
    const [flexItems, setFlexItems] = useImmer(initialFlexItems);
    const {parentHeight, itemsWidth, rowGap, columnGap} = useSelector(selectFlexCSSProperties);
    const flexParentCSS = useSelector(selectFlexProperties);

    const addFlexItem = () => {
        setFlexItems(draft => {
          draft.push(nanoid());
        });
    }

    const removeFlexItem = (id) => {
        setFlexItems(draft => {
          const itemToRemoveIndex = draft.findIndex(item => item === id);
          draft.splice(itemToRemoveIndex, 1);
        });
    }
    return (
      <>
        <div className="text-right mb-1">
          <button 
            onClick={addFlexItem}
            className="bg-blue-500 text-white hover:bg-blue-600 hover:shadow-md">Add Child</button>
        </div>
        <section 
          style={{
            "height": `${parentHeight}`,
            "gap" : `${rowGap} ${columnGap}`,
            ...flexParentCSS
          }}
          className="flex-parent">
          {flexItems.map((id, index) => (
            <FlexItem 
              key={id}
              id={id}
              width={itemsWidth}
              itemIndex={index}
              removeFlexItem={removeFlexItem}
            />
          ))}
        </section>
      </>
    );
  };