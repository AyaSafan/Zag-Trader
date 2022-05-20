import './customButton.css';

function CustomPrimaryButton(props){
    return  <button className='customButton customPrimaryButton' type={props.type} disabled={props.disabled}> {props.children} </button>;
}
export default CustomPrimaryButton;