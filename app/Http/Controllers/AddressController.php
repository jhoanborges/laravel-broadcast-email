<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\Address;
use App\Country;
use App\Estate;
use App\User;
use Auth;


class AddressController extends Controller
{
  public function index()
    {//
        $estates= Estate::orderBy('name', 'desc')->get();

        return view('layouts.admin.addresses')->with([
            'estates'=>$estates,
        ]);
    }

    public function get(Request $request)
    {

     return datatables()->of(Address::query() )

     ->orderColumns(['id', 'name'], '-:column $1')

     ->addColumn('country_relation', function (Address $data) {
        $country= Country::where('id', $data->country)->first();
        return $country ? $country->name : '';
    })
     ->addColumn('estate_relation', function (Address $data) {
        $estate= Estate::where('id', $data->estate)->first();
        return $estate ? $estate->name : '';
    })
     ->toJson();

 }


 public function store(Request $request)
 {

    $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:191',
            'lastname' => 'required|string|max:191',
            'email' => 'required|email|max:191',
            'phone' => 'required|string|max:191',
            'address' => 'required|string',
            'postal_code' => 'required|string',
            'estate' => 'required|integer|between:1,32',
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


        $user = Address::create([
                'name' => $request->name,
                'lastname'=>$request->lastname,
                'phone'=>$request->phone,
                'email'=>$request->email,
                'address'=>$request->address,
                'postal_code'=>$request->postal_code,
                'country'=>1,
                'estate'=>$request->estate,
                'user_id'=> Auth::id() ,
        ]);

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

    $data = Address::where('id', $request->id);
    if ($data->first() ) {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:191',
            'lastname' => 'required|string|max:191',
            'email' => 'required|email|max:191',
            'phone' => 'required|string|max:191',
            'address' => 'required|string',
            'postal_code' => 'required|string',
            'estate' => 'required|integer|between:1,32',
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
                'name' => $request->name,
                'lastname'=>$request->lastname,
                'phone'=>$request->phone,
                'email'=>$request->email,
                'address'=>$request->address,
                'postal_code'=>$request->postal_code,
                'country'=>1,
                'estate'=>$request->estate,
                'user_id'=> Auth::id() ,
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
    $data = Address::find($id);
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
