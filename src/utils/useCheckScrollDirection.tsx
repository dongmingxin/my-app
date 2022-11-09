import React, {useState, useEffect} from 'react'

const useCheckScrollDirection = () => {
	const [isScrollDown, setisScrollDown] = useState<boolean>(false);

	useEffect(()=>{
		let lastScrollY = window.pageYOffset;
		// let ticking = false;
	
		const updateScroll = () => {
			const scrollY = window.pageYOffset;
			setisScrollDown(scrollY > lastScrollY ? true : false);
			lastScrollY = scrollY > 0 ? scrollY : 0;
		}
	
		/**
		 * requestAnimationFrame to make sure that we are calculating the new offset 
		 * after the page got rendered completely after scroll. 
		 * And then with ticking flag, 
		 * we will make sure we are just run our event listener 
		 * callback once in each requestAnimationFrame.
		 */
	
		// const onScroll = () => {
		// 	if (!ticking) {
		// 		window.requestAnimationFrame(updateScroll);
		// 		ticking = true;
		// 	}
		// };
	
		window.addEventListener("scroll", updateScroll);
		return () => window.removeEventListener("scroll", updateScroll);
	},[isScrollDown]);

	return isScrollDown;
}

export default useCheckScrollDirection