import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("gmail", "template_752w77a", form.current, "355wjdlIIykPtD9o8")
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you for contacting us");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div className="mx-auto w-11/12 lg:w-9/12 text-sm pt-10" id="contacts">
        <div className="font-bold text-[60px] text-white text-center pt-10">Contacts</div>
        <form ref={form} onSubmit={sendEmail} className="pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="lg:pr-4">
              <div className="flex items-center bg-[#1C4875]/10 h-[80px] relative w-full mb-3 group border border-s-green-500 border-l-2 border-gray-600 rounded text-[#707F98]">
                <input
                  autoComplete="off"
                  type="text"
                  name="from_first_name"
                  id="from_first_name"
                  className="block pl-10 py-4 px-0 w-full text-base text-white bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-base text-green-white italic pl-10 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#707F98] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                  First Name
                </label>
              </div>
              <div className="flex items-center bg-[#1C4875]/10 h-[80px] relative w-full mb-3 group border border-s-green-500 border-l-2 border-gray-600 rounded text-[#707F98]">
                <input
                  autoComplete="off"
                  type="text"
                  name="from_last_name"
                  id="from_last_name"
                  className="block pl-10 py-4 px-0 w-full text-base text-white bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-base text-green-white italic pl-10 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#707F98] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                  Last Name
                </label>
              </div>
              <div className="flex items-center bg-[#1C4875]/10 h-[80px] relative w-full mb-3 group border border-s-green-500 border-l-2 border-gray-600 rounded text-[#707F98]">
                <input
                  autoComplete="off"
                  type="email"
                  name="from_email"
                  id="from_email"
                  className="block pl-10 py-4 px-0 w-full text-base text-white bg-transparent appearance-none dark:text-green-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-base text-green-white italic pl-10 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#707F98] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                  Email
                </label>
              </div>
              <div className="flex items-center bg-[#1C4875]/10 h-[80px] relative w-full mb-3 lg:mb-0 group border border-s-green-500 border-l-2 border-gray-600 rounded text-[#707F98]">
                <input
                  autoComplete="off"
                  type="text"
                  name="subject"
                  id="subject"
                  className="block pl-10 py-4 px-0 w-full text-base text-white bg-transparent appearance-none dark:text-green-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-base text-green-white italic pl-10  dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#707F98] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                  Subject
                </label>
              </div>
            </div>

            <div className="bg-[#1C4875]/10 relative w-full group border border-gray-600 rounded text-[#707F98] lg:col-span-2">
              <textarea
                maxLength="2000"
                autoComplete="off"
                type="text"
                name="message"
                id="message"
                className="block py-20 pl-10 mx-auto w-full h-[335px] text-base text-white bg-transparent appearance-none dark:text-green-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute left-0 text-base text-green-white italic pl-10  dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#707F98] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
             
              {/* <label className="peer-focus:font-medium absolute text-base text-green-white italic pl-10  dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#707F98] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"> */}
              Write your message here...
              </label>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 mt-20 col-span-2 justify-center">
            <button className="outline outline-offset-[-3px] outline-[#1C4875] bg-[#1C4875]/70 w-44 h-14 hover:text-white py-2 text-white text-center text-[20px] inset-x-2/4 place-self-start rounded-full flex items-center justify-center">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contacts;
