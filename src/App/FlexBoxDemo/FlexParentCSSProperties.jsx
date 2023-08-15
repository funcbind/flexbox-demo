import { useSelector } from 'react-redux';
import debounce from 'debounce';
import store from "../store";
import {
  selectFlexCSSProperties,
  updateCSSFlexProperties
} from './flexPropertiesReducer';
import { useImmer } from 'use-immer';

export const FlexboxParentCSSProperties = () => {
  const {
    parentHeight,
    itemsWidth,
    rowGap,
    columnGap
  } = useSelector(selectFlexCSSProperties);

  const [flexParentCssProperties, setFlexParentCssProperties] = useImmer({
    parentHeight,
    itemsWidth : '15',
    rowGap : 0,
    columnGap : '20'
  });

  const flexItemCssPropChanger = e => {
    const value = e.target.value;
    const name = e.target.name;
    setFlexParentCssProperties(draft => {
      draft[name] = value;
    });
    flexCSSPropertiesUpdator(name, value)
  };

  return (
    <>
      <div>
        <label>
          <span className='px-1'>
            Flex Items width
          </span>
          <input
            className="basic-input-1"
            value={flexParentCssProperties.itemsWidth}
            name="itemsWidth"
            placeholder={flexParentCssProperties.itemsWidth ? "" : "auto"}
            onChange={flexItemCssPropChanger}
            type='number'
          />
          %
        </label>
      </div>
      <div>
        <label>
          <span className='px-1'>Flex Parent Height</span>
          <input
            className="basic-input-1"
            value={flexParentCssProperties.parentHeight}
            name='parentHeight'
            placeholder={flexParentCssProperties.parentHeight ? "" : "auto"}
            onChange={flexItemCssPropChanger}
            type="number"
          />{' '}
          px
        </label>
      </div>
      <div>
        <label>
          <span>Flex Gap</span>
          <input
            className="basic-input-1"
            value={flexParentCssProperties.rowGap}
            name='rowGap'
            onChange={flexItemCssPropChanger}
            type="number"
          />
          px
          <input
            className="basic-input-1"
            name='columnGap'
            value={flexParentCssProperties.columnGap}
            onChange={flexItemCssPropChanger}
            type="number"
          />
          px
        </label>
      </div>
    </>
  );
};


const flexCSSPropertiesUpdator = debounce(
  (name, value) => {
    store.dispatch(updateCSSFlexProperties({name, value}));
  },
  600,
);
