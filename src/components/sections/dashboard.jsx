function dashboard() {
  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-card-statistics">
          <div className="dashboard-card-container">
            <div className="dashboard-card">vendors</div>
            <div className="dashboard-card">stores</div>
            <div className="dashboard-card">users</div>
            <div className="dashboard-card">undefined</div>
          </div>
          <div className="dashboard-statistics">order statistics</div>
        </div>
        <div className="dashboard-content"></div>
      </div>
    </>
  );
}

export default dashboard;
