<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Roles;

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
      $sales =         Roles::where('name', 'sales')->first();


      //$plaza1 = Plazas::find(1);


      $user = User::create([
        'name' => 'SOFT',
        'apellidos'=> 'DEPOT',
        'username'=>'admin',
        'email'=>'admin@senter.mx',
        'password'=>bcrypt('12345678'),
    ]);

      $user->roles()->attach($admin);


      $user = User::create([
        'name' => 'SOFT',
        'apellidos'=> 'DEPOT',
        'username'=>'Sales',
        'email'=>'sales@senter.mx',
        'password'=>bcrypt('12345678'),
    ]);

      $user->roles()->attach($sales);
      //$user->plazas()->attach($plaza1);





      for ($i=1; $i < 3; $i++) {

        $faker = Faker\Factory::create();

        $user = User::create([
            'name' =>  $faker->firstName,
            'apellidos'=> $faker->lastName,
            'username'=>$faker->username,
            'email'=>$faker->email,
            'password'=>bcrypt('12345678'),
        //'tipo_usuario'=>1,
                //'id_estado'=>rand(1, 32),
                //'id_ciudad'=>rand(1,2492)
        ]);

              $user->roles()->attach($ejecutivo);

    }



}
}
