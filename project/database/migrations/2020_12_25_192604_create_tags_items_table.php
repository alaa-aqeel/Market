<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTagsItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tag_item', function (Blueprint $table) {
            $table->bigInteger('item_id')->nullable()->unsigned();
            $table->foreign('item_id')
                    ->references('id')
                    ->on('items')
                    ->onDelete('cascade');

            $table->bigInteger('tag_id')->nullable()->unsigned();
            $table->foreign('tag_id')
                    ->references('id')
                    ->on('tags')
                    ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tags_items');
    }
}
