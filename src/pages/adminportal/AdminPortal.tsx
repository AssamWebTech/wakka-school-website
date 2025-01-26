import { faPencilAlt, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './AdminPortal.css';
import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import { useState } from "react";
import { noticeList } from "../../static/notices";
import { Notice } from "../../models/types";

const AdminPortal = () => {
  const [notices, setNotices] = useState<Notice[]>(noticeList);
  const [noticeTitle, setNoticeTitle] = useState<string>('');
  const [noticeDetails, setNoticeDetails] = useState<string>('');
  const [noticeId, setNoticeId] = useState<number>(0);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const handleSubmit = () => {
    if(isEditMode) {
      const updatedNotices = notices. map(notice => {
        if(notice.id === noticeId) {
          notice.title = noticeTitle
          notice.details = noticeDetails
        }
        return notice
      })
      setNotices(updatedNotices)
    }
    else {
      if(noticeTitle !== '') {
        setNotices([
          ...notices,
          {
            id: notices.length+1, 
            title: noticeTitle,
            details: noticeDetails
          }
        ])
      }
    }
    closeModal()
  }

  const closeModal = () => {
    setNoticeId(0)
    setNoticeTitle('')
    setNoticeDetails('')
    setIsEditMode(false)
  }

  const deleteNotice = (id: number) => {
    const newNotices = notices.filter(notice => notice.id !== id);
    setNotices(newNotices)
  }

  const editNotice = (notice: Notice) => {
    setNoticeId(notice.id);
    setNoticeTitle(notice.title);
    setNoticeDetails(notice.details);
    setIsEditMode(true);
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
            {notices.map((notice: Notice) => (
              <li className="list-group-item d-flex flex-row justify-content-between gap-2 align-items-center" key={notice.id}>
                <div>
                  {notice.title}
                </div>
                <div className="d-flex flex-row gap-2">
                  <button className="btn" data-bs-toggle="modal" data-bs-target="#noticeUploader" onClick={() => editNotice(notice)}><FontAwesomeIcon icon={faPencilAlt} className="text-primary fs-5" /></button>
                  <button className="btn" onClick={() => deleteNotice(notice.id)}><FontAwesomeIcon icon={faTrashAlt} className="text-primary fs-5" /></button>
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
              <h1 className="modal-title fs-4 fw-bolder" id="noticeUploadLabel">{ isEditMode ? 'Update Existing Notice' : 'Upload New Notice' }</h1>
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