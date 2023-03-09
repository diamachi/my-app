import React from "react";
import logo from '../assets/netflix.png';
import "./card.css"

export default function CardComponent({ title, company, location, type, exp, stipend, empNo }) {
    return (
        <div className="p-4 shadow-md lg:max-w-3xl bg-white m-5 rounded-md bigger-box">
            <div className="box">
                <div>
                    <img src={logo} alt="Logo" width={48} height={48} />
                </div>
                <div className="smallbox text-left ml-2">
                    <h3 className="text-xl text-left">
                        {title}
                    </h3>

                    <div>
                        <p>
                            {company}<br />
                            <span className="text-[#7A7A7A]">{location}<br /></span>
                        </p>

                    </div>

                    <div className="mt-6">
                        <p>
                            {type}<br />
                            {exp}<br />
                            INR (₹) {stipend} / Month<br />
                            {empNo} employees<br />
                        </p>

                    </div>

                    <div>
                        <button class="bg-[#1597E4] hover:bg-gray-600 text-white py-2 px-4 rounded-md mr-6 mt-8">
                            <span>Apply Now</span>
                        </button>

                        <button class="bg-transparent hover:bg-gray-600 hover:border-transparent text-[#1597E4] rounded-md hover:text-white py-2 px-4 border border-[#1597E4]">
                            <span>External Apply</span>
                        </button>
                    </div>
                </div>


            </div>


        </div>
    );
}