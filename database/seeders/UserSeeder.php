<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         // Owner
         User::create([
            'name' => 'Owner Satu',
            'email' => 'owner@example.com',
            'password' => Hash::make('password'),
            'role' => 'owner',
        ]);

        // Pedagang
        User::create([
            'name' => 'Pedagang Satu',
            'email' => 'pedagang@example.com',
            'password' => Hash::make('password'),
            'role' => 'pedagang',
        ]);
    }
}
