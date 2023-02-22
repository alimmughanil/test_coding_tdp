import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import axios from "axios";

function CheckIn({ isCheckIn, setIsCheckIn }) {
    const { data, setData, post, put, processing, errors } = useForm({
        ticket_number: "",
    });
    const [order, setOrder] = useState(null);
    const [message, setMessage] = useState(null);

    const ticketCheck = (e) => {
        e.preventDefault();
        axios.post("/ticket/check", data).then((res) => {
            if (res.data.order) {
                setOrder(res.data.order);
            } else {
                setMessage(res.data.message);
            }
        });
    };
    const checkIn = (e) => {
        e.preventDefault();
        put("/admin/order/" + order.id);
    };
    return (
        <div className="w-full py-10 mx-auto bg-white rounded-lg shadow-md sm:w-96">
            {order ? (
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
                            Batal
                        </button>
                        <button
                            onClick={checkIn}
                            className="normal-case btn btn-primary btn-sm"
                        >
                            Check In
                        </button>
                    </div>
                </>
            ) : (
                <>
                    {message && (
                        <p className="text-sm text-center text-red-600">
                            * {message}
                        </p>
                    )}
                    <div className="flex flex-col px-4">
                        <label
                            htmlFor="ticket_number"
                            className="pt-2 pb-1 font-semibold"
                        >
                            Masukkan Nomor Tiket
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
                    <div className="flex flex-row items-center justify-center gap-4 pt-8">
                        <button
                            onClick={() => setIsCheckIn(false)}
                            className="normal-case btn btn-outline btn-sm"
                        >
                            Batal
                        </button>
                        <button
                            onClick={ticketCheck}
                            className="normal-case btn btn-primary btn-sm"
                        >
                            Cek Tiket
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default CheckIn;
