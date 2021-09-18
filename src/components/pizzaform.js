import react from 'react';
import styled from 'styled-components'
export default function Pizzaform(props){
    const {values,change,submit,disabled,errors,initialFormValues,setFormValues}=props;
    const onSubmit=evt =>{
        evt.preventDefault();
        submit();
        setFormValues(initialFormValues)
    }

    // const routeToConfirmation=()=>{
    //     history.pushState()
    // }
    const onChange=evt=>{
        const {name,value,checked,type}=evt.target;
        const valueToUse=type==='checkbox'? checked: value;
        change(name, valueToUse);
    }
    const StyledPizzaform=styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    `
    return(
        <div>
            <h2>Build your pizza</h2>
            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.sizedropdown}</div>
            </div>
                
            <form id="pizza-form" onSubmit={onSubmit}>
                
                <label>name
                <input
                id="name-input" 
                type='text'
                onChange={onChange}
                name='name'
                />
                </label><br/>
                <label>pizza size
                    <select name="sizedropdown" id="size-dropdown" onChange={onChange}>
                        <option value=''>Select one</option>
                        <option value='small'>small</option>
                        <option value='medium'>medium</option>
                        <option value='large'>large</option>
                    </select>
                </label><br/>
                
                <label>Beef
                    <input
                    onChange={onChange}
                    type="checkbox"
                    name="beef"
                    />
                </label>
                <label>Salami
                    <input
                    onChange={onChange}
                    type="checkbox"
                    name="salami"
                    />
                </label>
                <label>Bacon
                    <input
                    onChange={onChange}
                    type="checkbox"
                    name="bacon"
                    />
                </label>
                <label>Chicken
                    <input
                    onChange={onChange}
                    type="checkbox"
                    name="chicken"
                    />
                </label><br/>
                <label>Special instructions
                <input
                onChange={onChange}
                id="special-text" 
                type='text'
                name='specialtext'
                placeholder="put special instructions here"
                />
                </label><br/>
                <button disabled={disabled}id='order-button' name='orderbutton'>submit</button>
               
            </form>
                
                
        </div>
    )
}