/* eslint-disable react/prop-types */
import react from 'react';

export const FlexItem = ({ id, removeFlexItem, itemIndex, width }) => {

	return (
		<div
			className='flex-item'
			style={{
				width
			}}
		>
			<div className="item-index">{++itemIndex}</div>
			<button
				onClick={() => removeFlexItem(id)}
				className='close float-right clear-right no-style-btn'></button>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
				{/* ut labore et dolore magna aliqua. Semper eget duis at tellus at urna condimentum mattis pellentesque. 
				Ut diam quam nulla porttitor massa id. Cras tincidunt lobortis feugiat vivamus at augue eget arcu.
				Id faucibus nisl tincidunt eget nullam non nisi est sit. Amet justo donec enim diam vulputate ut pharetra.
				Mattis pellentesque id nibh tortor id aliquet. Non enim praesent elementum facilisis leo vel. 
				Neque vitae tempus quam pellentesque nec nam. Tempus urna et pharetra pharetra massa massa ultricies mi quis.
				Non arcu risus quis varius quam quisque id diam. Ultrices dui sapien eget mi proin sed libero enim.
				Ut etiam sit amet nisl. Viverra orci sagittis eu volutpat odio facilisis mauris. 
				Urna neque viverra justo nec ultrices. */}

				{/* Sapien eget mi proin sed libero. Sed elementum tempus egestas sed. 
				Nisi est sit amet facilisis. Tincidunt arcu non sodales neque sodales ut etiam sit.
				Odio eu feugiat pretium nibh ipsum consequat nisl. Cursus vitae congue mauris rhoncus. 
				Tempor orci dapibus ultrices in. Dolor magna eget est lorem ipsum dolor. 
				Mollis nunc sed id semper risus in hendrerit gravida rutrum. 
				Integer feugiat scelerisque varius morbi enim nunc faucibus a. 
				Viverra mauris in aliquam sem fringilla ut. Nullam ac tortor vitae purus. 
				Ultrices mi tempus imperdiet nulla malesuada. 
				Molestie ac feugiat sed lectus vestibulum. 
				Eros donec ac odio tempor orci. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc.
				 Volutpat ac tincidunt vitae semper quis lectus. */}
		</div>
	);

}