import React, { useState } from 'react'
import HeaderComponent from '../src/Components/HeaderComponent/HeaderComponent.js';
import InfoComponent from '../src/Components/InfoComponent/InfoComponent';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [numAdults, setNumAdults] = useState('*')
  const [isChecked, setIsChecked] = useState(false)
  const [hideFilter, setHideFilter] = useState('*')


  const handleNumAdultsChange = (e) => {
    setNumAdults(e.target.value)
  }

  const handleHideChange = () => {
    if (isChecked) {
        setHideFilter('*')
    } else {
        setHideFilter('No')
    }
  }

const handleCheckChange = (e) => {
    setIsChecked(!isChecked)
    handleHideChange()
}

  return (
    <div>
      <div className="container">
        <div className='section first'>
          <HeaderComponent />
        </div>

        <div className='section sorting'>
                        {/* <label className='sortByLabel infoLabel'>Sort families by:</label> */}
                        {/* <br /> */}
                        <label className='sizeLabel infoLabel'>Number of Adults: </label>
                          <select
                              onChange={handleNumAdultsChange}
                              className='familySizeDropdown infoOption'>
                                  {/* <option value='--'></option> */}
                                  <option value='*'>Any</option>
                                  <option value='1'>1 Adult</option>
                                  <option value='2'>2 Adults</option>
                                  <option value='3'>3 Adults</option>
                                  <option value='4'>4 Adults</option>
                                  <option value='5+'>5 Adults</option>
                              </select>  
                         <label className='filledLabel infoLabel' htmlFor="unfilledOnly">Hide Filled Spots</label>
                        <input
                            className='infoOption' 
                            id="unfilledOnly"
                            type="checkbox" 
                            name="unfilledOnly"
                            value={isChecked}
                            onChange={handleCheckChange}
                         />
        </div>

        <div className='section first'>
          <InfoComponent 
            numAdultsFilter={numAdults} 
            hideFilter={hideFilter}
          />
        </div>

      </div>
    </div>
  );
}

export default App;
