import React, { useState } from "react";
import Lights from "./lights";
//include images into your bundle


//create your first component
const Home = () => {

	const [ShadowGreen, setShadowGreen] = useState();
	const [ShadowWarning, setShadowWarning] = useState();
	const [ShadowDanger, setShadowDanger] = useState();

	function ActiveDanger() {
		setShadowDanger("brillorojo")
		setShadowGreen("")
		setShadowWarning("")
	};
	function ActiveWarning() {
		setShadowDanger("")
		setShadowGreen("")
		setShadowWarning("brilloambar")

	};
	function ActiveGreen() {
		setShadowDanger("")
		setShadowGreen("brilloverde")
		setShadowWarning("")
	};


	return (
		
			
			<div className="Group">
				<button type="button" className={`rojo ${ShadowDanger}`} onClick={ActiveDanger}></button>
				<button type="button" className={`ambar ${ShadowWarning}`} onClick={ActiveWarning}></button>
				<button type="button" className={`verde ${ShadowGreen}`} onClick={ActiveGreen}></button>
			</div>
			
		

	);

};
export default Home;
