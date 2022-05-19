<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::post('messages', [\App\Http\Controllers\ChatController::class, 'message']);
Route::post('getlist', [\App\Http\Controllers\getList::class, 'gList']);
Route::post('insertbusiness', [\App\Http\Controllers\insertBusiness::class, 'iBusiness']);
Route::post('insertcounty', [\App\Http\Controllers\insertCounty::class, 'iCounty']);
Route::post('insertdiscounts', [\App\Http\Controllers\insertDiscounts::class, 'iDiscounts']);
Route::post('insertevents', [\App\Http\Controllers\insertEvents::class, 'iEvents']);
Route::post('insertflights', [\App\Http\Controllers\insertFlights::class, 'iFlights']);
Route::post('inserthospital', [\App\Http\Controllers\insertHospital::class, 'iHospital']);
Route::post('insertmoveout', [\App\Http\Controllers\insertMoveOut::class, 'iMoveOut']);
Route::post('insertschools', [\App\Http\Controllers\insertDiscounts::class, 'iDiscounts']);
Route::post('insertusers', [\App\Http\Controllers\insertUsers::class, 'iUsers']);
Route::post('updatebusiness', [\App\Http\Controllers\updateBusiness::class, 'uBusiness']);
Route::post('delete', [\App\Http\Controllers\delete::class, 'delete']);
Route::post('updatecounty', [\App\Http\Controllers\updateCounty::class, 'uCounty']);
Route::post('updatediscounts', [\App\Http\Controllers\updateDiscounts::class, 'uDiscounts']);
Route::post('updateevents', [\App\Http\Controllers\updateEvents::class, 'uEvents']);
Route::post('updateflights', [\App\Http\Controllers\updateFlights::class, 'uFlights']);
Route::post('updatehospital', [\App\Http\Controllers\updateHospital::class, 'uHospital']);
Route::post('updatemoveout', [\App\Http\Controllers\updateMoveOut::class, 'uMoveOut']);
Route::post('updateschool', [\App\Http\Controllers\updateSchool::class, 'uSchool']);
Route::post('updateusers', [\App\Http\Controllers\updateUsers::class, 'uUsers']);