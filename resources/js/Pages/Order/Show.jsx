import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Link, Head } from "@inertiajs/react";
import Input from "@/Components/Order/Input";

function Create(props) {
    return (
        <>
            <Head title={props.title} />
            <GuestLayout>
                <div className="">
                    <div className="w-full py-4 mx-auto overflow-hidden bg-white shadow-sm sm:rounded-lg sm:w-96">
                        <div className="flex flex-row justify-between">
                            <span>Nama:</span>{" "}
                            <span>{props.order.customer.name}</span>
                        </div>
                        <div className="flex flex-row justify-between">
                            <span>Email:</span>{" "}
                            <span>{props.order.customer.email}</span>
                        </div>
                        <div className="flex flex-row justify-between">
                            <span>Nomor Tiket:</span>{" "}
                            <span className="font-semibold">
                                {props.order.ticket_number}
                            </span>
                        </div>
                    </div>
                    <div className="">
                        <Link
                            href="/"
                            className="normal-case btn btn-outline btn-sm"
                        >
                            Kembali
                        </Link>
                    </div>
                </div>
            </GuestLayout>
        </>
    );
}

export default Create;
