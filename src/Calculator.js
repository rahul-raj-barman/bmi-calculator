import React, { useEffect, useState, useRef } from 'react';
import './calculator.css'

const Calculator = () => {

    const [gender, setGender] = useState("Male")

    const [height, setHeight] = useState("CM")

    const [weight, setWeight] = useState("kg")

    const [heightVal, setHeightVal] = useState()

    const [weightVal, setWeightVal] = useState()

    const curr_gender = useRef(null);
    const curr_height = useRef(null);
    const curr_weight = useRef(null);

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
        console.log(e.target.value)
        setHeightVal(parseFloat(e.target.value))
    }

    const handleWeightVal = (e) => {
        setWeightVal(e.target.value)
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
                    <div className='unit-type' onClick={(e)=>handleHeightUnit(e)}>CM</div>
                    <div className='unit-type' onClick={(e)=>handleHeightUnit(e)}>Feet</div> 
                    </div>
                   
                    
                    <div>
                    <input type="text" className='inp inp-1' value={heightVal}/>
                    </div>
                    
                    </div>

                    <div className="row-2">
                    <input type="range"
                    step={.2} className='range' onChange={(e) => handleHeight(e)}/>
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
                    <input type="text" className='inp inp-1' value={weightVal}/>
    

                    </div>
                    
                    </div>

                    <div className="row-2">
                    <input type="range" className='range' onChange={(e) =>handleWeightVal(e)}/>
                    </div>
                    
                    <button className='cal-but'>Calculate BMI</button>
                
                </div>



            </div>
        </div>
    );
}

export default Calculator;
