import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {

    const validateInput = () => {
        const inputName = document.getElementById("name").value;
        const inputPassword = document.getElementById("password").value;
        const validateLink = document.getElementById("validate-link");
        

        if (inputName === "my lovely azizah" && inputPassword === '080224' ) {
            alert("selamat datang di museum azizah, azizah!");
        } else {
            alert("kamu bukan azizah, pergi penyusup!");
            window.location.href = "/";
        }
    }





    return (
        <div className="w-ful container grid grid-rows-2">
            <div className="w-full py-16 px-3">
                <h1 className="text-2xl font-bold text-center">selamat datang di museum azizah, silahkan login!</h1>
            </div>
            <div className="w-full max-w-xs shadow-md shadow-slate-300 rounded-lg p-4 mx-auto">
                <form action="">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                            Name
                        </label>
                        <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="flex items-center justify-between">
                        <Link to={"/azizah"} className="w-full" id="validate-link">
                        <button onClick={validateInput} type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            login
                        </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage