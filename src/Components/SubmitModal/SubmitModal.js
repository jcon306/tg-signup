import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from '@emailjs/browser';

import './SubmitModal.css';


const SubmitModal = ({ parentFirstName, parentEmail, childAges, numAdults, dietRestriction, specialRequests, hideModel }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [sponsorEmail, setSponsorEmail] = useState("");

    const handleFirstNameChange = (event) => {
      setFirstName(event.target.value);
    };
  
    const handleLastNameChange = (event) => {
      setLastName(event.target.value);
    };
  
    const handleSponsorEmailChange = (event) => {
      setSponsorEmail(event.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // const date = new Date() 
      // let year= date.getFullYear()
      // let month= date.getMonth()+1
      // let day= date.getDate()

      // ---------------------------------- ADD API URL BELOW ----------------------------------------------------
      fetch(process.env.REACT_APP_GS_URL_SUBMIT + parentEmail)
            .then((response) => response.json())
            .then((data) => {
              if (data[0]["Sponsor Email"]) {
                alert("Sorry, somebody just filled this spot. Please choose another family");
                window.location.reload();
              } else if (!firstName || !lastName || !sponsorEmail) {
                alert('Please fill out all the information fields.')
              } 
              else {
                  let info = `<p>${numAdults} Adult(s), Child ages: ${childAges}</p>`
                  info += `<p>Diet Restriction: ${dietRestriction} </p>`
                  info += `<p>Special Requests: ${specialRequests}</p>`
                const bodyData = {
                  "Sponsored": "Yes",
                  "Sponsor Email": sponsorEmail,
                  "Sponsor Last Name": lastName,
                  "Sponsor First Name": firstName,
                  "Sponsor Sign Up Date": new Date().toLocaleString().split(',')[0]
                };
                // ---------------------------------- ADD API URL BELOW ----------------------------------------------------
                fetch(process.env.REACT_APP_GS_URL_SUBMIT + parentEmail, {
                  method: "PATCH",
                  mode: "cors",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(bodyData),
                })
                  .then((r) => {
                    if (r.status === 200) {
                      const templateParams = {
                        sponsorEmail: sponsorEmail,
                        firstName: firstName,
                        message: `Thank you for participating in our Thanksgiving Giving Program!! You have chosen to sponsor 
                            ${parentFirstName}'s family! <br /><br />${info}`                           
                      };
                      //Email Section ---------------
                      // emailjs.send('<YOUR_SERVICE_ID>','<YOUR_TEMPLATE_ID>', templateParams, '<YOUR_PUBLIC_KEY>')
                      emailjs.send("service_y7z7za8","template_m4i0ujb", templateParams, "f4QkK2UAQEvlT5NpZ")
                        .then((response) => {
                            console.log('SUCCESS!', response.status, response.text);
                            alert('Thank you! Your sign up was successful! Please check your inbox for a confirmation email. If you do not see it, please check your spam folder.')
                            window.location.reload()
                          }, (err) => {
                            console.log('FAILED...', err);
                            alert('Email failed to send. Please try again, or email Families for Families if the problem continues')

                          });                     
                    } else if (r.status !== 200) {
                      alert("There was a problem signing up");
                    }
                  })
                  .catch((error) => {
                    console.log(error.message);
                  });
              }
            })
            .catch((error) => {
              console.error(error);
            });
          
    };
    
    
  return (
    
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog className="ModalDialog">
        <Modal.Header className="ModalHeader" closeButton>
          <Modal.Title className="ModalTitle">Thanksgiving Giving Sign Up</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label className="FormLabel">First Name</Form.Label>
              <Form.Control
                className="FormInput"
                type="text"
                placeholder="Enter first name"
                value={firstName}
                onChange={handleFirstNameChange}
                name="first name"
              />
            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Label className="FormLabel">Last Name</Form.Label>
              <Form.Control
                className="FormInput"
                type="text"
                placeholder="Enter last name"
                value={lastName}
                onChange={handleLastNameChange}
                name="last name"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label className="FormLabel">Email address</Form.Label>
              <Form.Control
                className="FormInput"
                type="email"
                placeholder="Enter email"
                value={sponsorEmail}
                onChange={handleSponsorEmailChange}
                name="email"
              />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>
              Once you hit submit, a confirmation email will be sent shortly. <span style={{color: 'red'}}>If you do not see it, please check your spam folder.</span> 
              </Form.Label>
              <h6>{parentFirstName}'s family:</h6>
              <ul className="childInfoLine">
                <li>{numAdults} Adults, Child ages: {childAges}</li>
                <li>Diet Restriction: {dietRestriction}</li>
                <li>Special Requests: {specialRequests}</li>
              </ul>
            </Form.Group>
          <Modal.Footer className="ModelFooter">
            <Button variant="secondary" onClick={hideModel}>Close</Button>
            <Button variant="primary" type="submit">Submit</Button>
          </Modal.Footer>
          </Form>
        </Modal.Body>

        
      </Modal.Dialog>
    </div>
  );
}

export default SubmitModal;
