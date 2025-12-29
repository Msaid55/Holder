export default function ChefHeader({ chef }) {
    return (
      <div className="flex gap-10 items-start">
         
                  <div
                    className="
                      relative w-[387px] h-[388px] bg-[#FFA000]
                      rounded-2xl flex items-center justify-center
                      shadow-lg transition-all duration-500
                      group-hover:scale-105 overflow-hidden
                    "
                  >
                    <img
                      src={chef.image}
                      alt={chef.name}
                      className="
                        absolute top-6
                        w-[299.13px] h-[387px] object-contain
                        transition-all duration-500
                        group-hover:scale-110
                      "
                    />
                  </div>
                 
  
        <div>
          <h2 className="text-2xl text-black font-bold mb-2">{chef.name}</h2>
          <p className="text-sm text-black mb-2">{chef.role}</p>
          <p className="text-gray-600 max-w-xl">{chef.bio}</p>
  
          <div className="flex gap-3 mt-4">
            {chef.socials.map((_, i) => (
              <div
                key={i}
                className="w-9 h-9 bg-green-700 text-white rounded-full flex items-center justify-center"
              >
                ●
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  