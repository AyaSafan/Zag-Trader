import { useState, useEffect } from 'react';
import {Link, useNavigate } from "react-router-dom";


import PolicyCheck from '../components/policyCheck';
import CustomInput from '../components/customInput';
import CustomButton from '../../components/customPrimaryButton';

function RegisterForm() {
   const navigate = useNavigate();
   const [inputs, setInputs] = useState({email:'', password:'', policyChecked: false});
   const [enabledSubmit, setEnabledSubmit] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleCheck = (event) => {
    const name = event.target.name;
    const value = event.target.checked;
    setInputs(values => ({...values, [name]: value}));
  }
 
 
  useEffect(() => {
    setEnabledSubmit(inputs.email !== '' && inputs.password !== '' && inputs.policyChecked);
  }, [inputs]);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/sign-in');
  }

    return (
        <form onSubmit={handleSubmit}>
        <div className='sign-template-card-header'>
            Register
        </div>
        <div className='sign-template-text'>
            Already have an account? <Link to="/sign-in" className='link'>Login</Link> 
        </div>
        <CustomInput type="text" name="email" placeholder='Email *' onChange={handleChange}/>
        <CustomInput type="password" name="password" placeholder='Password *' onChange={handleChange}/>
        <PolicyCheck onChange={handleCheck}/>
        <div style={{display:'flex', flexDirection: 'column'}}> 
        <CustomButton type='submit' disabled={!enabledSubmit}> Register </CustomButton>
        </div>
        </form>
    );
}

export default RegisterForm;
