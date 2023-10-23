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
                    Thank you for your willingness to support families in need this Thanksgiving as a partnership with Families for Families.
                    Your support is critical for feeding the hearts and bellies of many families! <br /> <br />
                    Sign up below to sponsor a family for Thanksgiving Dinner. <br />
                    Then purchase the ingredients and drop off to 250 Braen Ave in Wyckoff on <strong>November 18th 10-12 </strong> 
                    to be delivered to the families (detailed instructions will be given after signing up). <br />
                    We are also in need of delivery drivers from <strong>1-3</strong> to deliver the meals (<a href="https://give.families4families.com/campaigns/28443-thanksgiving-dinner-drop-off" 
                    className='noLine' target="_blank" rel="noreferrer" >sign up here</a>). <br /> <br />
                    Suggested ingredients include: Boxed Stuffing Mix (like Stovetop), Macaroni & 
                    Cheese or Lasagna, Potatoes, Jars of Turkey Gravy or Dried Gravy Mix Packets, Canned Yams, Cranberry Sauce, Canned or fresh Veggies
                    (green beans, corn, peas), Canned or fresh fruit, Cornbread Mix or Biscuit or Roll mix, Frozen Turkey or Turkey Breast 
                    or Frozen Ham, Disposable pan to cook the turkey in, Rice, Red or Black Beans, Canned Pumpkin or Fruit Pie Filling, 
                    Pie Crust Mix, Anything else you would like to include! <br /> <br />
                    Don't have time to shop but still want to help? You can donate here: <a href="https://give.families4families.com/ " 
                    className='noLine' target="_blank" rel="noreferrer" >https://give.families4families.com/ </a> (the average dinner for a family of 4 could cost
                    around $50). 
                </p>

            </div> 
            
        </div>
    )
}

export default HeaderComponent