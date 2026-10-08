function VendorCard({ vendor, isSelected, onSelect }) {
  return (
    <button
      type="button"
      className={`card vendor-card ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(vendor.id)}
      style={{ textAlign: "left", cursor: "pointer", width: "100%" }}
    >
      <div className="thumb">{vendor.name.charAt(0)}</div>
      <h3>{vendor.name}</h3>
      <p>{vendor.location}</p>
      <p>Open: {vendor.openHours}</p>
      <span className={vendor.isOpen ? "status open" : "status closed"}>
        {vendor.isOpen ? "Open now" : "Closed"}
      </span>
    </button>
  );
}

export default VendorCard;
