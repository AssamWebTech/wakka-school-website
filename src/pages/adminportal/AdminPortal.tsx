import { faPencilAlt, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './AdminPortal.css';
import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import { useState } from "react";

const AdminPortal = () => {
  const [notices, setNotices] = useState<string[]>([
    "Welcome to the Notice Board!",
    "Exam schedule has been released. Check the official portal.",
    "Annual Sports Day is scheduled for next month.",
    "Maintenance alert: The library will be closed this Friday.",
    "Submit your project reports by the end of this week.",
  ]);
  const [noticeTitle, setNoticeTitle] = useState<string>('');
  const [noticeDetails, setNoticeDetails] = useState<string>('');

  const handleSubmit = () => {
    if(noticeTitle !== '') {
      setNotices([
        ...notices,
        noticeTitle
      ])
    }
    closeModal()
  }

  const closeModal = () => {
    setNoticeTitle('')
    setNoticeDetails('')
  }

  return (
    <main className="container-fluid">
      <section className="row justify-content-center gap-3 py-5 previous-notice-section">
        <div className="col-12 text-center">
          <h1 className="title">Previous Notices</h1>
        </div>
        <div className="col-md-8 col-12 d-flex justify-content-end">
          <button className="btn btn-primary d-flex flex-row gap-2 text-white align-items-center" data-bs-toggle="modal" data-bs-target="#noticeUploader"><FontAwesomeIcon icon={faPlus} className="fs-5"/>Add New Notice</button>
        </div>
        <div className="col-md-8 col-12">
          <ul className="list-group notice-list">
            {notices.map((notice, index) => (
              <li className="list-group-item d-flex flex-row justify-content-between gap-2 align-items-center" key={index}>
                <div>
                  {notice}
                </div>
                <div className="d-flex flex-row gap-2">
                  <button className="btn"><FontAwesomeIcon icon={faPencilAlt} className="text-primary fs-5" /></button>
                  <button className="btn"><FontAwesomeIcon icon={faTrashAlt} className="text-primary fs-5" /></button>
                </div>
              </li>
              )
            )}
          </ul>
        </div>
      </section>
      
      {/* Modal */}
      <div className="modal fade" id="noticeUploader" data-bs-backdrop="static" data-bs-keyboard="false" tab-index="-1" aria-labelledby="noticeUploadLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-4 fw-bolder" id="noticeUploadLabel">Upload New Notice</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
            </div>
            <div className="modal-body d-flex flex-column gap-3">
              <div className="d-flex flex-column gap-2">
                <label className="fw-bold fs-5">Notice Title</label>
                <MDBInput 
                  id="noticeTitle" 
                  type="text" 
                  className="notice-upload-input" 
                  value={noticeTitle}
                  onChange={(e) => setNoticeTitle(e.target.value)}
                  required
                  />
              </div>
              <div className="d-flex flex-column gap-2">
                <label className="fw-bold fs-5">Notice Details</label>
                <MDBTextArea 
                  textarea
                  id="noticeDetails"
                  rows={4}
                  className="notice-upload-input"
                  value={noticeDetails}
                  onChange={(e) => setNoticeDetails(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit} >Submit</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AdminPortal