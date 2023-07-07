import React from 'react';
import Listick from '../assets/icon-list.svg';
import HeroDesktop from '../assets/illustration-sign-up-desktop.svg';
import HeroMobile from '../assets/illustration-sign-up-mobile.svg';
import Footer from './Footer';
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"

const Newsletter = () => {
    const { input, setInput } = useContext(ThemeContext)
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    const handleChange = (e) => {
        setInput(e.target.value)
        if (!input.match(validRegex)) {
            setMessage("Valid email required")
        } else {
            setMessage("👍Correct Email")
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("thankyou")
    }

    return (
        <div class="desktop:bg-neutral desktop:w-full">
            <img class="desktop:hidden md:hidden lg:hidden mobile:block mobile:w-[375px]" src={HeroMobile} alt='illustration' />
            <div class="desktop:max-w-[720px] lg:max-w-[720px] mx-auto bg-neutral-100 desktop:py-4 desktop:m-8 mt-[15px] rounded-3xl h-[500px] grid md:grid-cols-2 lg:mt-8">
            
                <div class="desktop:pr-3 lg:py-14 mobile:pl-[10px] desktop:pl-5 desktop:ml-8 mr-5 align-items w-[100%] mobile:mx-[20px] mr-1 mx-[5px] ">

                    <h1 class="text-neutral-900 font-bold desktop:mt-[10px] desktop:text-[42px] mobile:text-4xl ">Stay updated!</h1>
                    <p class="pt-4 pb-4 mobile:pb-2 mr-[40px] mobile:mr-[50px] text-neutral-800 text-[12px] ">
                        Join 60,000+ product managers receiving monthly updates on:
                    </p>
                    <div class="text-[12px] text-neutral-800 mobile:w-[300px] desktop:w-[100%]">
                        <ul >
                            <li class="flex ">
                                <img src={Listick} alt='tick' />
                               <span class="m-3"> Product discovery and building what matters</span>
                            </li>

                            <li class="flex ">
                                <img src={Listick} alt='tick' />
                               <span class="m-3">Measuring to ensure updates are a success </span> 
                            </li>

                            <li class="flex ">
                                <img class="" src={Listick} alt='tick' />
                            <span class="m-3"> And much more!</span>
                            </li>
                        </ul>
                    </div>

                    <form onSubmit={handleSubmit}>
                    <div class="mobile:w-[80%] desktop:w-[90%] ">
                        <label for="email" class="text-neutral-800 text-[12px] none">Email address <span>{input && <span class={`${message === "Valid email required" ? "invalid_email": message === "Correct Email 👍"}`}> {message}</span>}
                        </span>
                        </label>

                        <div class="mt-2 text-[10px] text-neutral-400 ">
                            <input class=" border rounded-md pl-3 p-3 h-[40px] desktop:w-[100%] text-[12px] text-normal text-neutral-400 hover:outline-none hover:ring-primary-500
                            focus:ring-2 focus:ring-neutral-900 focus:border-transparent focus:text-neutral-900 hover:cursor-pointer" className={`${input && message === "Valid email required" ? "wrong_input" : ""}`} type="email" value={input} onChange={handleChange}
                            placeholder='email@company.com' required autoFocus/>
                             {input && <span>{message === "Correct Email 👍" ? "" : "Example: john@gmail.com" } </span>}
                        </div>

                        <button type="submit" class="bg-neutral-900 text-neutral-100  w-[100%] mt-4 text-sm h-[45px] rounded-lg  tracking-wider hover:bg-gradient-to-r from-primary-500 to-primary-400 hover:shadow-4xl focus:outline-none focus:ring-6 focus:ring-primary-400 focus:ring-opacity-50">
                            Subscribe to monthly newsletter
                        </button>
                    </div>
                    </form>
                </div>

                <div class="justify-center h-[50%] px-4 pl-0 ml-auto">
                    <img class=" w-[320px] h-[200%] lg:h-[190%] desktop:block lg:block md:block mobile:hidden" src={HeroDesktop} alt='illustration' />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Newsletter;