<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('site_settings', function (Blueprint $table) {
            $table->id();

            $table->string('brand_name');
            $table->string('legal_name');
            $table->string('legal_name_short');

            $table->string('flagship_brand')->nullable();
            $table->string('flagship_url')->nullable();

            $table->string('email');
            $table->string('phone');
            $table->string('location');

            $table->string('logo_path')->nullable();

            $table->json('navigation')->nullable();
            $table->json('footer')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('site_settings');
    }
};