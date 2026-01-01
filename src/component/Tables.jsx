import { useMemo, useState } from "react";
import UseScrollReveal from "./UseScrollReveal";
/**
 * statuses:
 * available        -> green
 * reserved         -> red
 * soon             -> orange
 */
const STATUS = {
  available: {
    label: "Available",
    ring: "ring-emerald-500",
    dot: "bg-emerald-500",
  },
  reserved: { label: "Reserved", ring: "ring-red-500", dot: "bg-red-500" },
  soon: {
    label: "Available soon",
    ring: "ring-amber-500",
    dot: "bg-amber-500",
  },
};

// x,y نسبة مئوية من مساحة الخريطة + wPct/hPct
const TABLES = [
  { id: "T-1", status: "available", x: 7, y: 14, wPct: 10, hPct: 9 },
  { id: "T-2", status: "available", x: 26, y: 14, wPct: 22, hPct: 11 },
  { id: "T-3", status: "reserved", x: 55, y: 14, wPct: 30, hPct: 11 },
  { id: "T-4", status: "available", x: 78, y: 14, wPct: 10, hPct: 9 },

  { id: "T-5", status: "available", x: 20, y: 36, wPct: 26, hPct: 11 },
  { id: "T-6", status: "available", x: 52, y: 36, wPct: 30, hPct: 11 },
  { id: "T-7", status: "reserved", x: 76, y: 36, wPct: 10, hPct: 9 },

  { id: "T-8", status: "available", x: 14, y: 53, wPct: 16, hPct: 10 },
  { id: "T-9", status: "reserved", x: 30, y: 53, wPct: 10, hPct: 10 },
  { id: "T-10", status: "soon", x: 44, y: 53, wPct: 10, hPct: 10 },
  { id: "T-11", status: "available", x: 67, y: 53, wPct: 26, hPct: 11 },

  { id: "T-12", status: "available", x: 10, y: 70, wPct: 10, hPct: 10 },
  { id: "T-13", status: "reserved", x: 26, y: 70, wPct: 10, hPct: 10 },
  { id: "T-14", status: "reserved", x: 55, y: 70, wPct: 30, hPct: 11 },
  { id: "T-15", status: "available", x: 78, y: 70, wPct: 10, hPct: 10 },

  { id: "T-16", status: "available", x: 10, y: 87, wPct: 10, hPct: 10 },
  { id: "T-17", status: "reserved", x: 40, y: 87, wPct: 26, hPct: 11 },
  { id: "T-18", status: "available", x: 72, y: 87, wPct: 30, hPct: 11 },
];

function FloorTable({ t, selected, onSelect }) {
  UseScrollReveal();
  const ring =
    t.status === "available"
      ? "ring-emerald-500"
      : t.status === "reserved"
      ? "ring-red-500"
      : "ring-amber-500";

  const stripColor =
    t.status === "available"
      ? "bg-emerald-600"
      : t.status === "reserved"
      ? "bg-red-500"
      : "bg-amber-500";

  return (
    <button
      type="button"
      onClick={() => onSelect(t)}
      className="absolute"
      style={{
        left: `${t.x}%`,
        top: `${t.y}%`,
        transform: "translate(-50%, -50%)",
        width: `${t.wPct}%`,
        height: `${t.hPct}%`,
      }}
    >
      <div
        className={[
          "relative w-full h-full rounded-xl bg-[#d7d7d7]/70 backdrop-blur-sm shadow-sm",
          "transition-all duration-200",
          selected ? `ring-4 ${ring} scale-[1.02]` : "hover:scale-[1.01]",
        ].join(" ")}
      >
        <div
          className={`absolute left-0 top-0 h-full w-[3px] rounded-l-xl ${stripColor}`}
        />

        <span className="absolute left-2 top-2 text-[12px] font-semibold text-white/80">
          {t.id}
        </span>

        {/* dots (الكراسي) */}
        <span className="absolute -top-3 left-[18%] w-5 h-5 rounded-full bg-[#6b6b6b]/80" />
        <span className="absolute -top-3 left-[36%] w-5 h-5 rounded-full bg-[#6b6b6b]/80" />
        <span className="absolute -top-3 left-[54%] w-5 h-5 rounded-full bg-[#6b6b6b]/80" />
        <span className="absolute -top-3 left-[72%] w-5 h-5 rounded-full bg-[#6b6b6b]/80" />

        <span className="absolute -bottom-3 left-[18%] w-5 h-5 rounded-full bg-[#6b6b6b]/80" />
        <span className="absolute -bottom-3 left-[36%] w-5 h-5 rounded-full bg-[#6b6b6b]/80" />
        <span className="absolute -bottom-3 left-[54%] w-5 h-5 rounded-full bg-[#6b6b6b]/80" />
        <span className="absolute -bottom-3 left-[72%] w-5 h-5 rounded-full bg-[#6b6b6b]/80" />

        <span className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#6b6b6b]/80" />
        <span className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#6b6b6b]/80" />
      </div>
    </button>
  );
}

export default function Tables() {
  const [mode, setMode] = useState("all"); // all | reservation
  const [selectedId, setSelectedId] = useState(null);

  // ✅ NEW: tables state (بدل ما TABLES ثابتة)
  const [tables, setTables] = useState(TABLES);

  const selected = useMemo(
    () => tables.find((t) => t.id === selectedId) || null,
    [tables, selectedId]
  );

  // ✅ NEW: Book allowed only if selected exists and not reserved
  const canBook = !!selected && selected.status !== "reserved";
  const canCancel = !!selected && selected.status === "reserved";

  const listTables = useMemo(() => {
    if (mode === "reservation")
      return tables.filter((t) => t.status !== "reserved");
    return tables;
  }, [mode, tables]);

  const rightList = useMemo(() => {
    return [...tables].sort((a, b) => {
      const na = parseInt(a.id.split("-")[1], 10);
      const nb = parseInt(b.id.split("-")[1], 10);
      return na - nb;
    });
  }, [tables]);

  const circleClass = (t) => {
    const isSel = t.id === selectedId;

    if (t.status === "reserved") {
      return isSel
        ? "bg-red-600 text-white ring-4 ring-red-300"
        : "bg-red-500 text-white";
    }

    if (t.status === "soon") {
      return isSel
        ? "bg-amber-500 text-white ring-4 ring-amber-200"
        : "bg-[#e8e8e8] text-gray-700 ring-2 ring-amber-400";
    }

    return isSel
      ? "bg-emerald-700 text-white ring-4 ring-emerald-200"
      : "bg-[#e8e8e8] text-gray-700";
  };

  const onSelect = (t) => setSelectedId(t.id);

  // ✅ NEW: Book / Cancel handlers
  const handleBook = () => {
    if (!selected) return;

    // Book allowed only if available/soon
    if (selected.status === "reserved") return;

    setTables((prev) =>
      prev.map((t) =>
        t.id === selected.id ? { ...t, status: "reserved" } : t
      )
    );
  };

  const handleCancel = () => {
    if (!selected) return;

    // Cancel allowed only if reserved
    if (selected.status !== "reserved") return;

    setTables((prev) =>
      prev.map((t) =>
        t.id === selected.id ? { ...t, status: "available" } : t
      )
    );
  };

  return (
    <div className="bg-white">
      <div className="max-w-8xl h-aute mx-auto px-4 md:px-8 lg:px-16 py-10">
        <div className="rounded-2xl h-full bg-[#fbf3e6] p-5 md:p-7">
          <div className="flex flex-col lg:flex-row items-start gap-6 w-full">
            {/* LEFT - Floor Plan */}
            <div className="w-full reveal">
              {/* top controls */}
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex bg-white rounded-full p-1 shadow-sm">
                  <button
                    onClick={() => setMode("all")}
                    className={[
                      "px-4 py-2 rounded-full text-sm font-semibold transition",
                      mode === "all"
                        ? "bg-emerald-700 text-white"
                        : "text-gray-700",
                    ].join(" ")}
                  >
                    All Table
                  </button>
                  <button
                    onClick={() => setMode("reservation")}
                    className={[
                      "px-4 py-2 rounded-full text-sm font-semibold transition",
                      mode === "reservation"
                        ? "bg-emerald-700 text-white"
                        : "text-gray-700",
                    ].join(" ")}
                  >
                    Reservation
                  </button>
                </div>

                {/* legend */}
                <div className="ml-auto hidden md:flex items-center text-black gap-4 text-sm">
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border-2 border-emerald-600" />
                    Available
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border-2 border-red-500" />
                    Reserved
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border-2 border-amber-500" />
                    Available soon
                  </span>
                </div>
              </div>

              {/* floor */}
              <div className="relative bg-[#fbf3e6]">
                <div className="relative rounded-2xl bg-[#fbf3e6] border border-black/5">
                  <div className="relative w-full h-[870px]">
                    {listTables.map((t) => (
                      <FloorTable
                        key={t.id}
                        t={t}
                        selected={t.id === selectedId}
                        onSelect={onSelect}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT - Panel */}
            <div className="w-full reveal lg:w-[260px] shrink-0">
              <div className="bg-white rounded-2xl shadow-sm p-5">
                <div className="grid grid-cols-3 gap-4">
                  {rightList.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => onSelect(t)}
                      className={[
                        "h-[44px] rounded-full text-xs font-semibold transition",
                        circleClass(t),
                      ].join(" ")}
                      title={t.id}
                    >
                      {t.id}
                    </button>
                  ))}
                </div>

                {/* ✅ Book */}
                <button
                  className={[
                    "mt-6 w-full h-[46px] rounded-full font-bold text-white transition",
                    canBook
                      ? "bg-emerald-700 hover:bg-emerald-800"
                      : "bg-emerald-700/60 cursor-not-allowed",
                  ].join(" ")}
                  disabled={!canBook}
                  onClick={handleBook}
                >
                  Book
                </button>

                {/* ✅ Cancel (يظهر بس لو reserved) */}
                {canCancel && (
                  <button
                    className="
                      mt-3 w-full h-[46px] rounded-full font-bold
                      bg-red-500 text-white transition hover:bg-red-600
                    "
                    onClick={handleCancel}
                  >
                    Cancel Booking
                  </button>
                )}

                <p className="mt-3 text-center text-xs text-gray-500">
                  {selected
                    ? selected.status === "reserved"
                      ? `Table ${selected.id} is reserved`
                      : `You chose ${selected.id}`
                    : "Choose a table to book"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive legend for mobile */}
        <div className="mt-4 flex md:hidden items-center justify-center gap-4 text-xs text-black">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full border-2 border-emerald-600" />
            Available
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full border-2 border-red-500" />
            Reserved
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full border-2 border-amber-500" />
            Soon
          </span>
        </div>
      </div>
    </div>
  );
}
