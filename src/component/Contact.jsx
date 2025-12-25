import RedChilli2 from '../images/RedChilli2.svg';
import InputField from "./InputField";
export default function Contact() {
  return (
    <section className="w-full h-[750px] bg-white pt-15">
      <div className='bg-[#007A59] w-full h-[638px] rounded-2xl'>
        <div className="max-w-8xl mx-auto h-full hpx-4 md:px-8 lg:px-16 flex gap-10">

          {/* LEFT – FORM */}
          <div className='h-full flex items-center'>
                        
            <div className="bg-white rounded-2xl shadow-xl p-8  w-[560px] h-[549px]">
              <form className="flex flex-col gap-4">

                <div className="grid grid-cols-1 md:grid-cols-2 h-[66px] gap-4">
                  <InputField label="Your Name*" />
                  <InputField label="Email*" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField label="Phone Number*" />
                  <InputField label="Number of Guests*" />
                </div>

                <InputField label="Date of Reservation*" />
                <InputField label="Time of Reservation*" />

                <div>
                  <label className="text-sm text-black font-medium">Special Request</label>
                  <textarea
                    rows="2"
                    className="w-full mt-1 border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-600 resize-none"
                  />
                </div>

                <button className="w-fit bg-[#007a59] text-white px-8 py-2 rounded-full mt-4">
                  Book
                </button>
              </form>
            </div>
          </div>


          {/* RIGHT – INFO */}
          <div className="relative text-white max-w-md w-full">

            {/* Pepper Image */}
            <img
              src={RedChilli2}
              alt=""
              className="absolute w-[308.11px] h-[247px]"
            />

            <div className="space-y-6 mt-70">
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-sm opacity-90">
                  57, Sultan Market (4th Floor), Dakshin Khan, Dhaka-1230, Bangladesh
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Open Time</h3>
                <p className="text-sm">Mon - Fri : 11:00 AM - 10:00 PM</p>
                <p className="text-sm">Sat - Sun : 09:00 AM - 11:00 PM</p>
              </div>

              <div className="flex gap-3">
                {["📞", "✉️", "📸", "▶️"].map((icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-white text-[#007A59] flex items-center justify-center"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
