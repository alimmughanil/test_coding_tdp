import React, { useEffect } from "react";
import { useForm } from "@inertiajs/react";

function Input() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        phone: "",
        gender: "",
        born_place: "",
        born_date: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post("/order");
    };

    return (
        <form onSubmit={submit}>
            <div className="flex flex-col px-4">
                <label htmlFor="name" className="pt-2 pb-1 font-semibold">
                    Nama
                </label>
                <input
                    type="text"
                    value={data.name}
                    className="border-gray-400 rounded-lg outline-none"
                    onChange={(e) => setData("name", e.target.value)}
                />
                {errors.name && (
                    <div className="pt-1 pb-2 text-sm text-red-600">
                        * {errors.name}
                    </div>
                )}
            </div>
            <div className="flex flex-col px-4">
                <label htmlFor="phone" className="pt-2 pb-1 font-semibold">
                    Nomor Handphone
                </label>
                <input
                    type="text"
                    value={data.phone}
                    className="border-gray-400 rounded-lg outline-none"
                    onChange={(e) => setData("phone", e.target.value)}
                />
                {errors.phone && (
                    <div className="pt-1 pb-2 text-sm text-red-600">
                        * {errors.phone}
                    </div>
                )}
            </div>
            <div className="flex flex-col px-4">
                <label htmlFor="email" className="pt-2 pb-1 font-semibold">
                    Email
                </label>
                <input
                    type="email"
                    value={data.email}
                    className="border-gray-400 rounded-lg outline-none"
                    onChange={(e) => setData("email", e.target.value)}
                />
                {errors.email && (
                    <div className="pt-1 pb-2 text-sm text-red-600">
                        * {errors.email}
                    </div>
                )}
            </div>
            <div className="flex flex-col px-4">
                <label htmlFor="gender" className="pt-2 pb-1 font-semibold">
                    Jenis Kelamin
                </label>
                <select
                    value={data.gender}
                    className="border-gray-400 rounded-lg outline-none"
                    onChange={(e) => setData("gender", e.target.value)}
                >
                    <option value="" disabled>
                        Pilih Salah Satu
                    </option>
                    <option value="male">Pria</option>
                    <option value="female">Wanita</option>
                </select>
                {errors.gender && (
                    <div className="pt-1 pb-2 text-sm text-red-600">
                        * {errors.gender}
                    </div>
                )}
            </div>
            <div className="flex flex-col px-4">
                <label htmlFor="birth_date" className="pt-2 pb-1 font-semibold">
                    Tanggal Lahir
                </label>
                <input
                    type="date"
                    value={data.birth_date}
                    className="border-gray-400 rounded-lg outline-none"
                    onChange={(e) => setData("birth_date", e.target.value)}
                />
                {errors.birth_date && (
                    <div className="pt-1 pb-2 text-sm text-red-600">
                        * {errors.birth_date}
                    </div>
                )}
            </div>

            <div className="flex justify-center my-2">
                <button
                    type="submit"
                    className="normal-case btn btn-sm btn-primary"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

export default Input;
