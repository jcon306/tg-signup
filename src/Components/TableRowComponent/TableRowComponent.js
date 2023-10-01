import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import SubmitModal from '../SubmitModal/SubmitModal';

import './TableRowComponent.css'

function FamilyInfo({ numAdults, childAges, dietRestriction, specialRequests }) {
  return (
    <div>
        <ul className="childInfoLine">
          <li>{numAdults} Adults, Child ages: {childAges}</li>
          <li>Diet Restriction: {dietRestriction}</li>
          <li>Special Requests: {specialRequests}</li>
        </ul>
    </div>
  );
}

function TableRow({parentFirstName,parentEmail, numAdults, childAges, dietRestriction, specialRequests, sponsorEmail}) {

  const [showModal, setShowModal] = useState(false);
  const isExpanded = true

  const handleSignUpClick = (event) => {
    if (isExpanded) {
      event.stopPropagation();
    }
      setShowModal(true)
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <tr>
        <td>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              {!isExpanded ?
                <h6 className='parentInfo'> {parentFirstName}'s Family</h6> :
                <h6 className='parentInfo'> {parentFirstName}'s Family</h6>
              }
            </div>
            <div className="d-none d-md-block" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
              {sponsorEmail !== null ? <h6>Spot Filled</h6> : <h6>Available</h6>}
            </div>
            <div className='fixed-width'>
                {sponsorEmail ? (
                  <Button className="submitBtn" disabled={true}>Filled</Button>
                ) : (
                  <Button className="submitBtn" onClick={handleSignUpClick}>Sign Up</Button>
                )}
            </div>
          </div>
        </td>
      </tr>
      {isExpanded && (
        <tr>
          <td>
            <FamilyInfo
              numAdults={numAdults}
              childAges={childAges}
              dietRestriction={dietRestriction}
              specialRequests={specialRequests}
            />
          </td>
        </tr>
      )}
       <Modal show={showModal} onHide={handleCloseModal}>
        <SubmitModal
          parentFirstName={parentFirstName}
          parentEmail={parentEmail}
          numAdults={numAdults}
          childAges={childAges}
          dietRestriction={dietRestriction}
          specialRequests={specialRequests}
          hideModel={handleCloseModal}
        />
      </Modal>
    </>
  )
}

export default TableRow;
