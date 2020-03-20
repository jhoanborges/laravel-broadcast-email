<?php

use Illuminate\Database\Seeder;
use App\Address;

class AddressesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      for ($i=1; $i < 10; $i++) {

        $faker = Faker\Factory::create();

        Address::create([
            'user_id'=> random_int(1, 10),
            'name'=> $faker->firstName,
            'lastName'=> $faker->lastName,
            'email'=>$faker->email,
            'phone'=>$faker->phoneNumber,
            'address'=>$faker->address,
            'postal_code'=>$faker->postcode,
            'country'=>1,
            'estate'=>random_int(1, 32)
        ]);
    }
}

}
