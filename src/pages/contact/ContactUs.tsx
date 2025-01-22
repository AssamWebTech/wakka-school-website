import "./contact.css";
import LocateUs from "./LocateUs";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";

export const ContactUs = () => {
  return (
    <>
      <main className="container-fluid">
        <section className="row justify-content-center py-5">
          <div className="col-md-5 form-container px-5 py-3">
            <form>
              <div className="heading-c">
                <h2>Contact Us</h2>
              </div>
              <MDBRow className="mb-4">
                <MDBCol md="6">
                  <MDBInput id="form6Example1" label="First name" />
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput id="form6Example2" label="Last name" />
                </MDBCol>
              </MDBRow>
              <MDBInput wrapperClass="mb-4" id="form6Example4" label="Address" />
              <MDBInput
                wrapperClass="mb-4"
                type="email"
                id="form6Example5"
                label="Email"
              />
              <MDBInput
                wrapperClass="mb-4"
                type="tel"
                id="form6Example6"
                label="Phone"
              />

              <MDBInput
                wrapperClass="mb-4"
                textarea
                id="form6Example7"
                rows={4}
                label="Additional information"
              />

              <MDBCheckbox
                wrapperClass="d-flex justify-content-center mb-4 gap-2"
                id="form6Example8"
                label="Create an account?"
                defaultChecked
              />

              <MDBBtn className="mb-4 text-white text-uppercase text-bold" type="submit" block>
                Submit
              </MDBBtn>
            </form>
          </div>
        </section>
        <LocateUs />
      </main>
    </>
  );
};
export default ContactUs;
