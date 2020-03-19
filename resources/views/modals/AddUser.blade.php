<div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Nuevo cliente</h5>
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

         <div class="col">
             <label for="apellidos" class="required">Apellidos:</label>
             <input name="apellidos" type="text" class="form-control" id="apellidos" required  maxlength="191">
             <span class="error" role="alert"> </span>
         </div>

     </div>

     <div class="row">

      <div class="col">
         <label for="email" class="required">Email:</label>
         <input name="email" type="email" class="form-control" id="email" required  maxlength="191">
         <span class="error" role="alert"> </span>
     </div>

     <div class="col">
         <label for="username">Username:</label>
         <input name="username" type="text" class="form-control" id="username"  maxlength="191">
         <span class="error" role="alert"> </span>
     </div>


 </div>


     <div class="row">

      <div class="col">
         <label for="password" class="required">Password:</label>
         <input name="password" type="password" class="form-control" id="password" required  maxlength="191" minlength="8">
         <span class="error" role="alert"> </span>
     </div>

     <div class="col">
         <label for="password_confirmation" class="required">Confirmar Password:</label>
         <input name="password_confirmation" type="password" class="form-control" id="password_confirmation" required  maxlength="191" minlength="8">
         <span class="error" role="alert"> </span>
     </div>


 </div>




 <div class="row">

    <div class="col">
      <label for="rol" class="required">Rol</label>
      <select required class="form-control"  name="rol"  id="rol">
          <option disabled selected value="">Seleccione una opción</option>
          <option value="1">Administrador</option>
          <option value="2">Ejecutivo</option>
          <option value="3">Sales</option>

      </select>
      <span class="error" role="alert"> </span>
  </div>


     <div class="col">
         <label for="phone">Teléfono:</label>
         <input name="phone" type="text" class="form-control" id="phone"  maxlength="191">
         <span class="error" role="alert"> </span>
     </div>



</div>


<div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
    <button type="submit" class="btn btn-primary">Crear</button>
</div>
</div>
</form>

</div>
</div>
</div>
