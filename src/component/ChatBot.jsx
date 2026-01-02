import { useEffect, useMemo, useRef, useState } from "react";
import {
  FiMessageCircle,
  FiX,
  FiSend,
  FiTrash2,
  FiMenu,
  FiCalendar,
  FiStar,
  FiClock,
  FiMapPin,
  FiPhone,
  FiShoppingBag,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { LuBotMessageSquare } from "react-icons/lu";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const navigate = useNavigate();
  const listRef = useRef(null);

  const quickReplies = useMemo(
    () => [
      { label: "Show Menu", icon: <FiMenu className="text-[#ff4b2b]" size={14} />, action: "menu" },
      { label: "Book a Table", icon: <FiCalendar className="text-[#B4E08E]" size={14} />, action: "booking" },
      { label: "View Cart", icon: <FiShoppingBag className="text-[#FFB020]" size={14} />, action: "cart" },
      { label: "Popular Items", icon: <FiStar className="text-[#065B5E]" size={14} />, action: "popular" },
      { label: "Opening Hours", icon: <FiClock  size={14} />, action: "hours" },
      { label: "Location", icon: <FiMapPin className="text-[#ff4b2b]" size={14} />, action: "location" },
      { label: "Contact Info", icon: <FiPhone size={14} />, action: "contact" },
    ],
    []
  );

  const welcomeMessage = {
    from: "bot",
    text: "Hi 👋 I’m your assistant. How can I help you today?",
  };

  const [messages, setMessages] = useState([welcomeMessage]);

  // ✅ Clear chat
  const handleClearChat = () => {
    const ok = window.confirm("Do you want to clear the chat?");
    if (!ok) return;
    setMessages([welcomeMessage]);
    setTyping(false);
    setInput("");
  };

  // auto scroll
  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, open, typing]);

  const botReply = (userText) => {
    const t = userText.toLowerCase();

    const go = (path) => setTimeout(() => navigate(path), 350);

    // ✅ CONTACT INFO
    if (
      t.includes("contact") ||
      t.includes("phone") ||
      t.includes("email") ||
      t.includes("number")
    ) {
      return {
        text:
          "📞 Phone: +1 234 567 890\n📧 Email: info@restaurant.com\n\nWe’re happy to help you anytime!",
      };
    }

    if (t.includes("menu") || t.includes("food") || t.includes("items")) {
      return { text: "Sure! Taking you to the menu 🍽️", onDone: () => go("/menu") };
    }

    if (t.includes("book") || t.includes("booking") || t.includes("table")) {
      return { text: "Great! Let’s book a table 📅", onDone: () => go("/booking") };
    }

    if (t.includes("cart") || t.includes("basket")) {
      return { text: "Opening your cart 🛒", onDone: () => go("/cart") };
    }

    if (t.includes("popular")) {
      return { text: "Popular items are on the home page section 🔥 Scroll a bit and you’ll find them." };
    }

    if (t.includes("hours") || t.includes("open")) {
      return { text: "We’re open daily from 10:00 AM to 11:00 PM ⏰" };
    }

    if (t.includes("location") || t.includes("address")) {
      return { text: "Our location: Main Street, City Center 📍 (Add your real address here)" };
    }

    if (t.includes("hello") || t.includes("hi")) {
      return { text: "Hello! 😄 Tell me what you need: menu, booking, cart, or popular items." };
    }

    return { text: "Got it ✅ You can ask me about Menu, Booking, Cart, Hours, Location, or Contact." };
  };

  const pushUser = (text) => setMessages((prev) => [...prev, { from: "user", text }]);

  const pushBot = async (text) => {
    setTyping(true);
    await new Promise((r) => setTimeout(r, 500));
    setTyping(false);
    setMessages((prev) => [...prev, { from: "bot", text }]);
  };

  const handleSend = async (text) => {
    const msg = (text ?? input).trim();
    if (!msg) return;

    setInput("");
    pushUser(msg);

    const reply = botReply(msg);
    await pushBot(reply.text);

    if (reply.onDone) reply.onDone();
  };

  const handleQuick = (action) => {
    if (action === "menu") return handleSend("Show menu");
    if (action === "booking") return handleSend("Book a table");
    if (action === "cart") return handleSend("Open cart");
    if (action === "popular") return handleSend("Popular items");
    if (action === "hours") return handleSend("Opening hours");
    if (action === "location") return handleSend("Location");
    if (action === "contact") return handleSend("Contact");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="
          fixed bottom-5 right-5 z-[9999]
          w-14 h-14 rounded-full
          bg-emerald-700 text-white
          flex items-center justify-center
          shadow-lg hover:scale-110 transition
        "
        aria-label="Chat"
      >
        {open ? <FiX size={24} /> : <LuBotMessageSquare size={24} />}
      </button>

      {/* Panel */}
      <div
        className={[
          "fixed bottom-24 right-5 z-[9999] w-[340px] max-w-[92vw]",
          "transition-all duration-300",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none",
        ].join(" ")}
      >
        <div className="bg-white rounded-2xl shadow-[0_14px_40px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-emerald-700 text-white px-4 py-3 flex items-center justify-between">
            <div>
              <p className="font-bold leading-none">Food Assistant</p>
              <p className="text-[12px] opacity-90 mt-1">Online • replies fast</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleClearChat}
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 transition flex items-center justify-center"
                title="Clear chat"
                aria-label="Clear chat"
              >
                <FiTrash2 size={16} />
              </button>

              <span className="text-[12px] bg-white/15 px-2 py-1 rounded-full">
                Help
              </span>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={listRef}
            className="h-[320px] overflow-y-auto px-3 py-3 space-y-3 bg-[#f6fbfa]"
          >
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={[
                  "max-w-[85%] text-sm leading-6 px-3 py-2 rounded-2xl whitespace-pre-line",
                  m.from === "user"
                    ? "ml-auto bg-[#FF4033] text-white rounded-br-sm"
                    : "mr-auto bg-white text-gray-800 rounded-bl-sm border border-emerald-100",
                ].join(" ")}
              >
                {m.text}
              </div>
            ))}

            {typing && (
              <div className="mr-auto bg-white text-gray-700 text-sm px-3 py-2 rounded-2xl border border-emerald-100 w-fit">
                Typing...
              </div>
            )}

            {/* Quick replies */}
            <div className="pt-2 flex flex-wrap gap-2">
              {quickReplies.map((q) => (
                <button
                  key={q.action}
                  onClick={() => handleQuick(q.action)}
                  className="
                    text-[12px] px-3 py-1.5 rounded-full
                    text-black
                    bg-white border border-emerald-200
                    hover:bg-emerald-700 hover:text-white hover:border-emerald-700
                    transition flex items-center gap-2
                  "
                >
                  {q.icon}
                  <span>{q.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="px-3 py-3 bg-white border-t text-black border-gray-100">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend();
                }}
                placeholder="Type a message..."
                className="
                  flex-1 h-11 px-4 rounded-full
                  border border-gray-200 outline-none
                  focus:border-emerald-700
                "
              />

              <button
                onClick={() => handleSend()}
                className="
                  w-11 h-11 rounded-full
                  bg-emerald-700 text-white
                  flex items-center justify-center
                  hover:scale-110 transition
                "
                aria-label="Send"
              >
                <FiSend />
              </button>
            </div>

            <p className="text-[11px] text-gray-500 mt-2">
              Tip: ask about menu, booking, cart, hours, location, contact.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
