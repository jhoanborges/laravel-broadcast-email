<?php

use Illuminate\Database\Seeder;
use App\Clients;
use Carbon\Carbon;

class ClientsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Clients::create([
            'name' => 'Senter MX',
            'address' => '',
            'guia' => '1234567890',
            'email' => 'admin@senter.mx',
            'phone' => '8111597530',
            'facturacion'=>true,
            'interested'=>1
            //'store_url' => '',
            //'commission' => 10,
        ]);

        Clients::create([
            'name' => 'Jhoan',
            'address' => 'Borges',
            'guia' => '1234567890',
            'email' => 'jhoan.borges@e-hop.mx',
            'phone' => '8116168792',
            'facturacion'=>true,
            'interested'=>0
            //'store_url' => 'https://0589f4b953366318ee10464adc336433:0669a1f7f11355b2c7e02ed28ce2fcd5@senter-test.myshopify.com/admin/',
            //'commission' => 5,
        ]);

    }
}
