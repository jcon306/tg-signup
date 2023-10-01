import React from 'react'
import TableRow from '../TableRowComponent/TableRowComponent';
import './FamilyComponent.css'


const FamilyComponent = ({ parentFirstName, parentEmail, childAges, numAdults, dietRestriction, specialRequests, sponsorEmail }) => {
    if (!parentFirstName) return <div />;
    return (
        <div>
            <table width={"100%"}>
                <tbody>
                    <TableRow 
                        parentFirstName={parentFirstName} 
                        parentEmail={parentEmail}
                        childAges={childAges}
                        numAdults={numAdults}
                        dietRestriction={dietRestriction}
                        specialRequests={specialRequests}
                        sponsorEmail={sponsorEmail}  
                    />
                </tbody>
            </table>
            <hr />
        </div>
    );
  }

export default FamilyComponent