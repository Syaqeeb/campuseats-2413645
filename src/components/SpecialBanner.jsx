function SpecialBanner({ specialItem }) {
  if (!specialItem) return null;

  return (
    <div
      className="special-banner"
      style={{
        padding: "10px",
        backgroundColor: "#fff3cd",
        border: "1px solid #ffeeba",
        borderRadius: "5px",
        marginBottom: "15px",
      }}
    >
      🔥 <strong>Daily Special:</strong> {specialItem.name} - RM{" "}
      {specialItem.price.toFixed(2)} (Limited Stock!)
    </div>
  );
}

export default SpecialBanner;
