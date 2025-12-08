import Group from '../images/Group.svg';
import Redchilli from '../images/Redchilli.svg';
export default function Flfl() {
    return (
        <div className="w-full h-[235px] bg-white mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center md:items-start justify-between">
            <div>
                <img src={Group} alt="" />
            </div>
            <div className='w-[253px] h-[203px] relative'>
                <img src={Redchilli} alt="" className='absolute -right-16 hidden md:block'/>
            </div>
        </div>
    )
}
