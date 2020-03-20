<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Roles;
use App\Address;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

      $admin =            Roles::where('name', 'admin')->first();
      $ejecutivo =         Roles::where('name', 'ejecutivo')->first();
      $cliente =         Roles::where('name', 'cliente')->first();


      //$plaza1 = Plazas::find(1);

      $user = User::create([
        'name' => 'Jhoan',
        'lastname'=> 'Borges',
        'username'=>'admin',
        'email'=>'admin@e-hop.mx',
        'company'=>'Test Company',
        'phone'=>'12345678',
        'store_url'=>'https://0589f4b953366318ee10464adc336433:0669a1f7f11355b2c7e02ed28ce2fcd5@senter-test.myshopify.com/admin/',
        'password'=>bcrypt('12345678'),
    ]);

      $user->roles()->attach($admin);


      $user = User::create([
        'name' => 'Ejecutivo',
        'lastname'=> 'de ventas',
        'username'=>'Sales',
        'email'=>'ejecutivo@senter.mx',
        'company'=>'Test Company',
        'phone'=>'12345678',
        'store_url'=>'https://0589f4b953366318ee10464adc336433:0669a1f7f11355b2c7e02ed28ce2fcd5@senter-test.myshopify.com/admin/',
        'password'=>bcrypt('12345678'),
    ]);

      $user->roles()->attach($ejecutivo);
      //$user->plazas()->attach($plaza1);





      for ($i=1; $i < 10; $i++) {

        $faker = Faker\Factory::create();

        $user = User::create([
            'name' =>  $faker->firstName,
            'lastname'=> $faker->lastName,
            'username'=>$faker->username,
            'email'=>$faker->email,
            'company'=>'Test Company',
            'phone'=>'12345678',
            'store_url'=>'https://0589f4b953366318ee10464adc336433:0669a1f7f11355b2c7e02ed28ce2fcd5@senter-test.myshopify.com/admin/',

            'password'=>bcrypt('12345678'),
        //'tipo_usuario'=>1,
                //'id_estado'=>rand(1, 32),
                //'id_ciudad'=>rand(1,2492)
        ]);

              $user->roles()->attach($cliente);

    }



}
}
