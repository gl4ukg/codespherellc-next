export default function Marquee() {
  const items = [
    "Aether Health",
    "Northbeam",
    "Lumen Logistics",
    "Quanta Bank",
    "FieldOps",
    "Helio Energy",
    "Carta Studios",
    "Vantage Retail",
  ];
  const row = [...items, ...items];
  return (
    <div className="marq">
      <div className="marq-track">
        {row.map((x, i) => (
          <span key={i}>{x}</span>
        ))}
      </div>
    </div>
  );
}
