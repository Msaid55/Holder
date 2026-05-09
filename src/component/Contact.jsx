import { useState } from "react";
import RedChilli3 from "../images/RedChilli3.svg";
import { BsTelephone } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { LuYoutube } from "react-icons/lu";
import UseScrollReveal from "./UseScrollReveal";
import { createBooking } from "../api/api";

export default function Contact({ selectedTableId }) {
  UseScrollReveal();

  const [form, setForm] = useState({
    fullName: "",
    Phone: "",
    PeopleCount: 1,
    Date: "",
    Time: "",
    Message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!selectedTableId) {
      alert("Please choose a table first.");
      return;
    }

    if (!form.fullName || !form.Phone || !form.PeopleCount || !form.Date || !form.Time) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      await createBooking({
        fullName: form.fullName,
        Phone: form.Phone,
        PeopleCount: Number(form.PeopleCount),
        Date: form.Date,
        Time: form.Time,
        Message: form.Message,
        bookingStatus: "pending",
        tableId: selectedTableId,
      });

      alert("Booking sent successfully!");

      setForm({
        fullName: "",
        Phone: "",
        PeopleCount: 1,
        Date: "",
        Time: "",
        Message: "",
      });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="bg-[#007A59] w-full rounded-2xl">
        <div
          className="
            max-w-8xl mx-auto 
            px-4 md:px-8 lg:px-16 
            py-10
            flex flex-col lg:flex-row 
            gap-10
          "
        >
          <div className="flex reveal justify-center lg:justify-start w-full">
            <div
              className="
                bg-white rounded-2xl shadow-xl 
                p-6 md:p-8 
                text-black
                w-full max-w-[560px]
              "
            >
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div className="text-sm font-bold text-[#007a59]">
                  Selected Table: {selectedTableId || "No table selected"}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={onChange}
                    placeholder="Your Name*"
                    className="
                      w-full mt-1 border rounded-md px-3 py-2 outline-none 
                      focus:ring-2 focus:ring-green-600
                    "
                    required
                  />

                  <input
                    type="email"
                    placeholder="Email*"
                    className="
                      w-full mt-1 border rounded-md px-3 py-2 outline-none 
                      focus:ring-2 focus:ring-green-600
                    "
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="Phone"
                    value={form.Phone}
                    onChange={onChange}
                    placeholder="Phone Number*"
                    className="
                      w-full mt-1 border rounded-md px-3 py-2 outline-none 
                      focus:ring-2 focus:ring-green-600
                    "
                    required
                  />

                  <input
                    type="number"
                    name="PeopleCount"
                    value={form.PeopleCount}
                    onChange={onChange}
                    placeholder="Number of Guests*"
                    className="
                      w-full mt-1 border rounded-md px-3 py-2 outline-none 
                      focus:ring-2 focus:ring-green-600
                    "
                    min="1"
                    required
                  />
                </div>

                <input
                  type="date"
                  name="Date"
                  value={form.Date}
                  onChange={onChange}
                  className="
                    w-full mt-1 border rounded-md px-3 py-2 outline-none 
                    focus:ring-2 focus:ring-green-600
                  "
                  required
                />

                <input
                  type="time"
                  name="Time"
                  value={form.Time}
                  onChange={onChange}
                  className="
                    w-full mt-1 border rounded-md px-3 py-2 outline-none 
                    focus:ring-2 focus:ring-green-600
                  "
                  required
                />

                <div>
                  <label className="text-sm text-black font-medium">
                    Special Request
                  </label>
                  <textarea
                    name="Message"
                    value={form.Message}
                    onChange={onChange}
                    rows="3"
                    className="
                      w-full mt-1 
                      border rounded-md 
                      px-3 py-2 
                      outline-none 
                      focus:ring-2 focus:ring-green-600 
                      resize-none
                    "
                  />
                </div>

                <button
                  type="submit"
                  className="
                    w-fit 
                    bg-[#007a59] text-white 
                    px-8 py-2 
                    rounded-full 
                    mt-4
                  "
                >
                  Book
                </button>
              </form>
            </div>
          </div>

          <div className="flex reveal justify-center lg:justify-start w-full">
            <div className="relative text-white w-full max-w-md">
              <img
                src={RedChilli3}
                alt=""
                className="
                  hidden lg:block
                  absolute
                  w-[308px] h-auto
                "
              />

              <div className="space-y-6 mt-4 lg:mt-70">
                <div>
                  <h3 className="font-bold text-[22px] md:text-[25px]">
                    Address
                  </h3>
                  <p className="text-[16px] md:text-[18px] font-light opacity-90">
                    57, Sultan Market (4th Floor), Dakshin Khan, Dhaka-1230,
                    Bangladesh
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[22px] md:text-[25px]">
                    Open Time
                  </h3>
                  <p className="text-[16px] md:text-[18px] font-light">
                    Mon - Fri : 11:00 AM - 10:00 PM
                  </p>
                  <p className="text-[16px] md:text-[18px] font-light">
                    Sat - Sun : 09:00 AM - 11:00 PM
                  </p>
                </div>

                <div>
                  <p className="text-[22px] md:text-[25px] font-bold mb-2">
                    Contact we are
                  </p>

                  <div className="flex gap-3">
                    {[<BsTelephone />, <SiGmail />, <FaInstagram />, <LuYoutube />].map(
                      (icon, i) => (
                        <div
                          key={i}
                          className="
                            w-10 h-10 
                            rounded-full 
                            bg-white 
                            text-[#007A59] 
                            flex items-center justify-center
                          "
                        >
                          {icon}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}