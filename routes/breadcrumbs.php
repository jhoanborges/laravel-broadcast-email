<?php
//admin routes
// Home
Breadcrumbs::for('admin.index', function ($trail) {
    $trail->push('Home', route('admin.index'));
});

//clientes
Breadcrumbs::for('clients.index', function ($trail) {
    $trail->parent('admin.index');
    $trail->push('Clientes', route('clients.index'));
});

//Usuarios
Breadcrumbs::for('users.index', function ($trail) {
    $trail->parent('admin.index');
    $trail->push('Usuarios', route('users.index'));
});

//direcciones
Breadcrumbs::for('address.index', function ($trail) {
    $trail->parent('admin.index');
    $trail->push('Mis direcciones', route('address.index'));
});
