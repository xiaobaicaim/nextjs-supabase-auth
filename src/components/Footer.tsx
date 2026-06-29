import Link from "next/link";

const footerColumns = [
  {
    topic: "Topic",
    links: ["Page", "Page", "Page"],
  },
  {
    topic: "Topic",
    links: ["Page", "Page", "Page"],
  },
  {
    topic: "Topic",
    links: ["Page", "Page", "Page"],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid #E6E6E6",
        padding: "48px 80px",
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div>
        <Link
          href="/"
          style={{
            fontSize: 24,
            fontWeight: 400,
            color: "#000000",
            textDecoration: "none",
            lineHeight: "1.5em",
          }}
        >
          web demo
        </Link>
        <div style={{ display: "flex", gap: 8, marginTop: 88 }}>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{
                width: 40,
                height: 40,
                borderRadius: 4,
                backgroundColor: "#F7F7F7",
              }}
            />
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: 32 }}>
        {footerColumns.map((col, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
              minWidth: 187,
            }}
          >
            <span
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "#000000",
                lineHeight: "1.5em",
              }}
            >
              {col.topic}
            </span>
            {col.links.map((link, j) => (
              <Link
                key={j}
                href="#"
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#454545",
                  textDecoration: "none",
                  lineHeight: "1.5em",
                }}
              >
                {link}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
