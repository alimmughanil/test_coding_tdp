import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { router } from "@inertiajs/react";

function Show({ order, setOrder }) {
    const [edit, setEdit] = useState(false);
    const { data, setData, put, processing, errors } = useForm({
        ticket_number: order.ticket_number,
        name: order.customer.name,
        email: order.customer.email,
        phone: order.customer.phone,
        gender: order.customer.gender,
        born_place: order.customer.born_place,
        born_date: order.customer.born_date,
    });

    const submitEdit = (e) => {
        e.preventDefault();
        put("/order/" + order.id);
    };
    const submitDelete = (e) => {
        e.preventDefault();
        router.delete("/admin/order/" + order.id);
    };

    return (
        <div className="w-full py-10 mx-auto bg-white rounded-lg shadow-md sm:w-96">
            {edit ? (
                <form onSubmit={submitEdit}>
                    <div className="flex flex-col px-4">
                        <label
                            htmlFor="ticket_number"
                            className="pt-2 pb-1 font-semibold"
                        >
                            Nomor Tiket
                        </label>
                        <input
                            type="text"
                            value={data.ticket_number}
                            className="border-gray-400 rounded-lg outline-none"
                            onChange={(e) =>
                                setData("ticket_number", e.target.value)
                            }
                        />
                        {errors.ticket_number && (
                            <div className="pt-1 pb-2 text-sm text-red-600">
                                * {errors.ticket_number}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col px-4">
                        <label
                            htmlFor="name"
                            className="pt-2 pb-1 font-semibold"
                        >
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
                        <label
                            htmlFor="phone"
                            className="pt-2 pb-1 font-semibold"
                        >
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
                        <label
                            htmlFor="email"
                            className="pt-2 pb-1 font-semibold"
                        >
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
                        <label
                            htmlFor="gender"
                            className="pt-2 pb-1 font-semibold"
                        >
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
                        <label
                            htmlFor="birth_date"
                            className="pt-2 pb-1 font-semibold"
                        >
                            Tanggal Lahir
                        </label>
                        <input
                            type="date"
                            value={data.birth_date}
                            className="border-gray-400 rounded-lg outline-none"
                            onChange={(e) =>
                                setData("birth_date", e.target.value)
                            }
                        />
                        {errors.birth_date && (
                            <div className="pt-1 pb-2 text-sm text-red-600">
                                * {errors.birth_date}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-row items-center justify-center gap-4 pt-8">
                        <button
                            onClick={() => {
                                setOrder(null);
                            }}
                            className="normal-case btn btn-outline btn-sm"
                        >
                            Batal
                        </button>
                        <button
                            onClick={submitEdit}
                            className="normal-case btn btn-primary btn-sm"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            ) : (
                <>
                    <div className="text-left">
                        <div className="flex flex-row items-center justify-between px-4">
                            <label className="pt-2 font-semibold">
                                Nomor Tiket
                            </label>
                            <p>{order.ticket_number}</p>
                        </div>
                        <div className="flex flex-row items-center justify-between px-4">
                            <label className="pt-2 font-semibold">Nama</label>
                            <p>{order.customer.name}</p>
                        </div>
                        <div className="flex flex-row items-center justify-between px-4">
                            <label className="pt-2 font-semibold">
                                Nomor Handphone
                            </label>
                            <p>{order.customer.phone}</p>
                        </div>
                        <div className="flex flex-row items-center justify-between px-4">
                            <label className="pt-2 font-semibold">Email</label>
                            <p>{order.customer.email}</p>
                        </div>
                        <div className="flex flex-row items-center justify-between px-4">
                            <label className="pt-2 font-semibold">
                                Jenis Kelamin
                            </label>
                            <p>
                                {order.customer.gender == "male"
                                    ? "Pria"
                                    : "Wanita"}
                            </p>
                        </div>
                        <div className="flex flex-row items-center justify-between px-4">
                            <label className="pt-2 font-semibold">
                                Tanggal Lahir
                            </label>
                            <p>
                                {new Date(
                                    order.customer.birth_date
                                ).toLocaleDateString("id-ID", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                })}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-4 pt-8">
                        <button
                            onClick={() => {
                                setOrder(null);
                            }}
                            className="normal-case btn btn-outline btn-sm"
                        >
                            Kembali
                        </button>
                        <button
                            onClick={submitDelete}
                            className="normal-case btn btn-error btn-sm"
                        >
                            Hapus
                        </button>
                        <button
                            onClick={() => setEdit(true)}
                            className="normal-case btn btn-primary btn-sm"
                        >
                            Edit
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Show;
