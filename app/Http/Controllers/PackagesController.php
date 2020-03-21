<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Packages;
use Validator;

class PackagesController extends Controller
{
  public function index()
    {//
        return view('layouts.admin.packages')->with([
        ]);
    }

    public function get(Request $request)
    {

       return datatables()->of(Packages::query() )

       ->orderColumns(['id', 'name'], '-:column $1')
/*
     ->addColumn('country_relation', function (Address $data) {
        $country= Country::where('id', $data->country)->first();
        return $country ? $country->name : '';
    })
     ->addColumn('estate_relation', function (Address $data) {
        $estate= Estate::where('id', $data->estate)->first();
        return $estate ? $estate->name : '';
    })*/
    ->toJson();

}


public function store(Request $request)
{

    $validator = Validator::make($request->all(), [
        'name' => 'required|string|max:191',
        'long' => 'required|numeric',
        'height' => 'required|numeric',
        'width' => 'required|numeric',
        'unit' => 'required|string',
        'weight' => 'required|numeric',
        'unit_weight' => 'required|string',
        'public' => 'required|boolean',
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


        $user = Packages::create([
            'name' => $request->name,
            'long'=>$request->long,
            'height'=>$request->height,
            'width'=>$request->width,
            'unit'=>$request->unit,
            'weight'=>$request->weight,
            'unit_weight'=>$request->unit_weight,
            'public'=>$request->public

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
    /*
    name
long
height
width
unit
weight
unit_weight

     */

$data = Packages::where('id', $request->id);
if ($data->first() ) {

    $validator = Validator::make($request->all(), [
        'name' => 'required|string|max:191',
        'long' => 'required|numeric',
        'height' => 'required|numeric',
        'width' => 'required|numeric',
        'unit' => 'required|string',
        'weight' => 'required|numeric',
        'unit_weight' => 'required|string',
        'public' => 'required|boolean',
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
            'long'=>$request->long,
            'height'=>$request->height,
            'width'=>$request->width,
            'unit'=>$request->unit,
            'weight'=>$request->weight,
            'unit_weight'=>$request->unit_weight,
            'public'=>$request->public
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
    $data = Packages::find($id);
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
