function EventTermsAndConditions() {
  return (
    <div className="event-terms-and-conditions">
      <h4 className="event-terms-and-conditions-title">Terms & Conditions</h4>

      <div className="event-terms-and-conditions-container">
        <ol>
          <li>
            <h5>Ticket Purchase and Entry</h5>
            <ul>
              <li>All attendees must possess a valid ticket for entry.</li>
              <li>Tickets are non-refundable and non-transferable unless specified by the event organizer.</li>
              <li>Attendees must present a valid government-issued ID along with their ticket at the gate.</li>
            </ul>
          </li>
          <li>
            <h5>Security and Safety</h5>
            <ul>
              <li>Attendees are subject to security checks, including bag inspections, upon entry.</li>
              <li>Prohibited items include weapons, drugs, alcohol, fireworks, and other hazardous materials.</li>
              <li>The event organizer reserves the right to deny entry to individuals deemed a security risk.</li>
            </ul>
          </li>
          <li>
            <h5>Code of Conduct</h5>
            <ul>
              <li>Attendees are expected to behave responsibly and respectfully toward others.</li>
              <li>Any disruptive behavior, harassment, or illegal activity will result in immediate removal from the event without refund.</li>
            </ul>
          </li>
          <li>
            <h5>Event Schedule and Changes</h5>
            <ul>
              <li>The event schedule is subject to change without prior notice.</li>
              <li>The event organizer is not responsible for delays or cancellations caused by weather, technical issues, or unforeseen circumstances.</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default EventTermsAndConditions