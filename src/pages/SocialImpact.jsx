import { useState } from "react";
import {
  FiDroplet,
  FiSearch,
  FiPhone,
  FiMapPin,
  FiUsers,
  FiHeart,
  FiMenu,
  FiX,
  FiChevronDown,
  FiArrowRight,
  FiFacebook,
  FiTwitter,
  FiYoutube,
  FiCheckCircle,
  FiClock,
  FiShield,
  FiActivity,
} from "react-icons/fi";

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
const DISTRICTS = [
  "Dhaka",
  "Chittagong",
  "Sylhet",
  "Rajshahi",
  "Khulna",
  "Barisal",
  "Rangpur",
  "Mymensingh",
  "Gazipur",
  "Narayanganj",
  "Comilla",
  "Cox's Bazar",
  "Bogra",
  "Jessore",
  "Dinajpur",
];

const STATS = [
  { icon: FiUsers, value: "2,439", label: "Donors", color: "#e53e3e" },
  { icon: FiMapPin, value: "64", label: "Districts", color: "#e53e3e" },
  { icon: FiDroplet, value: "8", label: "Blood Groups", color: "#e53e3e" },
];

const FEATURES = [
  {
    icon: FiActivity,
    title: "100% Automated",
    desc: "SMS-based real-time system connects you to donors instantly.",
  },
  {
    icon: FiCheckCircle,
    title: "Always Free",
    desc: "No cost ever — saving lives should never have a price tag.",
  },
  {
    icon: FiClock,
    title: "24×7 Service",
    desc: "Round-the-clock availability, because emergencies don't wait.",
  },
  {
    icon: FiShield,
    title: "Secured Data",
    desc: "Your personal information is always safe and encrypted.",
  },
];

const NAV_LINKS = ["Home", "About Us", "Search Donors", "Add Request"];

export default function RoktoApp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bloodGroup, setBloodGroup] = useState("");
  const [district, setDistrict] = useState("");
  const [searched, setSearched] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const [showHotline, setShowHotline] = useState(false);

  const handleSearch = () => {
    if (bloodGroup && district) setSearched(true);
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        background: "#fff",
        minHeight: "100vh",
        color: "#1a1a1a",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          background: "#c53030",
          color: "#fff",
          fontSize: 13,
          padding: "6px 0",
          textAlign: "center",
          letterSpacing: 0.3,
        }}
      >
        <span>SMS to </span>
        <strong>01625-524255</strong>
        <span style={{ margin: "0 16px", opacity: 0.5 }}>|</span>
        <span>Free Blood Donor Network in Bangladesh</span>
      </div>

      {/* Hero Section */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #fff5f5 0%, #fed7d7 50%, #fff5f5 100%)",
          padding: "80px 24px 100px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "rgba(229,62,62,0.07)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -40,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "rgba(229,62,62,0.05)",
          }}
        />

        <div style={{ position: "relative", maxWidth: 700, margin: "0 auto" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "#fff",
              border: "1px solid #fed7d7",
              borderRadius: 100,
              padding: "6px 16px",
              fontSize: 13,
              color: "#c53030",
              fontWeight: 500,
              marginBottom: 28,
              boxShadow: "0 2px 8px rgba(197,48,48,0.1)",
            }}
          >
            <FiHeart size={13} color="#e53e3e" fill="#e53e3e" />
            Bangladesh's Free Blood Network
          </div>

          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 900,
              lineHeight: 1.15,
              color: "#1a1a1a",
              marginBottom: 20,
            }}
          >
            SMS-based platform to{" "}
            <span
              style={{
                color: "#e53e3e",
                borderBottom: "4px solid #feb2b2",
                paddingBottom: 2,
              }}
            >
              connect donors
            </span>{" "}
            with seekers
          </h1>

          <p
            style={{
              fontSize: 18,
              color: "#555",
              lineHeight: 1.7,
              marginBottom: 40,
            }}
          >
            Rokto is a real-time free platform to help blood searchers connect
            with voluntary blood donors around Bangladesh — instantly, via SMS.
          </p>

          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                background: "linear-gradient(135deg, #e53e3e, #c53030)",
                color: "#fff",
                border: "none",
                padding: "14px 28px",
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 4px 16px rgba(197,48,48,0.35)",
              }}
            >
              <FiHeart size={16} fill="#fff" />
              Join as a Donor
              <FiArrowRight size={16} />
            </button>
            <button
              style={{
                background: "#fff",
                color: "#c53030",
                border: "2px solid #e53e3e",
                padding: "14px 28px",
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              <FiSearch size={16} />
              Search Donors
            </button>
          </div>
        </div>
      </section>

      {/* Search Card */}
      <section style={{ background: "#fff", padding: "0 24px" }}>
        <div
          style={{
            maxWidth: 860,
            margin: "-50px auto 0",
            background: "#fff",
            borderRadius: 20,
            boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
            padding: "36px 40px",
            border: "1px solid #fee2e2",
            position: "relative",
            zIndex: 10,
          }}
        >
          <h2
            style={{
              fontSize: 22,
              fontWeight: 800,
              marginBottom: 24,
              color: "#1a1a1a",
            }}
          >
            🩸 Find a Blood Donor
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr auto",
              gap: 16,
              alignItems: "end",
            }}
          >
            {/* Blood Group */}
            <div>
              <label
                style={{
                  fontSize: 13,
                  color: "#666",
                  fontWeight: 600,
                  display: "block",
                  marginBottom: 8,
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                }}
              >
                Blood Group
              </label>
              <div style={{ position: "relative" }}>
                <select
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 40px 12px 16px",
                    border: "1.5px solid #fed7d7",
                    borderRadius: 10,
                    fontSize: 15,
                    appearance: "none",
                    background: "#fff9f9",
                    cursor: "pointer",
                    color: bloodGroup ? "#c53030" : "#999",
                    fontWeight: bloodGroup ? 700 : 400,
                    outline: "none",
                  }}
                >
                  <option value="">Select Group</option>
                  {BLOOD_GROUPS.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
                <FiChevronDown
                  size={16}
                  color="#e53e3e"
                  style={{
                    position: "absolute",
                    right: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>

            {/* District */}
            <div>
              <label
                style={{
                  fontSize: 13,
                  color: "#666",
                  fontWeight: 600,
                  display: "block",
                  marginBottom: 8,
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                }}
              >
                District
              </label>
              <div style={{ position: "relative" }}>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 40px 12px 16px",
                    border: "1.5px solid #fed7d7",
                    borderRadius: 10,
                    fontSize: 15,
                    appearance: "none",
                    background: "#fff9f9",
                    cursor: "pointer",
                    color: district ? "#c53030" : "#999",
                    fontWeight: district ? 700 : 400,
                    outline: "none",
                  }}
                >
                  <option value="">Select District</option>
                  {DISTRICTS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                <FiChevronDown
                  size={16}
                  color="#e53e3e"
                  style={{
                    position: "absolute",
                    right: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>

            {/* Donor Type */}
            <div>
              <label
                style={{
                  fontSize: 13,
                  color: "#666",
                  fontWeight: 600,
                  display: "block",
                  marginBottom: 8,
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                }}
              >
                Donor Type
              </label>
              <div style={{ position: "relative" }}>
                <select
                  style={{
                    width: "100%",
                    padding: "12px 40px 12px 16px",
                    border: "1.5px solid #fed7d7",
                    borderRadius: 10,
                    fontSize: 15,
                    appearance: "none",
                    background: "#fff9f9",
                    cursor: "pointer",
                    color: "#999",
                    outline: "none",
                  }}
                >
                  <option>All</option>
                  <option>Eligible</option>
                </select>
                <FiChevronDown
                  size={16}
                  color="#e53e3e"
                  style={{
                    position: "absolute",
                    right: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              style={{
                background: "linear-gradient(135deg, #e53e3e, #c53030)",
                color: "#fff",
                border: "none",
                padding: "12px 28px",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                whiteSpace: "nowrap",
                boxShadow: "0 4px 14px rgba(197,48,48,0.35)",
              }}
            >
              <FiSearch size={16} />
              Search
            </button>
          </div>

          {/* Search Result */}
          {searched && (
            <div
              style={{
                marginTop: 24,
                background: "#fff5f5",
                border: "1px solid #fed7d7",
                borderRadius: 12,
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #e53e3e, #c53030)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <FiDroplet size={22} color="#fff" fill="#fff" />
              </div>
              <div>
                <div
                  style={{ fontWeight: 700, fontSize: 16, color: "#1a1a1a" }}
                >
                  Searching {bloodGroup} donors in {district}…
                </div>
                <div style={{ fontSize: 14, color: "#888", marginTop: 4 }}>
                  Found{" "}
                  <strong style={{ color: "#c53030" }}>
                    12 eligible donors
                  </strong>{" "}
                  within 10km radius
                </div>
              </div>
              <button
                style={{
                  marginLeft: "auto",
                  background: "#e53e3e",
                  color: "#fff",
                  border: "none",
                  padding: "8px 18px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                View All
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "80px 24px 60px", background: "#fff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p
              style={{
                fontSize: 13,
                color: "#e53e3e",
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Our Network
            </p>
            <h2 style={{ fontSize: 34, fontWeight: 900, color: "#1a1a1a" }}>
              We're a growing community
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {STATS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                style={{
                  background: "linear-gradient(135deg, #fff5f5, #ffe4e6)",
                  borderRadius: 20,
                  padding: "40px 24px",
                  textAlign: "center",
                  border: "1px solid #fed7d7",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: "linear-gradient(135deg, #e53e3e, #c53030)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    boxShadow: "0 4px 14px rgba(197,48,48,0.3)",
                  }}
                >
                  <Icon size={24} color="#fff" />
                </div>
                <div
                  style={{
                    fontSize: 42,
                    fontWeight: 900,
                    color: "#c53030",
                    lineHeight: 1,
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    color: "#666",
                    marginTop: 8,
                    fontWeight: 500,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "60px 24px 80px", background: "#fff9f9" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p
              style={{
                fontSize: 13,
                color: "#e53e3e",
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Why Rokto?
            </p>
            <h2 style={{ fontSize: 34, fontWeight: 900, color: "#1a1a1a" }}>
              Built for emergencies, available always
            </h2>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          >
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: "28px 28px",
                  border: "1px solid #fee2e2",
                  display: "flex",
                  gap: 18,
                  alignItems: "flex-start",
                  transition: "box-shadow 0.2s",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    flexShrink: 0,
                    background: "#fff5f5",
                    border: "1px solid #fed7d7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={22} color="#e53e3e" />
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 17,
                      color: "#1a1a1a",
                      marginBottom: 6,
                    }}
                  >
                    {title}
                  </div>
                  <div style={{ fontSize: 14, color: "#666", lineHeight: 1.6 }}>
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SMS Format */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 13,
                  color: "#e53e3e",
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                SMS Service
              </p>
              <h2
                style={{
                  fontSize: 34,
                  fontWeight: 900,
                  color: "#1a1a1a",
                  marginBottom: 16,
                  lineHeight: 1.2,
                }}
              >
                Get blood donors via a simple SMS
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "#555",
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                No internet? No problem. Just send an SMS to our dedicated
                number and get connected with nearby donors instantly.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "#fff5f5",
                  border: "1px solid #fed7d7",
                  borderRadius: 12,
                  padding: "14px 18px",
                }}
              >
                <FiPhone size={20} color="#e53e3e" />
                <span
                  style={{ fontWeight: 700, fontSize: 18, color: "#c53030" }}
                >
                  01625-524255
                </span>
                <span style={{ fontSize: 13, color: "#999" }}>
                  Send SMS anytime
                </span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { cmd: "BLOOD A+", desc: "Search A+ donors" },
                { cmd: "JOIN A+ Dhaka", desc: "Register as donor" },
                { cmd: "REQUEST O- Dhaka", desc: "Add blood request" },
                { cmd: "UPDATE", desc: "Update your profile" },
              ].map(({ cmd, desc }) => (
                <div
                  key={cmd}
                  style={{
                    background: "#fff9f9",
                    border: "1px solid #fed7d7",
                    borderRadius: 12,
                    padding: "14px 18px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <code
                    style={{
                      fontFamily: "monospace",
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#c53030",
                    }}
                  >
                    {cmd}
                  </code>
                  <span style={{ fontSize: 13, color: "#888" }}>{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        style={{
          padding: "70px 24px",
          background: "linear-gradient(135deg, #c53030, #e53e3e 60%, #fc8181)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
            }}
          >
            <FiHeart size={30} color="#fff" fill="#fff" />
          </div>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 900,
              color: "#fff",
              marginBottom: 14,
            }}
          >
            Be someone's hero today
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.7,
              marginBottom: 36,
            }}
          >
            Your single blood donation can save up to 3 lives. Join our network
            of voluntary donors across Bangladesh.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
            <button
              style={{
                background: "#fff",
                color: "#c53030",
                border: "none",
                padding: "14px 30px",
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 800,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <FiDroplet size={16} fill="#c53030" color="#c53030" />
              Register as Donor
            </button>
            <button
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "#fff",
                border: "2px solid rgba(255,255,255,0.5)",
                padding: "14px 30px",
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <FiSearch size={16} />
              Find Donors
            </button>
          </div>
        </div>
      </section>

      {/* Hotline Info Box */}
      {showHotline && (
        <div
          style={{
            position: "fixed",
            bottom: 24,
            right: 80,
            background: "#fff",
            padding: "10px 16px",
            borderRadius: 12,
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            fontSize: 13,
            zIndex: 999,
          }}
        >
          <div style={{ fontWeight: 600, color: "#444" }}>
            Hotline (Toll Free)
          </div>
          <div style={{ fontWeight: 800, color: "#000" }}>16226</div>
          <div style={{ color: "#777", fontSize: 12 }}>
            (12.00 AM to 12.00 PM)
          </div>
        </div>
      )}

      {/* Floating Call Button */}
      <a
        href="tel:+8801869967777"
        onMouseEnter={() => setShowHotline(true)}
        onMouseLeave={() => setShowHotline(false)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #e53e3e, #c53030)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 25px rgba(197,48,48,0.5)",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        <FiPhone size={26} color="#fff" />
      </a>
    </div>
  );
}
