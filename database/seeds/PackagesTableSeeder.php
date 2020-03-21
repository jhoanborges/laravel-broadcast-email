<?php

use Illuminate\Database\Seeder;
use App\Packages;

class PackagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Packages::create([
            'name'=>'Lysi chica (16x11x22)',
            'long'=>16,
            'height'=>11,
            'width'=>22,
            'weight'=>1,
            'unit'=>'cm',
            'unit_weight'=>'kg',
            'public'=>true
        ]);

        Packages::create([
            'name'=>'Lysi grande (15x20x28))',
            'long'=>15,
            'height'=>20,
            'width'=>28,
            'weight'=>6,
            'unit'=>'cm',
            'unit_weight'=>'kg',
            'public'=>true
        ]);
        Packages::create([
            'name'=>'Sobre (Documentos)',
            'long'=>25,
            'height'=>2,
            'width'=>31,
            'weight'=>1,
            'unit'=>'cm',
            'unit_weight'=>'kg',
            'public'=>true
        ]);
        Packages::create([
            'name'=>'Caja 20cms',
            'long'=>20,
            'height'=>20,
            'width'=>20,
            'weight'=>2,
            'unit'=>'cm',
            'unit_weight'=>'kg',
            'public'=>true
        ]);
        Packages::create([
            'name'=>'GMS',
            'long'=>20,
            'height'=>20,
            'width'=>20,
            'weight'=>1,
            'unit'=>'cm',
            'unit_weight'=>'kg',
            'public'=>true
        ]);
        Packages::create([
            'name'=>'S1',
            'long'=>28,
            'height'=>3.81,
            'width'=>31.43,
            'weight'=>1,
            'unit'=>'cm',
            'unit_weight'=>'kg',
            'public'=>true
        ]);


    }
}
