<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Barang;


class BarangSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            'Paket A', 'Paket B', 'Paket C',
            'Kentang Goreng', 'Cake Strowbery',
            'Boba', 'Boombox', 'Powerbank',
            'Tas', 'Dompet', 'Ripair Tool',
            'HP', 'Radio'
        ];
    
        foreach ($data as $nama) {
            Barang::create(['nama_barang' => $nama]);
        }
    }
}
