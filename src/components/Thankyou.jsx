import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import iconSuccess from "../assets/icon-success.svg";

const Thankyou = () => {
    const { input } = useContext(ThemeContext)
    return (
        <>
        <section class="bg-neutral-100 desktop:h-[400px] flex justify-center items-center desktop:max-w-[370px] mx-auto py-2 m-16 rounded-3xl mobile:max-w-[400px]">

            <div class="w-[270px] desktop:mx-[27px] desktop:my-0 flex-col h-auto mobile:mt-5 mobile:px-2 mobile:mx-5 " >
                    <img src={iconSuccess} alt="success icon" class="desktop:w-[50px] mobile:w-[50px]" />

                    <h1 class="mt-[30px] desktop:text-4xl mobile:text-3xl text-neutral-900 tracking-normal"> Thanks for subscribing!</h1>
                    <p class="text-neutral-800 mt-[20px] desktop:text-[0.70rem] leading-5 mobile:text-[0.82rem] tracking-normal">A confirmation email has been sent to <span class="font-extrabolder">{input}</span>.
                        Please open it and click the button inside to confirm your subscription.
                    </p>
                    <div class="mt-auto mx-[0] text-sm">
                        <a href="/" class="bg-neutral-900 text-neutral-100 rounded-3xl text-center w-[100%] desktop:py-2 desktop:px-2 text-sm h-[50px] desktop:pt-0 rounded-lg  tracking-wider block tracking-wider hover:bg-gradient-to-r from-primary-500 to-primary-400 hover:shadow-4xl focus:outline-none focus:ring-6 focus:ring-primary-400 focus:ring-opacity-50 desktop:mt-6 mobile:mt-[12rem] mobile:leading-[3rem] mobile:w-[100%]"> Dismiss message</a>
                    </div>
            </div>
        </section>
         </>
    );
};
export default Thankyou;