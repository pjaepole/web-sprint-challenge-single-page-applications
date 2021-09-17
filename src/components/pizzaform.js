import react from 'react';

export default function Pizzaform(props){
    const {values,change,submit,disabled,errors}=props;
    const onSubmit=evt =>{
        evt.preventDefault();
        submit();
    }

    // const routeToConfirmation=()=>{
    //     history.pushState()
    // }
    const onChange=evt=>{
        const {name,value,checked,type}=evt.target;
        const valueToUse=type==='checkbox'? checked: value;
        change(name, valueToUse);
    }

    return(
        <div>
            <h2>this is from pizzaform</h2>
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
                </label>
                <label>pizza size
                    <select name="sizedropdown" id="size-dropdown" onChange={onChange}>
                        <option value=''>Select one</option>
                        <option value='small'>small</option>
                        <option value='medium'>medium</option>
                        <option value='large'>large</option>
                    </select>
                </label>
                
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
                </label>
                <input
                onChange={onChange}
                id="special-text" 
                type='text'
                name='specialtext'
                />
                <button disabled={disabled}id='order-button'>submit</button>
            </form>
        </div>
    )
}