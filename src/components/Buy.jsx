const Buy = () => {
  return (
    <div className="container p-3">
      <section
        id="buy_section"
        style={{
          textAlign: "center",
          padding: "50px",
          backgroundColor: "#f4f4f9",
        }}
      >
        <h1 style={{ fontSize: "40px", color: "#6f42c1" }}>
          Buy Option Coming Soon!
        </h1>
        <p style={{ fontSize: "20px", color: "#333" }}>
          We're working on making it available. Stay tuned!
        </p>
        <div className="loader"></div>{" "}
      </section>
    </div>
  );
};
export default Buy;
