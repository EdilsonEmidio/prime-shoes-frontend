import { ToastContainer } from "react-toastify";


export default function Form({children,title}){

  return(
    <form className="flex justify-center mt-8">
      
      <fieldset className="grid grid-cols-1 gap-5 border-2 p-10 rounded-2xl fieldset">
        <legend className=" text-3xl fieldset-legend">{title}</legend>
        {children}
      </fieldset>
      <ToastContainer />
    </form>
  );

}