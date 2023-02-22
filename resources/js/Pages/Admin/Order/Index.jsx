import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import CheckIn from "@/Components/Admin/Order/CheckIn";
import Show from "@/Components/Admin/Order/Show";

function Index(props) {
    const [isCheckIn, setIsCheckIn] = useState(false);
    const [order, setOrder] = useState();

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            isCheckIn={isCheckIn}
            setIsCheckIn={setIsCheckIn}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    {props.title}
                </h2>
            }
        >
            <Head title={props.title} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-x-auto">
                        {isCheckIn ? (
                            <CheckIn
                                isCheckIn={isCheckIn}
                                setIsCheckIn={setIsCheckIn}
                            ></CheckIn>
                        ) : order ? (
                            <>
                                <Show order={order} setOrder={setOrder}></Show>
                            </>
                        ) : (
                            <table className="table w-full table-compact">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Nomor Tiket</th>
                                        <th>Nama</th>
                                        <th>Nomor Handphone</th>
                                        <th>Email</th>
                                        <th>Jenis Kelamin</th>
                                        <th>Tanggal Lahir</th>
                                        <th>Status</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.orders.map((order, i) => {
                                        return (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{order.ticket_number}</td>
                                                <td>{order.customer.name}</td>
                                                <td>{order.customer.phone}</td>
                                                <td>{order.customer.email}</td>
                                                <td>
                                                    {order.customer.gender ==
                                                    "male"
                                                        ? "Pria"
                                                        : "Wanita"}
                                                </td>
                                                <td>
                                                    {new Date(
                                                        order.customer.birth_date
                                                    ).toLocaleDateString(
                                                        "id-ID",
                                                        {
                                                            year: "numeric",
                                                            month: "short",
                                                            day: "numeric",
                                                        }
                                                    )}
                                                </td>
                                                <td>
                                                    {order.status ==
                                                        "Sudah Check-In" && (
                                                        <div className="badge badge-primary">
                                                            Sudah Check-In
                                                        </div>
                                                    )}
                                                    {order.status ==
                                                        "Belum Check-In" && (
                                                        <div className="badge badge-primary badge-outline">
                                                            Belum Check-In
                                                        </div>
                                                    )}
                                                </td>
                                                <td className="flex gap-2">
                                                    <button
                                                        onClick={() =>
                                                            setOrder(order)
                                                        }
                                                        className="normal-case btn btn-xs btn-warning"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setOrder(order)
                                                        }
                                                        className="normal-case btn btn-xs btn-error"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th></th>
                                        <th>Nomor Tiket</th>
                                        <th>Nama</th>
                                        <th>Nomor Handphone</th>
                                        <th>Email</th>
                                        <th>Jenis Kelamin</th>
                                        <th>Tanggal Lahir</th>
                                        <th>Status</th>
                                        <th>Aksi</th>
                                    </tr>
                                </tfoot>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
