class Api::V1::CompositionsController < ApplicationController

    def index
        compositions = Composition.all
        render json: CompositionSerializer.new(compositions)
    end

    def create 
        composition = Composition.new({ 
            characters: composition_params[:characters],
            colors: composition_params[:colors],
            font_family: composition_params[:font_family],
            created_at: composition_params[:date]
        })

        #find or create artist method
        artist  = Artist.find_or_create_by(name: composition_params[:artist_name] )
        
        composition.artist = artist
        composition.artist_id = artist.id

        # byebug

        if composition.save
            render json: CompositionSerializer.new(composition), status: :accepted
          else
            render json: {errors: composition.errors.full_messages}, status: :unprocessible_entity
          end
    end

    def show 
        composition = Composition.find_by(id: params[:id] )
        render json: CompositionSerializer.new(composition)
    end

    private 

    def composition_params
        params.require(:composition).permit(:characters, :colors, :placements, :font_family, :artist_name, :created_at)
    end

end
