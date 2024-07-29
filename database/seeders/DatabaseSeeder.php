<?php

namespace Database\Seeders;

use App\Models\Genre;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Movie;
use App\Models\Serie;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Netflix Admin',
            'email' => 'admin@netflix.test',
        ]);

        $action = Genre::create([
            'name' => 'Action',
            'slug' => 'action'
        ]);
        $adventure = Genre::create([
            'name' => 'Adventure',
            'slug' => 'adventure'
        ]);
        $crime = Genre::create([
            'name' => 'Crime',
            'slug' => 'crime'
        ]);
        $comedy = Genre::create([
            'name' => 'Comedy',
            'slug' => 'comedy'
        ]);
        $thriller = Genre::create([
            'name' => 'Thriller',
            'slug' => 'thriller'
        ]);
        $mystery = Genre::create([
            'name' => 'Mystery',
            'slug' => 'mystery'
        ]);
        $drama = Genre::create([
            'name' => 'Drama',
            'slug' => 'drama'
        ]);

        $lift = Movie::create([
            'title' => "Lift",
            'slug' => str()->slug('Lift'),
            'overview' => 'An international heist crew, led by Cyrus Whitaker, race to lift $500 million in gold from a passenger plane at 40,000 feet.',
            'release_date' => Carbon::createFromFormat('d-m-Y H:i:s', '10-01-2024 00:52:00'),
            'poster_path' => 'lift.jpg',
            'backdrop_path' => 'liftb.webp',
            'video_url' => 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            'trailer_url' => 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        ]);
        $liftSerie = Serie::create([
            'title' => "Lift",
            'slug' => str()->slug('Lift'),
            'overview' => 'An international heist crew, led by Cyrus Whitaker, race to lift $500 million in gold from a passenger plane at 40,000 feet.',
            'release_date' => Carbon::createFromFormat('d-m-Y H:i:s', '10-01-2024 00:52:00'),
            'poster_path' => 'lift.jpg',
            'backdrop_path' => 'liftb.webp',
        ]);
        $lostBullet = Movie::create([
            'title' => "Lost Bullet",
            'slug' => str()->slug('Lost Bullet'),
            'overview' => 'Having cleared his name, genius mechanic Lino has only one goal in mind: getting revenge on the corrupt cops who killed his brother and his mentor.',
            'release_date' => Carbon::createFromFormat('d-m-Y H:i:s', '10-01-2024 00:52:00'),
            'poster_path' => 'lost-bullet.jpg',
            'backdrop_path' => 'lostbulletb.webp',
            'video_url' => 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            'trailer_url' => 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        ]);
        $lostBulletSerie = Serie::create([
            'title' => "Lost Bullet",
            'slug' => str()->slug('Lost Bullet'),
            'overview' => 'Having cleared his name, genius mechanic Lino has only one goal in mind: getting revenge on the corrupt cops who killed his brother and his mentor.',
            'release_date' => Carbon::createFromFormat('d-m-Y H:i:s', '10-01-2024 00:52:00'),
            'poster_path' => 'lost-bullet.jpg',
            'backdrop_path' => 'lostbulletb.webp',
        ]);
        $luther = Movie::create([
            'title' => "Luther: The Fallen Sun",
            'slug' => str()->slug('Luther: The Fallen Sun'),
            'overview' => 'A gruesome serial killer is terrorizing London while brilliant but disgraced detective John Luther sits behind bars. Haunted by his failure to capture the cyber psychopath who now taunts him, Luther decides to break out of prison to finish the job by any means necessary.',
            'release_date' => Carbon::createFromFormat('d-m-Y H:i:s', '10-01-2024 00:52:00'),
            'poster_path' => 'luther.jpg',
            'backdrop_path' => 'lutherb.webp',
            'video_url' => 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            'trailer_url' => 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        ]);
        $lutherSerie = Serie::create([
            'title' => "Luther: The Fallen Sun",
            'slug' => str()->slug('Luther: The Fallen Sun'),
            'overview' => 'A gruesome serial killer is terrorizing London while brilliant but disgraced detective John Luther sits behind bars. Haunted by his failure to capture the cyber psychopath who now taunts him, Luther decides to break out of prison to finish the job by any means necessary.',
            'release_date' => Carbon::createFromFormat('d-m-Y H:i:s', '10-01-2024 00:52:00'),
            'poster_path' => 'luther.jpg',
            'backdrop_path' => 'lutherb.webp',
        ]);
        $wingwomen = Movie::create([
            'title' => "Wingwomen",
            'slug' => str()->slug('Wingwomen'),
            'overview' => 'Tired of life on the run, a pro thief decides to retire — but not before one easy last job with her partner in crime and a feisty new getaway driver.',
            'release_date' => Carbon::createFromFormat('d-m-Y H:i:s', '10-01-2024 00:52:00'),
            'poster_path' => 'wingwomen.jpg',
            'backdrop_path' => 'wingwomenb.webp',
            'video_url' => 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
            'trailer_url' => 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        ]);
        $wingwomenSerie = Serie::create([
            'title' => "Wingwomen",
            'slug' => str()->slug('Wingwomen'),
            'overview' => 'Tired of life on the run, a pro thief decides to retire — but not before one easy last job with her partner in crime and a feisty new getaway driver.',
            'release_date' => Carbon::createFromFormat('d-m-Y H:i:s', '10-01-2024 00:52:00'),
            'poster_path' => 'wingwomen.jpg',
            'backdrop_path' => 'wingwomenb.webp',
        ]);
        $extraction = Movie::create([
            'title' => "Extraction",
            'slug' => str()->slug('extraction'),
            'overview' => 'Tyler Rake, a fearless mercenary who offers his services on the black market, embarks on a dangerous mission when he is hired to rescue the kidnapped son of a Mumbai crime lord.',
            'release_date' => Carbon::createFromFormat('d-m-Y H:i:s', '10-01-2024 00:52:00'),
            'poster_path' => 'extraction.jpg',
            'backdrop_path' => 'extraction.webp',
            'video_url' => 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
            'trailer_url' => 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        ]);
        $extractionSerie = Serie::create([
            'title' => "Extraction",
            'slug' => str()->slug('extraction'),
            'overview' => 'Tyler Rake, a fearless mercenary who offers his services on the black market, embarks on a dangerous mission when he is hired to rescue the kidnapped son of a Mumbai crime lord.',
            'release_date' => Carbon::createFromFormat('d-m-Y H:i:s', '10-01-2024 00:52:00'),
            'poster_path' => 'extraction.jpg',
            'backdrop_path' => 'extraction.webp',
        ]);
        $lift->genres()->attach([$action->id, $adventure->id, $comedy->id, $crime->id]);
        $lostBullet->genres()->attach([$action->id, $thriller->id, $crime->id]);
        $luther->genres()->attach([$mystery->id, $thriller->id, $crime->id]);
        $wingwomen->genres()->attach([$action->id, $comedy->id, $drama->id]);
        $extraction->genres()->attach([$action->id, $thriller->id]);
    }
}
