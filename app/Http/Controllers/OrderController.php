<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Order;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Order/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'gender' => 'required',
            'birth_date' => 'required',
        ]);
        $ticket_number = rand(1111111111,9999999999);
        $customer = Customer::create($validatedData);
        $order = Order::create([
            'customer_id' => $customer->id,
            'ticket_number' => $ticket_number,
        ]);

        return redirect('/order/'.$ticket_number)->with('success', 'Tambah Data Berhasil');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $ticket_number)
    {
        $order = Order::where('ticket_number',$ticket_number)->first();
        $data = [
            'title' => 'Nomor Pesanan '. $ticket_number,
            'order' => $order,
        ];
        return Inertia::render('Order/Show', $data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
       $validatedData = $request->validate([
            'ticket_number' => 'required',
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'gender' => 'required',
            'birth_date' => 'required',
        ]);
        $order = Order::where('id', $id)->first();
        $order->customer->update([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'gender' => $request->gender,
            'birth_date' => $request->birth_date,
        ]);
        $order->update([
            'ticket_number' => $request->ticket_number,
        ]);

        return Inertia::location('/admin/order');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}