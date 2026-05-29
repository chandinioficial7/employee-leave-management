import React, { useState } from "react";

function App() {
  const [employee, setEmployee] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Pending");
  const [leaves, setLeaves] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!employee || !reason || !date) {
      alert("Please fill all details");
      return;
    }

    const newLeave = {
      employee,
      reason,
      date,
      status,
    };

    setLeaves([...leaves, newLeave]);

    setEmployee("");
    setReason("");
    setDate("");
    setStatus("Pending");

    alert("🎉 Leave Applied Successfully");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #667eea, #764ba2)",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          margin: "auto",
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0px 5px 20px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#4f46e5",
            marginBottom: "25px",
          }}
        >
          Employee Leave Management
        </h1>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            type="text"
            placeholder="Employee Name"
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <input
            type="text"
            placeholder="Reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          >
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>

          <button
            type="submit"
            onMouseOver={(e) => {
              e.target.style.background = "#312e81";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.target.style.background = "#4f46e5";
              e.target.style.transform = "scale(1)";
            }}
            style={{
              padding: "14px",
              background: "#4f46e5",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "0.3s",
            }}
          >
            Apply Leave
          </button>
        </form>

        <div style={{ marginTop: "30px" }}>
          <h2 style={{ color: "#333" }}>Leave Requests</h2>

          {leaves.length === 0 ? (
            <p style={{ color: "gray" }}>No leave requests yet</p>
          ) : (
            leaves.map((leave, index) => (
              <div
                key={index}
                style={{
                  background: "#f3f4f6",
                  padding: "15px",
                  borderRadius: "10px",
                  marginTop: "15px",
                  borderLeft: "6px solid #4f46e5",
                  transition: "0.3s",
                }}
              >
                <h3 style={{ margin: "0", color: "#4f46e5" }}>
                  {leave.employee}
                </h3>

                <p>
                  <strong>Reason:</strong> {leave.reason}
                </p>

                <p>
                  <strong>Date:</strong> {leave.date}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    style={{
                      color:
                        leave.status === "Approved"
                          ? "green"
                          : leave.status === "Rejected"
                          ? "red"
                          : "orange",
                      fontWeight: "bold",
                    }}
                  >
                    {leave.status}
                  </span>
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;