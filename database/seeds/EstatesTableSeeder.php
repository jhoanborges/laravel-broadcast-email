<?php

use Illuminate\Database\Seeder;
use App\Estates;

class EstatesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $estados = [
            ['name' => 'Aguascalientes', 'country_id' => 1, 'code' => 'AS'],
            ['name' => 'Baja California', 'country_id' => 1, 'code' => 'BC'],
            ['name' => 'Baja California Sur', 'country_id' => 1, 'code' => 'BS'],
            ['name' => 'Campeche', 'country_id' => 1, 'code' => 'CC'],
            ['name' => 'Chiapas', 'country_id' => 1, 'code' => 'CS'],
            ['name' => 'Chihuahua', 'country_id' => 1, 'code' => 'CHIH'],
            ['name' => 'Coahuila', 'country_id' => 1, 'code' => 'CL'],
            ['name' => 'Colima', 'country_id' => 1, 'code' => 'CM'],
            ['name' => 'Ciudad de México', 'country_id' => 1, 'code' => 'DF'],
            ['name' => 'Durango', 'country_id' => 1, 'code' => 'DG'],
            ['name' => 'Guanajuato', 'country_id' => 1, 'code' => 'GT'],
            ['name' => 'Guerrero', 'country_id' => 1, 'code' => 'GR'],
            ['name' => 'Hidalgo', 'country_id' => 1, 'code' => 'HG'],
            ['name' => 'Jalisco', 'country_id' => 1, 'code' => 'JC'],
            ['name' => 'Estado de México', 'country_id' => 1, 'code' => 'MC'],
            ['name' => 'Michoacán', 'country_id' => 1, 'code' => 'MN'],
            ['name' => 'Morelos', 'country_id' => 1, 'code' => 'MS'],
            ['name' => 'Nayarit', 'country_id' => 1, 'code' => 'NT'],
            ['name' => 'Nuevo León', 'country_id' => 1, 'code' => 'NL'],
            ['name' => 'Oaxaca', 'country_id' => 1, 'code' => 'OC'],
            ['name' => 'Puebla', 'country_id' => 1, 'code' => 'PL'],
            ['name' => 'Querétaro', 'country_id' => 1, 'code' => 'QT'],
            ['name' => 'Quintana Roo', 'country_id' => 1, 'code' => 'QR'],
            ['name' => 'San Luis Potosí', 'country_id' => 1, 'code' => 'SP'],
            ['name' => 'Sinaloa', 'country_id' => 1, 'code' => 'SL'],
            ['name' => 'Sonora', 'country_id' => 1, 'code' => 'SR'],
            ['name' => 'Tabasco', 'country_id' => 1, 'code' => 'TAB'],
            ['name' => 'Tamaulipas', 'country_id' => 1, 'code' => 'TS'],
            ['name' => 'Tlaxcala', 'country_id' => 1, 'code' => 'TL'],
            ['name' => 'Veracruz', 'country_id' => 1, 'code' => 'VZ'],
            ['name' => 'Yucatán', 'country_id' => 1, 'code' => 'YN'],
            ['name' => 'Zacatecas', 'country_id' => 1, 'code' => 'ZS'],
        ];

        DB::table('estates')->insert($estados);
    }
}
