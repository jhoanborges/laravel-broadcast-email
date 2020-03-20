<div class="modal fade" id="EditModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Editar</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
      </button>
  </div>

  <form id="formEdit" method="post"  role="form"   accept-charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <div class="modal-body">

       <input type="hidden" name="id" id="id" class="id">

       <div class="row">
        <div class="col">
           <label for="name" class="required">Nombre:</label>
           <input name="name" type="text" class="form-control name" required  autofocus  maxlength="191">
           <span class="error" role="alert"> </span>

       </div>


       <div class="col">
           <label for="lastname" class="required">Apellidos:</label>
           <input name="lastname" type="text" class="form-control lastname" required  autofocus  maxlength="191">
           <span class="error" role="alert"> </span>

       </div>




   </div>




   <div class="row">

      <div class="col">
       <label for="email" class="required">Email:</label>
       <input name="email" type="email" class="form-control email" required  maxlength="191">
       <span class="error" role="alert"> </span>
   </div>
   <div class="col">
       <label for="phone" class="required">Teléfono:</label>
       <input name="phone" type="text" class="form-control phone"  required  maxlength="191">
       <span class="error" role="alert"> </span>
   </div>



</div>


<div class="row">
  <div class="col">
   <label for="address" class="required">Dirección:</label>
   <textarea name="address" type="text" class="form-control address"  required  maxlength="1000"></textarea>
   <span class="error" role="alert"> </span>
</div>

</div>

<div class="row">

    <div class="col">
       <label for="postal_code">Código Postal:</label>
       <input name="postal_code" type="text" class="form-control postal_code"  maxlength="191">
       <span class="error" role="alert"> </span>
   </div>

   <div class="col">
     <label for="country">País:</label>
     <select name="country" type="text" class="form-control country" >
        <option disabled selected value="">Seleccione una opción</option>
        <option value="1">México</option>
    </select>
    <span class="error" role="alert"> </span>
</div>

</div>


<div class="row">


 <div class="col">
    <label for="estate" class="required">Estado</label>
  <select required class="form-control estate"  name="estate">
      <option disabled selected value="">Seleccione una opción</option>
      @foreach($estates as $estate)
      <option value="{{$estate->id}}">{{$estate->name}}</option>
      @endforeach
  </select>
  <span class="error" role="alert"> </span>
</div>

</div>




<div class="modal-footer">
    <button type="button" class="btn  pmd-btn-raised pmd-ripple-effect btn-secondary" data-dismiss="modal">Cerrar</button>
    <button type="submit" class="btn  pmd-btn-raised pmd-ripple-effect btn-primary">Guardar</button>
</div>
</div>
</form>

</div>
</div>
</div>
