function TShirt(): JSX.Element {
  return (
    <>
      <html>
        <head>
          <title>T-Shirt Store</title>
        </head>
        <body
          style={{
            fontFamily: "Arial, sans-serif",
            margin: 0,
            padding: "20px",
            backgroundColor: "#f5f5f5",
          }}
        >
          <h1 style={{ color: "#333", textAlign: "center" }}>
            Welcome to the T-Shirt Store!
          </h1>
          <p style={{ textAlign: "center", color: "#777" }}>
            Find your favorite T-shirts below:
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "200px",
                padding: "20px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <img
                src="https://via.placeholder.com/150?text=T-Shirt+1"
                alt="Cool T-Shirt"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3 style={{ color: "#333", margin: "15px 0 5px" }}>
                Cool T-Shirt
              </h3>
              <p style={{ color: "#555" }}>$20.00</p>
            </div>

            <div
              style={{
                width: "200px",
                padding: "20px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <img
                src="https://via.placeholder.com/150?text=T-Shirt+2"
                alt="Vintage T-Shirt"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3 style={{ color: "#333", margin: "15px 0 5px" }}>
                Vintage T-Shirt
              </h3>
              <p style={{ color: "#555" }}>$25.00</p>
            </div>

            <div
              style={{
                width: "200px",
                padding: "20px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <img
                src="https://via.placeholder.com/150?text=T-Shirt+3"
                alt="Graphic T-Shirt"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3 style={{ color: "#333", margin: "15px 0 5px" }}>
                Graphic T-Shirt
              </h3>
              <p style={{ color: "#555" }}>$22.00</p>
            </div>

            <div
              style={{
                width: "200px",
                padding: "20px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <img
                src="https://via.placeholder.com/150?text=T-Shirt+4"
                alt="Minimal T-Shirt"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3 style={{ color: "#333", margin: "15px 0 5px" }}>
                Minimal T-Shirt
              </h3>
              <p style={{ color: "#555" }}>$18.00</p>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}

export default TShirt;
