<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->string('title')->unique();
            $table->decimal('price');
            $table->string('short_descrip');
            $table->decimal('discount')->nullable();
            $table->text('description')->nullable();
            $table->tinyInteger('active')->default(0);

            $table->bigInteger('user_id')->nullable()->unsigned();
            $table->foreign('user_id')
                    ->references('id')
                    ->on('users')
                    ->onDelete('cascade');

            $table->bigInteger('guest_id')->nullable()->unsigned();
            $table->foreign('guest_id')
                    ->references('id')
                    ->on('guests')
                    ->onDelete('cascade');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('items');
    }
}
