<?php

namespace App\Models;

use App\Models\Concert;
use App\Models\Customer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $with = ['customer'];

    public function Customer(){
        return $this->belongsTo(Customer::class);
    }

    public function Concert(){
        return $this->hasOne(Concert::class, 'id', 'concert_id');
    }
}