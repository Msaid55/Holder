import { useEffect, useMemo, useRef, useState } from "react";
import { FiChevronDown, FiImage, FiStar } from "react-icons/fi";
import toast from "react-hot-toast";

const LS_KEY = "product_reviews_v1";

function loadAll() {
  try {
    const saved = localStorage.getItem(LS_KEY);
    const parsed = saved ? JSON.parse(saved) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveAll(obj) {
  localStorage.setItem(LS_KEY, JSON.stringify(obj));
}

function Stars({ value = 0 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < value ? "text-[#ffb400]" : "text-gray-300"}>
          ★
        </span>
      ))}
    </div>
  );
}

function fmtDate(iso) {
  try {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString();
  } catch {
    return iso;
  }
}

function Select({ value, onChange, options }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          h-11 pl-4 pr-10 rounded-full
          border border-gray-200 bg-white
          text-sm font-semibold text-black
          outline-none hover:border-emerald-200 focus:border-emerald-700
          appearance-none
        "
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>

      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
        <FiChevronDown />
      </span>
    </div>
  );
}

export default function ProductReviews({ productId, productName }) {
  const [reviews, setReviews] = useState([]);
  const [sort, setSort] = useState("relevant"); // relevant | newest
  const [filter, setFilter] = useState("all"); // all | media
  const [openForm, setOpenForm] = useState(false);

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [images, setImages] = useState([]);
  const fileRef = useRef(null);

  // ✅ load reviews for this product
  useEffect(() => {
    const all = loadAll();
    const list = all[productId] || [];
    setReviews(Array.isArray(list) ? list : []);
  }, [productId]);

  // ✅ save reviews for this product
  useEffect(() => {
    const all = loadAll();
    all[productId] = reviews;
    saveAll(all);
  }, [productId, reviews]);

  const stats = useMemo(() => {
    const total = reviews.length || 0;
    const sum = reviews.reduce((a, r) => a + (r.rating || 0), 0);
    const avg = total ? sum / total : 0;

    const counts = [0, 0, 0, 0, 0]; // 1..5
    reviews.forEach((r) => {
      const s = Math.min(5, Math.max(1, r.rating || 1));
      counts[s - 1] += 1;
    });

    return { total, avg, counts };
  }, [reviews]);

  const visible = useMemo(() => {
    let list = [...reviews];

    if (filter === "media") list = list.filter((r) => (r.images || []).length > 0);

    if (sort === "newest") {
      list.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
      // relevant: likes > rating > date
      list.sort((a, b) => (b.likes || 0) - (a.likes || 0));
      list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      list.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    return list;
  }, [reviews, sort, filter]);

  const percent = (count) => {
    const total = stats.total || 1;
    return Math.round((count / total) * 100);
  };

  const onPickFiles = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    Promise.all(
      files.slice(0, 6).map(
        (f) =>
          new Promise((res) => {
            const r = new FileReader();
            r.onload = () => res(String(r.result));
            r.readAsDataURL(f);
          })
      )
    ).then((urls) => {
      setImages((prev) => [...prev, ...urls].slice(0, 6));
    });
  };

  const submit = () => {
    const n = name.trim();
    const t = title.trim();
    const x = text.trim();

    if (!n || !x) {
      toast.error("Please enter your name and review.");
      return;
    }

    const newReview = {
      id: crypto?.randomUUID ? crypto.randomUUID() : String(Date.now()),
      name: n,
      title: t || "New Review",
      text: x,
      rating,
      date: new Date().toISOString(),
      images,
      likes: 0,
    };

    setReviews((prev) => [newReview, ...prev]);

    setName("");
    setTitle("");
    setText("");
    setRating(5);
    setImages([]);
    setOpenForm(false);

    toast.success("Review added successfully ⭐");
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-start justify-between gap-6 flex-col lg:flex-row">
          {/* LEFT: Summary */}
          <div className="w-full lg:w-[360px]">
            <h2 className="text-2xl md:text-3xl font-extrabold text-black">
              Happy Customers
            </h2>
            <p className="text-gray-500 mt-2">
              Reviews for <b className="text-black">{productName}</b>
            </p>

            <div className="mt-6 flex items-end gap-3">
              <div className="text-5xl font-extrabold text-black">
                {stats.avg.toFixed(1)}
              </div>
              <div className="pb-2">
                <div className="flex items-center gap-2">
                  <Stars value={Math.round(stats.avg)} />
                  <span className="text-sm text-gray-600">/5</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Based on {stats.total} reviews
                </p>
              </div>
            </div>

            {/* bars */}
            <div className="mt-6 space-y-3">
              {[5, 4, 3, 2, 1].map((s) => {
                const c = stats.counts[s - 1] || 0;
                return (
                  <div key={s} className="flex items-center gap-3">
                    <div className="w-8 text-sm font-semibold text-black">{s}</div>
                    <div className="text-[#ffb400] -mt-[2px]">★</div>

                    <div className="flex-1 h-[8px] rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className="h-full bg-[#ffb400]"
                        style={{ width: `${percent(c)}%` }}
                      />
                    </div>

                    <div className="w-10 text-right text-sm text-gray-600">{c}</div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => setOpenForm((p) => !p)}
              className="mt-8 w-full h-12 rounded-full bg-emerald-700 text-white font-bold hover:bg-emerald-800 transition"
            >
              {openForm ? "Close" : "Write a Review"}
            </button>

            {openForm && (
              <div className="mt-4 bg-[#f6fbfa] border border-emerald-100 rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <p className="font-bold text-black">Your Review</p>
                  <div className="flex items-center gap-1 text-[#ffb400]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setRating(i + 1)}
                        className="text-xl"
                        aria-label={`rate-${i + 1}`}
                      >
                        {i < rating ? "★" : "☆"}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-1 gap-3">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="h-11 px-4 rounded-xl border text-black border-gray-200 outline-none focus:border-emerald-700"
                  />

                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title (optional)"
                    className="h-11 px-4 rounded-xl text-black border border-gray-200 outline-none focus:border-emerald-700"
                  />

                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Write your review..."
                    rows={4}
                    className="px-4 py-3 rounded-xl border text-black border-gray-200 outline-none focus:border-emerald-700 resize-none"
                  />

                  <div className="flex items-center justify-between gap-3">
                    <input
                      ref={fileRef}
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={onPickFiles}
                    />

                    <button
                      type="button"
                      onClick={() => fileRef.current?.click()}
                      className="h-11 px-4 rounded-xl border text-black border-emerald-200 bg-white hover:bg-emerald-700 hover:text-white hover:border-emerald-700 transition flex items-center gap-2"
                    >
                      <FiImage />
                      Add Photos
                    </button>

                    <button
                      type="button"
                      onClick={submit}
                      className="flex-1 h-11 rounded-xltransition-all duration-300 delay-100 hover:scale-110 hover:shadow-lg w-[109px]  bg-[#ffff] flex items-center hover:bg-[#FF4033] hover:text-white justify-center text-[#FF4033] rounded-2xl text-[18px] md:text-[22px] border-[#FF4033] border-2 shadow-[#b3becc]"
                    >
                      Submit
                    </button>
                  </div>

                  {images.length > 0 && (
                    <div className="flex gap-2 flex-wrap pt-2">
                      {images.map((src, i) => (
                        <div
                          key={i}
                          className="w-14 h-14 rounded-xl overflow-hidden border border-gray-200"
                        >
                          <img src={src} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Filters + List */}
          <div className="w-full flex-1">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3 flex-wrap">
                <Select
                  value={sort}
                  onChange={setSort}
                  options={[
                    { value: "relevant", label: "Most Relevant" },
                    { value: "newest", label: "Newest" },
                  ]}
                />

                <Select
                  value={filter}
                  onChange={setFilter}
                  options={[
                    { value: "all", label: "All Reviews" },
                    { value: "media", label: "With Media" },
                  ]}
                />
              </div>

              <div className="text-sm text-gray-500">
                Showing <b className="text-black">{visible.length}</b> reviews
              </div>
            </div>

            <div className="mt-6 space-y-6">
              {visible.map((r) => (
                <div
                  key={r.id}
                  className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-bold text-black">{r.name}</p>
                      <p className="text-gray-500 text-sm">{fmtDate(r.date)}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-[#ffb400]">
                        <FiStar />
                        <span className="font-bold text-black">{r.rating}</span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 font-bold text-black">{r.title}</p>
                  <p className="mt-2 text-gray-700 leading-7">{r.text}</p>

                  {(r.images || []).length > 0 && (
                    <div className="mt-4 flex gap-3 flex-wrap">
                      {r.images.slice(0, 6).map((src, i) => (
                        <div
                          key={i}
                          className="w-16 h-16 rounded-xl overflow-hidden border border-gray-100"
                        >
                          <img src={src} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {visible.length === 0 && (
                <div className="bg-[#f6fbfa] border border-emerald-100 rounded-2xl p-8">
                  <p className="text-black font-semibold">
                    No reviews yet for this item.
                  </p>
                  <p className="text-gray-600 mt-2">
                    Be the first to write a review!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
