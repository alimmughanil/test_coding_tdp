<?php

namespace App\Models;

use App\Models\Order;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Concert extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function Order(){
        return $this->belongsTo(Order::class);
    }
}