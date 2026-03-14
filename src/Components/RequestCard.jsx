function RequestCard({ title, tag, desc, credits, author, onOfferHelp }) {
  return (
    <div className="request-card">
      <div className="card-header">
        <h3>{title}</h3>
        <span className="tag">{tag}</span>
      </div>
      
      <p className="description">{desc}</p>
      
      <div className="card-footer">
        <div className="user-info">
            <span>By <strong>{author}</strong></span>
        </div>
        <div className="reward-action">
            <span className="reward">{credits} Credits</span>
            <button className="help-btn" onClick={onOfferHelp}>Offer Help</button>
        </div>
      </div>
    </div>
  );
}

export default RequestCard;