<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tags= "سياره, دراجه,ادوات احتياطية,موبايل,اكسسوارات,اجهزه كهربائية,لابتوب,كمبيوتر,للبيع,مراوس,تلفزيون,ملابس,احذية,اثاث,حيونات, ادوات منزلية";
        
        foreach (explode(',', $tags) as $tag) {
            \DB::table('tags')->insert(['name' => $tag] );
        }
    
        
    }
}
