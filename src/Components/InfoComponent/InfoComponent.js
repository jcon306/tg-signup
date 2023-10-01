import React, { useEffect, useState } from 'react';
import FamilyComponent from '../FamilyComponent/FamilyComponent';
import './InfoComponent.css';

const InfoComponent = ({ numAdultsFilter, hideFilter }) => {
  const [fetchedData, setFetchedData] = useState([]);
 
  let searchResults = 0
  // ---------------------------------- ADD API URL BELOW ----------------------------------------------------
  let URL = `https://sheet.best/api/sheets/fd91b4ff-e40a-4167-9c6e-6425acbf86c8/query?Number Of Adults=${numAdultsFilter}&Sponsored=${hideFilter}`

    useEffect(() => {
       fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            setFetchedData(data)
        })
        .catch((error) => {
          console.error(error);
        });
        
    }, [URL]);

   
  return (
    <>
        <div className="data-container">
          {fetchedData.map((data, key) => {
              const numAdults = data["Number Of Adults"].split(",")
              const childAges = data["Child Ages"]
              const dietRestriction = data["Dietary Restriction"].split(",")
              const specialRequests = data["Special Requests"].split(",")
              searchResults += 1
            return (
              <div key={key}>
                  <FamilyComponent
                    key={key}
                    parentFirstName={data["Client's First Name"]}
                    parentEmail={data["Client Email"]}
                    sponsorEmail={data["Sponsor Email"]}
                    numAdults={numAdults}
                    childAges={childAges}
                    dietRestriction={dietRestriction}
                    specialRequests={specialRequests}
                    
                  />
              </div>
            );
          })}
              {numAdultsFilter === '--'
                ? <h6 className='bottomText'>Please select a family size</h6>
                : searchResults === 0
                  ? <h6 className='bottomText'>0 families found. Please try a different filter.</h6>
                  : searchResults === 1
                    ? <h6 className='bottomText'>1 family found</h6>
                    : <h6 className='bottomText'>{searchResults} families found</h6>
              }        
        </div>
    </>
  );
};

export default InfoComponent;
