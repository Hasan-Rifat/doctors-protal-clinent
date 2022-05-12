import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div className="py-20">
      <div className="">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between sm:py-10 lg:py-20 px-8 gap-20">
          <div className="flex-1">
            <img src={chair} className="w-full rounded-lg shadow-2xl" alt="" />
          </div>
          <div className="flex-1">
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
