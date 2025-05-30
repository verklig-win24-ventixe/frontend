function EventPackages() {
  return (
    <div className="event-packages">
      <h4 className="event-packages-title">Packages</h4>

      <div className="event-packages-list">
      
        <div className="event-packages-list-item">
          <div className="event-packages-list-item-container">
            <h6 className="event-packages-list-item-title">General Admission Package</h6>
            <div className="event-packages-list-info">
              <div className="event-packages-list-info-item">
                <img src="/images/circle-checkmark-icon.svg" alt="" />
                <span>Standing</span>
              </div>
              <div className="event-packages-list-info-item">
                <img src="/images/circle-checkmark-icon.svg" alt="" />
                <span>Access to Festival Grounds</span>
              </div>
            </div>
          </div>
          <div className="event-packages-list-price">$50</div>
        </div>

      </div>
    </div>
  )
}

export default EventPackages