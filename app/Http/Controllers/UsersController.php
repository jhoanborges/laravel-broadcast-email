<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use DataTables;
use Validator;
use App\Roles;
use App\Notifications\UserSuccessfullyRegistered;
use Notification;
use Illuminate\Support\Str;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {//

        return view('layouts.admin.users')->with([
        ]);
    }

    public function get(Request $request)
    {
     return datatables()->of(User::query() )

     ->orderColumns(['id', 'name'], '-:column $1')

     ->addColumn('rol', function (User $user) {
        return $user->roles->map(function($data) {
          return $data->id;
      });
    })


     ->addColumn('role', function (User $user) {
        return $user->roles->map(function($data) {
          return Str::limit($data->description, 30, '...');
      })->implode('<br>');
    })
     ->toJson();

 }


 public function store(Request $request)
 {

    $validator = Validator::make($request->all(), [
        'name' => 'required|string|max:191',
        'apellidos' => 'required|string|max:191',
        'username' => 'sometimes|string|max:191|unique:users',
        'email' => 'required|email|max:191|unique:users',
        'password' => 'required|min:8|max:191|confirmed',
        'password_confirmation' => 'required|min:8|max:191',
        'rol' => 'required|integer|between:1,3',
        'phone' => 'required|string|max:191',

    ]);


    if ($validator->fails()) {
        return response()
        ->json([
            'success' => false,
            'message' => 'Han ocurrido errores en la creación del cliente',
            'errors' =>  $validator->messages()
        ],404);
    }

    if ($request->rol != 1 && !$request->has('plaza') ) {
        return response()
        ->json([
            'success' => false,
            'message' => 'La plaza es requerida si el usuario es distinto al administrador',
        ],500);
    }
    try{

        $rol =Roles::where('id', $request->rol)->first();

        $user = User::create([
            'name' => $request->name,
            'apellidos'=>$request->apellidos,
            'username'=>$request->username,
            'email'=>$request->email,
            'password'=>bcrypt($request->password),
            'phone'=>$request->phone,

        ]);
        $user->roles()->attach($rol);

        Notification::route('mail', $user->email)->notify(new UserSuccessfullyRegistered($request->all()));

        return response()
        ->json([
            'success' => true,
            'message' => 'Registro agregado con éxito']);


    }catch(\Exception $e){
        return response()
        ->json([
            'success' => false,
            'message' => 'Han ocurrido errores en la creación del cliente',
            'errors' =>  $e
        ],404);
    }

}








public function update(Request $request)
{

    $data = User::where('id', $request->id);
    if ($data->first() ) {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:191',
            'apellidos' => 'required|string|max:191',
            'username' => 'sometimes|string|max:191',
            'email' => 'required|email|max:191|unique:users,email,'.$request->id,
            'password' => 'sometimes|min:8|max:191|confirmed',
            'password_confirmation' => 'sometimes|min:8|max:191',
            'rol' => 'required|integer|between:1,3',
            'phone' => 'required|string|max:191',


        ]);


        if ($validator->fails()) {
            return response()
            ->json([
                'success' => false,
                'message' => 'Han ocurrido errores en la creación del cliente',
                'errors' =>  $validator->messages()
            ],404);
        }

//valido manualmente que si el usuario no es admin entonces la variable plaza debe ser requerida ni modo que se guarde vacia
/*
        if ($request->rol != 1 && !$request->has('plaza') ) {
            return response()
            ->json([
                'success' => false,
                'message' => 'La plaza es requerida si el usuario es distinto al administrador',
            ],500);
        }
*/

        try{


            $data->update([
                'name' => $request->name,
                'apellidos'=>$request->apellidos,
                'username'=>$request->username,
                'email'=>$request->email,
                'password'=>bcrypt($request->password),
                'phone'=>$request->phone,

            ]);

            $rol =Roles::where('id', $request->rol)->first();
            $data->first()->roles()->detach();
            $data->first()->roles()->attach($rol);


            if($request->has('password') ){
                //si hay nuevo password enviar el mismo email de contraseña nueva
                Notification::route('mail', $user->email)->notify(new UserSuccessfullyRegistered($request->all()));
            }

            return response()
            ->json([
                'success' => true,
                'message' => 'Registro actualizado con éxito']);

        }catch(\Exception $e){
            return response()
            ->json([
                'success' => false,
                'message' => 'Han ocurrido errores en la creación del cliente',
                'errors' =>  $e
            ],500);
        }


    }else{
        return response()
        ->json([
            'success' => false,
            'message' => 'El registro no existe o se ha borrado anteriormente.',
            'id' => $request->id,
        ],404);
    }

}



public function destroy(Request $request)
{

    $id= $request->id;
    $data = User::find($id);
    try{

        if ($data && $data->id!=1) {
          $data->delete();
          return response()
          ->json([
              'success' => true,
              'message' => 'Registro eliminado con éxito']);
      }else{
          return response()
          ->json([
            'success' => false,
            'message' => 'No se puede eliminar el usuario administrador principal'], 404);
      }

  }catch(\Exception $e){
      return response()
      ->json([
        'success' => false,
        'message' => 'Error inesperado o registro no existente'], 404);
  }
}


}
