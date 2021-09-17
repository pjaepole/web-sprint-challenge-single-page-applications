import react from 'react';

export default function Pizzaform(){




    return(
        <div>
            <h2>this is from pizzaform</h2>
            <form id="pizza-form">
                <input
                id="name-input" 
                type='text'
                name='name'
                />
                <label>pizza size
                    <select name="size-dropdown" id="size-dropdown">
                        <option>Select one</option>
                        <option>small</option>
                        <option>medium</option>
                        <option>large</option>
                    </select>
                </label>
                
                <label>Beef
                    <input
                    type="checkbox"
                    name="beef"
                    />
                </label>
                <label>Salami
                    <input
                    type="checkbox"
                    name="salami"
                    />
                </label>
                <label>Bacon
                    <input
                    type="checkbox"
                    name="bacon"
                    />
                </label>
                <label>Chicken
                    <input
                    type="checkbox"
                    name="chicken"
                    />
                </label>
                <input
                id="special-text" 
                type='text'
                name='special-text'
                />
                <button id='order-button'>submit</button>
            </form>
        </div>
    )
}