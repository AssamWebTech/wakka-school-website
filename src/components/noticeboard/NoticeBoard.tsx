import './NoticeBoard.css'

const NoticeBoard = () => {
  const notices = [
    "Welcome to the Notice Board!",
    "Exam schedule has been released. Check the official portal.",
    "Annual Sports Day is scheduled for next month.",
    "Maintenance alert: The library will be closed this Friday.",
    "Submit your project reports by the end of this week.",
  ];
  return (
    <section className="row notice-board py-5 justify-content-center gap-4">
        <div className='col-12'>
            <h1  className='large-title'>Notice Board</h1>
        </div>
        <div className='col-md-8 col-12'>
            <ul>
                {notices.map((notice, index) => (
                <li key={index}>{notice}</li>
                ))}
            </ul>
        </div>
    </section>
  );
};

export default NoticeBoard;
