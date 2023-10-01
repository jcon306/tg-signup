import React from 'react'
import tggLogo  from '../../Assets/tggLogo.jpg'
import './HeaderComponent.css'

const HeaderComponent = () => {
    return (
        <div className='header-container'>
            <div className='header-pic'>
                <img 
                    src={tggLogo} 
                    alt='Back to school logo'  
                />
            </div>
             <div className='header-text'>
                <h1>Thanksgiving Giving Sign Up</h1> 
                <hr /> 
                <p>
                    &ensp;Thank you for your willingness to support families in need this Thanksgiving as a partnership with Families for Families.
                             Your support is critical for feeding the hearts and bellies of many families! Sign up below to sponsor a family for 
                             Thanksgiving Dinner. Then purchase the ingredients and drop off to 250 Braen Ave in Wyckoff on November 18th 10-12 
                             (detailed instructions will be given after signing up) to be delivered to the families. We are also in need of delivery 
                             drivers from 1-3 to deliver the meals. Suggested ingredients include: Boxed Stuffing Mix (like Stovetop), Macaroni & Cheese
                             or Lasagna, Potatoes, Jars of Turkey Gravy or Dried Gravy Mix Packets, Canned Yams, Cranberry Sauce, Canned or fresh Veggies
                             (green beans, corn, peas), Canned or fresh fruit, Cornbread Mix or Biscuit or Roll mix, Frozen Turkey or Turkey Breast 
                             or Frozen Ham, Disposable pan to cook the turkey in, Rice, Red or Black Beans, Canned Pumpkin or Fruit Pie Filling, 
                             Pie Crust Mix, Anything else you would like to include!
                </p>
            </div> 
            
        </div>
    )
}

export default HeaderComponent