<div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Editar</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
      </button>
  </div>

  <form id="form" method="post"  role="form"   accept-charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <div class="modal-body">


       <div class="row">
        <div class="col">
           <label for="name" class="required">Nombre:</label>
           <input name="name" type="text" class="form-control" id="name" required  autofocus  maxlength="191">
           <span class="error" role="alert"> </span>

       </div>


   </div>

   <div class="row">
       <div class="col">
           <label for="long" class="required">Alto:</label>
           <input name="long" type="text" class="form-control" id="long"  required  maxlength="191">
           <span class="error" role="alert"> </span>
       </div>
       <div class="col">
           <label for="height" class="required">Ancho:</label>
           <input name="height" type="text" class="form-control" id="height" required  maxlength="191">
           <span class="error" role="alert"> </span>
       </div>

       <div class="col">
           <label for="width" class="required">Largo:</label>
           <input name="width" type="text" class="form-control" id="width"  required  maxlength="191">
           <span class="error" role="alert"> </span>
       </div>


       <div class="col">
           <label for="unit" class="required">Unidad:</label>
           <input name="unit" type="text" class="form-control" id="unit"  required  maxlength="191">
           <span class="error" role="alert"> </span>
       </div>

   </div>


   <div class="row">

      <div class="col">
       <label for="weight" class="required">Peso:</label>
       <input name="weight" type="text" class="form-control" id="weight" required  maxlength="191">
       <span class="error" role="alert"> </span>
   </div>

   <div class="col">
       <label for="unit_weight" class="required">Unidad:</label>
       <input name="unit_weight" type="text" class="form-control" id="unit_weight"  required  maxlength="191">
       <span class="error" role="alert"> </span>
   </div>


    <div class="col">
      <label for="public" class="required">Público</label>
      <select required class="form-control" id="public"  name="public">
          <option disabled selected value="">Seleccione una opción</option>
          <option value="1">Si</option>
          <option value="0">No</option>
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
