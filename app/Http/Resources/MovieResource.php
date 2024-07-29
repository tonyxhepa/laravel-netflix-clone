<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MovieResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'overview' => $this->overview,
            'releaseDate' => $this->release_date,
            'posterPath' => $this->poster_path,
            'backdrop_path' => $this->backdrop_path,
            'videoUrl' => $this->video_url,
            'trailerUrl' => $this->trailer_url,
            'viewCount' => $this->view_count,
            'genres' => GenreResource::collection($this->genres)
        ];
    }
}
