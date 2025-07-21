import { useState } from "react";

const listings = [
  {
    id: 1,
    title: "Cheap apartment in Berlin",
    description: "Nice 1-bedroom apartment near U-Bahn",
    location: { country: "Germany", city: "Berlin" },
    language: "en",
  },
  {
    id: 2,
    title: "Продам велосипед",
    description: "Почти новый, Москва",
    location: { country: "Russia", city: "Moscow" },
    language: "ru",
  },
  {
    id: 3,
    title: "Offre d'emploi: développeur React",
    description: "Entreprise à Paris cherche un développeur",
    location: { country: "France", city: "Paris" },
    language: "fr",
  },
];

export default function App() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const filtered = listings.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    const matchesCountry = country ? item.location.country === country : true;
    const matchesCity = city ? item.location.city === city : true;
    return matchesSearch && matchesCountry && matchesCity;
  });

  return (
    <div style={{ padding: 20, maxWidth: 700, margin: '0 auto' }}>
      <h1>Modern Craigslist Clone</h1>
      <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
        <input
          placeholder="Search anything..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          placeholder="Country (e.g., Germany)"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          placeholder="City (e.g., Berlin)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      {filtered.map((item) => (
        <div key={item.id} style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <small>{item.location.city}, {item.location.country} [{item.language}]</small>
        </div>
      ))}
      {filtered.length === 0 && <p>No results found.</p>}
    </div>
  );
}