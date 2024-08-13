import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Home = ({ userCount }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between p-[52px] h-[65vh] md:h-full md:pt-20 md:pb-40 ">
        <div className="flex flex-col justify-center md:justify-start items-cente  w-full md:w-[344px]   left-0 md:left-20 gap-9 top-40 px-4 md:px-0">
          <img
            className="w-[160px] h-[200px] ml-24 hidden md:flex"
            src="./assets/images/logo-2.png"
            alt=""
          />
          <p className="text-[18px] md:text-[24px] text-white text-center font-bold font-OpenSans md:mt-0">
            Imagine a world where every meal brings hope. Take the pledge & give
            them #FreedomFromHunger <br></br> With every pledge, a child gets a
            meal.
          </p>
          <Button
            onClick={() => navigate("/register")}
            text={`pledge now`}
            className={`hidden md:flex`}
          />
        </div>
        <div className="flex flex-col justify-center md:justify-start items-center md:items-end  w-full md:w-[344px]  pb-10 md:pb-0  left-0 md:left-20 gap-9 top-40 px-4 md:px-0">
          <div className="flex flex-col gap-24 text-center text-white items-center">
            <img
              src="./assets/images/logo-1.png"
              className="h-[250px] w-[250px] hidden md:flex "
              alt=""
            />
            <div className="text-white text-center md:text-right bg-black bg-opacity-50 md:bg-transparent px-6 py-2 rounded-xl">
              <p className="text-white font-Inter text-[12px] md:text-[20px] font-bold ">
                Pledges so far
              </p>
              <div className="flex flex-col mt-[-10px] md:mt-[-20px]">
                <p className="text-shadow-custom text-[62px] md:text-[120px] font-bold font-Antonio md:h-[160px]">
                  {userCount}
                </p>
                <p className="text-white font-Inter text-[12px] md:text-[20px] font-bold">
                  and counting...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button
        onClick={() => navigate("/register")}
        text={`pledge now`}
        className="!w-[80%] !mx-auto absolute bottom-0 left-0 right-0 flex justify-center mb-6 md:hidden"
      />
    </>
  );
};

export default Home;
