import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {


     //    js Object to extract keys of the object passed in. This will give us the array of ingredients. 
    let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
        // The map method is used to execute a function on each element in the array 
        return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        // Use the spread (...) operator and Array method to create an array. 
        // The map method is used to map the elements to each value. and then returns the burger ingredient component.
               return  <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />;
        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);
    //End of transformIngredients function 
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

        return(
            <div className={classes.Burger}>
                <BurgerIngredient type="bread-top"/>
                {transformedIngredients}
                <BurgerIngredient type="bread-bottom"/>
            </div>
        );

};


export default burger;

