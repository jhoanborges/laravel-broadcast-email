<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Clients;
use Validator;
use Notification;
use App\Jobs\SendEmailToClientJob;
use App\Notifications\SendEmailToClients;
use Alert;
class ClientsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('layouts.marketing')->with([
        ]);
    }


    public function get(Request $request)
    {

       return datatables()->of(Clients::query() )
       ->orderColumns(['id', 'name'], '-:column $1')
       ->toJson();
   }

   public function email(Request $request)
   {
    $clients= Clients::all();
    foreach ($clients as $key => $client) {
        //send job
        SendEmailToClientJob::dispatch($client);
        //Notification::route('mail', $client->email)->notify(new SendEmailToClients($client) );

    }
    Alert::alert('Éxito', 'Se han enviado correos masivos. Ten en cuenta que esta tarea es asíncrona, por lo cual los correos llegaran periodicamente en intervalos variados de tiempo,', 'success');
    return redirect()->back();
}


public function store(Request $request)
{


    $validator = Validator::make($request->all(), [
        'name' => 'required|string|max:191',
        'company' => 'required|string|max:191',
        'email' => 'required|email|max:191|unique:users',
        'title' => 'required|string|max:191',
    ]);


    if ($validator->fails()) {
        return response()
        ->json([
            'success' => false,
            'message' => 'Han ocurrido errores en la creación del cliente',
            'errors' =>  $validator->messages()
        ],404);
    }

    try{

        //$rol =Roles::where('id', $request->rol)->first();

        $user = Clients::create([
            'name'=>$request->name,
            'company'=>$request->company,
            'email'=>$request->email,
            'title'=>$request->title,

        ]);

        //aca crear direccion y relacionar

        //$user->roles()->attach($rol);
        //Notification::route('mail', $user->email)->notify(new UserSuccessfullyRegistered($request->all()));

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

    $data = Clients::where('id', $request->id);
    if ($data->first() ) {

        $validator = Validator::make($request->all(), [
            'company' => 'required|string|max:191',
            'title' => 'required|string|max:191',
            'name' => 'required|string|max:191',
            'email' => 'required|email|max:191|unique:users,email,'.$request->id,
        ]);


        if ($validator->fails()) {
            return response()
            ->json([
                'success' => false,
                'message' => 'Han ocurrido errores en la creación del cliente',
                'errors' =>  $validator->messages()
            ],404);
        }
        try{


            $data->update([
                'name'=>$request->name,
                'company'=>$request->company,
                'email'=>$request->email,
                'title'=>$request->title,

            ]);

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
    $data = Clients::find($id);
    try{

      $data->delete();
      return response()
      ->json([
          'success' => true,
          'message' => 'Registro eliminado con éxito']);

  }catch(\Exception $e){
      return response()
      ->json([
        'success' => false,
        'message' => 'Error inesperado o registro no existente'], 404);
  }
}



}
