import React from 'react'

function QueueDisplay({ queue, onUpdateStatus, onRemove }) {

  const getStatusColor = (status) => {
    switch (status) {
      case 'Waiting':   return '#f0a500';
      case 'Serving':   return '#2ecc71';
      case 'Completed': return '#3498db';
      default:          return '#ffffff';
    }
  };

  return (
    <div className="queue-display">
      <h2>Current queue</h2>
      {queue.length === 0 ? (
        <p className="empty-queue">No customer data</p>
      ) : (
        <div className="queue-list">
          {queue.map((customer) => (
            <div className="queue-item" key={customer.id}>

              <div className="customer-info">
                <h3>{customer.name}</h3>
                <p>{customer.service}</p>
                <span style={{ color: getStatusColor(customer.status) }}>
                  {customer.status}
                </span>
              </div>

              <div className="actions">
                {customer.status === "Waiting" && (
                  <button className="serve-btn" onClick={() => onUpdateStatus(customer.id, 'Serving')}>
                    Serve
                  </button>
                )}
                {customer.status === "Serving" && (
                  <button className="complete-btn" onClick={() => onUpdateStatus(customer.id, 'Completed')}>
                    Complete
                  </button>
                )}
                <button className="remove-btn" onClick={()=>onRemove(customer.id)}
>Remove</button>              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );

}                           {/* ← function closes HERE */}

export default QueueDisplay; {/* ← then export, outside */}