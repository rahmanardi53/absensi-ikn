<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('penjualans', function (Blueprint $table) {
            $table->integer('harga_satuan')->default(0);
            $table->integer('subtotal')->default(0);
            $table->integer('cash')->nullable()->default(0);
            $table->integer('invoice')->nullable()->default(0);
            $table->integer('tf')->nullable()->default(0);
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('penjualans', function (Blueprint $table) {
            //
        });
    }
};
