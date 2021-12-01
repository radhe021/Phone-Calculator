import React , { useState ,useEffect} from 'react'
import CalculatorTitle from './calculatorTitle.js';
import OutputScreen from './outputScreen.js';
import Button from './button.js';

function Calculator() {

  var [question, setquestion] = useState('');
  var [answer, setanswer] = useState('');
 const handleClick = (e) =>
 {
    
    var value = e.target.value;

    switch (value) {
      case '=': {
    		if(question!=='')
        {
    			var ans='';
    		  try
    			{
    				ans = eval(question);
    			}
    			catch(err)
    			{
            setanswer("Math Error");
    			}
    			if(ans===undefined)
            setanswer("Math Error");
    			// update answer in our state.
    			else
    			//	this.setState({ answer: ans , question: ''});
            setanswer(ans);
            setquestion('')
    			break;
    		}
      }
      case 'AC': {
        // if it's the Clears sign, just clean our
        // question and answer in the state
        // this.setState({ question: '', answer: '' });
        setquestion('');
        setanswer('');
        break;
      }
	  case 'Del': {
	    let str = question;
  		str = str.substring(0,str.length-1);
  		// this.setState({question: str});
      setquestion(str)
  		break;
	  }
    case '%' : {
     let str = eval(question/100);
     setanswer(str);
    }
    default: {
        setquestion(question+=value)
        break;
      }
    }
  }
  return (
    <div className="frame">
    <CalculatorTitle value="Phone Calculator"/>
    <div className="mainCalc">
    <OutputScreen answer = {answer} question = {question}/>
    <div className="button-row">
      <Button label={'AC'} handleClick = {handleClick}/>
      <Button label={'Del'} handleClick = {handleClick}/>
      <Button label={'%'}  handleClick = {handleClick}/>
      <Button label={'/'} handleClick = {handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'7'} handleClick = {handleClick}/>
      <Button label={'8'} handleClick = {handleClick}/>
      <Button label={'9'} handleClick = {handleClick}/>
      <Button label={'*'} handleClick = {handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'4'} handleClick = {handleClick}/>
      <Button label={'5'} handleClick = {handleClick}/>
      <Button label={'6'} handleClick = {handleClick}/>
      <Button label={'-'} handleClick = {handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'1'} handleClick = {handleClick}/>
      <Button label={'2'} handleClick = {handleClick}/>
      <Button label={'3'} handleClick = {handleClick}/>
      <Button label={'+'} handleClick = {handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'0'} handleClick = {handleClick}  />
      <Button label={'.'} handleClick = {handleClick} />
      <Button label={'='} handleClick = {handleClick}/>
    </div>
    </div>
    </div>
  )
}

export default Calculator;

