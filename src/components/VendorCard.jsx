function VendorCard() {
  const vendor = {
    name: "Kafe Mahallah Ali",
    location: "Mahallah Ali, Block C",
    openHours: "7:00 am - 10:00 pm",
    isOpen: true,
  };

  return (
    <div className="card">
      <div className="thumb">{vendor.name.charAt(0)}</div>
      <h3>{vendor.name}</h3>
      <p>{vendor.location}</p>
      <p>Open: {vendor.openHours}</p>
      <span className={vendor.isOpen ? "status open" : "status closed"}>
        {vendor.isOpen ? "Open now" : "Closed"}
      </span>
    </div>
  );
}

export default VendorCard;
