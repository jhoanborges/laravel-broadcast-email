<?php

use Illuminate\Database\Seeder;
use App\Roles;


class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
                //TIPO 1
        $role = new Roles();
        $role->name = 'admin';
        $role->description='Administrador';
        $role->save();

//TIPO 2
        $role = new Roles();
        $role->name = 'ejecutivo';
        $role->description='Ejecutivo';
        $role->save();

        //TIPO 3 subastas y productos
        $role = new Roles();
        $role->name = 'cliente';
        $role->description='Cliente de la plataforma';
        $role->save();


    }

}
