import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Link, Head } from "@inertiajs/react";
import Input from "@/Components/Order/Input";

function Create() {
    return (
        <>
            <Head title="Pesan Tiket Konser" />
            <GuestLayout>
                <div className="py-12">
                    <div className="w-full py-4 mx-auto overflow-hidden bg-white shadow-sm sm:rounded-lg sm:w-96">
                        <Input />
                    </div>
                </div>
            </GuestLayout>
        </>
    );
}

export default Create;
