<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() 
    {
        $orders = Order::all();
        $data = [
            'title' => 'Semua Pesanan',
            'orders' => $orders
        ];
        return Inertia::render('Admin/Order/Index', $data);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id) 
    {
        //
    }

    public function update(Request $request, string $id) 
    {
        $order = Order::where('id', $id)->first();

        $order->update([
            'status' => 'Sudah Check-In'
        ]);

       return Inertia::location('/admin/order');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id) 
    {
        $order = Order::where('id', $id)->first();
        $order->delete();

        return Inertia::location('/admin/order');
    }

    public function TicketCheck(Request $request) 
    {
        $validatedData = $request->validate([
            'ticket_number' => 'required',
        ]);

        $order = Order::where('ticket_number', $request->ticket_number)->first();

        if ($order) {
            if ($order->status == "Sudah Check-In") {
                return response()->json([
                    'message' => 'Nomor Tiket Sudah Check-In'
                ],200);
            } else {                
                return response()->json([
                    'order'=>$order
                ],200);
            }
        }else {
            return response()->json([
                'message' => 'Data Tidak Ditemukan'
            ],200);
        }
    }
}