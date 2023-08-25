import React, { useEffect, useState, useRef } from 'react';
import './calculator.css'

const Calculator = () => {

    const [gender, setGender] = useState("Male")

    const [height, setHeight] = useState("Meter")

    const [weight, setWeight] = useState("Kg")

    var [heightVal, setHeightVal] = useState(null)

    var [weightVal, setWeightVal] = useState(null)
    
    const [type, setType] = useState("");

    const [bmi, setBmi] = useState(0);

    const curr_gender = useRef(null);
    const curr_height = useRef(null);
    const curr_weight = useRef(null);
    const height_slider = useRef(null);
    const weight_slider = useRef(null);

    useEffect(() => {
        
    }, [bmi])

    useEffect(() => {
        const arr = curr_gender.current.childNodes;
        console.log(curr_gender.current.childNodes)
        arr.forEach((elem) => {
            console.log(elem.innerText)
            if(elem.innerText === gender) {

                console.log(elem.classList)
                elem.classList.add("selected");
            }
            else {
                elem.classList.remove("selected");
            }
        })
    }, [gender])


    useEffect(() => {
        curr_height.current.childNodes.forEach((e) => {
            if(e.innerText === height) {
                e.classList.add("selected")
            }
            else {
                e.classList.remove("selected")
            }
        })
        if(height === "Meter") {
            console.log(height_slider.current.step)
            height_slider.current.min = .1;
            height_slider.current.max = 100;
        }
        else {
            console.log("yes")
            console.log(height_slider.current.end)
            height_slider.current.min = .1;
            height_slider.current.max = 10;
        }
    }, [height])

    useEffect(() => {
        curr_weight.current.childNodes.forEach((e) => {
            if(e.innerText === weight) {
                e.classList.add("selected")
            }
            else {
                e.classList.remove("selected")
            }
        })

        if(weight === "Kg") {
            weight_slider.current.min = 0;
            weight_slider.current.max = 200;
        }
        else {
            weight_slider.current.min = 0;
            weight_slider.current.max = 200;
        }
    }, [weight])

    const handleWeight = (e) => {
        setWeight(e.target.innerText);

    }

    const handleGender = (e) => {
        setGender(e.target.innerText);

    }
    
    const handleHeightUnit = (e) => {
        setHeight(e.target.innerText)

    }

    const handleHeight = (e) => {
        setHeightVal(parseFloat(e.target.value))
    }

    const handleWeightVal = (e) => {
        setWeightVal(e.target.value)
    }

    const handleCalculation = () => {

        console.log(heightVal);
        console.log(weight)

        let weightVal1 = weightVal;
        let heightVal1 = heightVal;

        if(height === "Feet") {
            heightVal1 = parseFloat(heightVal1) * 0.3048;
            heightVal1.toPrecision(1);
        }
        if(weight==="pound") {
            weightVal1 = weightVal1*0.45359237;
            weightVal1.toPrecision(1);
        }

        heightVal1 = parseFloat(heightVal1);
        weightVal1 = parseFloat(weightVal1)
        let bmi = (weightVal1/ (heightVal1*heightVal1)).toPrecision(1);

        console.log(bmi)

        setBmi(bmi/2)

        const val = parseFloat(bmi/2);

        console.log("val " + val)

        if(val < 18.5) {
            setType("UnderWeight")
        }
        else if(val >= 18.5 && val <= 24.9) {
            setType("Normal Weight")
        }
        else if(val >= 25 && val <= 29.9) {
            setType("Overweight");
        }
        else {
            setType("Obesity");
        }
        
    }

    return (
        <div className='cont'>
            <div className="calculator-body">
                <div className="gender" ref={curr_gender} >
                
                    <div className="male" onClick={(e)=> handleGender(e)}>Male</div>

                    <div className="female" onClick={(e)=> handleGender(e)}>Female</div>

                    <div className="others" onClick={(e)=> handleGender(e)}>Others</div>
                
                </div>

                <div className="height input-measure">
                    <div className="row-one">

                    <div ref={curr_height}>
                    <div className='type-select' >Height</div>
                    <div className='unit-type' onClick={(e)=>handleHeightUnit(e)}>Meter</div>
                    <div className='unit-type' onClick={(e)=>handleHeightUnit(e)}>Feet</div> 
                    </div>
                   
                    
                    <div>
                    <input type="text" className='inp inp-1' value={heightVal}
                    onChange={(e) => handleHeight(e)}/>
                    </div>
                    
                    </div>

                    <div className="row-2">
                    <input type="range"
                    step={.2} className='range' onChange={(e) => handleHeight(e)} ref={height_slider}/>
                    </div>
                    
                
                </div>


                <div className="weight input-measure">
                    <div className="row-one">

                    <div ref={curr_weight}>
                    <div className='type-select'>Weight</div>
                    <div className='unit-type'
                    onClick={(e) => handleWeight(e)} >Kg</div>
                    <div className='unit-type selected' onClick={(e) => handleWeight(e)}>Pound</div> 
                    </div>
                   
                    
                    <div>
                    <input type="text" className='inp inp-1' value={weightVal} onChange={(e) =>handleWeightVal(e)}/>
    

                    </div>
                    
                    </div>

                    <div className="row-2">
                    <input type="range" className='range' step={.1} onChange={(e) =>handleWeightVal(e)} ref={weight_slider}/>
                    </div>
                    
                    <button className='cal-but' onClick={handleCalculation}>Calculate BMI</button>
                
                </div>

                <div className="res">
                {bmi ? bmi:0} {  type}
                </div>


            </div>
        </div>
    );
}

export default Calculator;
