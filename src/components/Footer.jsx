const footStyle = {
  fontFamily: "Trirong",
  fontSize: "20px",
  textAlign: "center",
  padding: "15px 0",
  borderTop: "2px solid #ccc",
  backgroundColor: "#f9f9f9",
  color: "#333",
};

export default function Footer({ emoji }) {
  return (
    <footer style={footStyle}>
      <div>
        <span>Created By BankNeedToSleep {emoji}</span>
      </div>
      <div>
        <span>Copyright © 2025 Southeast Asia University</span>
      </div>
    </footer>
  );
}
