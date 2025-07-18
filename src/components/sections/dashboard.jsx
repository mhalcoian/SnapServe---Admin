function dashboard() {
  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-card-statistics">
          <div className="dashboard-card-container">
            <div className="dashboard-card">
              <img className="dashboard-icon-vendor" src="./vendor.svg"/>Vendors</div>
            <div className="dashboard-card">
              <img className="dashboard-icon-stores" src="./store.svg"/>Stores</div>
            <div className="dashboard-card">
              <img className="dashboard-icon-users" src="./users.svg"/>Users</div>
            <div className="dashboard-card">Undefined</div>
          </div>
          <div className="dashboard-statistics">order statistics</div>
        </div>
        <div className="dashboard-content"></div>
      </div>
    </>
  );
}

export default dashboard;
